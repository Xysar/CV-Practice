import React, { Component } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Work from "./components/Work";
import Display from "./components/Display";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personal: {
        name: "",
        email: "",
        phone: "",
      },
      education: {
        schoolName: "",
        field: "",
        gradDate: "",
      },
      work: {
        companyName: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: "",
      },
      display: {
        personal: {
          name: "",
          email: "",
          phone: "",
        },
        education: {
          schoolName: "",
          field: "",
          gradDate: "",
        },
        work: {
          companyName: "",
          position: "",
          tasks: "",
          startDate: "",
          endDate: "",
        },
      },
    };
  }

  handleEducation = (num, data) => {
    if (num === 0) {
      this.setState({
        education: {
          schoolName: data,
          field: this.state.education.field,
          gradDate: this.state.education.gradDate,
        },
      });
    } else if (num === 1) {
      this.setState({
        education: {
          schoolName: this.state.education.schoolName,
          field: data,
          gradDate: this.state.education.gradDate,
        },
      });
    } else {
      this.setState({
        education: {
          schoolName: this.state.education.schoolName,
          field: this.state.education.field,
          gradDate: data,
        },
      });
    }
  };

  handlePersonal = (num, data) => {
    if (num === 0) {
      this.setState({
        personal: {
          name: data,
          email: this.state.personal.email,
          phone: this.state.personal.phone,
        },
      });
    } else if (num === 1) {
      this.setState({
        personal: {
          name: this.state.personal.name,
          email: data,
          phone: this.state.personal.phone,
        },
      });
    } else {
      this.setState({
        personal: {
          name: this.state.personal.name,
          email: this.state.personal.email,
          phone: data,
        },
      });
    }
  };

  handleWork = (num, data) => {
    if (num === 0) {
      this.setState({
        work: {
          companyName: data,
          position: this.state.work.position,
          tasks: this.state.work.tasks,
          startDate: this.state.work.startDate,
          endDate: this.state.work.endDate,
        },
      });
    } else if (num === 1) {
      this.setState({
        work: {
          companyName: this.state.work.companyName,
          position: data,
          tasks: this.state.work.tasks,
          startDate: this.state.work.startDate,
          endDate: this.state.work.endDate,
        },
      });
    } else if (num === 2) {
      this.setState({
        work: {
          companyName: this.state.work.companyName,
          position: this.state.work.position,
          tasks: data,
          startDate: this.state.work.startDate,
          endDate: this.state.work.endDate,
        },
      });
    } else if (num === 3) {
      this.setState({
        work: {
          companyName: this.state.work.companyName,
          position: this.state.work.position,
          tasks: this.state.work.tasks,
          startDate: data,
          endDate: this.state.work.endDate,
        },
      });
    } else {
      this.setState({
        work: {
          companyName: this.state.work.companyName,
          position: this.state.work.position,
          tasks: this.state.work.tasks,
          startDate: this.state.work.startDate,
          endDate: data,
        },
      });
    }
  };
  onSubmitForm = (e) => {
    e.preventDefault();

    this.setState({
      display: {
        personal: this.state.personal,
        education: this.state.education,
        work: this.state.work,
      },
    });

    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      personal: {
        name: "",
        email: "",
        phone: "",
      },
      education: {
        schoolName: "",
        field: "",
        gradDate: "",
      },
      work: {
        companyName: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: "",
      },
    });
  };

  editForm = () => {
    this.setState({
      personal: this.state.display.personal,
      edudcation: this.state.display.education,
      work: this.state.display.work,
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmitForm}>
          <Personal
            values={this.state.personal}
            sendData={this.handlePersonal}
          />
          <Education
            values={this.state.education}
            sendData={this.handleEducation}
          />
          <Work values={this.state.work} sendData={this.handleWork} />
          <button type="submit">Submit</button>
        </form>
        <Display info={{ ...this.state.display }} />
        <button onClick={this.editForm}>Edit</button>
      </div>
    );
  }
}

export default App;
