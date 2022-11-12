import React, { Component } from "react";

class Personal extends Component {
  handleChange = (num, event) => {
    this.props.sendData(num, event.target.value);
  };

  render() {
    return (
      <section>
        <h2>Personal Information</h2>
        <label htmlFor="name-input">Name:</label>
        <input
          type="text"
          id="name-input"
          value={this.props.values.name}
          onChange={(e) => this.handleChange(0, e)}
        ></input>
        <label htmlFor="email-input">Email:</label>
        <input
          type="email"
          id="email-input"
          value={this.props.values.email}
          onChange={(e) => this.handleChange(1, e)}
        ></input>
        <label htmlFor="phone-input">Phone #:</label>
        <input
          type="tel"
          id="phone-input"
          value={this.props.values.phone}
          onChange={(e) => this.handleChange(2, e)}
        ></input>
      </section>
    );
  }
}

export default Personal;
