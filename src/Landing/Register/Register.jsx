import React from 'react';
import "./Register.css";
// import Button from 'react-bootstrap/Button';

import logo from '../../Sources/Images/Landing/LoginBackground.png'; 
import RegisterInfo from './RegisterInfo/RegisterInfo';

function Register() {
    return (
      <div className="LoginContainer" style={{backgroundImage: `url(${logo})`,backgroundSize:'cover'}}>
         <RegisterInfo/>
      </div>
    );
  }

export default Register;