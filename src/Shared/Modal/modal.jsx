import React from "react";
import Modal from 'react-bootstrap/Modal';
import './modal.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons';
// import Logo from '../../../Sources/Images/Estadisticas/logo_equipon.jpg';
import { AppContext } from "../../Context";
import { useNavigate } from "react-router-dom";

export default function MyVerticallyCenteredModal(props) {
    
    /* APP CONTEXT */
    let {events}=React.useContext(AppContext);


    /* USE STATE */
    let [filter,setFilter]=React.useState(events);

    

    /*SELECT EVENT*/
    const EmitEvent=(id)=>{
        props.selectEvent(id);
        props.onHide();

       
    }

    /* NAVIGATE  */
    const navigate=useNavigate();
    /* FUNCTIONS */
    const RedirectCreateEvent=(event)=>{
      navigate('/Main/HorseApp/Competiciones')
    }

    const find=(event)=>{
      if(event.target.value===""){
        setFilter(events);
      }else{
        const Array=events.filter((obj)=> obj.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setFilter(Array);
      }
    }


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered

      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter bold-size">
            <span className="bold-size ml-30px">Selecciona el evento</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          

             {events.length===0 ?
             
             <div className="center-white-boldsize">
                 <button className='buttonEvent pl-5 btnHoverWhite buttoncustom' onClick={RedirectCreateEvent}><span className="c-orange middle-size">Nuevo Evento</span></button>
             </div>
             :
             <div className='EventsContainer ml-30px ml-0 font-familly'>
             <InputGroup onChange={find} className='inputComp'>
                        <InputGroup.Text id="basic-addon1"><Icon.Search/></InputGroup.Text>
                        <Form.Control
                            placeholder="Buscar competición"
                            aria-label="Buscar competición"
                            aria-describedby="basic-addon1"
                        />
                </InputGroup>
             </div>
             }
                

          <div className="EventSelectContainer_2 font-familly">
              
                {filter.map(event=>{
                    return(
                        <div key={event.id} className='label-event-Estadistics-Container mr-3 ' onClick={()=>EmitEvent(event.id)}>
                                <figure className='img-container'>
                                <img src={event.img} className='img-event'></img>
                                </figure>
                                <div className='p-column'>
                                <span className='t-white t-b bold-size'>{event.name}</span>
                                <span className='t-white t-xs middle-size orange'>{event.place}</span>
                                <span className='t-white t-xs middle-size'>{event.date_start}</span>
                                </div>
                        </div>
                    );
                    
                })}
                
          </div>
        </Modal.Body>
      </Modal>
    );
  }