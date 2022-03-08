import React, { Component } from "react";
import Input from "../../../components/utils/Input";
import Select from "../../../components/utils/Select";
import { State, City } from "country-state-city";
import Form from "../../../components/form/form.component";

export default class RegisterProfile extends Component {
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

  handleState = (event) => {
    const stateCode = event.target.value;
    this.setState({ selectedState: stateCode });
  };

  saveFormData = (data) => {
    this.props.saveSeller(data);
    this.props.moveToStep(2);
  };

  render() {
    const { selectedState } = this.state;
    return (
      <Form onSubmit={this.saveFormData}>
        <div className="row register__seller__row">
          <div className="col-md-6">
            <Input
              label="Seller Name"
              type="text"
              name="name"
              required={true}
            />
            <Input
              label="Shop Name"
              type="text"
              name="shopName"
              required={true}
            />
            <Select
              label="Category"
              name="category"
              list={this.getStatesList()}
              required={true}
            />
            <Input
              label="Contact Number"
              type="number"
              name="contact"
              required={true}
            />
          </div>
          <div className="col-md-6">
            <Input label="Full Address" type="text" name="fullAddress" />
            <Select
              label="State"
              name="state"
              list={this.getStatesList()}
              handleChange={this.handleState}
            />

            <Select label="City" name="city" list={this.getCitiesList()} />

            <Input label="Pincode" handleChange={this.handleNewAddressChange} />
          </div>
        </div>
        <button
          className="standard-green-btn"
          type="submit"
          style={{ width: "max-content", float: "right" }}
        >
          Next
        </button>
      </Form>
    );
  }
}
