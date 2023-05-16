import './modal_image.css';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import image from '../../Sources/Images/Estadisticas/Imagen_modal_1.png';
import image2 from '../../Sources/Images/Estadisticas/Imagen_modal_3.png';


import React from 'react'

export default function Modal_image(props) {
  return (
    <div className='modal_image'>
    <Modal
            {...props}
            size="lg"
            id="modal_center"
            centered
            

        >
            <Modal.Header closeButton className='modal_header'>
            </Modal.Header>
            <Modal.Body className='modal_content_2'>
            <Carousel className='align-center'>
            <Carousel.Item>
                <p className='textImage_1'>Asegúrate que tu caballo esté en la posición correcta y sin obstrucciones</p>
                <img
                className="imageClass"
                src={image}
                alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <p className='textImage_2'>Trata de escoger un trozo de video donde la posición correcta se mantenga entre unos 5 y 7 segundos. Usa las herramientas de cortado</p>
                <img
                className="imageClass_2"
                src={image2}
                alt="Second slide"
                />

            </Carousel.Item>
            </Carousel>

          

             
            </Modal.Body>
      </Modal>
    </div>
    
  )
}

