import React from "react";
import "./DashCards.css";
import Interests from "../Modal/Modal.js";

class TechPath extends React.Component {
  //add state
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">My Technology Path</h3>
          </div>
          <div className="panel-body">
          <Interests auth={this.props.auth}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TechPath;
