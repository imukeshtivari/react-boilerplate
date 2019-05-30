import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      password: ""
    };

    [
      "_handleChange",
      "_handleSubmit"
    ].forEach((fn) => this[fn] = this[fn].bind(this));
  }

  _handleSubmit(e) {
    e.preventDefault();
  }

  _handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { name, username, password } = this.state;

    return (
      <Container className="my-5">
        <Form className="col-5 mx-auto" onSubmit={this._handleSubmit}>
          <Form.Group controlId="formFullName">
            <Form.Label>Full name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter full name" value={name} onChange={this._handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username or Email address</Form.Label>
            <Form.Control name="username" type="text" placeholder="Enter Username or Email address" value={username} onChange={this._handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Enter password" value={password} onChange={this._handleChange} />
          </Form.Group>

          <Form.Group>
            Click here to <Link to="/login">Login</Link>
          </Form.Group>

          <Button variant="outline-primary" type="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default Register;