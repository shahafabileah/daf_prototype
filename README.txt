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
[x] Return an empty HTML page
[x] Add a simple custom React Component
[x] Replace the simple React component with one used to show a single charity's info (one search result)
[x] Show a list of results (not just one)
[x] Define GraphQL endpoint that returns a list of charities (hard-coded for now)
[x] Query that endpoint and show the data in the component
[x] Add a search box and fetch charities that match by name (still from hard-coded list)
[x] Change GraphQL to fetch from CharityNavigator
[ ] Deploy to AWS
[ ] Logging, Monitoring
[ ] Cache results in Postgres
[ ] Search with ElasticSearch
[ ] Add unit tests
