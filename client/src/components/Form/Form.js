import React from "react";
import { FormControl, HelpBlock, Button, FormGroup, ControlLabel, Checkbox, Radio } from 'react-bootstrap';
import axios from "axios";
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
    username:'',
    email:'',
    html:'',
    css:'',
    javascript:'',
    jquery:'',
    git:'',
    mongodb:'',
    express:'',
    nodejs:'',
    react:'',


  };
   this.handleSubmit = this.handleSubmit.bind(this);
}


handleInputChange = event =>{
  const{name,value}= event.target;
  this.setState({
    // checked:true,
      [name]: value
    });
}


handleSubmit(event,err){
  event.preventDefault();
  const target = event.target;
  const value = target.value;// === 'checkbox' ? target.checked : target.value;
  
  //const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
// // for(var i=0;i<this.state.value;i++){
// //
// //  if(this.state.checked === true){
// //    console.log(this.state.checked[i]);
// //  }
//  }

const userpathinfo=
{ 
  username:this.state.username,
  email:this.state.email,
  html:this.state.html,
  css:this.state.css,
  javascript:this.state.javascript,
  jquery:this.state.jquery,
  git:this.state.git,
  mongodb:this.state.mongodb,
  express:this.state.express,
  nodejs:this.state.nodejs,
  react:this.state.react,
}

axios.post('api/dashboard', userpathinfo)
  .then(function (response) {
    console.log("bring it around town" + response);
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log(userpathinfo);
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
                    <Checkbox type="checkbox" onChange={this.handleInputChange}  name="CSS" value='css' >CSS</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="Javascript" value='javascript' >JavaScript</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="jQuery" value='jquery'>jQuery</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="Git" value='Git'>Git</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="MongoDB" value='mongodb' >MongoDB</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="Express.js" value='express' >Express.js</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="Node.js" value='nodejs' >Node.js</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="React" value='react' >React.js</Checkbox>
                </FormGroup>

                <Button onClick={this.handleSubmit} type="submit">Submit</Button>
            </form>
        );
    }

}
