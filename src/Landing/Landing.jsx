import React from 'react';
import Footer from '../Shared/footer/Footer';
import Home from './Home/Home';
import "./Landing.css";

function Landing() {
    return (
    <React.Fragment>
        <div className="LandingContainer">
        <Home/>
        </div>
        <Footer/>

    </React.Fragment>
      

    );
  }
  
  export default Landing;