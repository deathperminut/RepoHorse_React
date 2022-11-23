import React from 'react';
import './Inicio.css';
import Footer from '../../Shared/footer/Footer';
import HorseServices from '../../h.jpg';
import Header from '../../Shared/Header/Header';
import {useNavigate} from 'react-router-dom';
/* ICONS */
import * as Icon from 'react-bootstrap-icons';
import { GiHorseHead } from 'react-icons/gi';
import {FaHorseHead} from 'react-icons/fa';
/* REACT BOOSTRAP */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Inicio() {
  /* NAVIGATE  */
  const navigate=useNavigate();
  /* FUNCTIONS */
  const RedirectLogin=(event)=>{
    navigate('/Landing/Login')
  }

  

  
  return (
    <React.Fragment>
      <div className='InitContainer'>
        <div className='HeaderContainer'>
              <div class="left-inner-addon input-container">
                  <Icon.Search className='IconInput'/>
                  <input type="text"
                        class="InputText" 
                        placeholder="Buscar Aplicaciones" />
              </div>
              <button className="FilterButton"><Icon.FilterCircle className="FilterIcon"/></button>
        </div>
        <div className='ServicesContainer'>
            <Container className='ContainerRows'>
              <Row className="row">
                <Col  className="col HorseApp" xs>
                     <FaHorseHead className='col-Icon'/>
                     <h4 className="HorseAppTitle col-element">Mr horse</h4>
                     <Button variant="outline" onClick={RedirectLogin} className="button_18">Ingresar</Button>
                </Col>
                <Col className="col" xs={{ order: 12 }}>Desarrollos futuros</Col>
                <Col className="col" xs={{ order: 1 }}>Desarrollos futuros</Col>
              </Row>
              <Row className="row">
                <Col className="col" xs>Desarrollos futuros</Col>
                <Col className="col" xs={{ order: 12 }}>Desarrollos futuros</Col>
                <Col className="col" xs={{ order: 1 }}>Desarrollos futuros</Col>
              </Row>
           </Container>
        </div>
      </div>
    </React.Fragment>
  )
}
