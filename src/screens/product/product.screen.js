import React, { Component } from "react";
import Heading from "../../components/utils/Heading";
import ProductForm from "./ProductForm";
import ImageUpload from "../../components/utils/imageUpload";
import { saveProduct, getProductData, updateProduct } from "../../api/product";
import { Redirect } from "react-router-dom";

export default class Product extends Component {
  state = {
    product: {
      image: "",
      thumbnail: "",
    },
    mode: "",
    error: "",
    redirectToInventory: false,
    productImage: "",
    productThumbnail: "",
  };

  init = async () => {
    const { productId } = this.props.match.params;
    if (productId) {
      const data = await getProductData(productId);
      if (data) {
        const mode = this.props.match.params.mode;
        this.setState({
          product: data,
          mode,
          productImage: data.image,
          productThumbnail: data.thumbnail,
        });
      }
    } else {
      this.setState({ mode: "new" });
    }
  };

  componentDidMount = () => {
    this.init();
  };

  toggleInput = () => {
    this.fileInput.current.click();
  };

  updateState = (field, value) => {
    const fieldString = `product${field[0].toUpperCase() + field.slice(1)}`;
    this.setState({ [fieldString]: value });
  };

  setAsThumbnail = () => {
    const { productImage } = this.state;
    this.setState({ productThumbnail: productImage });
  };

  submitFormData = async (data) => {
    const { product, mode, productImage, productThumbnail } = this.state;
    if (!productImage) {
      return this.setState({ error: "No product image uploaded" });
    }
    if (!productThumbnail) {
      return this.setState({ error: "No product thumbnail uploaded" });
    }
    const updatedProduct = {
      ...product,
      ...data,
      image: productImage,
      thumbnail: productThumbnail,
    };
    if (mode === "edit") {
      await updateProduct(product, updatedProduct);
    } else {
      await saveProduct(updatedProduct);
    }
    this.setState({ redirectToInventory: true, error: "" });
  };

  render() {
    const {
      mode,
      product,
      error,
      redirectToInventory,
      productImage,
      productThumbnail,
    } = this.state;
    const viewOnly = mode === "view";
    if (redirectToInventory) {
      return <Redirect to="/seller/inventory" />;
    }
    return (
      <div className="p-4">
        <Heading title={product.name || "Add New Product"} />
        <br />
        {viewOnly && (
          <a href={`/seller/product/${product._id}/edit`}>
            <button className="standard-green-btn float-right mb-4">
              Edit Product
            </button>
          </a>
        )}
        <br />
        <div className="row full-width">
          <div className="col-4">
            <ImageUpload
              label="Product Thumbail"
              field="thumbnail"
              updateState={this.updateState}
              image={productThumbnail}
              size="10vw"
              viewOnly={viewOnly}
            />
            <ImageUpload
              label="Product Image"
              field="image"
              updateState={this.updateState}
              image={productImage}
              size="25vw"
              viewOnly={viewOnly}
            />
            {product.image && !viewOnly && (
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={() => this.setAsThumbnail()}
              >
                Use as thumbail
              </button>
            )}
          </div>
          <div className="col-8">
            <ProductForm
              viewOnly={viewOnly}
              formError={error}
              submitFormData={this.submitFormData}
              product={product}
            />
          </div>
        </div>
      </div>
    );
  }
}
