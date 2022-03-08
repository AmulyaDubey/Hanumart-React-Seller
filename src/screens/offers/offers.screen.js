import React, { Component } from "react";
import Heading from "../../components/utils/Heading";
import SmartTable from "../../components/utils/Table";
import columns from "./columns.data.json";

export default class OffersList extends Component {
  render() {
    return (
      <div className="p-4">
        <Heading title="Your Offers" />
        <button className="standard-green-btn mt-2 mb-2 float-right">
          Add New Offer
        </button>
        <br />
        <SmartTable data={[]} columns={columns.columns} />
      </div>
    );
  }
}
