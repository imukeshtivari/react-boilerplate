import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

class PrivateRoute extends React.Component {

  render() {
    const { component: Component, token, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (_.isEmpty(token)) {
            return (
              <Redirect
                to={{
                  pathname: process.env.REACT_APP_OAUTH_DEFAULT_ENDPOINT || "/login",
                  state: { from: props.location }
                }}
              />
            )
          }

          return <Component {...props} />
        }}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  token: _.get(state, "auth.data.token", "")
})

export default connect(mapStateToProps)(PrivateRoute);