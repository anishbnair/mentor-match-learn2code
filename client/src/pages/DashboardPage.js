import React, { Component } from "react";
import Container from "../components/Container";
import Column from "../components/Column";
import Row from "../components/Row";
import Footer from "../components/Footer";
import TechPath from "../components/DashCards/TechPath";
import PrevConnect from "../components/DashCards/PreviousConnections";
import Resources from "../components/DashCards/MyResources";
import Profile from "../components/Profile/Profile";
import "./DashboardPage.css";

class DashboardPage extends Component {

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    console.log(this.props.auth);
    if (!userProfile) {
      console.log("no profile....");
    } else {
      this.setState({ profile: userProfile });
      console.log("got profile.....");
    }
  }

  render() {
    const { profile } = this.state;

    return (
      <div>
        {/* <Nav title="Mentor Match" /> */}

        <div className="container-profile-dash">
          <h1>{profile.name}</h1>
          <div className="profile-area-dash">
                <img src={profile.picture} alt="" />
          </div>
        </div>

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
