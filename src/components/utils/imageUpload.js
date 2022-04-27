import React, { Component } from "react";

export default class ImageUpload extends Component {
  state = {
    imageUrl: this.props.image,
  };

  fileInput = React.createRef();

  toggleInput = () => {
    this.fileInput.current.click();
  };

  handleChange = (e) => {
    const image = e.target.files[0];
    const { updateState, field } = this.props;
    updateState(field, image);
    this.setState({ imageUrl: window.URL.createObjectURL(image) });
  };

  removeImage = () => {
    const { updateState, field } = this.props;
    updateState(field, "");
  };

  render() {
    const { label, image, size, viewOnly } = this.props;
    let { imageUrl } = this.state;
    if (!imageUrl && image) imageUrl = image;
    return (
      <div>
        <h6>{label}</h6>
        {image || imageUrl ? (
          <div>
            <img
              src={imageUrl}
              alt="product"
              style={{ width: size, height: size }}
            />
            <br />

            {!viewOnly && (
              <>
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
              </>
            )}
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
        <br />
      </div>
    );
  }
}
