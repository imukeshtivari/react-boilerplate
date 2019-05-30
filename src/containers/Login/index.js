import React, { Component } from "react"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

import { saveAuthToken } from "../../actions/auth";
// import api from "../../helpers/api";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      keep_me: false,
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
    this.setState({ [e.target.name]: (e.target.type === "checkbox") ? e.target.checked : e.target.value });
  }

  render() {
    const { username, password, keep_me } = this.state;

    return (
      <Container className="my-5">
        <Form className="col-5 mx-auto" onSubmit={this._handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username or Email address</Form.Label>
            <Form.Control name="username" type="text" placeholder="Enter Username or Email address" value={username} onChange={this._handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" value={password} onChange={this._handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicChecbox">
            <Form.Check name="keep_me" type="checkbox" label="Check me out" checked={keep_me} onChange={this._handleChange} />
          </Form.Group>

          <Form.Group>
            Click here to <Link to="/register">Register</Link>
          </Form.Group>
          <Button variant="outline-primary" type="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveAuthToken: (token) => dispatch(saveAuthToken(token))
})

export default connect(null, mapDispatchToProps)(Login);