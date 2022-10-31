import React from 'react';
import "./Register.css";
// import Button from 'react-bootstrap/Button';

import logo from '../../Sources/Images/Register/RegisterBackground.png'; 
import RegisterInfo from './RegisterInfo/RegisterInfo';

function Register() {
    return (
      <div className="RegisterContainer">
         <img className="RegisterContainerImage"  src={logo} alt="Logo">
         </img>
         <RegisterInfo/>
      </div>
    );
  }

export default Register;