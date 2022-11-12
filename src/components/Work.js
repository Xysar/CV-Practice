import React, { Component } from "react";

class Work extends Component {
  handleChange = (num, event) => {
    this.props.sendData(num, event.target.value);
  };

  render() {
    return (
      <section>
        <h2>Work Experience</h2>
        <ul>
          <li>
            <label htmlFor="company-name">Company Name:</label>
            <input
              type="text"
              className="company-name"
              value={this.props.values.companyName}
              onChange={(e) => {
                this.handleChange(0, e);
              }}
            ></input>
            <label htmlFor="position-title">Position title:</label>
            <input
              type="text"
              className="position-title"
              value={this.props.values.position}
              onChange={(e) => {
                this.handleChange(1, e);
              }}
            ></input>
            <label htmlFor="job-tasks">Responsibilities:</label>
            <textarea
              cols="40"
              rows="5"
              className="job-tasks"
              value={this.props.values.tasks}
              onChange={(e) => {
                this.handleChange(2, e);
              }}
            ></textarea>
            <label htmlFor="start-date">Start Date:</label>
            <input
              type="date"
              className="start-date"
              value={this.props.values.startDate}
              onChange={(e) => {
                this.handleChange(3, e);
              }}
            ></input>
            <label htmlFor="end-date">End Date:</label>
            <input
              type="date"
              className="end-date"
              value={this.props.values.endDate}
              onChange={(e) => {
                this.handleChange(4, e);
              }}
            ></input>
          </li>
        </ul>
      </section>
    );
  }
}

export default Work;
