// imports React and its components and the logo image (logo.png)
import React from 'react';
import logo  from "../../images/Logo.jpg";
import logo2 from "../../images/Logo2.png";
import './Logo.css';

// creates a Logo class which extends the React component
const Logo = () => {
    return (
      <div id="logo" className="Logo">
        <img src={logo}  className="App-logo"  alt="logo" />
        <img src={logo2} className="App-logo2" alt="logo" />
      </div>
    );
  }

export default Logo;
