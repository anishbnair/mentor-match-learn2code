import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import "./App.css";

import Wrapper from "./components/Wrapper";
import Logo from "./components/Logo";
// import Footer from "./components/Footer";
// import MMHeaderCard from "./components/MMHeaderCard";
// import mmheaders from "./mmheaders.json";

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

  // Setting this.state.mmheaders to the mmheaders json array
  // state = {
  //   mmheaders
  // };

  // componentDidMount() {
  //   // redirect to home page
  //   this.props.history.replace("/home");
  // }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <Wrapper>
        <header className="App-header">
          <Logo />
          <div>
            <Navbar fluid className="App-navbar">
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
                    data-primary={true}
                    className="Button"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )}
                {isAuthenticated() && (
                  <Button
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
                    onClick={this.goTo.bind(this, "resources")}
                  >
                    Resources
                  </Button>
                )}
                {isAuthenticated() && (
                  <Button
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

        {/* <Panel /> */}

        {/*{this.state.mmheaders.map(mmheader => (
          <MMHeaderCard
            id={mmheader.id}
            key={mmheader.id}
            name={mmheader.name}
            image={mmheader.image}
            occupation={mmheader.occupation}
            location={mmheader.location}
          />
        ))}*/}

        {/* <Footer /> */}
      </Wrapper>
    );
  }
}

export default App;
