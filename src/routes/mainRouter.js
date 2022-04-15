import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PublicRoute from "./publicRoutes";
import PrivateRoute from "./privateRoutes";
import Register from "../screens/register/register.screen";
import Orders from "../screens/orders/orders.screen";
import Login from "../screens/login/login.screen";
import YourProducts from "../screens/products/products.screen"
import ForgotPassword from "../screens/login/forgotPassword.screen";
import OffersList from "../screens/offers/offers.screen";
import SellerProfile from "../screens/sellerProfile/sellerProfile";
import Product from "../screens/product/product.screen";
import Offer from "../screens/offer/offer.screen";

export default class MainRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/seller/orders" component={Orders} />
        <Route exact path="/seller/product" component={Product} />
        <Route exact path="/seller/inventory" component={YourProducts} />
        <Route exact path="/seller/offers" component={OffersList} />
        <Route exact path="/seller/profile" component={SellerProfile} />
        <Route exact path="/seller/offer" component={Offer} />
      </Switch>
    );
  }
}
