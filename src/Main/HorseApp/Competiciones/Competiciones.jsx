import React from 'react'
import {Navigate,Routes, Route} from 'react-router-dom';
import './Competiciones.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons';
import Logo from '../../../Sources/Images/Estadisticas/logo_equipon.jpg';
import HorsePhoto from '../../../Sources/Images/Estadisticas/HorsePhoto.jpg';
import {AiOutlinePlusCircle , AiFillPlusCircle,AiFillCloseCircle} from 'react-icons/ai';
import {RiEdit2Fill} from 'react-icons/ri';
import {BiImageAdd} from 'react-icons/bi';
import $ from 'jquery';
import Table from 'react-bootstrap/Table';
import {BsFillPlayFill} from 'react-icons/bs';
import Select from 'react-select';
// import { Col, Row, Container } from "react-bootstrap-grid";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AiFillEdit,AiOutlineLeft} from 'react-icons/ai';
import {FaTrash} from 'react-icons/fa';
/*ListGroup*/
import ListGroup from 'react-bootstrap/ListGroup'; 



/* CALENDAR */
import { DatePicker } from 'antd';
/* APP CONTEXT */

import { AppContext } from '../../../Context';



export default function Competiciones() {

  /* APPCONTEXT */
  let {
    StadisticVideo,setStatisticVideo, setInputVideoFile
      ,setVideoMeta , setTrimmedVideoFile, setURL, setTrimIsProcessing, setRstart, setRend
      , setThumbNails, setThumbnailIsProcessing,loading
  }=React.useContext(AppContext); 
  

  /* CALENDAR */
  const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  /*USE STATES */
  let [CreateButton,setCreateButton]=React.useState(false);
  const [file, setFile] = React.useState(null);
  let [EditEvent,setEditEvent]=React.useState(false);
  let [EventSelected,setEventSelected]=React.useState(null);
  let [AddHorseButton,setAddHorseButton]=React.useState(false);
  let [EditHorseButton,setEditHorseButton]=React.useState(false);

  /*EDIT EVENT FUNCTION */
  const EditEventFunction=()=>{
    setEditEvent(true);
    setCreateButton(false);
    //setEventSelected(event);
  }
  const EditEventFunction_2=()=>{
    setEditEvent(false);
  }

  /*FUNCTION IMAGE */
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const clickImageInput=()=>{
    let A_element=$("input")[1];
    A_element.click();
  }

  /*SELECT*/
  let options_andar=[
    { value: 'P1', label: 'P1' },
    { value: 'P2', label: 'P2' },
    { value: 'P3', label: 'P3' },
    { value: 'P4', label: 'P4' }
  ]


  const ResetAddHorse=()=>{
    setAddHorseButton(false);
    setEditHorseButton(false);
  }
  const EditHorse=()=>{
    setAddHorseButton(true);
    setEditHorseButton(true);
  }
  
  /* LISTA EVENTOS */

  /* useEffect */
  React.useEffect(()=>{
    setStatisticVideo(false);
    setInputVideoFile(null);
    setVideoMeta(null);
    setTrimmedVideoFile(null);
    setURL([]);
    setTrimIsProcessing(false);
    setRstart(0);
    setRend(100);
    setThumbNails([]);
    setThumbnailIsProcessing(false);
  },[])
  

  return (
    <div className='CompetenciasContainer'>
        {EditEvent===false ?
          <>
          <div className='CountsContainer'>
              <div className='CountContainer'>
                 <span className='TextTitle'>Total competencias</span>
                 <div className='CountsBox'>
                    <span className='TextCount'>0</span>
                 </div>
              </div>
              <div className='CountContainer'>
                 <span className='TextTitle'>Total competidores</span>
                 <div className='CountsBox'>
                    <span className='TextCount'>0.k</span>
                 </div>
              </div>
          </div>
        {/* <div className='ListEventsContainer ml-1 '>
             <div className='label-event-Estadistics-Container mr-3' onClick={EditEventFunction}>
                <figure className='img-container'>
                  <img src={Logo} className='img-event'></img>
                </figure>
                <div className='p-column'>
                  <span className='t-white t-b'>65° Feria Equina</span>
                  <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                  <span className='t-white t-xs'>Grado: A</span>
                </div>
             </div>
             <div className='label-event-Estadistics-Container mr-3' onClick={EditEventFunction}>
                <figure className='img-container'>
                  <img src={Logo} className='img-event'></img>
                </figure>
                <div className='p-column'>
                  <span className='t-white t-b'>65° Feria Equina</span>
                  <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                  <span className='t-white t-xs'>Grado: A</span>
                </div>
             </div>
             <div className='label-event-Estadistics-Container mr-3' onClick={EditEventFunction}>
                <figure className='img-container'>
                  <img src={Logo} className='img-event'></img>
                </figure>
                <div className='p-column'>
                  <span className='t-white t-b'>65° Feria Equina</span>
                  <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                  <span className='t-white t-xs'>Grado: A</span>
                </div>
             </div>
             <div className='label-event-Estadistics-Container mr-3' onClick={EditEventFunction}>
                <figure className='img-container'>
                  <img src={Logo} className='img-event'></img>
                </figure>
                <div className='p-column'>
                  <span className='t-white t-b'>65° Feria Equina</span>
                  <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                  <span className='t-white t-xs'>Grado: A</span>
                </div>
             </div>
        </div> */}
        <div className='EventsContainer-2'>
                
                <InputGroup className='inputComp'>
                  <InputGroup.Text id="basic-addon1"><Icon.Search/></InputGroup.Text>
                  <Form.Control
                    placeholder="Buscar competición"
                    aria-label="Buscar competición"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <button className='buttonComp'>Buscar</button>
        </div>
        <div className='RegisterEventContainer'>
           {CreateButton===false 
           ? 
           <>
           <Container className='containerRowEvents'>
                <Row className='RowEvents'>
                  <Col className='EventComponent'>
                      <div className='buttonregisterEvent' onClick={()=> setCreateButton(true)}>
                        <AiFillPlusCircle className='IconEventButton' />
                        <div className='textButtonregisterEvent'>
                            <span className='TextTitle'>Crear</span>
                            <span className='TextTitle'>nuevo evento</span>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                  <Col className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={HorsePhoto} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column'>
                          <span className='t-white t-b t-b2 '>Nombre de la feria</span>
                          <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                          <span className='t-white t-xs'>Grado: A</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={EditEventFunction}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer'></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>
                </Row>
          </Container>
           {/* <div className='buttonregisterEvent' onClick={()=> setCreateButton(true)}>
               <AiFillPlusCircle className='IconEventButton' />
               <div className='textButtonregisterEvent'>
                  <span className='TextTitle'>Crear</span>
                  <span className='TextTitle'>nuevo evento</span>
               </div>
           </div> */}
           </>
           
           :
           <>
           <div className='buttonregisterEvent_2' onClick={()=> setCreateButton(false)}>
               <AiFillPlusCircle className='IconEventButton_2' />
               <div className='textButtonregisterEvent'>
                  <span className='TextTitle'>Crear</span>
                  <span className='TextTitle'>nuevo evento</span>
               </div>
           </div>
           <form className='RegisterEvent'>
               <div className='CloseContainer'>
                    <span className='TextTitle2'> Crear nuevo evento</span>
                    <AiFillCloseCircle className='CloseIcon' onClick={()=> setCreateButton(false)}/>
               </div>
               <div className='imageContainer'>
                   {file===null ?
                   <div className="imageInputContainer">
                      <BiImageAdd className='iconImageFile' onClick={clickImageInput}/>
                      <input style={{visibility:"hidden"}} type="file" onChange={handleChange} />
                   </div>
                   :
                   <img className='imageEvent'   src={file} onClick={()=>setFile(null)}/> 
                   } 
               </div>
               <div className='nameContainer containrow'>
                 <span className="textFormEvent">Nombre</span>
                 <input className='inputEventForm' type="text" placeholder='ingrese el nombre del evento'/>
               </div>
               <div className='competidoresContainer containrow'>
                 <span className="textFormEvent">Competidores</span>
                 <input className='inputEventForm' type="text" placeholder='# de competidores'/>
               </div>
               <div className='dateContainer containrow'>
                 <span className="textFormEvent">fechas</span>
                 <DatePicker onChange={onChange}  placeholder='Inicio' />
                 <DatePicker onChange={onChange}  placeholder='Fin'/>
               </div>
               <div className='placeContainer containrow'>
                 <span className="textFormEvent">Lugar</span>
                 <input className='inputEventForm' type="text" placeholder='Ingrese el lugar'/>
               </div>
               <div className='DescriptionContainer containrow'>
                 <span className="textFormEvent">Description</span>
                 <textarea className='textareaFormEvent' placeholder='Descripción opcional'/>
               </div>
               <div className='containersubmitButton'>
                  <button className='buttonComp_2'>Crear</button>
               </div>
           </form>
           </>
           

           }
           
           
        </div>
          </>
         
        :
        <>
         <div className='BackToCreateEventContainer'>
             <div className='BackContainer'  onClick={EditEventFunction_2}>
               <AiOutlineLeft className='orange'/>
             </div>
         </div>
         <div className='EventInfoContainer mt-3'>
            <div className='label-event-Estadistics-Container  '>
                <figure className='img-container'>
                  <img src={Logo} className='img-event'></img>
                </figure>
                <div className='p-column'>
                  <span className='t-white t-b'>65° Feria Equina</span>
                  <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                  <span className='t-white t-xs'>Grado: A</span>
                </div>
            </div>
            <div className='containerCountsEvent'>
                  <div className='CountsContainer'>
                    <div className='CountContainer'>
                      <span className='TextTitle mb-'>Total competidores</span>
                      <div className='CountsBox w-'>
                          <span className='TextCount'>200</span>
                      </div>
                    </div>
                    <div className='CountContainer'>
                      <span className='TextTitle mb-'>Agregados</span>
                      <div className='CountsBox w-'>
                          <span className='TextCount'>1</span>
                      </div>
                    </div>
                    <div className='CountContainer'>
                      <span className='TextTitle mb-'>Sin registrar</span>
                      <div className='CountsBox w-'>
                          <span className='TextCount'>199</span>
                      </div>
                    </div>
                  </div>
            </div>

         </div>
         <div className='EventsContainer HorseFilter '>
                <InputGroup className='inputComp'>
                  <InputGroup.Text id="basic-addon1"><Icon.Search/></InputGroup.Text>
                  <Form.Control
                    placeholder="Buscar ejemplar "
                    aria-label="Buscar ejemplar"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <button className='buttonComp'>Buscar</button>
                <ListGroup horizontal defaultActiveKey="#link1" className='ListAndar'>
                          <ListGroup.Item action eventKey="#link1">Andar P1</ListGroup.Item>
                          <ListGroup.Item action eventKey="#link2">Andar P2</ListGroup.Item>
                          <ListGroup.Item action eventKey="#link3">Andar P3</ListGroup.Item>
                          <ListGroup.Item action eventKey="#link4">Andar P4</ListGroup.Item>
                </ListGroup>
        </div>
         <div className='HorseDataContainer'>
               {AddHorseButton===false ?
               <>
               <div className='buttonregisterEvent buttonAddHorse' onClick={()=> setAddHorseButton(true)}>
                    <AiFillPlusCircle className='IconEventButton' />
                    <div className='textButtonregisterEvent'>
                        <span className='TextTitle'>Añadir</span>
                        <span className='TextTitle'>Ejemplar</span>
                    </div>
                </div>
               </>
               :
               <>
               <form className='RegisterHorseForm'>
                      <div className='CloseContainerHorse'>
                            {EditHorseButton===true  ?
                              <>
                               <span className='TextTitle2'>Editar  participante</span>
                               <AiFillCloseCircle className='CloseAddIcon_2' onClick={ResetAddHorse}/>
                              </>
                              
                            :
                            <>
                              <span className='TextTitle2'>Agregar participante</span>
                              <AiFillCloseCircle className='CloseAddIcon' onClick={ResetAddHorse}/>
                            </>
                              
                            }
                            
                            
                      </div>
                      <div className='imageContainer'>
                          {file===null ?
                          <div className="imageInputContainerHorse">
                              <BiImageAdd className='iconImageFile' onClick={clickImageInput}/>
                              <input style={{visibility:"hidden"}} type="file" onChange={handleChange} />
                          </div>
                          :
                          <img className='imageEventHorse'   src={file} onClick={()=>setFile(null)}/> 
                          } 
                      </div>
                      <div className='nameContainer containrowHorse'>
                        <span className="textFormEvent">Nombre</span>
                        <input className='inputEventForm' type="text" placeholder='Nombre del ejemplar'/>
                      </div>
                      <div className='competidoresContainer containrowHorse'>
                        <span className="textFormEvent"># Competidor</span>
                        <input className='inputEventForm' type="text" placeholder='# del competidor'/>
                      </div>
                      <div className='competidoresContainer containrowHorse'>
                        <span className="textFormEvent">Caballista</span>
                        <input className='inputEventForm' type="text" placeholder='# del competidor'/>
                      </div>
                      <div className='competidoresContainer containrowHorse'>
                        <span className="textFormEvent">Edad</span>
                        <input className='inputEventForm' type="text" placeholder='Edad'/>
                      </div>
                      <div className='competidoresContainer containrowHorse'>
                        <span className="textFormEvent">Andar</span>
                        <input className='inputEventForm' type="text" placeholder='Ingrese la categoria'/>
                      </div>
                      <div className='ButtonContainer'>
                           {EditHorseButton===true  ?
                            <button className='buttonComp_2'>Editar</button>
                            :
                            <button className='buttonComp_2'>Añadir</button>
                            }
                      </div>
                </form>
               </>

               }

              <div className='tableContainerHorse'>
              <div className='table'>
                <Table>
                  <thead>
                    <tr>
                      <th className='titletext'>Nombre</th>
                      <th className='titletext'>Edad</th>
                      <th className='titletext'>Andar</th>
                      <th className='titletext'>Tipo</th>
                      <th className='titletext'>Caballista</th>
                      <th className='titletext'></th>
                      <th className='titletext'></th>
                    </tr>
                  </thead>
                  <tbody className='tablebody'>
                    <tr>
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item'>P4</span></td>
                      <td className='b-none text-table'><span className='item'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item'>Alejandro Soto</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                      <td className='b-none'>
                          <FaTrash className='GarbageHorse item'/>
                      </td>
                    </tr>
                    <tr>
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item'>P4</span></td>
                      <td className='b-none text-table'><span className='item'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item'>Alejandro Soto</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                      <td className='b-none'>
                          <FaTrash className='GarbageHorse item'/>
                      </td>
                    </tr>
                    <tr>
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item'>P4</span></td>
                      <td className='b-none text-table'><span className='item'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item'>Alejandro Soto</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                      <td className='b-none'>
                          <FaTrash className='GarbageHorse item'/>
                      </td>
                    </tr>
                    <tr>
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item'>P4</span></td>
                      <td className='b-none text-table'><span className='item'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item'>Alejandro Soto</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                      <td className='b-none'>
                          <FaTrash className='GarbageHorse item'/>
                      </td>
                    </tr>
                    <tr>
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item'>P4</span></td>
                      <td className='b-none text-table'><span className='item'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item'>Alejandro Soto</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                      <td className='b-none'>
                          <FaTrash className='GarbageHorse item'/>
                      </td>
                    </tr>
                    <tr>
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item'>P4</span></td>
                      <td className='b-none text-table'><span className='item'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item'>Alejandro Soto</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                      <td className='b-none'>
                          <FaTrash className='GarbageHorse item'/>
                      </td>
                    </tr>
                    <tr>
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item'>P4</span></td>
                      <td className='b-none text-table'><span className='item'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item'>Alejandro Soto</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                      <td className='b-none'>
                          <FaTrash className='GarbageHorse item'/>
                      </td>
                    </tr>
                    <tr>
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item'>P4</span></td>
                      <td className='b-none text-table'><span className='item'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item'>Alejandro Soto</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                      <td className='b-none'>
                          <FaTrash className='GarbageHorse item'/>
                      </td>
                    </tr>
                    <tr>
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item'>P4</span></td>
                      <td className='b-none text-table'><span className='item'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item'>Alejandro Soto</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                      <td className='b-none'>
                          <FaTrash className='GarbageHorse item'/>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
             

            </div> 
             
         </div>
          
          
        </>
        }
        
        
        
    </div>
  )
}
