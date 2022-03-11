import React, { Component } from "react";
import "../register/register.styles.css";
import { State, City } from "country-state-city";

import Heading from "../../components/utils/Heading";
import Form from "../../components/form/form.component";
import Input from "../../components/form/Input";
import TextArea from "../../components/form/textArea";
import Select from "../../components/form/Select";

export default class SellerProfile extends Component {
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
  render() {
    return (
      <div className="p-4">
        <Heading title="Your Profile" />
        <Form>
          <div className="row mt-4">
            <h5 style={{ color: "var(--blue)" }}>Seller Basic Profile</h5> <hr />
            <div className="col-4">
              <Input label="Name" type="text" name="name" required={true} />
            </div>
            <div className="col-4">
              <Input
                label="Contact"
                type="number"
                name="contact"
                required={true}
              />
            </div>
            <div className="col-4">
              <Input label="Email" type="email" name="email" required={true} />
            </div>
          </div>
          <div className="row mt-2">
            <h5 style={{ color: "var(--blue)" }}>Seller Store Info</h5> <hr />
            <div className="col-4">
              <Input
                label="Store Name"
                type="text"
                name="shopName"
                required={true}
              />
            </div>
            <div className="col-8">
              <TextArea
                label="Seller Short Description"
                name="contact"
                required={true}
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-4">
              <TextArea label="Full Address" name="fullAddress" />
            </div>
            <div className="col-4">
              <Select
                label="State"
                name="state"
                list={this.getStatesList()}
                handleChange={this.handleState}
              />
            </div>
            <div className="col-4">
              <Select label="City" name="city" list={this.getCitiesList()} />
            </div>
          </div>
          <button className="standard-green-btn mt-4 float-right" type="submit">
            Update Profile
          </button>
        </Form>
      </div>
    );
  }
}
