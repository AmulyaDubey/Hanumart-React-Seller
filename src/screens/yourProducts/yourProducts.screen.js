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
        <SmartTable data={ProductList} columns={columns.columns} />
      </div>
    );
  }
}
