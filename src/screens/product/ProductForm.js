import React, { Component } from "react";
import "./SellerStyles.css";
import productCategories from "../../api/categories.list.json";
import Form from "../../components/form/form.component";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import TextArea from "../../components/form/textArea";
// import ProductImage from "../../components/ProductCard/sampleProduct.png";

export default class ProductForm extends Component {
  getFormData = (data) => {
    this.props.submitFormData(data);
  };
  componentDidMount = () => {};
  render() {
    const { viewOnly, formError, product } = this.props;
    return (
      <Form onSubmit={this.getFormData} error={formError} viewOnly={viewOnly}>
        <div className="row">
          <div className="col-4">
            <Input
              label="Name"
              type="text"
              name="name"
              required={true}
              defaultValue={product.name}
            />
          </div>
          <div className="col-4">
            <Select
              label="Category"
              name="category"
              list={productCategories.categories}
              required={true}
              viewOnly={viewOnly}
              defaultValue={product.category}
            />
          </div>
          <div className="col-4">
            <Select
              label="Stock"
              name="stock"
              list={["In Stock", "Out of stock"]}
              required={true}
              defaultValue={product.stock}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6">
            <TextArea
              label="Product Description"
              type="text"
              name="description"
              required={true}
              defaultValue={product.description}
            />
          </div>
          <div className="col-6">
            <TextArea
              label="Unit Description"
              type="text"
              name="unitDescription"
              required={true}
              defaultValue={product.unitDescription}
            />
          </div>
        </div>
        <div>
          <input type="checkbox" id="productVariant" className="mr-2" />
          {!viewOnly && (
            <label for="productVariant">Is Product Variant Available</label>
          )}
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <Select
              label="Unit"
              name="unit"
              list={["Unit one"]}
              required={true}
              defaultValue={product.unit}
            />
          </div>
          <div className="col-4">
            <Input
              label="Market Price"
              type="number"
              name="marketPrice"
              required={true}
              defaultValue={product.marketPrice}
            />
          </div>
          <div className="col-4">
            <Input
              label="Offer Price"
              type="number"
              name="offerPrice"
              required={true}
              defaultValue={product.offerPrice}
            />
          </div>
        </div>
        {!viewOnly && (
          <div className="d-flex justify-content-end mt-4">
            <button className="standard-blue-btn mr-3">
              Add More Product Variant
            </button>
            <button className="standard-green-btn" type="submit">
              Save Product Variant
            </button>
          </div>
        )}
      </Form>
    );
  }
}
