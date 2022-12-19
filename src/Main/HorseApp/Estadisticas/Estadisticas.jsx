import React from 'react';
import {Navigate,Routes, Route} from 'react-router-dom';
import './Estadisticas.css';
import Logo from '../../../Sources/Images/Estadisticas/logo_equipon.jpg';
import HorsePhoto from '../../../Sources/Images/Estadisticas/HorsePhoto.jpg';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as Icon from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';
import {BsFillPlayFill} from 'react-icons/bs';
import ReactPlayer from 'react-player';
import Tablehorse from '../../../Shared/table_horse/tablehorse';
import {AiFillCloseCircle} from 'react-icons/ai';
/* MODAL TO ADD EVENT*/
import MyVerticallyCenteredModal from '../../../Shared/Modal/modal';
/* IMPORT APP CONTEXT */
import { AppContext } from '../../../Context';



export default function Estadisticas() {


  /* APP CONTEXT */

  let {StadisticVideo,setStatisticVideo}=React.useContext(AppContext);

  /*USE STATE */
  
  let [ListEvents,setListEvents]=React.useState([]);//LIST EVENTS
  /*USE STATE MODAL*/
  const [modalShow, setModalShow] = React.useState(false);

  /*EVENT INFO */
  let event={
    name:"65° Feria Equina",
    Place:"Manizales-6 de enero de 2022",
    Grade:"A",
    img:"URL",
    TotalCp:568,
    ListCp:[],
    id:0
  };
  /* EVENTS FUNCTIONS */
  const AddEvent=()=>{

  }

  
  const AppendEvent_2=()=>{
    let List_Events=[...ListEvents];
    let Event={...event};
    Event['id']=List_Events.length;
    List_Events.push(Event);
    setListEvents(List_Events);
  }

  /*APPEND EVENT TO LIST */
  const AppendEvent=()=>{
    setModalShow(true)
   
  }
  /*DELETE EVENT */
  const DeleteEvent=()=>{
    let List_Events=[...ListEvents];
    List_Events.pop();
    setListEvents(List_Events);
  }
  

  return (
    <div className='EstadisticasContainer'>
        {ListEvents.map(Event=>{
          return (
              <div className='InfoContainer' key={Event.id}>
                <div className='Est-Container-1' >
                      <h1 className='Est-Container-1-text display-none'  >Total competidores</h1>
                      <div className='Est-Container-1-container-count display-none'  >
                          <h1 className='Est-Container-1-container-count-text display-none'>{Event.TotalCp}</h1>
                      </div>

                  <div className='Est-Container-1-1' >
                      <h1 className='Est-Container-1-text' >Total competidores</h1>
                      <div className='Est-Container-1-container-count' >
                          <h1 className='Est-Container-1-container-count-text'>{Event.TotalCp}</h1>
                      </div>
                  </div>
                  <button className='buttonEvent center buttonEventEst' ><span className="tw-500 font-size-15pt  c-orange mr-3px" >+</span><span className="c-orange font-size-10pt" >Añadir otro</span></button>
                  
                </div>
                <div className='Est-Container-2'  >
                  <div className='label-event-Estadistics-Container' >
                      <AiFillCloseCircle className='IconCloseEvent' onClick={DeleteEvent}  />
                      <figure className='img-container'  >
                        <img src={Logo} className='img-event'></img>
                      </figure>
                      
                      <div className='p-column'>
                        <span className='t-white t-b'  >{Event.name}</span>
                        <span className='t-white t-xs' >{Event.Place}</span>
                        <span className='t-white t-xs' >{"Grado: "+Event.Grade}</span>
                      </div>
                  </div>
                  <div className='filter-Horse-Estadistics-Container'  >
                      <InputGroup className="mb-3" id="p-row">
                        <InputGroup.Text id="basic-addon1"><Icon.Search /></InputGroup.Text>
                        <Form.Control
                          placeholder="Ingrese el ejemplar"
                          aria-label="Ingrese el ejemplar"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                      <button className='buttonEstadistic'>Buscar</button>
                  </div>
                  
                </div>
                <div className='Est-Container-3' >
                  <div className='tableContainer'>
                    <div className='table'>
                      <Tablehorse />
                    </div>
                  </div>
                </div>
              </div>
          );
        })}
        {ListEvents.length===0 ?
        <>
          <div className='InfoContainer'>
              <div className='Est-Container-1'></div>
              <div className='Est-Container-2'></div>
              <div className='Est-Container-3'>
                <h1 className='textNeedEvent'>Selecciona un evento</h1>
              </div>
          </div>
          <div className='SelectEventContainer LabelDisappear'>
              <button  variant="primary"  className='buttonEvent center' onClick={AppendEvent}><span className="tw-500 font-size-15pt  c-orange mr-3px" >+</span><span className="c-orange font-size-10pt">Añadir Evento</span></button>
          </div>
        </>
        :
        <>
          <div className='SelectEventContainer LabelDisappear'>
              <button  variant="primary" className='buttonEvent center' onClick={AppendEvent}><span className="tw-500 font-size-15pt  c-orange mr-3px" >+</span><span className="c-orange font-size-10pt">Añadir otro</span></button>
          </div>
        </>}
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        selectEvent={AppendEvent_2}
      />
        
    </div>
  )
}
