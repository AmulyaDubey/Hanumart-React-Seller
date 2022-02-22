import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PublicRoute from "./publicRoutes";
import PrivateRoute from "./privateRoutes";
import Register from "../screens/register/register.screen";
import Orders from "../screens/dashboard/orders";
import Inventory from "../screens/dashboard/Inventory";
import EditProduct from "../screens/dashboard/EditProduct";
import Login from "../screens/login/login.screen";

const Component1 = () => {
  return <h1>Component 1</h1>;
};

export default class MainRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/seller/orders" component={Orders} />
        <Route exact path="/seller/inventory" component={Inventory} />
        <Route exact path="/seller/product" component={EditProduct} />
      </Switch>
    );
  }
}
