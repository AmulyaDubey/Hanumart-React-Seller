import React, { Component } from "react";
import "./SellerStyles.css";
import Heading from "../../components/utils/Heading";
import ProductImage from "../../components/ProductCard/sampleProduct.png";

export default class ProductForm extends Component {
  state = {
    item: {
      _id: "abc",
      name: "abc",
    },
  };
  render() {
    const { item } = this.state;
    const { mode } = this.props;
    return (
      <form className="edit__product__form">
        <div className="form-group">
          <label for="productName">Name</label>
          <input type="text" className="form-control" id="productName" />
        </div>
        <div className="form-group">
          <label for="productDescription">Description</label>
          <textarea
            type="text"
            className="form-control"
            id="productDescription"
          />
        </div>
        <div className="row" style={{ margin: 0, padding: 0 }}>
          <div className="col-6">
            <div className="form-group">
              <label>Price</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Rs.</span>
                </div>
                <input type="number" class="form-control" id="productPrice" />
                <div class="input-group-append">
                  <span class="input-group-text">.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Discount</label>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  id="productPrice"
                  defaultValue="0"
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ margin: 0, padding: 0 }}>
          <div className="col-6">
            <div className="form-group">
              <label for="productQuantity">Quantity</label>
              <input
                type="number"
                className="form-control"
                id="productQuantity"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <div className="form-group">
                <label for="productStock">Stock</label>
                <input
                  type="number"
                  className="form-control"
                  id="productStock"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group">
            <label for="productCategory">Product Category</label>
            <input type="text" className="form-control" id="productCategory" />
          </div>
        </div>

        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
          />
          <label class="form-check-label" for="flexSwitchCheckChecked">
            Allow Bids
          </label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
          />
          <label class="form-check-label" for="flexSwitchCheckChecked">
            Allow Group Buy
          </label>
        </div>
        <div>
          <button className="standard-green-btn" style={{ float: "right" }}>
            {mode === "Edit" ? "Update" : "Add"}
          </button>
        </div>
      </form>
    );
  }
}
