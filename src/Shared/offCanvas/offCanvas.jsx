import React from "react";
import { NavLink } from "react-router-dom";
import './offCanvas.css';
import Logo from '../../Sources/Images/Landing/Logo.png'
/* ICONS */
import { GiHorseshoe,GiHorseHead } from 'react-icons/gi';
import {MdVideoSettings} from 'react-icons/md';
import { FaHorseHead } from 'react-icons/fa';
import {GoGraph} from 'react-icons/go';
import {BsFolderCheck} from 'react-icons/bs';
function OffCanvas() {
    let activeStyle = {
        textDecoration: "underline",
      };
    
    let activeClassName = "underline";
  return (
    <>

        <nav className='offCanvasContainer'>
            <img  className='LogoOffcanvas' src={Logo} alt=""></img>
            <ul className="ulOffcanvas">
                <li className="sectionOffcanvas">
                <NavLink
                    to="/Main/HorseApp/Analisis"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    <MdVideoSettings className="iconOffCanvas"/><span className="textOffcanvas">Analizar</span>
                </NavLink>
                </li>
                <li className="sectionOffcanvas">
                <NavLink
                    to="/Main/HorseApp/Estadisticas"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    <GoGraph className="iconOffCanvas"/><span className="textOffcanvas">Estadisticas</span>
                </NavLink>
                </li>
                <li className="sectionOffcanvas">
                <NavLink
                    to="/Main/HorseApp/Competiciones"
                   
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    
                >
                    <GiHorseshoe className="iconOffCanvas"/><span className="textOffcanvas">Competencias y caballos</span>
                </NavLink>
                </li>
            </ul>
        </nav>
    
    </>
    
  );
}

export default OffCanvas

