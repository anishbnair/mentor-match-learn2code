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
  }
  render() {
    const { profile } = this.state;
    return (
      <div>
        <div className="container-profile">
          <h1>{profile.name}</h1>
          <div className="profile-area">
            <img src={profile.picture} alt="" />
          </div>
        </div>

        <div className="panel-body">
          <Panel header="Profile">
            {/*<div>
              <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
              <h3>{profile.nickname}</h3> 
            </div>*/}
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;
