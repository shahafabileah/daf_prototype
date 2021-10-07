This is a basic prototype of one part of a DAF website: searching for charities.

GOAL

The goal is to illustrate basic end-to-end functionality, including:
- Typescript
- Node
- React
- GraphQL
- Fetching data from 3rd parties
- Caching data in Portgres
- Searching with Elasticsearch
- Testing
- Deploy to AWS (try using AWS Lambda)
- Logging, monitoring

STEPS

VS Code setup:
    https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql

Create directory structure:
    prototype
        client
        server

Create a basic client (React, typescript):
    https://create-react-app.dev/docs/adding-typescript/

    Test that it loads:
        cd client
        npm start

Create a basic server (Node, Express, GraphQL, typescript):
    https://medium.com/@th.guibert/basic-apollo-express-graphql-api-with-typescript-2ee021dea2c

    Test that it loads:
        cd server
        npm run build
        npm start

Next:
- Return an empty HTML page
- Add a simple custom React Component
- Query the GraphQL endpoint to get data and show it in the component
- Replace the simple React component with one used to show a single charity's info (one search result)
- Change GraphQL endpoint to respond with hard-coded data for a single charity
- Show a list of results (not just one)
- Add a search box and fetch charities that match by name (still from hard-coded list)
- Change GraphQL to fetch from CharityNavigator
- Cache results in Postgres
- Search with ElasticSearch
- Add unit tests
- Deploy to AWS
- Logging, Monitoring
