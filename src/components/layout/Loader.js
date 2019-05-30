import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

export default class Loader extends Component {
  render() {
    return (
      <Spinner animation="border" role="status" {...this.props} >
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }
}
