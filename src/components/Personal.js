import React, { Component } from "react";

class Personal extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  handleChange = (num, event) => {
    if (num === 0) {
      this.setState({ name: event.target.value });
    } else if (num === 1) {
      this.setState({ email: event.target.value });
    } else this.setState({ phone: event.target.value });

    this.props.sendData(this.state);
  };

  render() {
    return (
      <section>
        <h2>Personal Information</h2>
        <label htmlFor="name-input">Name:</label>
        <input
          type="text"
          id="name-input"
          onChange={(e) => this.handleChange(0, e)}
        ></input>
        <label htmlFor="email-input">Email:</label>
        <input
          type="email"
          id="email-input"
          onChange={(e) => this.handleChange(1, e)}
        ></input>
        <label htmlFor="phone-input">Phone #:</label>
        <input
          type="tel"
          id="phone-input"
          onChange={(e) => this.handleChange(2, e)}
        ></input>
      </section>
    );
  }
}

export default Personal;
