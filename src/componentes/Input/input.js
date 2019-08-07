import React, { Component } from "react";

import "./input.css";

class Input extends React.Component {
  render() {
    return (
      <input type={this.props.type} placeholder={this.props.placeholder} />
    );
  }
}

export default Input;