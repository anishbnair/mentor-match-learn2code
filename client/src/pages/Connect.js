import React, { Component } from "react";
import Mentor from "../components/Mentor/Mentor.js";
import Container from "../components/Container";
import sampleMentors from "../components/Mentor/seeds-mentor.js";
import Footer from "../components/Footer";
import API from "../utils/API.js"
import "./Connect.css";

class Connect extends Component {
  state = {
    mentors: []
  };

  componentDidMount() {
    this.loadMentors();
  }

  loadMentors = () => {
    //this.setState({ mentors: sampleMentors });
    API.showConnection()
      .then(res => {
        console.log("success");
        console.log(res);
        this.setState({ mentors: res.data })
      })
      .catch(err => console.log("fail"));    
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
        <Container>
          <div className="mentor-connect">
            <div className="mentors">
              <ul className="mentor">
                {(this.state.mentors).map((key, index) => (
                  <Mentor
                    key={key._id}
                    index={key._id}
                    details={this.state.mentors[index]}
                  />
                ))}
              </ul>
            </div>
          </div>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default Connect;
