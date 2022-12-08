import React from 'react'
import {Navigate,Routes, Route} from 'react-router-dom';
import './Competiciones.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons';
import Logo from '../../../Sources/Images/Estadisticas/logo_equipon.jpg';
import HorsePhoto from '../../../Sources/Images/Estadisticas/HorsePhoto.jpg';
import {AiOutlinePlusCircle , AiFillPlusCircle,AiFillCloseCircle} from 'react-icons/ai';
import {BiImageAdd} from 'react-icons/bi';
import $ from 'jquery';

/* CALENDAR */
import { DatePicker } from 'antd';



export default function Competiciones() {
  /* CALENDAR */
  const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  /*USE STATES */
  let [CreateButton,setCreateButton]=React.useState(false);
  const [file, setFile] = React.useState(null);

  /*FUNCTION IMAGE */
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const clickImageInput=()=>{
    let A_element=$("input")[1];
    A_element.click();
  }

  return (
    <div className='CompetenciasContainer'>
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
        <div className='ListEventsContainer ml-1 '>
             <div className='label-event-Estadistics-Container mr-3'>
                <figure className='img-container'>
                  <img src={Logo} className='img-event'></img>
                </figure>
                <div className='p-column'>
                  <span className='t-white t-b'>65° Feria Equina</span>
                  <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                  <span className='t-white t-xs'>Grado: A</span>
                </div>
             </div>
             <div className='label-event-Estadistics-Container mr-3'>
                <figure className='img-container'>
                  <img src={Logo} className='img-event'></img>
                </figure>
                <div className='p-column'>
                  <span className='t-white t-b'>65° Feria Equina</span>
                  <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                  <span className='t-white t-xs'>Grado: A</span>
                </div>
             </div>
             <div className='label-event-Estadistics-Container mr-3'>
                <figure className='img-container'>
                  <img src={Logo} className='img-event'></img>
                </figure>
                <div className='p-column'>
                  <span className='t-white t-b'>65° Feria Equina</span>
                  <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                  <span className='t-white t-xs'>Grado: A</span>
                </div>
             </div>
             <div className='label-event-Estadistics-Container mr-3'>
                <figure className='img-container'>
                  <img src={Logo} className='img-event'></img>
                </figure>
                <div className='p-column'>
                  <span className='t-white t-b'>65° Feria Equina</span>
                  <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                  <span className='t-white t-xs'>Grado: A</span>
                </div>
             </div>
        </div>
        <div className='EventsContainer'>
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
           <div className='buttonregisterEvent' onClick={()=> setCreateButton(true)}>
               <AiFillPlusCircle className='IconEventButton' />
               <div className='textButtonregisterEvent'>
                  <span className='TextTitle'>Crear</span>
                  <span className='TextTitle'>nuevo evento</span>
               </div>
           </div>
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
                 <input className='inputEventForm' type="text" placeholder='ingrese la cantidad de participantes'/>
               </div>
               <div className='dateContainer containrow'>
                 <span className="textFormEvent">fechas</span>
                 <DatePicker onChange={onChange}  placeholder='Inicio' />
                 <DatePicker onChange={onChange}  placeholder='Fin'/>
               </div>
               <div className='placeContainer containrow'>
                 <span className="textFormEvent">Lugar</span>
                 <input className='inputEventForm' type="text" placeholder='ingrese el nombre del evento'/>
               </div>
               <div className='DescriptionContainer containrow'>
                 <span className="textFormEvent">Description</span>
                 <textarea className='textareaFormEvent' placeholder='ingrese el nombre del evento'/>
               </div>
               <div className='containersubmitButton'>
                  <button className='buttonComp_2'>Crear</button>
               </div>
           </form>
           </>
           

           }
           
           
        </div>
        
        
    </div>
  )
}
