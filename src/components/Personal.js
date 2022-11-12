import React, { Component } from "react";

class Personal extends Component {
  render() {
    return (
      <section>
        <h2>Personal Information</h2>
        <label htmlFor="name-input">Name:</label>
        <input
          type="text"
          id="name-input"
          value={this.props.values.name}
          onChange={(e) => this.props.sendData(0, e.target.value)}
        ></input>
        <label htmlFor="email-input">Email:</label>
        <input
          type="email"
          id="email-input"
          value={this.props.values.email}
          onChange={(e) => this.props.sendData(1, e.target.value)}
        ></input>
        <label htmlFor="phone-input">Phone #:</label>
        <input
          type="tel"
          id="phone-input"
          value={this.props.values.phone}
          onChange={(e) => this.props.sendData(2, e.target.value)}
        ></input>
      </section>
    );
  }
}

export default Personal;
