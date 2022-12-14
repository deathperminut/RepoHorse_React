import React from 'react';
import "./Login.css";
import LoginInfo from './LoginInfo/Logininfo';
import logo from '../../Sources/Images/Landing/LoginBackground.png'; 



function Login() {
    return (
         <div  className="LoginContainer" style={{backgroundImage: `url(${logo})`,backgroundSize:'cover'}}>
            <LoginInfo/>
         </div>
    );
  }

export default Login;
