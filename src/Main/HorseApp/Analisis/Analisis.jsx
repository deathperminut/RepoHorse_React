import React from 'react'
import {Navigate,Routes, Route} from 'react-router-dom';
import './Analisis.css';
/* COMPONENTS */
import Footer from '../../../Shared/footer/Footer';
import Header from '../../../Shared/Header/Header';


export default function Analisis() {
  return (
    <>
        <Header></Header>
        <div className='BodyContainer'>Analisis</div>
        <Footer></Footer>
    </>
    
  )
}
