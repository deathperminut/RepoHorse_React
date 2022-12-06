import React from 'react'
import {Navigate,Routes, Route} from 'react-router-dom';
import './Analisis.css';
import Logo from '../../../Sources/Images/Estadisticas/logo_equipon.jpg';
/* COMPONENTS */
import Footer from '../../../Shared/footer/Footer';
import Header from '../../../Shared/Header/Header';
import * as Icon from 'react-bootstrap-icons';
import {ImFilm} from 'react-icons/im'
import {MdOutlineDriveFolderUpload} from 'react-icons/md';
import {BsFilter} from 'react-icons/bs';

/* SELECT */
import Select from 'react-select';



export default function Analisis() {
  
  /* REACT UseStates */
  let [SelectEvent,setSelectEvent]=React.useState(false);
  


  /* CHANGE USESTATES */

  const ChangeSelectEvent=(event,select=false)=>{
    // console.log(event.value);}
    let Value=null;
     if(select){
      Value=event.value;
     }
     setSelectEvent(!SelectEvent);
  }
  
  /*OPTIONS SELECT */
  const options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra' ,label: 'Orchestra' } 
  ];
  return (
    <>
        <div className='AnalisisContainer'>
          <div className='DataContainer'>
             <div className='videoContainer'>
                <div className='dragContainer'>
                   <ImFilm className='iconFilm'></ImFilm>
                   <span className='textdragContainer'>Arraste o ponga el video aquí</span>
                   <span className='textdragContainer'>o</span>
                   <button className='buttonAnalisis'><MdOutlineDriveFolderUpload className='iconVideo'/><span className='textButtonVideo'>Subir archivos</span></button>
                </div>
             </div>
             <div className='optionsContainer'>
              <div className='option'></div>
              <div className='option'></div>
              <div className='option'></div>
              <div className='option'></div>
             </div>
          </div>
          <div className='SelectContainer'>

            {SelectEvent===false ? 
              <>
              <div className='Select'>
                <Select
                onChange={(event)=>ChangeSelectEvent(event,true)}
                options = {options}  
                className="selectAnalisis" 
                placeholder="Seleccione un evento"
                
                />
                <button className="FilterButton analisisfilterbutton"><BsFilter className="filterIcon"></BsFilter></button>
              </div>
              <div className='buttonEventContainer'>
                <button className='buttonEvent'><span className="tw-500 font-size-15pt  c-orange mr-3px">+</span><span className="c-orange font-size-10pt">Nuevo Evento</span></button>
              </div>
              </>
            :<>
            <div className='label-event-Analitic-Container'>
                <figure className='img-container'>
                  <img src={Logo} className='img-event'></img>
                </figure>
                <div className='p-column'>
                  <span className='t-white t-b'>65° Feria Equina</span>
                  <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                  <span className='t-white t-xs'>Grado: A</span>
                </div>
            </div>
             </>
            }
            
          </div>
        </div>
    </>
    
  )
}
