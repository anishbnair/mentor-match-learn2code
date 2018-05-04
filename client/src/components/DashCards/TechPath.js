import React from "react";
import "./DashCards.css";

class TechPath extends React.Component {
  //add state
  render() {
    return (
      <div className="card align-items-center">
        <div className="card-body">
          <h5 className="card-title">My Technology Path</h5>
          <br />
          <br />
          <button type="button" className="btn btn-primary btn-block">
            Choose Path
          </button>
        </div>
      </div>
    );
  }
}

export default TechPath;
