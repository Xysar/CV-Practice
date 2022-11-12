import React, { Component } from "react";

class Education extends Component {
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
            this.props.sendData(0, e.target.value);
          }}
        ></input>
        <label htmlFor="study-field-input">Field of Study:</label>
        <input
          type="text"
          id="study-field-input"
          value={this.props.values.field}
          onChange={(e) => {
            this.props.sendData(1, e.target.value);
          }}
        ></input>
        <label htmlFor="graduation-input">Graduation Date:</label>
        <input
          type="date"
          id="graduation-input"
          value={this.props.values.gradDate}
          onChange={(e) => {
            this.props.sendData(2, e.target.value);
          }}
        ></input>
      </section>
    );
  }
}

export default Education;
