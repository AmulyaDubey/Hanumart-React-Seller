import React, { Component } from "react";
import "./register.styles.css";
import Heading from "../../components/utils/Heading";
import Input from "../../components/utils/Input";
import Select from "../../components/utils/Select";
import { State, City } from "country-state-city";

export default class Register extends Component {
  state = {
    selectedState: "",
  };
  getStatesList = () => {
    return State.getStatesOfCountry("IN");
  };

  getCitiesList = () => {
    const { selectedState } = this.state;
    return City.getCitiesOfState("IN", selectedState);
  };

  handleState = (event, name) => {
    const stateCode = event.target.value;
    this.setState((prevState) => ({
      // newAddress: {
      //   ...prevState.newAddress,
      //   state: State.getStateByCodeAndCountry(stateCode, "IN").name,
      // },
      selectedState: stateCode,
    }));
  };
  render() {
    const { selectedState } = this.state;
    return (
      <div className="p-4">
        <Heading title="Register As a Seller" />
        <form>
          <div className="row register__seller__row">
            <div className="col-md-6">
              <Input
                label="Seller Name"
                type="text"
                name="name"
                // handleChange={this.handleLoginChange}
              />
              <Input
                label="Shop Name"
                type="text"
                name="shopName"
                // handleChange={this.handleLoginChange}
              />
              <Input
                label="Category"
                type="text"
                name="category"
                // handleChange={this.handleLoginChange}
              />
              <Input
                label="Contact Number"
                type="number"
                name="contact"
                // handleChange={this.handleNewAddressChange}
              />
            </div>
            <div className="col-md-6">
              <Input
                label="Full Address"
                type="text"
                name="fullAddress"
                // handleChange={this.handleNewAddressChange}
              />
              <Select
                label="State"
                name="state"
                list={this.getStatesList()}
                handleChange={this.handleState}
              />

              <Select
                label="City"
                name="city"
                list={this.getCitiesList()}
                handleChange={() => {}}
                // handleChange={this.handleNewAddressChange}
              />

              <Input
                label="Pincode"
                handleChange={this.handleNewAddressChange}
              />
            </div>
          </div>
          <button
            className="standard-green-btn"
            type="submit"
            style={{ width: "max-content", float: "right" }}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}
