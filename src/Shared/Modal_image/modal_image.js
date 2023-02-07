import './modal_image.css';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import image from '../../Sources/Images/Estadisticas/imagen_4.png';
import image2 from '../../Sources/Images/Estadisticas/imagen_2_carusell.png';
import image3 from '../../Sources/Images/Estadisticas/imagen_3.png';


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
            <Modal.Title id="contained-modal-title-vcenter bold-size">
                <span className="bold-size ml-30px">Posición óptima modelo</span>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal_content_2'>
            <Carousel className='align-center'>
            <Carousel.Item>
                <img
                className="imageClass"
                src={image}
                alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="imageClass"
                src={image2}
                alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="imageClass"
                src={image3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>

          

             
            </Modal.Body>
      </Modal>
    </div>
    
  )
}

