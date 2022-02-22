import React, { Component } from "react";
import Input from "../../../components/utils/Input";

export default class RegisterSeller extends Component {
  render() {
    return (
      <form>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 mt-4">
            <Input label="Enter email" type="email" name="name" />
    
            <Input label="Enter password" type="password" name="password" />
            <Input label="Confirm password" type="password" name="password" />
            <button
              className="standard-green-btn"
              type="submit"
              style={{ width: "max-content", float: "right" }}
              onClick={() => this.props.moveToStep(1)}
            >
              Next
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </form>
    );
  }
}
