import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <h2>Education History</h2>
        <label htmlFor="school-name-input">School Name:</label>
        <input type="text" id="school-name-input"></input>
        <label htmlFor="study-field-input">Field of Study:</label>
        <input type="text" id="study-field-input"></input>
        <label htmlFor="graduation-input">Graduation Date:</label>
        <input type="date" id="graduation-input"></input>
      </section>
    );
  }
}

export default Education;
