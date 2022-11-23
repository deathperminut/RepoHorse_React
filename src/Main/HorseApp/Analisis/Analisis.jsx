import React from 'react'
import {Navigate,Routes, Route} from 'react-router-dom';
import './Analisis.css';
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
             </div>
          </div>
          <div className='SelectContainer'>
            <div className='Select'>
                <Select options = {options}  className="selectAnalisis"/>
                <button className="FilterButton analisisfilterbutton"><BsFilter className="filterIcon"></BsFilter></button>
            </div>
            <div className='buttonEventContainer'>
              <button className='buttonEvent'><span className="tw-500 font-size-15pt  c-orange mr-3px">+</span><span className="c-orange font-size-10pt">Nuevo Evento</span></button>
            </div>
          </div>
        </div>
    </>
    
  )
}
