import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Sales } from "./components/Sales";
import { Products } from "./components/Products";

const Header = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: green;
`;

export const App = () => {
  return (
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
  );
};
