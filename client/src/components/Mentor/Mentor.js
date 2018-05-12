import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import API from "../../utils/API.js"
import "./Mentor.css";

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }


  handleButton () {
    console.log("this.props.index = " + this.props.index)
    const index = this.props.index;
    console.log("index = " + index);
    const myIndex = index ;
    API.saveUserConnection(myIndex, index)
       .then ((res, req) => {
        console.log("success");
        console.log("res");
        console.log(res);
        console.log("req");
        console.log(req);

      })
      .catch(err => {
        console.log("saveUserConnection failed");
        //console.log("res");
        //console.log(res);
        //console.log("req");
        //console.log(req);
        console.log("err returned is:");
        console.log(err.response.data);
      });    

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
              <p>Email: {email}</p>
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
