import React from 'react';
import "./Footer.css";

/* ESTILOS ICONOS*/
import * as Icon from 'react-bootstrap-icons';




function Footer() {
    return (
    <footer className="FooterContainer">

        <div id="footer-column" className="footer-grid-container">
            <div className="footer-grid">
                <h1 className="footer-grid-element text primary" >Orcas</h1>
            </div>
            <div className="footer-grid">
                <h2 className="footer-grid-element text secundary">Weebly Themes</h2>
                <h2 className="footer-grid-element text secundary">Pre-Sale FAQS</h2>
                <h2 className="footer-grid-element text secundary">Submit A Ticket</h2>
            </div>
            <div className="footer-grid">
                <h2  className="footer-grid-element text secundary">Services</h2>
                <h2  className="footer-grid-element text secundary">Theme Tweak</h2>
                <h2  className="footer-grid-element text secundary">Resources</h2>
    
            </div>
            <div className="footer-grid">
                <h2  className="footer-grid-element text secundary">ShowCase</h2>
                <h2  className="footer-grid-element text secundary">WidgetKit</h2>
                <h2  className="footer-grid-element text secundary">Support</h2>
    
            </div>
            <div className="footer-grid">
                <h2  className="footer-grid-element text secundary">About Us</h2>
                <h2  className="footer-grid-element text secundary">Contact Us</h2>
                <h2  className="footer-grid-element text secundary">Affiliates</h2>
    
            </div>
        </div>
        <div id="footer-column" className="Footer-logos column">
    
    
            <div  id="IconsContainer" >
                 {/* {{<!-- Facebook -->}} */} 
                <a className="btn btn-primary btn-floating m-1" id="IF"  href="#!" role="button"><Icon.Facebook/></a>
    
                {/* {{<!-- twitter -->}} */}
                <a className="btn btn-primary btn-floating m-1"  id="IT"  href="#!" role="button"><Icon.Twitter/></a>
    
                {/* {{<!-- Google -->}} */}
                <a className="btn btn-primary btn-floating m-1" id="IG"  href="#!" role="button"><Icon.Google/></a>
    
                {/* {{<!-- Instagram -->}} */}
                <a className="btn btn-primary btn-floating m-1" id="II"  href="#!" role="button"><Icon.Instagram/></a>
    
                {/* {{<!-- Linked -->}} */}
                <a className="btn btn-primary btn-floating m-1" id="IL"  href="#!" role="button"><Icon.Linkedin/></a>
                {/* {{<!-- Github -->}} */}
                <a className="btn btn-primary btn-floating m-1" id="IGIT"  href="#!" role="button"><Icon.Github/></a>
    
    
            </div>

    
    
        </div>
    
    
    </footer>
    );
  }
  
export default Footer;