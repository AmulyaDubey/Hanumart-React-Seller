import React, { Component } from "react";
import "./OrderCardStyles.css";
import ProductImage from "../ProductCard/sampleProduct.png";

export default class OrderCard extends Component {
  render() {
    return (
      <div className="seller__order__card">
        <div className="seller__order__card__header">
          <p className="seller__order__card__status">Order Placed</p>
          <div className="seller__order__card__header__details">
            <p>Order Date: 24th August, 2021</p>
            <p style={{ opacity: "0.5" }}>Order ID: 6155835425f9b03da1b92bce</p>
          </div>
        </div>
        <div className="seller__order__card__body">
          <div>
            <img src={ProductImage} alt="product" />
          </div>
          <div>
            <div className="d-flex">
              <p className="seller__order__card__label">Quantity:</p>
              <p className="seller__order__card__value bold">2</p>
            </div>
            <div className="d-flex">
              <p className="seller__order__card__label">Item Price:</p>
              <p className="seller__order__card__value bold">Rs. 100</p>
            </div>
            <div className="d-flex">
              <p className="seller__order__card__label">Shipping:</p>
              <p className="seller__order__card__value bold">Rs. 100</p>
            </div>
            <hr />
            <div className="d-flex">
              <p className="seller__order__card__label">Total:</p>
              <p className="seller__order__card__value bold">Rs. 300</p>
            </div>
            <hr />
            <div>
              <p className="bold">Amulya Dubey</p>
              <p className="seller__order__card__address">
                Flat B-201, Bhagirathi Apartments, 11-Old Survey Road, Dehradun
              </p>
            </div>
          </div>
        </div>
        <hr/>
        <div className="seller__order__card__footer">
          <button className="seller_order_card_green_button">Update Shipment Status</button>
          <button className="seller_order_card_blue_button">Drop Customer Message</button>
        </div>
      </div>
    );
  }
}
