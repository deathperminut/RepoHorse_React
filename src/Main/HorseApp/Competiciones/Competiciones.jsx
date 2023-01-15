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
import Preloader from '../../../Shared/preloader/preloader';
import { toNumber } from 'lodash';
import Swal from 'sweetalert2';



export default function Competiciones() {

  /* APPCONTEXT */
  let {
    SelectEvent,setSelectEvent,
    SelectHorse,setSelectHorse,
    StadisticVideo,setStatisticVideo, setInputVideoFile
      ,setVideoMeta , setTrimmedVideoFile, setURL, setTrimIsProcessing, setRstart, setRend
      , setThumbNails, setThumbnailIsProcessing,loading,setOriginalVideo,events,setEvents,sleep,setLoading,eventChoosed,setEventChoosed
  }=React.useContext(AppContext); 
  

  /* CALENDAR */
  const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

  function onChange_start(date, dateString) {
    setEvent({...event,['date_start']:dateString})
    console.log({...event,['date_start']:dateString});

  }
  function onChange_end(date, dateString) {
    setEvent({...event,['date_end']:dateString})
    console.log({...event,['date_end']:dateString});

  }
  
  /*USE STATES */
  let [CreateButton,setCreateButton]=React.useState(false);
  const [file, setFile] = React.useState(null);
  let [EditEvent,setEditEvent]=React.useState(false);
  let [EventSelected,setEventSelected]=React.useState(null);
  let [AddHorseButton,setAddHorseButton]=React.useState(false);
  let [EditHorseButton,setEditHorseButton]=React.useState(false);
  let [filter,setFilter]=React.useState(events);
  let [valueFilter,setValueFilter]=React.useState("");


  let [event,setEvent]=React.useState({
    img:'',
    name:'',
    number:'',
    date_start:'',
    date_end:'',
    place:'',
    description:'',
    horses:[],
  })
  let [buttonEvent,setButtonEvent]=React.useState(true);

   /* INPUTS */
   const CheckInput=(Event,type)=>{
    console.log(Event.target.value,type);
    setEvent({
      ... event,
      [type]: Event.target.value
    })
    checkEvent({
      ... event,
      [type]: Event.target.value
    });

  }

    /* SELECTS */

    const CheckSelect=(event,type)=>{
    
      console.log(event);
      if(event===null){
        setEvent({...event,
          [type]: ""} );
      }else{
        setEvent({...event,
          [type]: event.value} );
      }
    }
  /*FUNCTION IMAGE */
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setEvent({...event,['img']:URL.createObjectURL(e.target.files[0])})
    checkEvent({...event,['img']:URL.createObjectURL(e.target.files[0])});
  }
  const clickImageInput=()=>{
    let A_element=$("input")[1];
    A_element.click();
  }

    
  





  /*EDIT EVENT FUNCTION */
  const EditEventFunction=(Event)=>{
    setEventChoosed(Event);
    setEditEvent(true);
    setCreateButton(false);
    //setEventSelected(event);
  }
  const EditEventFunction_2=()=>{
    setEditEvent(false);
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
    setOriginalVideo(null);
    setSelectEvent(false);
    setSelectHorse(false);
  },[])

  const AppendEvent=async(EVENT)=>{
     EVENT.preventDefault();

     let Events=[...events];
     Events.push({...event,['id']:Events.length});
     setEvents(Events);
     setFilter(Events);
     setLoading(true);
     await sleep(1500);
     setLoading(false);
     setCreateButton(false);
     setFile(null);
     setEvent({
      img:'',
      name:'',
      number:'',
      date_start:'',
      date_end:'',
      place:'',
      description:'',
      horses:[],
     })
     setButtonEvent(true);
     

  }

  const checkTotalCompetidores=()=>{
      let count=0;
      for (var i=0;i<events.length;i++){
           count=toNumber(count)+toNumber(events[i].number); 
        }
      return count
  }

  const DeleteEvent=(id)=>{
    Swal.fire({
      title: '¿Seguro que desea eliminar el evento?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {
         let ListEvents=[]
         for (var i=0;i<events.length;i++){
          if(events[i].id !==id){
            ListEvents.push(events[i]);
          }
         }
         setEvents(ListEvents);
         setFilter(ListEvents);
      }
   })
   }

  const checkEvent=(event)=>{
    if(event.name !=="" && event.img!=="" && event.number !=="" && event.date_start!=="" && event.date_end!=="" && event.place!==""){
      setButtonEvent(false);
    }else{
      setButtonEvent(true);
    }
  }
  
  const filterFunction=(event)=>{
      setValueFilter(event.target.value);
      if(event.target.value===""){
        setFilter(events);
      }
  }

  const find=()=>{
    if(valueFilter===""){
      setFilter(events);
    }else{
      const Array=events.filter((obj)=> obj.name.toLowerCase().includes(valueFilter.toLowerCase()))
      setFilter(Array);
    }
  }

  const getCount=(eventChoosed)=>{
    if(eventChoosed.horses!=undefined && eventChoosed.horses!=null){
      return toNumber(eventChoosed.number) - toNumber(eventChoosed.horses.length)
    }
  }
  

  return (
    <>
    {
          loading ?
          <>
          <Preloader/>
          </>
          :

          <></>
        }
    <div className='CompetenciasContainer'>
        {EditEvent===false ?
          <>
          <div className='CountsContainer'>
              <div className='CountContainer'>
                 <span className='TextTitle bold-size '>Total competencias</span>
                 <div className='CountsBox'>
                    <span className='TextCount '>{events.length}</span>
                 </div>
              </div>
              <div className='CountContainer'>
                 <span className='TextTitle bold-size'>Total competidores</span>
                 <div className='CountsBox'>
                    <span className='TextCount'>{checkTotalCompetidores()}</span>
                 </div>
              </div>
          </div>
        
        <div className='EventsContainer-2'>
                
                <InputGroup onChange={filterFunction} value={valueFilter} className='inputComp middle-size'>
                  <InputGroup.Text  id="basic-addon1"><Icon.Search/></InputGroup.Text>
                  <Form.Control
                    placeholder="Buscar competición"
                    aria-label="Buscar competición"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <button onClick={find} className='buttonComp middle-size'>Buscar</button>
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
                        <div className='textButtonregisterEvent font-size-1rem'>
                            <span className='TextTitle bold-size'>Crear</span>
                            <span className='TextTitle bold-size'>nuevo evento</span>
                        </div>
                      </div>
                  </Col>
                  {filter.map(Event=>(

                     console.log(Event),

                    <Col key={Event.id} className='EventComponent'>
                      <div className='Event display-row' >
                        <figure className='img-container CompetitionsImag_2'>
                            <img src={Event.img} className='img-event CompetitionsImag'></img>
                        </figure>
                        <div className='p-column-event'>
                          <span className='t-white t-b t-b2  overflox-x-hidden'>{Event.name}</span>
                          <span className='t-white t-xs orange'>{Event.place+' '}</span>
                          <span className='t-white t-xs middle-size gray-dc'>{Event.date_start }<span className='middle-size green-ds'>{' / '}</span> {Event.date_end}</span>
                          <div className='d-row flex-end'>
                               <div className='iconEditEvent' onClick={()=>EditEventFunction(Event)}>
                                <RiEdit2Fill className='iconVideoPlay'/>
                               </div>
                               <FaTrash className='option-icon IconPointer' onClick={()=>DeleteEvent(Event.id)}></FaTrash>
                          </div>
                        </div>
                      </div>
                  </Col>

                  ))}
                  
                  
                </Row>
          </Container>
           </>
           
           :
           <>
           
           <div className='buttonregisterEvent_2 mt-14px' onClick={()=> setCreateButton(false)}>
               <AiFillPlusCircle className='IconEventButton_2' />
               <div className='textButtonregisterEvent font-size-1rem'>
                  <span className='TextTitle'>Crear</span>
                  <span className='TextTitle'>nuevo evento</span>
               </div>
           </div>
           <form className='RegisterEvent mt-14px'>
               <div className='CloseContainer'>
                    <span className='TextTitle2'> Crear nuevo evento</span>
                    <AiFillCloseCircle className='CloseIcon' onClick={()=> setCreateButton(false)}/>
               </div>
               <div className='imageContainer'>
                   {file===null ?
                   <div className="imageInputContainer">
                      <BiImageAdd style={{cursor:'pointer'}} className='iconImageFile' onClick={clickImageInput}/>
                      <input style={{visibility:"hidden"}} type="file" onChange={handleChange} accept="image/png, image/gif, image/jpeg" />
                   </div>
                   :
                   <img style={{cursor:'pointer'}} className='imageEvent'   src={file} onClick={()=>{
                      setFile(null);
                      setEvent({...event,['img']:''})
                      setButtonEvent(true);

                   }}/> 
                   } 
               </div>
               <div className='nameContainer containrow'>
                 <span className="textFormEvent second-size">Nombre</span>
                 <input onChange={(event)=>CheckInput(event,'name')} maxLength={21} className='inputEventForm second-size' type="text" placeholder='ingrese el nombre del evento'/>
               </div>
               <div className='competidoresContainer containrow'>
                 <span className="textFormEvent second-size">Competidores</span>
                 <input onChange={(event)=>CheckInput(event,'number')} className='inputEventForm second-size' type="text" placeholder='# de competidores'/>
               </div>
               <div className='dateContainer containrow second-size'>
                 <span className="textFormEvent second-size ">fechas</span>
                 <DatePicker className='datepicker' onChange={onChange_start}  placeholder='Inicio' />
                 <DatePicker  className='datepicker' onChange={onChange_end}  placeholder='Fin'/>
               </div>
               <div className='placeContainer containrow'>
                 <span className="textFormEvent second-size">Lugar</span>
                 <input  onChange={(event)=>CheckInput(event,'place')}  maxLength={16} className='inputEventForm second-size' type="text" placeholder='Ingrese el lugar'/>
               </div>
               <div className='DescriptionContainer containrow'>
                 <span className="textFormEvent second-size">Descripción</span>
                 <textarea onChange={(event)=>CheckInput(event,'description')}  className='textareaFormEvent second-size' placeholder='Descripción opcional'/>
               </div>
               <div className='containersubmitButton'>
                  <button disabled={buttonEvent} onClick={AppendEvent} className='buttonComp_2'>Crear</button>
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
                  <img src={eventChoosed.img} className='img-event'></img>
                </figure>
                <div className='p-column-event'>
                  <span className='t-white t-b t-b2  overflox-x-hidden bold-size'>{eventChoosed.name}</span>
                  <span className='t-white t-xs middle-size orange'>{eventChoosed.place}</span>
                  <span className='t-white t-xs middle-size gray-dc' >{eventChoosed.date_start }<span className='middle-size green-ds'>{' / '}</span> {eventChoosed.date_end}</span>
                </div>
            </div>
            <div className='containerCountsEvent'>
                  <div className='CountsContainer '>
                    <div className='CountContainer align-center margin-left-90px'>
                      <span className='TextTitle mb-'>Total competidores</span>
                      <div className='CountsBox w-'>
                          <span className='TextCount'>{eventChoosed.number}</span>
                      </div>
                    </div>
                    <div className='CountContainer align-center'>
                      <span className='TextTitle mb-'>Agregados</span>
                      <div className='CountsBox w-'>
                          <span className='TextCount'>{eventChoosed.horses.length}</span>
                      </div>
                    </div>
                    <div className='CountContainer align-center'>
                      <span className='TextTitle mb-'>Sin registrar</span>
                      <div className='CountsBox w-'>
                          <span className='TextCount'>{getCount(eventChoosed)}</span>
                      </div>
                    </div>
                  </div>
            </div>

         </div>
         <div className='EventsContainer HorseFilter '>
                <InputGroup className='inputComp middle-size'>
                  <InputGroup.Text id="basic-addon1"><Icon.Search/></InputGroup.Text>
                  <Form.Control
                    placeholder="Buscar ejemplar "
                    aria-label="Buscar ejemplar"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <button className='buttonComp middle-size'>Buscar</button>
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
                        <span className='TextTitle bold-size'>Añadir</span>
                        <span className='TextTitle bold-size'>Ejemplar</span>
                    </div>
                </div>
               </>
               :
               <>
               <form className='RegisterHorseForm mr-18px'>
                      <div className='CloseContainerHorse'>
                            {EditHorseButton===true  ?
                              <>
                               <span className='TextTitle2 bold-size'>Editar  participante</span>
                               <AiFillCloseCircle className='CloseAddIcon_2' onClick={ResetAddHorse}/>
                              </>
                              
                            :
                            <>
                              <span className='TextTitle2 bold-size'>Agregar participante</span>
                              <AiFillCloseCircle className='CloseAddIcon' onClick={ResetAddHorse}/>
                            </>
                              
                            }
                            
                            
                      </div>
                      <div className='imageContainer'>
                          {file===null ?
                          <div className="imageInputContainerHorse">
                              <BiImageAdd className='iconImageFile' onClick={clickImageInput}/>
                              <input style={{visibility:"hidden"}} type="file" onChange={handleChange}  accept="image/png, image/gif, image/jpeg"/>
                          </div>
                          :
                          <img className='imageEventHorse'   src={file} onClick={()=>setFile(null)}/> 
                          } 
                      </div>
                      <div className='nameContainer containrowHorse'>
                        <span className="textFormEvent second-size">Nombre</span>
                        <input className='inputEventForm second-size' type="text" placeholder='Nombre del ejemplar'/>
                      </div>
                      <div className='competidoresContainer containrowHorse'>
                        <span className="textFormEvent second-size"># Competidor</span>
                        <input className='inputEventForm second-size' type="text" placeholder='# del competidor'/>
                      </div>
                      <div className='competidoresContainer containrowHorse'>
                        <span className="textFormEvent second-size">Caballista</span>
                        <input className='inputEventForm second-size' type="text" placeholder='# del competidor'/>
                      </div>
                      <div className='competidoresContainer containrowHorse'>
                        <span className="textFormEvent second-size">Edad</span>
                        <input className='inputEventForm second-size' type="text" placeholder='Edad'/>
                      </div>
                      <div className='competidoresContainer containrowHorse'>
                        <span className="textFormEvent second-size">Andar</span>
                        <input className='inputEventForm second-size' type="text" placeholder='Ingrese la categoria'/>
                      </div>
                      <div className='ButtonContainer'>
                           {EditHorseButton===true  ?
                            <button className='buttonComp_2 middle-size'>Editar</button>
                            :
                            <button className='buttonComp_2 middle-size'>Añadir</button>
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
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText middle-size'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>P4</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>Alejandro Soto</span></td>
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
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText middle-size'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>P4</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>Alejandro Soto</span></td>
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
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText middle-size' >Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>P4</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>Alejandro Soto</span></td>
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
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText middle-size'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>P4</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>Alejandro Soto</span></td>
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
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText middle-size'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>P4</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>Alejandro Soto</span></td>
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
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText middle-size'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>P4</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>Alejandro Soto</span></td>
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
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText middle-size'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>P4</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>Alejandro Soto</span></td>
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
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText middle-size'>Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>38 meses</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>P4</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>C caballar</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>Alejandro Soto</span></td>
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
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText middle-size' >Conde del viento</span></td>
                      <td className='b-none text-table'><span className='item middle-size'>38 meses</span></td>
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
        
        

    </>
    
   
  )
}
