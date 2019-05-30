import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// redux store.
import { persistor, store } from "./store";

// components.
import PrivateRoute from "./components/hoc/PrivateRoute";
import LazyLoad from "./components/hoc/LazyLoad";
import Loader from "./components/layout/Loader";

// import css.
import "./styles/css/main.css";

// components that will be loaded only when required.
const Register = (props) => (
  <LazyLoad load={() => import("./containers/Register")}>
    {(Component) => (Component === null) ? <Loader variant="success" /> : <Component {...props} />}
  </LazyLoad>
);

const Login = (props) => (
  <LazyLoad load={() => import("./containers/Login")}>
    {(Component) => (Component === null) ? <Loader variant="success" /> : <Component {...props} />}
  </LazyLoad>
);

const App = (props) => (
  <LazyLoad load={() => import("./App")}>
    {(Component) => (Component === null) ? <Loader variant="success" /> : <Component {...props} />}
  </LazyLoad>
);

export default function () {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <Router basename={process.env.REACT_APP_ROUTE_BASENAME || "/"}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/" component={App} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}
