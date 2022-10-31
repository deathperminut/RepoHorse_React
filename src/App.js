// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Landing from './Landing/Landing';
import {Routes, Route} from 'react-router-dom';
import Login from './Landing/Login/Login';
import Register from './Landing/Register/Register';

function App() {
  return (
     <React.Fragment>
       <Routes>
         <Route path='/' element={<Landing/>}/>
         <Route path='/Login' element={<Login/>}/>
         <Route path='/Register' element={<Register/>}/>
       </Routes>
     </React.Fragment>
     
  );
}

export default App;
