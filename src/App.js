import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container my-3">
        <Switch>
          <Route
            path="/"
            render={() => (
              <div>inside application</div>
            )}
          />
          <Route
            render={() => (
              <div>
                <h3>
                  Sorry, page not found (404)
                  </h3>
                <br />
                Go to <Link to="/">Home</Link>
              </div>
            )}
          />

        </Switch>
      </div>
    );
  }
}

export default App;
