import React, { Component } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Work from "./components/Work";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personal: [],
      education: [],
      work: [],
    };
  }

  onSubmitForm = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmitForm}>
          <Personal />
          <Education />
          <Work />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
