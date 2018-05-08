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
    email: '',

  };
   this.handleSubmit = this.handleSubmit.bind(this);
}


handleInputChange = event =>{
  const{name,value}= event.target;
  this.setState({
     checked:true,
      [name]: value
    });
}


handleSubmit(event,err){
  event.preventDefault();
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
// // for(var i=0;i<this.state.value;i++){
// //
// //  if(this.state.checked === true){
// //    console.log(this.state.checked[i]);
// //  }
//  }

const userpathinfo=
{username:this.state.username,
  email:this.state.username
}

axios.post('api/dashboard', userpathinfo)
  .then(function (response) {
    console.log(response);
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
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="HTML" value='HTML'>HTML</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange}  name="CSS" value='CSS' >CSS</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="Javascript" value='JavaScript' >JavaScript</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="jQuery" value='jQuery'>jQuery</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="Git" value='Git'>Git</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="MongoDB" value='MongoDB' >MongoDB</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="Express.js" value='Express.js' >Express.js</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="Node.js" value='Node.js' >Node.js</Checkbox>
                    <Checkbox type="checkbox" onChange={this.handleInputChange} name="React" value='React' >React.js</Checkbox>
                </FormGroup>

                <Button onClick={this.handleSubmit} type="submit">Submit</Button>
            </form>
        );
    }

}