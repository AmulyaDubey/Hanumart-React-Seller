import React, { Component } from "react";
import Form from "../../components/form/form.component";
import Input from "../../components/form/Input";
import TextArea from "../../components/form/textArea";
import Select from "../../components/form/Select";

export default class OfferForm extends Component {
  render() {
    return (
      <Form>
        <div className="row mt-4">
          <div className="col-4">
            <Input label="Offer Code" type="text" name="code" required={true} />
          </div>
          <div className="col-4">
            <h6>
              Offer Type: <span style={{ color: "red" }}>*</span>
            </h6>
            <div class="custom-control custom-radio custom-control-inline mt-2">
              <input
                type="radio"
                id="customRadioInline1"
                name="customRadioInline1"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadioInline1">
                Flat
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline2"
                name="customRadioInline1"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadioInline2">
                Percentage
              </label>
            </div>
          </div>
          <div className="col-4">
            <Select
              label="Offer Status"
              name="status"
              list={["Active", "Inactive"]}
              required={true}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <Input
              label="Offer Amount"
              type="number"
              name="amount"
              required={true}
            />
          </div>
          <div className="col-4">
            <Input
              label="Offer Percentage"
              type="number"
              name="percentage"
              required={true}
            />
          </div>
          <div className="col-4">
            <Input
              label="Offer Max Amount"
              type="number"
              name="maxAmount"
              required={true}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <Input
              label="Offer Min Amount"
              type="number"
              name="minAmount"
              required={true}
            />
          </div>
          <div className="col-4">
            <Input
              label="Offer Start Date"
              type="date"
              name="startDate"
              required={true}
            />
          </div>
          <div className="col-4">
            <Input
              label="Offer End Date"
              type="date"
              name="endDate"
              required={true}
            />
          </div>
        </div>
        <TextArea label="Offer Description" name="description" />
        <button className="standard-green-btn mt-4 float-right" type="submit">
          Update Offer
        </button>
      </Form>
    );
  }
}
