import React, { Component } from "react";
import "./Mentor.css";

class Mentor extends Component {
  render() {
    //   const image = this.props.details.image;
    const { image, name, email, github, skill, desc } = this.props.details;

    return (
      <li className="mentor-list">
        <img src={image} alt={name} />
        <h3 className="mentor-name">Name: {name}</h3>
        <p>email: {email}</p>
        <p>GitHub: {github}</p>
        <p>Skill: {skill}</p>
        <p>About me: {desc}</p>
      </li>
    );
  }
}

export default Mentor;
