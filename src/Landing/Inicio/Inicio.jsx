import React from 'react';
import './Inicio.css';
import {useNavigate} from 'react-router-dom';
/* ICONS */

/* REACT BOOSTRAP */
import Button from 'react-bootstrap/Button';

/* IMAGE */
import Backgroundcolumn from '../../Sources/Images/Landing/Landing1.png';
import BackgroundImage from '../../Sources/Images/Landing/fondo.png';
import HorseAppBackGround from '../../Sources/Images/Landing/HorseAppBack.png';
import Logo from '../../Sources/Images/Landing/Logo.png';

export default function Inicio() {
  /* NAVIGATE  */
  const navigate=useNavigate();
  /* FUNCTIONS */
  const RedirectLogin=(event)=>{
    navigate('/Landing/Login')
  }

  

  
  return (
    <React.Fragment>
     
      
      <div className='InitContainer' style={{ backgroundImage: `url(${BackgroundImage})` ,backgroundSize:'cover'}}>
        <div className='HeaderContainer'>
              {/* <div class="input-container">
                  <Icon.Search className='IconInput'/>
                  <input type="text"
                        class="InputText" 
                        placeholder="Buscar Aplicaciones" />
              </div> */}
              {/* <button className="FilterButton"><Icon.FilterCircle className="FilterIcon"/></button> */}
        </div>
        <div className='ServicesContainer'>
            <div className='ContainerRows'>
              <div className="row">
                <div  className="col HorseApp" xs style={{ backgroundImage: `url(${HorseAppBackGround})` ,backgroundSize:'cover' }}>
                     <img  className='Logo' src={Logo} alt=""></img>
                     <Button variant="outline" onClick={RedirectLogin} className="button_18">Ingresar</Button>
                </div>
                <div className="col position-relative bold-size text-center">
                    <img className='overlayCard position-absolute top-50 start-50 translate-middle' src={Backgroundcolumn} alt=""></img>
                    {/* <p className="m-0 p-0 position-absolute top-50 start-50 translate-middle">Desarrollos futuros</p> */}
                </div>
                <div className="col bold-size text-center">
                    <img className='overlayCard position-absolute top-50 start-50 translate-middle' src={Backgroundcolumn} alt=""></img>
                    {/* <p className="m-0 p-0 position-absolute top-50 start-50 translate-middle">Desarrollos futuros</p> */}
                </div>
              </div>
              <div className="row">
                <div className="col bold-size text-center">
                    <img className='overlayCard position-absolute top-50 start-50 translate-middle' src={Backgroundcolumn} alt=""></img>
                    {/* <p className="m-0 p-0 position-absolute top-50 start-50 translate-middle">Desarrollos futuros</p> */}
                </div>
                <div className="col bold-size text-center">
                    <img className='overlayCard position-absolute top-50 start-50 translate-middle' src={Backgroundcolumn} alt=""></img>
                    {/* <p className="m-0 p-0 position-absolute top-50 start-50 translate-middle">Desarrollos futuros</p> */}
                </div>
                <div className="col bold-size text-center">
                    <img className='overlayCard position-absolute top-50 start-50 translate-middle' src={Backgroundcolumn} alt=""></img>
                    {/* <p className="m-0 p-0 position-absolute top-50 start-50 translate-middle">Desarrollos futuros</p> */}
                </div>
              </div>
           </div>
        </div>
      </div>
    </React.Fragment>
  )
}
