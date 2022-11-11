import React, { Component } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Work from "./components/Work";
import Display from "./components/Display";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personal: "",
      education: "",
      work: "",
    };
  }

  handlePersonal = (data) => {
    this.setState({ personal: data });
  };

  handleEducation = (data) => {
    this.setState({ education: data });
  };

  handleWork = (data) => {
    this.setState({ work: data });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    this.setState({
      information: {
        personal: this.state.personal,
        education: this.state.education,
        work: this.state.work,
      },
    });

    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmitForm}>
          <Personal sendData={this.handlePersonal} />
          <Education sendData={this.handleEducation} />
          <Work sendData={this.handleWork} />
          <button type="submit">Submit</button>
        </form>
        <Display info={this.state.information} />
      </div>
    );
  }
}

export default App;
