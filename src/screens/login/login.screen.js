import React, { Component } from "react";
import "../register/register.styles.css";
import Heading from "../../components/utils/Heading";
import Input from "../../components/utils/Input";
import Form from "../../components/form/form.component";
import { signin, authenticate } from "../../api/auth";
import { Link } from "react-router-dom";

export default class Login extends Component {
  state = {
    formError: "",
    formSuccess: "",
  };

  saveFormData = (data) => {
    signin(data).then((data) => {
      if (data.error) this.setState({ formSuccess: "", formError: data.error });
      else {
        authenticate(data, () => {
          // setTimeout(this.redirectToSearch(), 1000);
          this.setState({ formError: "", formSuccess: "Logged In" });
        });
      }
    });
  };

  render() {
    const { formError, formSuccess } = this.state;
    return (
      <div className="p-4">
        <Heading title="Login" />
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
              <button
                className="standard-green-btn align-self-center restrict-width"
                type="submit"
              >
                Login
              </button>
              <div className="text-center mt-4">
                <a className="green-text" href="/register">
                  New user? Register here
                </a>
                <br />
                <a className="clickable" href="/forgot-password">Reset Password</a>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </Form>
      </div>
    );
  }
}
