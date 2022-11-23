import React from 'react'
import {Navigate,Routes, Route} from 'react-router-dom';
import Inicio from '../Landing/Inicio/Inicio';
import HorseApp from './HorseApp/HorseApp';
import Profile from './Profile/Profile';

export default function Main() {
  return (
    <React.Fragment>
        <Routes>
          <Route path='' element={<Navigate to="Inicio"/>}></Route>
          <Route path='Inicio' element={<Inicio/>}></Route>
          <Route path='Profile' element={<Profile/>}></Route>
          <Route path='HorseApp/*' element={<HorseApp/>}></Route>
          <Route path='*' element={<Navigate to="Inicio"/>}></Route>
        </Routes>
    </React.Fragment>
  )
}
