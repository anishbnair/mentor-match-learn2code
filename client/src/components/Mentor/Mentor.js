import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import "./Mentor.css";

class Mentor extends Component {

  handleButton () {
    alert("Hello World!");
  }


  render() {
    //   const image = this.props.details.image;
    const { image, name, email, github, skill, desc } = this.props.details;

    return (
      <div className="container">
        <div className="row">
          
          <div className="col-lg-12">
            <li className="mentor-list">
              <img src={image} alt={name} />
              <h3 className="mentor-name">Name: {name}</h3>
              <p>email: {email}</p>
              <p>GitHub: {github}</p>
              <p>Skill: {skill}</p>
              <p>About me: {desc}</p>
            </li>
            <Button type="button" onClick={this.handleButton}>Connect</Button>
          </div>

        </div>
      </div>
    );
  }
}

export default Mentor;
