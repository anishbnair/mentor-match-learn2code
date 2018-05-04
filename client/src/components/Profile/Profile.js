import React, { Component } from "react";
// import { Panel, ControlLabel, Glyphicon } from "react-bootstrap";
import { Panel } from "react-bootstrap";
import "./Profile.css";

class Profile extends Component {
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
<<<<<<< HEAD

    
    render() {
        const { profile } = this.state;
        return (
            <div className="container">
                <div className="profile-area">
                    <h1>{profile.name}</h1>
                    <Panel header="Profile">
                        <img src={profile.picture} alt="profile" />
=======
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container-profile">
        <h1>{profile.name}</h1>
        <div className="profile-area">
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            {/* 
>>>>>>> bbd6bd33bead6dd678b520a34071c1a79fe9351b
                        <div>
                            <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
                            <h3>{profile.nickname}</h3> 
                        </div>
                           <pre>{JSON.stringify(profile, null, 2)}</pre> 
                       */}
          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;
