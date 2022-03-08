import React, { Component } from "react";
import "./navbar.styles.css";
import Logo from "./logo.png";
import { withRouter } from "react-router-dom";
import { isAuthenticated, signout } from "../../api/auth";

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark main-navbar">
        <div className="container-fluid">
          <a className="navbar-brand seller-brand-navbar" href="/seller">
            <img src={Logo} alt="Logo" />
            <p>Seller</p>
          </a>
          {isAuthenticated() && (
            <a
              className="standard-green-btn customer__mode__btn"
              style={{ color: "white" }}
              onClick={() => signout(() => this.props.history.push("/"))}
            >
              Logout
            </a>
          )}
        </div>
      </nav>
    );
  }
}

export default withRouter(NavigationBar);
