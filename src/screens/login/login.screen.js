import React, { Component } from "react";
import "../register/register.styles.css";
import Heading from "../../components/utils/Heading";
import Input from "../../components/utils/Input";


export default class Login extends Component {
  state = {
    activeStep: 0,
  };
  render() {
    return (
      <div className="p-4">
        <Heading title="Login" />
        <form>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 mt-4">
            <Input label="Enter email" type="email" name="name" />
    
            <Input label="Enter password" type="password" name="password" />
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
      </div>
    );
  }
}
