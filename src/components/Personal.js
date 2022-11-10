import React, { Component } from "react";

class Personal extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <h2>Personal Information</h2>
        <label htmlFor="name-input">Name:</label>
        <input type="text" id="name-input"></input>
        <label htmlFor="email-input">Email:</label>
        <input type="email" id="email-input"></input>
        <label htmlFor="phone-input">Phone #:</label>
        <input type="tel" id="phone-input"></input>
      </section>
    );
  }
}

export default Personal;
