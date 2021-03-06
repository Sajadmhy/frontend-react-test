import { 
  ApolloClient,
  InMemoryCache, 
  ApolloProvider,
  HttpLink,
  from, 
} from "@apollo/client";
import {onError} from '@apollo/client/link/error';
import React, { Component } from "react";
import GetProducts from "./components/GetProducts/GetProducts";
import URI from "./helpers/graphQLUri";

//GraphQl logic
const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      return console.log(`GraphQl Error: ${message} in ${location} at ${path}`)
    });
  };
});

const link = from([
  errorLink,
  new HttpLink({ uri: URI })
]);

const client = new ApolloClient({
  cache : new InMemoryCache(),
  link : link
});

// Store App

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <GetProducts />
      </ApolloProvider>
    );
  };
};

export default App;