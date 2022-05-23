import React, { Component } from "react";
import "../register/register.styles.css";
import { State, City } from "country-state-city";

import Heading from "../../components/utils/Heading";
import OfferForm from "./offerForm.component"

export default class Offer extends Component {
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
        <Heading title="Offer" />
        <OfferForm />
      </div>
    );
  }
}
