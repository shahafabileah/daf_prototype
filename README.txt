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

AWS Setup
    Server
    https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/nodejs-dynamodb-tutorial.html?p=gsrc&c=ho_dnwa

    Sample query
        curl --request POST --header 'content-type: application/json' --url http://dafprototypeserver-env.eba-pvsybipf.ap-southeast-1.elasticbeanstalk.com/graphql --data '{"query": "query Query {charity(ein: \"912061474\") {name}}"}'
    Sample response
        {"data":{"charity":{"name":"Friends of Kexp"}}}

    Learnings
        - When uploading a zip file for the server, it should have just the *content* of the server, without the parent folder.
        - The zip should include the dist folder and node_modules (which is a bummer because the latter is big).
        - You need to support requests to '/'.  Beanstalk's load balancer does a health check to that path every 15 seconds (can be configured).
        - Anytime you make a change, you have to remember to "npm run build" so that the changes will show up in the dist directory, which is used in production.
        - By default Beanstalk's load balancer will accept requests to port 80 and pass them to the app on port 8080.
        - By default you only get http support.  But the frontent (Amplify) loads on https, and if it tries to make a request to beanstalk on http, this is blocked.
            To add SSL support requires a few steps...
            Purchase a custom domain.  I got shahaftest.com on GoDaddy.  You can also purhcase through AWS Route 53 (makes the other steps a bit simpler).
            Use Route 53 to create a "Hosted Zone" for shahaftest.com and update GoDaddy to use the nameservers from Route 53.
            Use Certificate Manager to create a certificate for that domain (or a subdomain, I used beanstalk.shahaftest.com).  Click to generate the Route 53 record (CNAME) for this certificate.
            Back to Beanstalk, configure 443 taffic using that certificate.
            Then update Amplify environment variables (below) to use the updated server URL (https://beanstalk.shahaftest.com) and redeploy.
            References:
            - https://medium.com/@jbesw/tutorial-adding-https-to-a-custom-domain-on-elastic-beanstalk-29a5617b8842
            - Beanstalk with SSL: https://www.youtube.com/watch?v=BeOKTpFsuvk
            - General Route 53 overview (without SSL): https://www.youtube.com/watch?v=e2xLV7pCOLI

            Some people recommend using CloudFront as a way to add https support.  This may be more relevant for static content or if you want to add CDN caching on dynamic/API content.
            One gotcha with AWS is that you sometimes have to carefully create resources in a particular region.  For example, to use a certificate with CloudFront it must be created in US East: https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html
            How do you create a resource in a particular region?  You update the URL parameter in the AWS console page to set your region (?!?): https://aws.amazon.com/premiumsupport/knowledge-center/migrate-ssl-cert-us-east/

    TODO:
    [ ] Add a build step to avoid having to upload node_modules?
    [ ] Trigger deploy from github?
    [ ] Combine client and server into a single instance?
    [ ] Add a counter for requests and view live stats
    [ ] View a live log of requests
    [ ] Set up alarms if something goes wrong

    Client
    https://create-react-app.dev/docs/deployment/
    https://sandbox.amplifyapp.com/getting-started
    https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html#navigating-to-a-subfolder

    Live page

    Learnings
        - Amplify is set up to pull from Github by default.
        - If you have a separately deployed client and server, it's probably best for them to live in separate repos.  By default Amplify assumes that the client is at the root of the repo, so you need custom config to work around that assumption.
        - Environment variables are used at build-time to create the static assets.
        - By default React looks for environment variables named REACT_APP_*        


Next:
[x] Return an empty HTML page
[x] Add a simple custom React Component
[x] Replace the simple React component with one used to show a single charity's info (one search result)
[x] Show a list of results (not just one)
[x] Define GraphQL endpoint that returns a list of charities (hard-coded for now)
[x] Query that endpoint and show the data in the component
[x] Add a search box and fetch charities that match by name (still from hard-coded list)
[x] Change GraphQL to fetch from CharityNavigator
[x] Deploy to AWS
[ ] Create mock for Charity Navigator API before access expires
[ ] Logging, Monitoring
[ ] Add unit tests (jest)
[ ] CSS in JS
[ ] Cache results in Postgres
[ ] Search with ElasticSearch
[ ] Server-side rendering (lambda edge / cloudfront)
