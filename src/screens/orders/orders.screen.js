import React, { Component } from "react";
import Heading from "../../components/utils/Heading";
import StatisticsCard from "./statistics-card.component";
import SmartTable from "../../components/utils/Table";
import columns from "./columns.data.json";
import { getSellerOrders } from "../../api/seller";

export default class Orders extends Component {
  state = {
    orders: [],
    todayOrders: 0,
    monthlyOrders: 0,
  };

  init = () => {
    getSellerOrders().then((data) => {
      console.log({ data });
      this.setState({
        orders: data.orders,
        todayOrders: data.todayOrders,
        monthlyOrders: data.monthlyOrders,
      });
    });
  };
  componentDidMount = () => {
    this.init();
  };
  render() {
    const { orders, todayOrders, monthlyOrders } = this.state;
    return (
      <div className="p-4">
        <Heading title="Your Orders" />
        <div className="row mt-4">
          <div className="col-3">
            <StatisticsCard title="Today Orders" number={todayOrders} />
          </div>
          <div className="col-3">
            <StatisticsCard title="Monthly Orders" number={monthlyOrders} />
          </div>
          <div className="col-3">
            <StatisticsCard title="Today Orders" number={0} />
          </div>
          <div className="col-3">
            <StatisticsCard title="Today Orders" number={0} />
          </div>
        </div>
        <SmartTable data={orders} columns={columns.columns} editable={false} />
      </div>
    );
  }
}
