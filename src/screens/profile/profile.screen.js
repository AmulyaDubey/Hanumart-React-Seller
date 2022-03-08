import React, { Component } from "react";
import "../register/register.styles.css";
import Heading from "../../components/utils/Heading";
import Input from "../../components/utils/Input";
import RegisterProfile from "../register/components/sellerProfileForm.component";

export default class Profile extends Component {
  state = {
    activeStep: 0,
  };
  render() {
    return (
      <div className="p-4">
        <Heading title="Your Profile" />
        <RegisterProfile />
      </div>
    );
  }
}
