import React, { Component } from "react";
import Input from "../../../components/form/Input";

export default class PhoneVerification extends Component {
  render() {
    return (
      <form>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 mt-4">
            <Input label="Enter OTP" type="text" name="otp" />
            <small>An OTP has been sent to +91********33</small>
            <button
              className="standard-green-btn"
              type="submit"
              style={{ width: "max-content", float: "right", marginTop: '20px'}}
              onClick={() => this.props.moveToStep(1)}
            >
              Confirm
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </form>
    );
  }
}
