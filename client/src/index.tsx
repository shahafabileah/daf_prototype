import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CharityTable from './CharityTable';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

// TODO: Pull this from config for different environments
const GRAPHQL_URL = 'http://localhost:3001/graphql';

const apolloClient = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <CharityTable />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
