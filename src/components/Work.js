import React, { Component } from "react";

class Work extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <h2>Work Experience</h2>
        <ul>
          <li>
            <label htmlFor="company-name">Company Name:</label>
            <input type="text" className="company-name"></input>
            <label htmlFor="position-title">Position title:</label>
            <input type="text" className="position-title"></input>
            <label htmlFor="job-tasks">Responsibilities:</label>
            <textarea cols="40" rows="5" className="job-tasks"></textarea>
            <label htmlFor="start-date">Start Date:</label>
            <input type="date" className="start-date"></input>
            <label htmlFor="end-date">End Date:</label>
            <input type="date" className="end-date"></input>
          </li>
        </ul>
      </section>
    );
  }
}

export default Work;
