import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './modal.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons';
// import Logo from '../../../Sources/Images/Estadisticas/logo_equipon.jpg';
import Logo from '../../Sources/Images/Estadisticas/logo_equipon.jpg'

export default function MyVerticallyCenteredModal(props) {
    /*ARREGLO DE EVENTOS*/
    let Events_Array=[
        {
            name:"65° Feria Equina",
            Place:"Manizales-6 de enero de 2022",
            Grade:"A",
            img:"URL",
            TotalCp:568,
            ListCp:[],
            id:5
          },
          {
            name:"65° Feria Equina",
            Place:"Manizales-6 de enero de 2022",
            Grade:"A",
            img:"URL",
            TotalCp:568,
            ListCp:[],
            id:4
          },
          {
            name:"65° Feria Equina",
            Place:"Manizales-6 de enero de 2022",
            Grade:"A",
            img:"URL",
            TotalCp:568,
            ListCp:[],
            id:3
          },
          {
            name:"65° Feria Equina",
            Place:"Manizales-6 de enero de 2022",
            Grade:"A",
            img:"URL",
            TotalCp:568,
            ListCp:[],
            id:2
          },
          {
            name:"65° Feria Equina",
            Place:"Manizales-6 de enero de 2022",
            Grade:"A",
            img:"URL",
            TotalCp:568,
            ListCp:[],
            id:1
          }
    ];

    /*SELECT EVENT*/
    const EmitEvent=()=>{
        props.selectEvent();
        props.onHide();

       
    }


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered

      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter font-familly">
            Selecciona el evento
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='EventsContainer ml-0 font-familly'>
                <InputGroup className='inputComp'>
                        <InputGroup.Text id="basic-addon1"><Icon.Search/></InputGroup.Text>
                        <Form.Control
                            placeholder="Buscar competición"
                            aria-label="Buscar competición"
                            aria-describedby="basic-addon1"
                        />
                </InputGroup>
          </div>
          <div className="EventSelectContainer_2 font-familly">
                {Events_Array.map(event=>{
                    return(
                        <div key={event.id} className='label-event-Estadistics-Container mr-3 ' onClick={EmitEvent}>
                                <figure className='img-container'>
                                <img src={Logo} className='img-event'></img>
                                </figure>
                                <div className='p-column'>
                                <span className='t-white t-b'>{event.name}</span>
                                <span className='t-white t-xs'>{event.Place}</span>
                                <span className='t-white t-xs'>{"Grado: "+event.Grade}</span>
                                </div>
                        </div>
                    );
                    
                })}
                
          </div>
        </Modal.Body>
      </Modal>
    );
  }