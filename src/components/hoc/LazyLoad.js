import React, { Component } from "react";
import PropTypes from "prop-types";

const ERROR_MESSAGE = "Oops, Something wen't wrong.";

class Lazyload extends Component {
  state = {
    component: null,
    error: null
  };

  componentDidMount() {
    this.props.load()
      .then((component) => {
        this.setState({
          component: component.default || component
        })
      })
      .catch((error) => {
        this.setState({ error })
      })
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;

    if (error) {
      if (process.env.NODE_ENV === "production") {
        return (<p className="text-danger">{ERROR_MESSAGE}</p>);
      }

      return (<p className="text-danger">{(error || ERROR_MESSAGE).toString()}</p>);
    }

    return this.props.children(this.state.component);
  }
}

Lazyload.propTypes = {
  children: PropTypes.func.isRequired
}

export default Lazyload;