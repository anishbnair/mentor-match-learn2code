// imports React and its components and the logo image (logo.png)
// import React, {Component} from 'react';
import React from 'react';
import logo from "../../images/Logo.jpg";
import './Logo.css';

// creates a Logo class which extends the React component
const Logo = () => {
  return (
    <div id="logo" className="Logo">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Logo;
