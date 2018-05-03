import React, { Component } from "react";
<<<<<<< HEAD
// api.get user
=======
import Mentor from "../components/Mentor/Mentor.js";
import sampleMentors from "../components/Mentor/seeds-mentor.js";

>>>>>>> 374242e3b7b4b9bf9a93b082bce66be96b1f97aa
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
      </div>
    );
>>>>>>> 374242e3b7b4b9bf9a93b082bce66be96b1f97aa
  }
}

export default Connect;
