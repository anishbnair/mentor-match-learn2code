import React, { Component } from "react";
import Footer from "../components/Footer";
import Profile from "../components/Profile/Profile";
import "./Resources.css";

class Resources extends Component {

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
