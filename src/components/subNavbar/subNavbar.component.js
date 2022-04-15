import React, { Component } from "react";
import "../navbar/navbar.styles.css";
import "./subNavbar.styles.css"
import { withRouter } from "react-router-dom";
import Tab from "./tab.component";

class SubNavigationBar extends Component {
  state = {
    options: ["Orders", "Inventory", "Offers", "Groups", "Bids"],
  };

  render() {
    const { options } = this.state;
    return (
      <div className="sub-navbar-main">
        <div
          className="sub-navbar-content"
          style={{ justifyContent: "center" }}
        >
          <div className="subnavbar-dropdows">
            <Tab options={options} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SubNavigationBar);
