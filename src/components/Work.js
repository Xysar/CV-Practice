import React, { Component } from "react";

class Work extends Component {
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
                this.props.sendData(0, e.target.value);
              }}
            ></input>
            <label htmlFor="position-title">Position title:</label>
            <input
              type="text"
              className="position-title"
              value={this.props.values.position}
              onChange={(e) => {
                this.props.sendData(1, e.target.value);
              }}
            ></input>
            <label htmlFor="job-tasks">Responsibilities:</label>
            <textarea
              cols="40"
              rows="5"
              className="job-tasks"
              value={this.props.values.tasks}
              onChange={(e) => {
                this.props.sendData(2, e.target.value);
              }}
            ></textarea>
            <label htmlFor="start-date">Start Date:</label>
            <input
              type="date"
              className="start-date"
              value={this.props.values.startDate}
              onChange={(e) => {
                this.props.sendData(3, e.target.value);
              }}
            ></input>
            <label htmlFor="end-date">End Date:</label>
            <input
              type="date"
              className="end-date"
              value={this.props.values.endDate}
              onChange={(e) => {
                this.props.sendData(4, e.target.value);
              }}
            ></input>
          </li>
        </ul>
      </section>
    );
  }
}

export default Work;
