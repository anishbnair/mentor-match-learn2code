import React, { Component } from "react";
// import Home from "../pages/Home";
// import Dashboard from "../pages/Dashboard";
// import Connect from "../pages/Connect";
// import Nav from "../components/Nav";
// import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Column from "../components/Column";
import Row from "../components/Row";
import Footer from "../components/Footer";
import TechPath from "../components/DashCards/TechPath";
import PrevConnect from "../components/DashCards/PreviousConnections";
import Resources from "../components/DashCards/MyResources";
import "./DashboardPage.css";
// import "./DashCards.css";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        {/* <Nav title="Mentor Match" /> */}

        <Container>
          <Row>
            <Column size="md-4 sm-3">
              <PrevConnect />
            </Column>
            <Column size="md-4 sm-3">
              <TechPath />
            </Column>
            <Column size="md-4 sm-3">
              <Resources />
            </Column>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default DashboardPage;
