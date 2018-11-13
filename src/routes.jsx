import React , {Fragment}from "react";
import { Router, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={Home} />
    <Route exact path="/cart" component={Cart} />
    {/* <Route path="/product/:productId" component={Product} />
    <Route path="/category/:category" component={Category} />
    <Route path="/cart" component={Cart} /> */}
  </Fragment>
);

export default Routes;
