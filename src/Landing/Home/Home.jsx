import React from 'react';
import "./Home.css";
import Button from 'react-bootstrap/Button';
import YourSvg from '../../Sources/Images/HomeLanding/HomeImage.svg';

function Home() {
    return (
      <div className="HomeContainer">
        <div className="HomeContainer-div imag">
           <img className="HomeContainer-div-imag" src={YourSvg} alt=""/>
        </div>
        <div className="HomeContainer-div">
                <Button className="HomeContainer-div-button"  size="sm">
                Iniciar Sesión
                </Button>
                <Button className="HomeContainer-div-button"  size="sm" >
                Registrarse
                </Button>
        </div>

      </div>
    );
  }
  
  export default Home;