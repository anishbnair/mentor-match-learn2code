import React from "react";
import {
  FormControl,
  HelpBlock,
  Button,
  FormGroup,
  ControlLabel,
  Checkbox,
  Radio
} from "react-bootstrap";
import axios from "axios";
import API from "../../utils/API";
import auth from "../Auth/Auth.js";

console.log("authorization email " + auth);

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.auth.grabInfo().email
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event, err) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    //testing:
    console.log("SUCCESS");
    console.log(this.props.auth.grabInfo().email);
    //end testing

    console.log("this is user info:" + JSON.stringify(this.state));

    console.log(this.state);
    API.updateUserProfile(this.state).then(res => {
      console.log("this is response for api updated:");
      console.log(res.data);
    });
  }


    render() {
        return (
            <form>
                <input
                    id="formControlsText"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    label="Username"
                    placeholder="Enter username"
                />
                <input
                    id="formControlsEmail"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    label="Email address"
                    placeholder="Enter email"
                />

                <FormGroup>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="html" value="true">HTML</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="css" value="true" >CSS</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="javascript" value='true' >JavaScript</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="jquery" value='true'>jQuery</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="mongodb" value='true' >MongoDB</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="nodejs" value='true' >Node.js</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="mentee" value='true' >Are you a mentee?</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="mentor" value='true' >Would you like to mentor?</Checkbox>
                
                </FormGroup>

                <Button onClick={this.handleSubmit} type="submit">Submit</Button>
            </form>
        );
    }

}
