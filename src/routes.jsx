import React , {Fragment}from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import {Product } from "./components/Product";

const Routes = () => (
  <Fragment>
    <Switch>
    
    <Route exact path="/cart" component={Cart} />
    <Route path="/:productTitle" component={Product} />
    <Route exact path="/" component={Home} />
    </Switch>
  </Fragment>
);

export default Routes;
