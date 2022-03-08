import React, { Component } from "react";
import Heading from "../../components/utils/Heading";
import StatisticsCard from "./statistics-card.component";
import SmartTable from "../../components/utils/Table";
import columns from "./columns.data.json";

export default class Orders extends Component {
  render() {
    return (
      <div className="p-4">
        <Heading title="Your Orders" />
        <div className="row mt-4">
          <div className="col-3">
            <StatisticsCard title="Today Orders" number={15} />
          </div>
          <div className="col-3">
            <StatisticsCard title="Monthly Orders" number={300} />
          </div>
          <div className="col-3">
            <StatisticsCard title="Today Orders" number={15} />
          </div>
          <div className="col-3">
            <StatisticsCard title="Today Orders" number={15} />
          </div>
        </div>
        <SmartTable data={[]} columns={columns.columns} />
      </div>
    );
  }
}
