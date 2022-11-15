import React from 'react';
import './Inicio.css';
import Footer from '../../Shared/footer/Footer';
import HorseServices from '../../h.jpg';
import Header from '../../Shared/Header/Header';
import {useNavigate} from 'react-router-dom';

export default function Inicio() {
  /* NAVIGATE  */
  const navigate=useNavigate();
  /* FUNCTIONS */
  const RedirectHorseApp=(event)=>{
    navigate('/Main/HorseApp')
  }

  


  return (
    <>
      <Header></Header>
      <div className='InitContainer'>
        <div className='LabelContainer'>
           <h1 className='Title'>Apps</h1>
           <h2 className='subtitle'>Sistema de servicios.</h2>
        </div>
        <div className='ServicesContainer'>
           
           <div onClick={RedirectHorseApp} className='ServiceContainer'>
             <img className='ServiceImage' src={HorseServices}></img>
             <div className="TextService">Horses</div>
           </div>
           
        </div>
      </div>

      <Footer/>
    </>
  )
}
