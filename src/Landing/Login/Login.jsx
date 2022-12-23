import React from 'react';
import "./Login.css";
import LoginInfo from './LoginInfo/Logininfo';
import logo from '../../Sources/Images/Landing/LoginBackground.png'; 
import {AiFillEdit,AiOutlineLeft} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';





function Login() {
    const navigate=useNavigate();

    return (
         <div  className="LoginContainer" style={{backgroundImage: `url(${logo})`,backgroundSize:'cover'}}>
            <div className='BackContainer positionAbsolute' onClick={()=>navigate('/Landing/Inicio')} >
              <AiOutlineLeft className='orange'/>
            </div>

            <LoginInfo/>
         </div>
    );
  }

export default Login;
