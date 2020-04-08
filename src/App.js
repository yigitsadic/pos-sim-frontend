import React from "react";
import styled from "styled-components";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Sales } from "./components/Sales";
import { Products } from "./components/Products";

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});

const Header = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: green;
`;

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header>Hello React!</Header>

        <ul>
          <li>
            <Link to="/sales">Sales</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/sales">
            <Sales />
          </Route>

          <Route path="/products">
            <Products />
          </Route>

          <Route path="/">
            <Sales />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};
