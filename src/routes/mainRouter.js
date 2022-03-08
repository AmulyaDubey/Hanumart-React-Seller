import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PublicRoute from "./publicRoutes";
import PrivateRoute from "./privateRoutes";
import Register from "../screens/register/register.screen";
import Orders from "../screens/orders/orders.screen";
import EditProduct from "../screens/dashboard/EditProduct";
import Login from "../screens/login/login.screen";
import Profile from "../screens/profile/profile.screen";
import YourProducts from "../screens/yourProducts/yourProducts.screen"
import ForgotPassword from "../screens/login/forgotPassword.screen";
import OffersList from "../screens/offers/offers.screen";

export default class MainRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/seller/orders" component={Orders} />
        <Route exact path="/seller/product" component={EditProduct} />
        <Route exact path="/seller/profile" component={Profile} />
        <Route exact path="/seller/your-products" component={YourProducts} />
        <Route exact path="/seller/your-offers" component={OffersList} />
      </Switch>
    );
  }
}
