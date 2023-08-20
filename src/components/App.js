import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// components
import Layout from "./Layout";
// pages
import Error from "../pages/error";
// context
import { useUserState } from "../context/UserContext";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" render={() => <Redirect to="/ghq" />} /> */}
        <Route exact path="/" render={() => <Redirect to="/redirect" />} />
        <Route path="/" component={Layout} />
        <Route path='/start' />
        {/* <PublicRoute path="/login" component={Login}/> */}
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

// #######################################################################

export function PrivateRoute({ component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/start",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
}

export function PublicRoute({ component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        ) : (
          React.createElement(component, props)
        )
      }
    />
  );
}
