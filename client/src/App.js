import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import "./App.css";

import Wrapper from "./components/Wrapper";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <Wrapper>
        <Logo />

        <div>
          <Navbar fluid>
            <Navbar.Header>
              <Button
                data-primary={true}
                className="Button"
                onClick={this.goTo.bind(this, "home")}
              >
                Home
              </Button>
              {!isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  // className="Button"
                  data-primary={true}
                  className="Button"
                  // className="Button"
                  onClick={this.login.bind(this)}
                >
                  Log In
                </Button>
              )}
              {isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  // className="btn-margin"
                  data-primary={true}
                  className="Button"
                  onClick={this.goTo.bind(this, "dashboard")}
                >
                  Dashboard
                </Button>
              )}
              {isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  // className="btn-margin"
                  data-primary={true}
                  className="Button"
                  onClick={this.goTo.bind(this, "connect")}
                >
                  Connect
                </Button>
              )}
              {isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  // className="btn-margin"
                  data-primary={true}
                  className="Button"
                  onClick={this.goTo.bind(this, "profile")}
                >
                  Profile
                </Button>
              )}
              {isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  // className="btn-margin"
                  data-primary={true}
                  className="Button"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                </Button>
              )}
            </Navbar.Header>
          </Navbar>
          <div className="container">{this.props.children}</div>
        </div>

        <Footer />
      </Wrapper>
    );
  }
}

export default App;
