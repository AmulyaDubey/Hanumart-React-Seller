import React, { Component } from "react";
import "../register/register.styles.css";
import Heading from "../../components/utils/Heading";
import Input from "../../components/form/Input";
import Form from "../../components/form/form.component";

export default class ForgotPassword extends Component {
  state = {
    isOtpValid: false,
    formError: "",
    formSuccess: "",
  };
  validateOtp = () => {
    this.setState({ isOtpValid: true });
  };

  saveFormData = (data) => {
    if (data.confirmPassword != data.password) {
      this.setState({ formError: "Passwords do not match!" });
      return;
    }
    this.setState({ formSuccess: "Password reset successfully" });
    delete data.confirmPassword;
    // this.props.saveSeller(data);
    // this.props.moveToStep(1);
  };

  render() {
    const { isOtpValid, formError, formSuccess } = this.state;
    return (
      <div className="p-4">
        <Heading title="Reset Password" />
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 mt-4">
            {!isOtpValid ? (
              <Form
                onSubmit={this.validateOtp}
                error={formError}
                success={formSuccess}
              >
                <Input
                  label="Enter OTP"
                  type="number"
                  name="otp"
                  required={true}
                />
                <small>
                  An OTP has been sent to your phone number +91********33
                </small>
                <button className="standard-green-btn mt-4" type="submit">
                  Next
                </button>
              </Form>
            ) : (
              <Form
                onSubmit={this.saveFormData}
                error={formError}
                success={formSuccess}
              >
                <Input
                  label="Enter New Password"
                  type="password"
                  name="password"
                  required={true}
                />
                <Input
                  label="Confirm New Password"
                  type="password"
                  name="confirmPassword"
                  required={true}
                />
                <button className="standard-green-btn mt-4" type="submit">
                  Submit
                </button>
              </Form>
            )}
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}
