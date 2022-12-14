import React from 'react'
import {Navigate,Routes, Route} from 'react-router-dom';
import './Analisis.css';
import Logo from '../../../Sources/Images/Estadisticas/logo_equipon.jpg';
/* COMPONENTS */
import Footer from '../../../Shared/footer/Footer';
import Header from '../../../Shared/Header/Header';
import * as Icon from 'react-bootstrap-icons';
import {BsPlayBtn} from 'react-icons/bs'
import {MdOutlineDriveFolderUpload} from 'react-icons/md';
import {BsFilter} from 'react-icons/bs';
import Dropzone from 'react-dropzone';

/* SELECT */
import Select from 'react-select';
import Swal from 'sweetalert2';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

/*IMAGE*/
//import HorsePhoto from '../..//../Sources/Images//Estadisticas/HorsePhoto.jpg';
import HorsePhoto from '../../../Sources/Images/Estadisticas/HorsePhoto.jpg';
import {AiFillCloseCircle} from 'react-icons/ai';


export default function Analisis() {
  
  /* REACT UseStates */
  let [SelectEvent,setSelectEvent]=React.useState(true);
  /* VIDEO */
  let [file,setFile]=React.useState(null);

  const fileInputChange=(event)=>{
     if(!SelectEvent){
      Swal.fire({
        icon: 'error',
        title: 'Primero selecciona un evento.',
      })
     }
     console.log("props");
  }
  


  /* CHANGE USESTATES */

  const ChangeSelectEvent=(event,select=false)=>{
    // console.log(event.value);}
    let Value=null;
     if(select){
      Value=event.value;
     }
     setSelectEvent(!SelectEvent);
  }
  
  /*OPTIONS SELECT */
  const options = [
    { value: 'Evento 1', label: 'Evento 1' },
    { value: 'Evento 2', label: 'Evento 2' },
    { value: 'Evento 3', label: 'Evento 3' },
    { value: 'Evento 4' ,label: 'Evento 4' } 
  ];
  return (
    <>
        <div className='AnalisisContainer'>
          <div className='DataContainer'>
             
             <div className='videoContainer'>
                <Dropzone onDrop={acceptedFiles => fileInputChange(acceptedFiles)}  className='shadow'>
                    {({getRootProps, getInputProps}) => (
                    <section className='dragContainer'>
                        <div {...getRootProps()} className="center_2">
                          <input {...getInputProps()} accept=".csv"/>
                            <BsPlayBtn className='iconFilm'/>
                            <span className='textdragContainer'>Arraste o ponga el video aquí</span>
                            <span className='textdragContainer'>o</span>
                            <button className='buttonAnalisis'><MdOutlineDriveFolderUpload className='iconVideo'/><span className='textButtonVideo'>Subir archivos</span></button>
                          
                          
                          
                        </div>
                  </section>

                      
                    )}
                </Dropzone>
                
             </div>
             <div className='optionsContainer'>
              <div className='option'></div>
              <div className='option'></div>
              <div className='option'></div>
              <div className='option'></div>
             </div>
          </div>
          <div className='SelectContainer'>

            {SelectEvent===false ? 
              <>
              <div className='Select'>
                <Select
                onChange={(event)=>ChangeSelectEvent(event,true)}
                options = {options}  
                className="selectAnalisis" 
                placeholder="Seleccione un evento"
                
                />
                <button className="FilterButton analisisfilterbutton"><BsFilter className="filterIcon"></BsFilter></button>
              </div>
              {/* <div className='buttonEventContainer'>
                <button className='buttonEvent'><span className="tw-500 font-size-15pt  c-orange mr-3px">+</span><span className="c-orange font-size-10pt">Nuevo Evento</span></button>
              </div> */}
              </>
            :
            <>

            <div className='label-event-Analitic-Container'>
                <AiFillCloseCircle className='IconCloseEvent' onClick={()=>setSelectEvent(false)}/>
                <figure className='img-container'>
                  <img src={Logo} className='img-event'></img>
                </figure>
                <div className='p-column'>
                  <span className='t-white t-b'>65° Feria Equina</span>
                  <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                  <span className='t-white t-xs'>Grado: A</span>
                </div>
            </div>


            <div className='display-row mt-3'>
                <InputGroup className="mt-3">
                  <Form.Control aria-label="TextInput" placeholder="ejemplar"/>

                  <DropdownButton
                    variant="outline-secondary"
                    title="Andar"
                    id="input-group-dropdown-2"
                    align="end"
                    placeholder='Ingrese ejemplar'
                  >
                    <Dropdown.Item href="#">P1</Dropdown.Item>
                    <Dropdown.Item href="#">P2</Dropdown.Item>
                    <Dropdown.Item href="#">P3</Dropdown.Item>
                    <Dropdown.Item href="#">P4</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>
                <button className='buttonComp btn-analizar'>Buscar</button>
            </div>
            <div className='ContainerOverflow-y'>
                <div className='DetailsContainer_an'>
                      <span className='white'>Participantes:  <span className='orange fw'>    20</span></span>   
                      <span className='gray fz-small'>Andar:<span className='orange'> P4</span> <span>Paso fino Colombiano</span></span> 
                      <span className='gray fz-small'>Categoria:<span className='white'> Potros en proceso con primera enfrenada</span></span> 
                </div>

                <div className='ListInCompetitionContainer'>
                    <div className='ListInCompetitionTitleContainer'>
                        <span className='TitleInCompetition'>En competencia</span><span className='NumberInCompetition'>5</span>
                    </div>
                </div>
                <div className='ListHorseContainer'>
                     <div className='ElementHorseContainer'>
                        <figure className='img-container Analitic-imag'>
                            <img src={HorsePhoto} className='img-event Analitic-imag'></img>
                        </figure>
                        <div className='p-column' style={{paddingTop:"5px"}}>
                          <span className='t-white t-b' style={{fontSize:"1rem"}}>Conde del viento</span>
                          <span className='orange t-xs'>Alejandro soto</span>
                        </div>
                     </div>
                     <div className='ElementHorseContainer'>
                        <figure className='img-container Analitic-imag'>
                            <img src={HorsePhoto} className='img-event Analitic-imag'></img>
                        </figure>
                        <div className='p-column' style={{paddingTop:"5px"}}>
                          <span className='t-white t-b' style={{fontSize:"1rem"}}>Conde del viento</span>
                          <span className='orange t-xs'>Alejandro soto</span>
                        </div>
                     </div>
                     <div className='ElementHorseContainer'>
                        <figure className='img-container Analitic-imag'>
                            <img src={HorsePhoto} className='img-event Analitic-imag'></img>
                        </figure>
                        <div className='p-column' style={{paddingTop:"5px"}}>
                          <span className='t-white t-b' style={{fontSize:"1rem"}}>Conde del viento</span>
                          <span className='orange t-xs'>Alejandro soto</span>
                        </div>
                     </div>
                     <div className='ElementHorseContainer'>
                        <figure className='img-container Analitic-imag'>
                            <img src={HorsePhoto} className='img-event Analitic-imag'></img>
                        </figure>
                        <div className='p-column' style={{paddingTop:"5px"}}>
                          <span className='t-white t-b' style={{fontSize:"1rem"}}>Conde del viento</span>
                          <span className='orange t-xs'>Alejandro soto</span>
                        </div>
                     </div>
                </div>

                <div className='ListInCompetitionContainer'>
                    <div className='ListInCompetitionTitleContainer'>
                        <span className='TitleInCompetition'>Procesados</span><span className='NumberInCompetition'>15</span>
                    </div>
                </div>
                <div className='ListHorseContainer'>
                     <div className='ElementHorseContainer'>
                        <figure className='img-container Analitic-imag'>
                            <img src={HorsePhoto} className='img-event Analitic-imag'></img>
                        </figure>
                        <div className='p-column' style={{paddingTop:"5px"}}>
                          <span className='t-white t-b' style={{fontSize:"1rem"}}>Conde del viento</span>
                          <span className='orange t-xs'>Alejandro soto</span>
                        </div>
                     </div>
                     <div className='ElementHorseContainer'>
                        <figure className='img-container Analitic-imag'>
                            <img src={HorsePhoto} className='img-event Analitic-imag'></img>
                        </figure>
                        <div className='p-column' style={{paddingTop:"5px"}}>
                          <span className='t-white t-b' style={{fontSize:"1rem"}}>Conde del viento</span>
                          <span className='orange t-xs'>Alejandro soto</span>
                        </div>
                     </div>
                     <div className='ElementHorseContainer'>
                        <figure className='img-container Analitic-imag'>
                            <img src={HorsePhoto} className='img-event Analitic-imag'></img>
                        </figure>
                        <div className='p-column' style={{paddingTop:"5px"}}>
                          <span className='t-white t-b' style={{fontSize:"1rem"}}>Conde del viento</span>
                          <span className='orange t-xs'>Alejandro soto</span>
                        </div>
                     </div>
                     <div className='ElementHorseContainer'>
                        <figure className='img-container Analitic-imag'>
                            <img src={HorsePhoto} className='img-event Analitic-imag'></img>
                        </figure>
                        <div className='p-column' style={{paddingTop:"5px"}}>
                          <span className='t-white t-b' style={{fontSize:"1rem"}}>Conde del viento</span>
                          <span className='orange t-xs'>Alejandro soto</span>
                        </div>
                     </div>
                </div>
            </div>
           
            

             </>
            }
            
          </div>
        </div>
    </>
    
  )
}
