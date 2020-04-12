import React from "react";
import styled from "styled-components";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Sales } from "./components/Sales";
import { Products } from './components/products/Products';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});

const Header = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: 'Indie Flower', cursive;
  color: #e07224;
`;

const MainContent = styled.main`
  text-align: center;
`;

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Header>POS Simulator</Header>
      <Router>
        <MainContent>
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
        </MainContent>
      </Router>
    </ApolloProvider>
  );
};
