import React from 'react';
import "./Login.css";
import LoginInfo from './LoginInfo/Logininfo';
import logo from '../../Sources/Images/Register/RegisterBackground.png'; 



function Login() {
    return (
         <div  className="LoginContainer" style={{backgroundImage: `url(${logo})`}}>
            <LoginInfo/>
         </div>
    );
  }

export default Login;
