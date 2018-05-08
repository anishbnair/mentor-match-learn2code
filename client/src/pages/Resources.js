import React, { Component } from "react";
import Footer from "../components/Footer";
import "./Resources.css";

class Resources extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  render() {
    const { profile } = this.state;

    return (
      <div className="resc">
        <div className="container-profile-resc">
          <h1>{profile.name}</h1>
          <div className="profile-area-resc">
            <img src={profile.picture} alt="" />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Resources;
