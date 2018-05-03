import React, { Component } from "react";
// api.get user
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
    return <p>Mentor details from database will be fetched here!!!</p>
  
  }
}

export default Connect;
