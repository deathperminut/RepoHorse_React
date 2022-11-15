import React from 'react';
import "./Header.css";
import Dropdown from 'react-bootstrap/Dropdown';
/* ELEMENTOS PARA OFFCANVAS */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
/* ESTILOS ICONOS*/
import * as Icon from 'react-bootstrap-icons';
/* LIST GROUP */
import ListGroup from 'react-bootstrap/ListGroup';





export default function Header() {
  /* VARIABLES OFFCANVAS */
  const [show, setShow] = useState(false);

  /* FUNCIONES OFFCANVAS */
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <nav className="Navbar" id="Header">
        <Button className="ButtonOffCanvas" variant="primary" onClick={handleShow}><Icon.MenuApp/></Button>
        <div className='EspaceMenu'></div>
        <Dropdown id="menuUser">
            <Dropdown.Toggle   id="dropdown-basic">
                        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="rounded-circle"/>
            </Dropdown.Toggle>

            <Dropdown.Menu id="Menu">
                <Dropdown.Item href="#/Main/Profile">Perfil</Dropdown.Item>
                <Dropdown.Item href="#/Landing">Cerrar Sesión</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </nav>
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Orcas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup className="ListOffcanvas">

            <ListGroup.Item  action variant="secondary">
                Analisis
            </ListGroup.Item>
            <ListGroup.Item action variant="secondary">
                Estadisticas
            </ListGroup.Item>
            <ListGroup.Item action variant="secondary">
                Competiciones
            </ListGroup.Item>
            <ListGroup.Item action variant="secondary">
                Visualización
            </ListGroup.Item>
            
            </ListGroup>
          
        </Offcanvas.Body>
    </Offcanvas>

    </>
    
  )
}
