import React from "react";
import { Redirect, Route, Router } from "react-router-dom";
import App from "../App";
// import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import Callback from "../components/Callback/Callback";
import Auth from "../components/Auth/Auth";
import history from "../history";
import DashboardPage from "../pages/DashboardPage";
import Connect from "../pages/Connect";
import HomePage from "../pages/HomePage";
import Resources from "../pages/Resources";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" render={props => <App auth={auth} {...props} />} />
        {/* <Route path="/" render={props => <HomePage auth={auth} {...props} />} /> */}
        <Route
          path="/home"
          render={props => <HomePage auth={auth} {...props} />}
        />
        <Route
          path="/profile"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/home" />
            ) : (
              <Profile auth={auth} {...props} />
            )
          }
        />
        <Route
          path="/dashboard"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/dashboard" />
            ) : (
              <DashboardPage auth={auth} {...props} />
            )
          }
        />
        <Route
          path="/connect"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/connect" />
            ) : (
              <Connect auth={auth} {...props} />
            )
          }
        />
        <Route
          path="/resources"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/resources" />
            ) : (
              <Resources auth={auth} {...props} />
            )
          }
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>
    </Router>
  );
};
