import React from "react";
import "./DashCards.css";
import Interests from "../Modal/Modal.js";
import UserTechList from "../UserTechList/UserTechList"
import API from "../../utils/API";



class TechPath extends React.Component {
  //add state

  
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">My Technology Path</h3>
            <Interests auth={this.props.auth}/>
            
          </div>
          <div className="panel-body">
            <UserTechList />
          
          </div>
        </div>
      </div>
    )
  }
}

export default TechPath;
