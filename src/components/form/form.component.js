import React, { Component } from "react";

export default class Form extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();
    try {
      const formData = {};
      Array.prototype.forEach.call(e.target.elements, (ele) => {
        if (!ele.name) return;
        formData[ele.name] = ele.value;
      });
      this.props.onSubmit(formData);
    } catch (e) {
      console.log(`Registration failed! ${e.message}`);
    }
  };

  componentDidMount = () => {
    const { readOnly } = this.props;
    if (readOnly) {
      // document.getElementsByTagName('form').
    }
  };

  render() {
    const { error, success, viewOnly } = this.props;
    return (
      <form onSubmit={this.onFormSubmit}>
        <fieldset disabled={viewOnly}>
          {error && (
            <p
              style={{
                backgroundColor: "#FFD2D2",
                color: "#D8000C",
                width: "max-content",
                left: 0,
                right: 0,
                margin: "auto",
                marginTop: "30px",
                padding: "8px 25px",
              }}
            >
              {error}
            </p>
          )}

          {success && (
            <p
              style={{
                backgroundColor: "#DFF2BF",
                color: "#4F8A10",
                width: "max-content",
                left: 0,
                right: 0,
                margin: "auto",
                marginTop: "30px",
                padding: "8px 25px",
              }}
            >
              {success}
            </p>
          )}
          {this.props.children}
        </fieldset>
      </form>
    );
  }
}
