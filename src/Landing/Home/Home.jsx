import React from 'react';
import "./Home.css";
import Button from 'react-bootstrap/Button';
import YourSvg from '../../Sources/Images/HomeLanding/HomeImage.svg';
import {Link} from  'react-router-dom';


function Home() {
    return (
      <div className="HomeContainer">
        <div className="HomeContainer-div imag">
           <img className="HomeContainer-div-imag" src={YourSvg} alt=""/>
        </div>
        <div className="HomeContainer-div">

                <Link id="LinkLogin" to='/Login'><Button className="HomeContainer-div-button"  size="sm">Iniciar Sesión</Button></Link>

                
                <Link id="LinkRegister" to='/Register'><Button className="HomeContainer-div-button"  size="sm">Registrarse</Button></Link>
                
        </div>

      </div>
    );
  }
  
  export default Home;