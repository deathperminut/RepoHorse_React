import React from 'react'
import {Navigate,Routes, Route} from 'react-router-dom';
import Analisis from './Analisis/Analisis';
import Estadisticas from './Estadisticas/Estadisticas';
import Competiciones from './Competiciones/Competiciones';
import Visualizacion from './Visualizacion/Visualizacion';
import OffCanvas from '../../Shared/offCanvas/offCanvas';
import "./HorseApp.css"

export default function HorseApp() {
  return (
        <div className='HorseAppContainer'>
            <OffCanvas></OffCanvas>
            <Routes>
              <Route path='' element={<Navigate to="Analisis"/>}></Route>
              <Route path='Analisis' element={<Analisis/>}></Route>
              <Route path='Estadisticas' element={<Estadisticas/>}></Route>
              <Route path='Competiciones' element={<Competiciones/>}></Route>
              <Route path='Visualización' element={<Visualizacion/>}></Route>
              <Route path='*' element={<Navigate to="Analisis"/>}></Route>
            </Routes>
        </div>
  )
}
