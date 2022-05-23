import React, { Component } from "react";
import Heading from "../../components/utils/Heading";
import SmartTable from "../../components/utils/Table";
import columns from "./columns.data.json";
import { getSellerOffers } from "../../api/offers";

export default class OffersList extends Component {
  state = {
    offers: [],
  };
  init = () => {
    getSellerOffers().then((data) => {
      console.log("here data", data);
      this.setState({ offers: data });
    });
  };

  componentDidMount = () => {
    this.init();
  };
  render() {
    const { offers } = this.state;
    return (
      <div className="p-4">
        <Heading title="Your Offers" />
        <a href="/seller/offer">
          <button className="standard-green-btn mt-2 mb-2 float-right">
            Add New Offer
          </button>
        </a>
        <br />
        <SmartTable data={offers} columns={columns.columns} urlLinker="offer" />
      </div>
    );
  }
}
