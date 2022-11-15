import React from 'react'
import {Navigate,Routes, Route} from 'react-router-dom';
import Analisis from './Analisis/Analisis';


export default function HorseApp() {
  return (
    <React.Fragment>
        <Routes>
          <Route path='' element={<Navigate to="Analisis"/>}></Route>
          <Route path='Analisis' element={<Analisis/>}></Route>
          <Route path='Estadisticas' element={<Analisis/>}></Route>
          <Route path='Competiciones' element={<Analisis/>}></Route>
          <Route path='Visualización' element={<Analisis/>}></Route>
          <Route path='*' element={<Navigate to="Analisis"/>}></Route>
        </Routes>
    </React.Fragment>
  )
}
