import React, { Component } from "react";
import Mentor from "../components/Mentor/Mentor.js";
import sampleMentors from "../components/Mentor/seeds-mentor.js";
import Footer from "../components/Footer";
import "./Connect.css";


class Connect extends Component {
  state = {
    mentors: {}
  };

  componentDidMount() {
    this.loadMentors();
  }

  loadMentors = () => {
    this.setState({ mentors: sampleMentors });
  };

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
      <div className="conn">
        <div className="container-profile-conn">
          <h1>{profile.name}</h1>
          <div className="profile-area-conn">
                <img src={profile.picture} alt="" />
          </div>
        </div>

        <div className="mentor-connect">
          <div className="mentors">
            <ul className="mentor">
              {Object.keys(this.state.mentors).map(key => (
                <Mentor key={key} index={key} details={this.state.mentors[key]} />
              ))}
            </ul>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

export default Connect;
