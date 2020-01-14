import React, { Component } from 'react';
export default class Hello extends Component {
  render() {
    return React.createElement("div", null, React.createElement("p", null, "Hello"));
  }

}