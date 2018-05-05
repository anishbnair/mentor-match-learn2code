import React, { Component } from "react";
import Mentor from "../components/Mentor/Mentor.js";
import sampleMentors from "../components/Mentor/seeds-mentor.js";
import Footer from "../components/Footer";

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

  render() {
<<<<<<< HEAD
    return <p>Mentor details from database will be fetched here!!!</p>
  
=======
    return (
      <div className="mentor-connect">
        <div className="mentors">
          <ul className="mentor">
            {Object.keys(this.state.mentors).map(key => (
              <Mentor key={key} index={key} details={this.state.mentors[key]} />
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    );
>>>>>>> bbd6bd33bead6dd678b520a34071c1a79fe9351b
  }
}

export default Connect;
