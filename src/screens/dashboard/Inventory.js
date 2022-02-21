import React, { Component } from "react";
import "./SellerStyles.css";
import Heading from "../../components/utils/Heading";
import ProductCard from "../../components/ProductCard/ProductCard";

export default class Inventory extends Component {
  state = {
    item: {
      _id: "abc",
      name: "abc",
    },
  };
  render() {
    const { item } = this.state;
    return (
      <div className="container p-3">
        <Heading title="Your Inventory" />
        <div className="products__screen">
          <ProductCard product={item} mode="seller" />
          <ProductCard product={item} mode="seller" />
          <ProductCard product={item} mode="seller" />
          <ProductCard product={item} mode="seller" />
          <ProductCard product={item} mode="seller" />
          <ProductCard product={item} mode="seller" />
          <ProductCard product={item} mode="seller" />
        </div>
        <div
          className="seller__add__product__button"
          onClick={() => this.props.history.push("/seller/product?mode=add")}
        >
          <p>+ Add Product</p>
        </div>
      </div>
    );
  }
}
