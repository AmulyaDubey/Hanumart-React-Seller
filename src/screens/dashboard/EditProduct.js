import React, { Component } from "react";
import "./SellerStyles.css";
import Heading from "../../components/utils/Heading";
import ProductImage from "../../components/ProductCard/sampleProduct.png";
import ProductForm from "./ProductForm";

export default class EditProduct extends Component {
  state = {
    item: {
      _id: "abc",
      name: "abc",
    },
    mode: "",
    imageFile: ProductImage,
  };

  fileInput = React.createRef();

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

  handleChange = (e) => {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    this.setState({ imageFile: imageUrl });
  };

  render() {
    const { mode, imageFile } = this.state;
    return (
      <div className="container p-3">
        <Heading title={`${mode} Product`} />
        <div className="row">
          <div className="col-4">
            {imageFile ? (
              <div>
                <img src={imageFile} alt="product" style={{ width: "100%" }} />
                <button
                  className="standard-blue-btn"
                  onClick={() => this.toggleInput()}
                >
                  Change Product Image
                </button>
              </div>
            ) : (
              <div
                className="edit__product__empty__image"
                onClick={() => this.toggleInput()}
              >
                <p>+ Add Product Image</p>
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              ref={this.fileInput}
              style={{ visibility: "hidden" }}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="col-8">
            <ProductForm mode={mode} />
          </div>
        </div>
      </div>
    );
  }
}
