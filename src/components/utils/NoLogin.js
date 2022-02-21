import React, { Component } from "react";

export default class NoLogin extends Component {
  render() {
    return (
      <div className="center-content">
        <h3>You are not logged in</h3>
        <a href="/login">Login here</a>
      </div>
    );
  }
}
