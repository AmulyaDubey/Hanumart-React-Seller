import React, { Component } from "react";
import Heading from "../../components/utils/Heading";
import SmartTable from "../../components/utils/Table";
import ProductList from "./productList.json";
import columns from "./productColumns.json";

export default class Login extends Component {
  render() {
    return (
      <div className="p-4">
        <Heading title="Your Products" />
        <a href="/seller/product">
          <button className="standard-green-btn mt-2 mb-2 float-right">
            Add New Product
          </button>
        </a>
        <SmartTable data={ProductList} columns={columns.columns} />
      </div>
    );
  }
}
