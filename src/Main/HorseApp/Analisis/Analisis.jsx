import React from 'react';

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
import {FaTrash} from 'react-icons/fa';
import {MdVideoSettings} from 'react-icons/md';
import {RiScissorsCutFill} from 'react-icons/ri';
import {GrPowerReset} from 'react-icons/gr';
import {BsDownload} from 'react-icons/bs';
import {BiReset} from 'react-icons/bi';


/* VIDEO EDITOR */
import VideoEditor from '../../../Shared/VideoEditor/VideoEditor';
import VideoTrimmer from '../../../Shared/Video-Trimming/videoTrimmer/videoTrimmer';
/* CONTEXT */
import { AppContext } from '../../../Context';
import {IoIosArrowDropdownCircle} from 'react-icons/io';

/* LOADING */
import BounceLoader from "react-spinners/BounceLoader";
import zIndex from '@material-ui/core/styles/zIndex';
import Preloader from '../../../Shared/preloader/preloader';







export default function Analisis() {

  const styleLoading = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" ,zIndex:"3"};
 
  /* CONTEXT */
  let {
    StadisticVideo,setStatisticVideo, setInputVideoFile
      ,setVideoMeta , setTrimmedVideoFile, setURL, setTrimIsProcessing, setRstart, setRend
      , setThumbNails, setThumbnailIsProcessing,loading,originalVideo,setOriginalVideo,setCutVideo,setDowload,selectEvents,setSelectEvents
  }=React.useContext(AppContext); 


  
  /* REACT UseStates */
  let [SelectEvent,setSelectEvent]=React.useState(false);
  let [SelectHorse,setSelectHorse]=React.useState(false);
  /* VIDEO */
  let [file,setFile]=React.useState(null);

  const fileInputChange=(event)=>{
     if(!SelectHorse){
      Swal.fire({
        icon: 'error',
        title: 'Primero selecciona un evento y un ejemplar.',
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
     console.log(!SelectEvent);
     setSelectEvent(!SelectEvent)
     
  }

  const getSelectHorse=(event)=>{
    setSelectHorse(true); 
  }


  
  /*OPTIONS SELECT */
  const options = [
    { value: 'Evento 1', label: 'Evento 1' },
    { value: 'Evento 2', label: 'Evento 2' },
    { value: 'Evento 3', label: 'Evento 3' },
    { value: 'Evento 4' ,label: 'Evento 4' } 
  ];


  /* */
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
        <div className='AnalisisContainer'>
          <div className='DataContainer'>

             <div className='Container_Video'>
                <div className={`videoContainer ${StadisticVideo ? "bg-p" : "bg-s"}`}>
                   <VideoTrimmer className={`videoContainer ${StadisticVideo ? "display-none-" : "display-flex-"}`}/>
                </div>
                <div className='optionsContainer'>
                  <div className='option'>
                      {StadisticVideo===false ?
                        <></>
                        :
                        <RiScissorsCutFill className='option-icon-video' onClick={()=>
                        {
                          setCutVideo(true);
                        }                          
                        }></RiScissorsCutFill>
                        }
                    
                  </div>
                  <div className='option' >
                    {StadisticVideo===false ?
                    <></>
                    :
                    <FaTrash className='option-icon-video' onClick={()=>{
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
                  }}/>
                    }
                  </div>
                  
                  <div className='option'>
                      {StadisticVideo===false ?
                        <></>
                        :
                        <BsDownload className='option-icon-video' onClick={()=>{
                            
                            setDowload(true);
                        }
                         
                        }></BsDownload>
                        }
                    
                  </div>
                </div>
             </div>

             {SelectHorse===true ? 
              <div className='Container_Details_Video'>
                <div className='Container_Details_Video_1'>
                        <figure className='img-container Analitic-imag-2'>
                                    <img src={HorsePhoto} className='img-event Analitic-imag-2'></img>
                        </figure>
                        <div className='Details-horse-selected'>
                             <span className='white fz-big'>Conde del viento</span>
                             <span className='gray fz-small'>Andar: <span className='orange fw'>P4 </span><span className='white'>Paso fino Colombiano</span></span>
                             <span className='gray fz-small'>Categoría: <span className='white'>Potros en proceso con primera enfrenada</span></span>
                             <span className='gray fz-small'>Edad: <span className='white'>38 meses</span></span>
                             <span className='gray fz-small'>Tipo: <span className='orange fw'>C </span><span className='white'>Caballar</span></span>
                             <span className='gray fz-small'>Registro del equino: <span className='white'>ver</span></span>
                             <span className='white fz-small'>Montador: <span className='orange fw'>Alejandro Soto</span></span>
                        </div>
                        <div className='Container-horse-selected-buttons'>
                                <button className='Button-horse-selected bg-green'>Analizar video</button>
                                <button className='Button-horse-selected bg-orange'>Guardar</button>
                        </div>
                </div>
                <div className='Container_Details_Video_2'>
                   <span className='white fz-big-2'>BPM</span>
                   <div className='Container-result-bpm'>
                       <span className='bpm-result-text'>500</span>
                   </div>
                   <div className='Container-video-result-bpm'>
                      <span className='white mb-small'>video esqueleto:</span>
                      <div className='Container-video-result'>

                      </div>
                   </div>
                </div>


             </div>
             :
             <></>
             }   
             
            
          </div>
          <div className='SelectContainer'>

            {SelectEvent===false ? 
              <>
              <div className='Select' style={{cursor:"pointer"}}>
                <Select
                onChange={(event)=>ChangeSelectEvent(event,true)}
                options = {options}  
                className="selectAnalisis" 
                placeholder="Seleccione un evento"
                
                
                />
              </div>
              <div className='buttonEventContainer'>
                <button className='buttonEvent pl-5 btnHoverWhite'><span className="tw-500 font-size-15pt  c-orange mr-3px mt-3px ">+</span><span className="c-orange font-size-10pt">Nuevo Evento</span></button>
              </div>
              </>
            :
            <>

            <div className='label-event-Analitic-Container'>
                <figure className='img-container'>
                  <img src={Logo} className='img-event'></img>
                </figure>
                <div className='p-column'>
                  <span className='t-white t-b'>65° Feria Equina</span>
                  <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                  <span className='t-white t-xs'>Grado: A</span>
                  <div  className='changeContainer'>
                      <span className='TextChange' onClick={()=>{
                   setSelectEvent(false);
                   setSelectHorse(false);
                }}>cambiar</span>
                      <IoIosArrowDropdownCircle className='IconBack'onClick={()=>{
                   setSelectEvent(false);
                   setSelectHorse(false);
                }}/>
                  </div>
                  
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
                     <div className='ElementHorseContainer' onClick={getSelectHorse}>
                        <figure className='img-container Analitic-imag'>
                            <img src={HorsePhoto} className='img-event Analitic-imag'></img>
                        </figure>
                        <div className='p-column' style={{paddingTop:"5px"}}>
                          <span className='t-white t-b' style={{fontSize:"1rem"}}>Conde del viento</span>
                          <span className='orange t-xs'>Alejandro soto</span>
                        </div>
                     </div>
                     <div className='ElementHorseContainer' onClick={getSelectHorse}>
                        <figure className='img-container Analitic-imag'>
                            <img src={HorsePhoto} className='img-event Analitic-imag'></img>
                        </figure>
                        <div className='p-column' style={{paddingTop:"5px"}}>
                          <span className='t-white t-b' style={{fontSize:"1rem"}}>Conde del viento</span>
                          <span className='orange t-xs'>Alejandro soto</span>
                        </div>
                     </div>
                     <div className='ElementHorseContainer' onClick={getSelectHorse}>
                        <figure className='img-container Analitic-imag'>
                            <img src={HorsePhoto} className='img-event Analitic-imag'></img>
                        </figure>
                        <div className='p-column' style={{paddingTop:"5px"}}>
                          <span className='t-white t-b' style={{fontSize:"1rem"}}>Conde del viento</span>
                          <span className='orange t-xs'>Alejandro soto</span>
                        </div>
                     </div> 
                     <div className='ElementHorseContainer' onClick={getSelectHorse}>
                        <figure className='img-container Analitic-imag'>
                            <img src={HorsePhoto} className='img-event Analitic-imag'></img>
                        </figure>
                        <div className='p-column' style={{paddingTop:"5px"}}>
                          <span className='t-white t-b' style={{fontSize:"1rem"}}>Conde del viento</span>
                          <span className='orange t-xs'>Alejandro soto</span>
                        </div>
                     </div>
                </div>

                <div className='ListInCompetitionContainer' onClick={getSelectHorse}>
                    <div className='ListInCompetitionTitleContainer'>
                        <span className='TitleInCompetition'>Procesados</span><span className='NumberInCompetition'>15</span>
                    </div>
                </div>
                <div className='ListHorseContainer'>
                     <div className='ElementHorseContainer' onClick={getSelectHorse}>
                        <figure className='img-container Analitic-imag'>
                            <img src={HorsePhoto} className='img-event Analitic-imag'></img>
                        </figure>
                        <div className='p-column' style={{paddingTop:"5px"}}>
                          <span className='t-white t-b' style={{fontSize:"1rem"}}>Conde del viento</span>
                          <span className='orange t-xs'>Alejandro soto</span>
                        </div>
                     </div>
                     <div className='ElementHorseContainer' onClick={getSelectHorse}>
                        <figure className='img-container Analitic-imag'>
                            <img src={HorsePhoto} className='img-event Analitic-imag'></img>
                        </figure>
                        <div className='p-column' style={{paddingTop:"5px"}}>
                          <span className='t-white t-b' style={{fontSize:"1rem"}}>Conde del viento</span>
                          <span className='orange t-xs'>Alejandro soto</span>
                        </div>
                     </div>
                     <div className='ElementHorseContainer' onClick={getSelectHorse}>
                        <figure className='img-container Analitic-imag'>
                            <img src={HorsePhoto} className='img-event Analitic-imag'></img>
                        </figure>
                        <div className='p-column' style={{paddingTop:"5px"}}>
                          <span className='t-white t-b' style={{fontSize:"1rem"}}>Conde del viento</span>
                          <span className='orange t-xs'>Alejandro soto</span>
                        </div>
                     </div>
                     <div className='ElementHorseContainer' onClick={getSelectHorse}>
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
