import React from 'react';
import {BsFillPlayFill} from 'react-icons/bs';
import Table from 'react-bootstrap/Table';
import HorsePhoto from '../../Sources/Images//Estadisticas/HorsePhoto.jpg';
import ReactPlayer from 'react-player';
import Conteo from '../../Sources/Video/Conteo.mp4';
import './tablehorse.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as Icon from 'react-bootstrap-icons';
/* TOOL TIP */
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ListGroup from 'react-bootstrap/ListGroup'; 
import {AiFillCloseCircle} from 'react-icons/ai';
// import  Video from  '../../Sources/Video/MessiCampeon.mp4';

export default function Tablehorse({Event,filterValue,DeleteEvent}) {
  
    

    /*USE STATE */
    let [ShowVideo,setShowVideo]=React.useState(false);

    let [Andar,setAndar]=React.useState(1);
    let [filterValueHorse,setFilterValueHorse]=React.useState("");
    let [ListHorses,setListHorses]=React.useState([]);
    let [videoFile,setVideoFile]=React.useState(null);
    /* ARRAY */
    let [horses,setHorses]=React.useState(Event.Horses.filter((obj)=> obj.andar.toString() === Andar.toString()));


    const ChangeInputHorse=(event)=>{
               setFilterValueHorse(event.target.value);
               if(event.target.value===""){
                setHorses(Event.Horses.filter((obj)=> obj.andar.toString() === Andar.toString()));
               }else{
                setHorses(Event.Horses.filter((obj)=> obj.andar.toString() === Andar.toString() && obj.nombre.toString().toLowerCase().includes(event.target.value.toLowerCase())) );
               }     
    }


    

    

  return (
             <>
             <div className='Est-Container-2'  >
                          <div className='label-event-Estadistics-Container' >
                              <figure className='img-container'  >
                                <img crossorigin="anonymous" src={Event.imagen} className='img-event'></img>
                              </figure>
                              
                              <div className='p-column'>
                                <span className='t-white t-b bold-size'  >{Event.nombre_evento}</span>
                                <span className='t-white t-xs small-size orange' >{Event.lugar}</span>
                                <span className='t-white t-xs small-size gray-dc' >{Event.fecha_inicio }<span className='small-size'>{' / '}</span> {Event.fecha_fin}</span>
                                <div  className='changeContainer '>
                                        <span className='TextChange mr--3' onClick={()=>{DeleteEvent()}}>Eliminar</span>
                                        <AiFillCloseCircle className='IconBack' onClick={()=>{ DeleteEvent()}}/>
                                </div>
                              </div>
                          </div>
                          <div className='filter-Horse-Estadistics-Container'  >
                              <InputGroup onChange={ChangeInputHorse} className="mb-3" id="p-row">
                                <InputGroup.Text id="basic-addon1"><Icon.Search /></InputGroup.Text>
                                <Form.Control
                                  placeholder="Ingrese el ejemplar"
                                  aria-label="Ingrese el ejemplar"
                                  aria-describedby="basic-addon1"
                                />
                              </InputGroup>
                          </div>
                          
             </div>
             <div className='Est-Container-3' >
                          <ListGroup horizontal defaultActiveKey="#link1">
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" className='tooltipEdit'>Ejemplares del andar del Trote y Galope</Tooltip>}>
                              <ListGroup.Item action eventKey="#link1" onClick={()=>{
                                setHorses(Event.Horses.filter((obj)=> obj.andar.toString() === "1" && obj.nombre.toString().toLowerCase().includes(filterValueHorse.toLowerCase())));
                                setAndar(1);
                              }}>Andar P1</ListGroup.Item>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" className='tooltipEdit'>Ejemplares del andar de la Trocha y Galope</Tooltip>}>
                              <ListGroup.Item action eventKey="#link2"  onClick={()=>{
                                setHorses(Event.Horses.filter((obj)=> obj.andar.toString() === "2" && obj.nombre.toString().toLowerCase().includes(filterValueHorse.toLowerCase())));
                                setAndar(2);
                              }}>Andar P2</ListGroup.Item>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" className='tooltipEdit'>Ejemplares del andar de la Trocha Pura Colombiana</Tooltip>}>
                              <ListGroup.Item action eventKey="#link3"  onClick={()=>{
                                setHorses(Event.Horses.filter((obj)=> obj.andar.toString() === "3" && obj.nombre.toString().toLowerCase().includes(filterValueHorse.toLowerCase())));
                                setAndar(3);
                              }}>Andar P3</ListGroup.Item>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" className='tooltipEdit'>Ejemplares del andar del Paso Fino Colombiano</Tooltip>}>
                              <ListGroup.Item action eventKey="#link4"  onClick={()=>{
                                setHorses(Event.Horses.filter((obj)=>  obj.andar.toString() === "4" && obj.nombre.toString().toLowerCase().includes(filterValueHorse.toLowerCase())));
                                setAndar(4);
                              }}>Andar P4</ListGroup.Item>
                            </OverlayTrigger>

                          </ListGroup>
                          <div className='tableContainer'>
                            <div className='table_2'>
                            {ShowVideo===false ?
            
                              <>
                              <Table>
                                    <thead>
                                        <tr>
                                        <th className='titletext'>Nombre</th>
                                        <th className='titletext'>Edad</th>
                                        <th className='titletext'>Andar</th>
                                        <th className='titletext'>Número</th>
                                        <th className='titletext'>BPM</th>
                                        <th className='titletext'>Jinete</th>
                                        <th className='titletext'>Videos</th>
                                        </tr>
                                    </thead>
                                    <tbody className='tablebody'>
                                        {horses.map(Horse=>{
                                        return(
                                            
                                            <tr key={Horse.id}>
                                                <td className='NameTable b-none'><img  crossorigin="anonymous" src={Horse.imagen} className='HorseImage'/><span className='NameText middle-size'>{Horse.nombre}</span></td>
                                                <td className='b-none text-table second-size pt-15px'>{Horse.edad+' meses'}</td>
                                                <td className='b-none text-table second-size pt-15px'>{'P'+Horse.andar}</td>
                                                <td className='b-none text-table second-size pt-15px'>{Horse.tipo}</td>
                                                <td className='b-none'>{Horse.bps!==null ? <><span className='BPMData middle-size'>{Horse.bps}</span></> :<> <AiFillCloseCircle className='iconVideoPlay ml-20px'/></>}</td>
                                                <td className='b-none'><span className='PointData middle-size pt-15px'>{Horse.caballista}</span></td>
                                                <td className='b-none'>
                                                    {Horse.video_procesado===""  ?
                                                    <>
                                                      <AiFillCloseCircle className='iconVideoPlay ml-20px'/> 
                                                    </>
                                                    :
                                                    <>
                                                    <div className='iconVideoPlayContainer' onClick={()=>{
                                                      setShowVideo(true);
                                                      setVideoFile(Horse.video_procesado);
                                                      
                                                    }}>
                                                      <BsFillPlayFill className='iconVideoPlay margin-left'/>
                                                    </div>

                                                    </>
                                                    }
                                                    
                                                </td>
                                            </tr>
                                        );
                                            
                                        })}
                                        
                                        
                                    </tbody>
                             </Table> 
                                
                                  
                              </>
                              :
                              <>
                                
                              <ReactPlayer className="VideoPlayer"   controls={true} url={videoFile} playing={true} width={'100%'} height={'100%'} youtubeConfig={{ playerVars: { showinfo: 1 } }}/>
                              <button className='buttonVideo' onClick={()=>setShowVideo(false)}>X</button>

                              </>
                            }
                            
                              
                            </div>
                          </div>
              </div>
             


             </>  
              


                    
  );
}
