import React from 'react';
import "./Landing.css";
import {useNavigate} from 'react-router-dom';
import {Navigate,Routes, Route} from 'react-router-dom';
/* IMPORTAMOS COMPONENTES */
import Inicio from './Inicio/Inicio';
import Login from './Login/Login';
import Register from './Register/Register';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import ChangePassword from './ChangePassword/ChangePassword';

function Landing() {
    /* NAVIGATE  */
    const navigate=useNavigate();
    /* FUNCTIONS */
    const RedirectHorseApp=(event)=>{
        navigate('/Main/HorseApp')
    }
    return (
    <React.Fragment>
      <Routes>
          <Route path='' element={<Navigate to="Inicio"/>}></Route>
          <Route path='Inicio' element={<Inicio/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='Register' element={<Register/>}/>
          <Route path='ForgetPassword' element={<ForgetPassword/>}/>
          <Route path='ChangePassword' element={<ChangePassword/>}/>
      </Routes>
    </React.Fragment>
      

    );
  }
  
export default Landing;