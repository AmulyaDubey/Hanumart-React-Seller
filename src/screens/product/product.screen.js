import React, { Component } from "react";

import Heading from "../../components/utils/Heading";
import ProductForm from "./ProductForm";
import ImageUpload from "../../components/utils/imageUpload";

export default class Product extends Component {
  state = {
    product: {
      _id: "abc",
      name: "abc",
      image: "",
      thumbnail: "",
    },
    mode: "View",
    error: "",
    // imageFile: ProductImage,
  };

  componentDidMount = () => {
    const urlParams = new URLSearchParams(window.location.search);
    let mode = urlParams.get("mode");
    if (!mode) return;
    mode = mode.charAt(0).toUpperCase() + mode.substr(1);
    this.setState({ mode });
  };

  toggleInput = () => {
    this.fileInput.current.click();
  };

  updateState = (field, value) => {
    const { product } = this.state;
    product[field] = value;
    this.setState({ product });
  };

  setAsThumbnail = () => {
    const { product } = this.state;
    product.thumbnail = product.image;
    this.setState({ product });
  };

  submitFormData = (data) => {
    const { product } = this.state;
    if (!product.image) {
      this.setState({ error: "No product image uploaded" });
    }
    if (!product.thumbnail) {
      this.setState({ error: "No product thumbnail uploaded" });
    }
    data = { ...product, data };
  };

  render() {
    const { mode, product, error } = this.state;
    return (
      <div className="p-4">
        <Heading title={`${mode} Product`} />
        <div className="row mt-4">
          <div className="col-4">
            <ImageUpload
              label="Product Thumbail"
              field="thumbnail"
              updateState={this.updateState}
              image={product.thumbnail}
            />
            <ImageUpload
              label="Product Image"
              field="image"
              updateState={this.updateState}
              image={product.image}
            />
            {product.image && (
              <button
                className="btn btn-outline-dark btn-sm mt-2"
                onClick={() => this.setAsThumbnail()}
              >
                Use as thumbail
              </button>
            )}
          </div>
          <div className="col-8">
            <ProductForm
              mode={mode}
              formError={error}
              submitFormData={this.submitFormData}
            />
          </div>
        </div>
      </div>
    );
  }
}
