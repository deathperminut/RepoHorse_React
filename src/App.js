// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Landing from './Landing/Landing';
import {Navigate,Routes, Route} from 'react-router-dom';
import Login from './Landing/Login/Login';
import Register from './Landing/Register/Register';
import ForgetPassword from './Landing/ForgetPassword/ForgetPassword';
import Main from './Main/Main';
import ChangePassword from './Landing/ChangePassword/ChangePassword';

function App() {
  return (
     <React.Fragment>
        <Routes>
          <Route path='' element={<Navigate to="/Landing"/>}></Route>
          <Route path='/Landing/*' element={<Landing/>}/>
          <Route path='/Main/*' element={<Main/>}/>
        </Routes>
     </React.Fragment>
     
  );
}

export default App;

export async function getServerSideProps(context) {
  // set HTTP header

  context.res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  context.res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  return {
    props: {}
  };
}