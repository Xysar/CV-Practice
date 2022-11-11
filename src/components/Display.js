import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.info}</p>
      </div>
    );
  }
}

export default Display;
