import React, { Component } from "react";

class Work extends Component {
  constructor() {
    super();

    this.state = {
      companyName: "",
      position: "",
      tasks: "",
      startDate: "",
      endDate: "",
    };
  }

  handleChange = (num, event) => {
    if (num === 0) {
      this.setState({ companyName: event.target.value });
    } else if (num === 1) {
      this.setState({ position: event.target.value });
    } else if (num === 2) {
      this.setState({ tasks: event.target.value });
    } else if (num === 3) {
      this.setState({ startDate: event.target.value });
    } else this.setState({ endDate: event.target.value });

    this.props.sendData(this.state);
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
              onChange={(e) => {
                this.handleChange(0, e);
              }}
            ></input>
            <label htmlFor="position-title">Position title:</label>
            <input
              type="text"
              className="position-title"
              onChange={(e) => {
                this.handleChange(1, e);
              }}
            ></input>
            <label htmlFor="job-tasks">Responsibilities:</label>
            <textarea
              cols="40"
              rows="5"
              className="job-tasks"
              onChange={(e) => {
                this.handleChange(2, e);
              }}
            ></textarea>
            <label htmlFor="start-date">Start Date:</label>
            <input
              type="date"
              className="start-date"
              onChange={(e) => {
                this.handleChange(3, e);
              }}
            ></input>
            <label htmlFor="end-date">End Date:</label>
            <input
              type="date"
              className="end-date"
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
