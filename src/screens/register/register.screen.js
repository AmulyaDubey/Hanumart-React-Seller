import React, { Component } from "react";
import "./register.styles.css";
import Heading from "../../components/utils/Heading";
import RegisterProfile from "./components/sellerProfileForm.component";
import Stepper from "react-stepper-horizontal";
import RegisterSeller from "./components/sellerRegisterForm.component";
import PhoneVerification from "./components/phoneVerification.component";

export default class Register extends Component {
  state = {
    activeStep: 0,
    seller: {},
  };

  moveToStep = (clickedStep) => {
    this.setState({ activeStep: clickedStep });
  };

  saveSeller = (data) => {
    let { seller } = this.state;
    seller = { ...seller, ...data };
    console.log({ seller });
    this.setState({ seller });
  };

  render() {
    const { activeStep } = this.state;

    const stepperProps = {
      completeColor: "#38A3A5",
      completeOpacity: "0.6",
      activeColor: "#38A3A5",
      activeTitleColor: "#38A3A5",
      completeTitleColor: "#38A3A5",
      completeTitleOpacity: "0.6",
      completeBarColor: "#38A3A5",
    };

    return (
      <div className="p-4">
        <Heading title="Register As a Seller" />
        <div>
          <Stepper
            steps={[
              { title: "Register", onClick: () => this.moveToStep(0) },
              {
                title: "Step Up Profile",
                onClick: () => this.moveToStep(1),
              },
              { title: "Verification", onClick: () => this.moveToStep(2) },
            ]}
            {...stepperProps}
            activeStep={activeStep}
          />
        </div>
        {activeStep === 0 && (
          <RegisterSeller
            moveToStep={this.moveToStep}
            saveSeller={this.saveSeller}
          />
        )}
        {activeStep === 1 && (
          <RegisterProfile
            moveToStep={this.moveToStep}
            saveSeller={this.saveSeller}
          />
        )}
        {activeStep === 2 && (
          <PhoneVerification
            moveToStep={this.moveToStep}
            saveSeller={this.saveSeller}
          />
        )}
        <div className="text-center mt-4">
          <a className="green-text" href="/">
            Existing user? Login here
          </a>
        </div>
      </div>
    );
  }
}
