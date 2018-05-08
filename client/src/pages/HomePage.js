
import React, { Component } from "react";
import "./HomePage.css";
import Panel from "../components/Panel";
import Footer from "../components/Footer";

class HomePage extends Component {

 componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    let accessToken = localStorage.getItem("access_token");
    console.log ("access token: ", accessToken);
    if (!userProfile && accessToken) {
      console.log ("not null");  
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
      <div className="home">

        <div className="container-profile-home">
          {/* <h1>{profile.name}</h1>
             <div className="profile-area-home">
              <img src={profile.picture} alt="" />
             </div>*/}
        </div>
  
        <Panel />
        <Footer />
        
      </div>
    );
  }
}

export default HomePage;


