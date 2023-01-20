import React from "react";
import { NavLink } from "react-router-dom";
import './offCanvas.css';
import Logo from '../../Sources/Images/Landing/Logo.png'
/* ICONS */
import { GiHorseshoe,GiHorseHead } from 'react-icons/gi';
import {MdVideoSettings} from 'react-icons/md';
import { FaHorseHead } from 'react-icons/fa';
import {IoMdExit} from 'react-icons/io';
import {GoGraph} from 'react-icons/go';
import {BsFolderCheck} from 'react-icons/bs';
import {ImExit} from 'react-icons/im';
import Logo_only from '../../Sources/Images/Landing/logo_only.png';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";





function OffCanvas() {
    
    const navigate=useNavigate();
    const Exit=()=>{
        Swal.fire({
            title: '¿Seguro que desea cerrar sesión?',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: 'No',
          }).then(async (result) => {
            if (result.isConfirmed) {
               /* NAVIGATE  */
               
               navigate('/Landing/Inicio');
            }
         })
    
    }
    


    let activeStyle = {
        textDecoration: "underline",
      };
    
    let activeClassName = "underline";
  return (
    <>

        <nav className='offCanvasContainer'>
            <img  className='LogoOffcanvas_only' src={Logo_only} alt="hola"></img>
            <img  className='LogoOffcanvas' src={Logo} alt=""></img>
            <ul className="ulOffcanvas">
                <li className="sectionOffcanvas ">
                <NavLink
                    to="/Main/HorseApp/Analisis"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    <MdVideoSettings className="iconOffCanvas"/><span className="textOffcanvas middle-size">Analizar</span>
                </NavLink>
                </li>
                <li className="sectionOffcanvas ">
                <NavLink
                    to="/Main/HorseApp/Competiciones"
                   
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    
                >
                    <GiHorseshoe className="iconOffCanvas"/><span className="textOffcanvas middle-size">Competencias y caballos</span>
                </NavLink>
                </li>
                <li className="sectionOffcanvas ">
                <NavLink
                    to="/Main/HorseApp/Estadisticas"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    <GoGraph className="iconOffCanvas"/><span className="textOffcanvas middle-size">Estadisticas</span>
                </NavLink>
                </li>
                <li className="sectionOffcanvas ">
                <NavLink
                className={({ isActive }) => (isActive ? 'inactive mt-c' : 'inactive mt-c')} onClick={Exit} >
                    <IoMdExit className="iconOffCanvas gray hover-white"/><span className="textOffcanvas middle-size gray">Cerrar sesión</span>
                </NavLink>
                </li>
                
            </ul>
        </nav>
    
    </>
    
  );
}

export default OffCanvas

