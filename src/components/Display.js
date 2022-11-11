import React, { Component } from "react";

class Display extends Component {
  render() {
    let { name, email, phone } = this.props.info.personal;
    let { schoolName, field, gradDate } = this.props.info.education;
    let { companyName, position, tasks, startDate, endDate } =
      this.props.info.work;
    return (
      <div>
        <p>
          Name: {name} Email: {email} Phone #: {phone}
        </p>
        <p>
          School Name: {schoolName} Field of Study: {field} Graduation Date:{" "}
          {gradDate}
        </p>
        <p>
          Company Name: {companyName} Position: {position} Tasks: {tasks} Start
          Date: {startDate} End Date: {endDate}
        </p>
      </div>
    );
  }
}

export default Display;
