
import React, { Component } from "react";
import Panel from "../components/Panel";
import Footer from "../components/Footer";
import Profile from "../components/Profile/Profile";
import "./HomePage.css";

class HomePage extends Component {

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

        <div className="container-profile-home">
          <h1>{profile.name}</h1>
          <div className="profile-area-home">
                <img src={profile.picture} alt="" />
          </div>
        </div>
  
        <Panel />
        <Footer />
        
      </div>
    );
  }
}

export default HomePage;
