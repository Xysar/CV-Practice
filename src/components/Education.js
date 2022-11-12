import React, { Component } from "react";

class Education extends Component {
  handleChange = (num, event) => {
    this.props.sendData(num, event.target.value);
  };

  render() {
    return (
      <section>
        <h2>Education History</h2>
        <label htmlFor="school-name-input">School Name:</label>
        <input
          type="text"
          id="school-name-input"
          value={this.props.values.schoolName}
          onChange={(e) => {
            this.handleChange(0, e);
          }}
        ></input>
        <label htmlFor="study-field-input">Field of Study:</label>
        <input
          type="text"
          id="study-field-input"
          value={this.props.values.field}
          onChange={(e) => {
            this.handleChange(1, e);
          }}
        ></input>
        <label htmlFor="graduation-input">Graduation Date:</label>
        <input
          type="date"
          id="graduation-input"
          value={this.props.values.gradDate}
          onChange={(e) => {
            this.handleChange(2, e);
          }}
        ></input>
      </section>
    );
  }
}

export default Education;
