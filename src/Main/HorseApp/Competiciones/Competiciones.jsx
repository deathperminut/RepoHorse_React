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
import Select from 'react-select'

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
        <div className='ListEventsContainer ml-1 '>
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
         <div className='EventInfoContainer mt-3'>
            <div className='label-event-Estadistics-Container mr-3 ' onClick={EditEventFunction_2}>
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
                <Select className='SelectComp' options={options_andar} placeholder="Seleccione Categoria"></Select>
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
                    </tr>
                  </thead>
                  <tbody className='tablebody'>
                    <tr>
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none text-table'>Alejandro Soto</td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none text-table'>Alejandro Soto</td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none text-table'>Alejandro Soto</td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none text-table'>Alejandro Soto</td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none text-table'>Alejandro Soto</td>
                      <td className='b-none'> 
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none text-table'>Alejandro Soto</td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none text-table'>Alejandro Soto</td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none text-table'>Alejandro Soto</td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none text-table'>Alejandro Soto</td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer' onClick={EditHorse}>
                          <RiEdit2Fill className='iconVideoPlay'/>
                        </div>
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
