import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import ApolloClient from 'apollo-boost';

import { GlobalProvider } from "./context/GlobalState";
import { AppSwitches } from "./components/AppSwitches";
import { ApolloProvider } from "@apollo/react-hooks";
import { MainNav } from "./components/MainNav";

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});

const MainContent = styled.main`
  width: 70vw;
  margin: auto;
`;

export const App = () => {
  return (
    <GlobalProvider>
      <ApolloProvider client={client}>
        <MainContent>
          <MainNav />

          <Router>
            <AppSwitches />
          </Router>
        </MainContent>
      </ApolloProvider>
    </GlobalProvider>
  );
};
