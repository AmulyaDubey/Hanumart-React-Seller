import React from "react";
import { Route } from "react-router-dom";
// import { getUserId } from "../core/auth";
import NoLogin from "../components/utils/NoLogin";

const getUserId=()=> 5;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (getUserId() ? <Component {...props} /> : <NoLogin />)}
    />
  );
};

export default PrivateRoute;
