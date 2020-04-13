import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import { Sales } from "./Sales";
import { Products } from "./products/Products";

export const AppSwitches = () => {
  return <Switch>
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
}
