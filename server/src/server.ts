import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';

const PORT = parseInt(process.env.SERVER_PORT || '8080');

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});

// https://stackoverflow.com/questions/59167258/no-overload-matches-this-call-in-cors-typescript
const corstOpts = cors({ origin: true })
app.use(corstOpts);

app.use(compression());

// AWS Beanstalk's load balancer by default does a 15-second health check on '/'.
app.get("/", (req, res) => res.send("OK"));

// You have to wait for the server to start before applying middleware.
// But you can't directly call await at the top level (only inside async functions), so we wrap everything.
// https://stackoverflow.com/questions/68614523/error-you-must-await-server-start-before-calling-server-applymiddleware
(async () => {
    await server.start();

    server.applyMiddleware({ app, path: '/graphql' });

    const httpServer = createServer(app);
    httpServer.listen(
      { port: PORT },
      (): void => console.log(`\n🚀      GraphQL is now running on http://localhost:${PORT}/graphql`)
    );    
})();
