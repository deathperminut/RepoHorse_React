import React from 'react';
import {Navigate,Routes, Route} from 'react-router-dom';
import './Estadisticas.css';

export default function Estadisticas() {
  return (
    <div className='AnalisisContainer'>
          <div className='EstadisticContainer'>
              <div className='CompetidoresContainer'></div>
              <div className='EventContainer'></div>
              <div className='TableContainer'></div>
          </div>
          <div className='SelectEventContainer'>
                 
          </div>
    </div>
  )
}
