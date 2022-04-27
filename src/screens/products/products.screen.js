import React, { Component } from "react";
import Heading from "../../components/utils/Heading";
import SmartTable from "../../components/utils/Table";
import columns from "./productColumns.json";
import { getSellerProducts } from "../../api/seller";
import { deleteProduct } from "../../api/product";

export default class Login extends Component {
  state = {
    products: [],
  };

  onDelete = (productId) => {
    deleteProduct(productId);
    window.location.reload();
  };

  init = () => {
    getSellerProducts().then((data) => {
      this.setState({ products: data });
    });
  };

  componentDidMount = () => {
    this.init();
  };
  render() {
    const { products } = this.state;
    return (
      <div className="p-4">
        <Heading title="Your Products" />
        <a href="/seller/product/new">
          <button className="standard-green-btn mt-2 mb-2 float-right">
            Add New Product
          </button>
        </a>
        <SmartTable
          data={products}
          columns={columns.columns}
          urlLinker="product"
          editable={true}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}
