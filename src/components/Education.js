import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      schoolName: "",
      field: "",
      gradDate: "",
    };
  }

  handleChange = (num, event) => {
    if (num === 0) {
      this.setState({ schoolName: event.target.value });
    } else if (num === 1) {
      this.setState({ field: event.target.value });
    } else this.setState({ gradDate: event.target.value });

    this.props.sendData(this.state);
  };

  render() {
    return (
      <section>
        <h2>Education History</h2>
        <label htmlFor="school-name-input">School Name:</label>
        <input
          type="text"
          id="school-name-input"
          onChange={(e) => {
            this.handleChange(0, e);
          }}
        ></input>
        <label htmlFor="study-field-input">Field of Study:</label>
        <input
          type="text"
          id="study-field-input"
          onChange={(e) => {
            this.handleChange(1, e);
          }}
        ></input>
        <label htmlFor="graduation-input">Graduation Date:</label>
        <input
          type="date"
          id="graduation-input"
          onChange={(e) => {
            this.handleChange(2, e);
          }}
        ></input>
      </section>
    );
  }
}

export default Education;
