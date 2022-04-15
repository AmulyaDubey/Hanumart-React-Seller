import React, { Component } from "react";

export default class ImageUpload extends Component {
  fileInput = React.createRef();

  toggleInput = () => {
    this.fileInput.current.click();
  };

  handleChange = (e) => {
    // const imageUrl = window.URL.createObjectURL(e.target.files[0]);
    const image = e.target.files[0];
    // this.setState({ imageFile: imageUrl });
    const { updateState, field } = this.props;
    updateState(field, image);
  };

  removeImage = () => {
    // this.setState({ imageFile: "" });
    const { updateState, field } = this.props;
    updateState(field, "");
  };

  render() {
    const { label, image } = this.props;
    return (
      <div>
        <h6>{label}</h6>
        {image ? (
          <div>
            <img
              src={window.URL.createObjectURL(image)}
              alt="product"
              style={{ width: "100%" }}
            />
            <button
              className="btn btn-success btn-sm mt-2"
              onClick={() => this.toggleInput()}
            >
              Change Image
            </button>
            <button
              className="btn btn-danger btn-sm mt-2 ml-4"
              onClick={() => this.removeImage()}
            >
              Remove Image
            </button>
          </div>
        ) : (
          <div
            className="edit__product__empty__image"
            onClick={() => this.toggleInput()}
          >
            <p>+ Add {label}</p>
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
    );
  }
}
