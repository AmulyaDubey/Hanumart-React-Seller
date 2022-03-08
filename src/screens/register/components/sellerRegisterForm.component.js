import React, { Component } from "react";
import Input from "../../../components/utils/Input";
import Form from "../../../components/form/form.component";

export default class RegisterSeller extends Component {
  state = {
    formError: "",
    formSuccess: "",
  };

  saveFormData = (data) => {
    if (data.confirmPassword != data.password) {
      this.setState({ formError: "Passwords do not match!" });
      return;
    }
    delete data.confirmPassword;
    this.props.saveSeller(data);
    this.props.moveToStep(1);
  };

  render() {
    const { formError, formSuccess } = this.state;

    return (
      <Form
        onSubmit={this.saveFormData}
        error={formError}
        success={formSuccess}
      >
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 mt-4">
            <Input
              label="Enter email"
              type="email"
              name="email"
              required={true}
            />

            <Input
              label="Enter password"
              type="password"
              name="password"
              required={true}
            />

            <Input
              label="Confirm password"
              type="password"
              name="confirmPassword"
              required={true}
            />

            <button
              className="standard-green-btn"
              type="submit"
              style={{ width: "max-content", float: "right" }}
            >
              Next
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </Form>
    );
  }
}
