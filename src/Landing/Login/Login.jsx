import React from 'react';
import "./Login.css";
import LoginInfo from './LoginInfo/Logininfo';
import logo from '../../Sources/Images/Register/RegisterBackground.png'; 



function Login() {
    return (
      <React.Fragment>
         <img  className="LoginContainer"   src={logo} alt="Logo">
         </img>
         <LoginInfo/>
      </React.Fragment>
    );
  }

export default Login;
