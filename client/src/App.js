import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import "./App.css";

import Wrapper from "./components/Wrapper";
import Logo from "./components/Logo";

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

  componentDidMount() {
    // redirect to home page
    this.props.history.replace("/home");
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <Wrapper>
        <header className="App-header">
          <Logo />
          <div>
            <Navbar fluid className="App-navbar">
              <Navbar.Header>
                {isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    data-primary={true}
                    className="Button"
                    onClick={this.goTo.bind(this, "home")}
                  >
                    Home
                  </Button>
                )}
                {!isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    data-primary={true}
                    className="Button"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )}
                {isAuthenticated() && (
                  <Button
                    bsStyle="primary"
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
                    data-primary={true}
                    className="Button"
                    onClick={this.goTo.bind(this, "resources")}
                  >
                    Resources
                  </Button>
                )}
                {isAuthenticated() && (
                  <Button
                    bsStyle="primary"
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
        </header>
      </Wrapper>
    );
  }
}

export default App;
