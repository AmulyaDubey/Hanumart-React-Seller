import React, { Component } from "react";
import "./SellerStyles.css";
import Heading from "../../components/utils/Heading";
import SideBar from "../../components/Sidebar/Sidebar";
import OrderCard from "../../components/OrderCard/OrderCard";

export default class Orders extends Component {
  state = {
    sidebarOptions: [
      "All Orders",
      "Shipped Orders",
      "Pending Orders",
      "Cancelled Orders",
      "Returned Orders",
    ],
  };
  render() {
    const { sidebarOptions } = this.state;
    return (
      <div className="d-flex">
        <SideBar options={sidebarOptions} />
        <div className="container p-4">
          <Heading title="All Orders" />
          <div className="products__screen">
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
        </div>
      </div>
    );
  }
}
