import React from "react";
import { FormControl, HelpBlock, Button, FormGroup, ControlLabel, Checkbox, Radio } from 'react-bootstrap';
import axios from "axios";
import API from "../../utils/API";
import auth from "../Auth/Auth.js"

console.log("authorization email " + auth);//.userInfo.email:authResult.idTokenPayload.nickname + "@gmail.com",
//)
// function FieldGroup({ id, label, help, ...props }) {
//     return (
//         <FormGroup controlId={id}>
//             <ControlLabel>{label}</ControlLabel>
//             <FormControl {...props} />
//             {help && <HelpBlock>{help}</HelpBlock>}
//         </FormGroup>
//     );
// };

 // function sendtoDatab(e ,err){
 //   e.preventDefault();
 //   if (err) throw err;
 //   alert("This value"+this.value);
 // userInput={}
 //  axios.post('api/path', formControlsText, formControlsEmail)
 //  .then(function(response){
 //    console.log(response);
 //  })
 //  .catch(function(error){
 //    console.log(error);
 //  });
// };

export default class Form extends React.Component {
constructor(props){
  super(props);
  this.state ={
 email:this.props.auth.grabInfo().email
    };


  
    this.handleSubmit = this.handleSubmit.bind(this);
  this.handleInputChange=this.handleInputChange.bind(this);
  }



handleInputChange(event){

    const{name,value}= event.target;
  this.setState({
    
      [name]: value
    });
}

handleSubmit(event,err){
  event.preventDefault();
  const target = event.target;
  const value = target.value;
  const name = target.name;

    //testing:
  console.log("SUCCESS");
  console.log(this.props.auth.grabInfo().email);
    //end testing

console.log("this is user info:" + JSON.stringify(this.state))

console.log(this.state)
API.updateUserProfile(this.state  
).then(res =>
    {   console.log("this is response for api updated:" )
        console.log(res.data)})
// axios.post('/api', this.state)
//   .then(function (response) {
//     console.log("bring it around town" + response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//   console.log(userpathinfo);
};








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
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="html" value="html">HTML</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange}  name="CSS" value="css" >CSS</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="Javascript" value='javascript' >JavaScript</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="jQuery" value='jquery'>jQuery</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="Git" value='Git'>Git</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="MongoDB" value='mongodb' >MongoDB</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="Express.js" value='express' >Express.js</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="Node.js" value='nodejs' >Node.js</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="React" value='react' >React.js</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="mentee" value='mentee' >Are you a mentee?</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="mentor" value='mentor' >Would you like to mentor?</Checkbox>
                
                </FormGroup>

                <Button onClick={this.handleSubmit} type="submit">Submit</Button>
            </form>
        );
    }

}
