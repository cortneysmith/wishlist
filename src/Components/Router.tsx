import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Wishlist from "./Wishlist";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Wishlist} />
    </Switch>
  </HashRouter>
);

export default Router;
