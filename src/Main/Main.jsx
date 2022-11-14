import React from 'react'
import {Navigate,Routes, Route} from 'react-router-dom';
import Inicio from './Inicio/Inicio';

export default function Main() {
  return (
    <React.Fragment>

        <Routes>
          <Route path='' element={<Navigate to="Inicio"/>}></Route>
          <Route path='Inicio' element={<Inicio/>}></Route>
          <Route path='*' element={<Navigate to="Inicio"/>}></Route>
        </Routes>
       
       
     </React.Fragment>
  )
}
