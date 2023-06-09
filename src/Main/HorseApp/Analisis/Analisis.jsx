import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Navigate,Routes, Route} from 'react-router-dom';
import './Analisis.css';
/* TOOL TIP */
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


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
import {FaTrash} from 'react-icons/fa';
import {RiScissorsCutFill} from 'react-icons/ri';
import {BsDownload,BsArrowCounterclockwise} from 'react-icons/bs';
import Marcadores from '../../../Sources/Video/Marcadores.mp4';


/* VIDEO EDITOR */
import VideoTrimmer from '../../../Shared/Video-Trimming/videoTrimmer/videoTrimmer';
/* CONTEXT */
import { AppContext } from '../../../Context';
import {IoIosArrowDropdownCircle} from 'react-icons/io';

/* LOADING */
import Preloader from '../../../Shared/preloader/preloader';
import { ProcessVideo, ProcessVideoEsqueleto, SaveVideoConteo, SaveVideoEsqueleto, setVideo } from '../../../Services/video/videoModel';

/* MODAL */
import Modal_image from '../../../Shared/Modal_image/modal_image';

const styles = {
  option: (base) => ({
      ...base,
      cursor: "pointer",
      background: "white",
      color:'black !important', 
      fontSize:'0.7rem !important',
      ":hover": {
         backgroundColor: "#FF9300",
         color:'white',
       },
})
}

const Models=[
  {value:"Conteo",label:"Conteo"},
  {value:"Esqueleto",label:"Esqueleto"},
]







export default function Analisis() {

  /* NAVIGATE  */
  const navigate=useNavigate();
  /* FUNCTIONS */
  const RedirectCreateEvent=(event)=>{
    navigate('/Main/HorseApp/Competiciones')
  }


  const styleLoading = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" ,zIndex:"3"};
 
  /* CONTEXT */
  let {Loading_video,
    setLoading_video,cutCount,setcutCount,
    token,setLoading,setEvents,
    SelectEvent,setSelectEvent,
    SelectHorse,setSelectHorse,
    trimmedVideoFile,showModal,setshowModal,typeModel,setTypeModel,
    StadisticVideo,setStatisticVideo,inputVideoFile,setInputVideoFile
      ,setVideoMeta , setTrimmedVideoFile, setURL, setTrimIsProcessing, setRstart, setRend
      , setThumbNails, setThumbnailIsProcessing,loading,loadEventsForSelect,originalVideo,setOriginalVideo,setCutVideo,setDowload,selectEvents,events,FindEventId,setRETURN_ORIGINAL
  }=React.useContext(AppContext); 

  
  /* REACT UseStates */
  let [Category,setCategory]=React.useState('P1');
  let [Choose,setChoose]=React.useState(null);
  let [unprocess,setUnprocess]=React.useState([]);
  let [process,setProcess]=React.useState([]);
  let [valueInput,setValueInput]=React.useState("");

  /* VIDEO */
  let [file,setFile]=React.useState(null);



  const fileInputChange=(event)=>{
     if(!SelectHorse){
      Swal.fire({
        icon: 'error',
        title: 'Primero selecciona un evento y un ejemplar.',
      })
     }
  }
  


  /* CHANGE USESTATES */

  const ChangeSelectEvent=(event,select=false)=>{
    // console.log(event.value);}
    let Value=null;
     if(select){
      Value=event.value;
      let feria=FindEventId(event.value);
      let process_2=feria.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0 ) && obj.andar.toString() === "1");
      setProcess(process_2);
      setUnprocess(feria.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 && obj.video_guardado.length===0 ) && obj.andar.toString() === "1"));
      setChoose(FindEventId(event.value));
     }
     console.log(!SelectEvent);
     setSelectEvent(!SelectEvent)
     
  }

  const getSelectHorse=(Horse)=>{
    setSelectHorse({...Horse,['bps']:"",['video_procesado']:"",['video_esqueleto']:""}); 
  }


  
  /*OPTIONS SELECT */
  React.useEffect(()=>{
    loadEventsForSelect();
  },[events])

  /* CHANGE DROP */
  const changeDrop=(event)=>{
    setCategory(event);
    if(event==='P1'){
      setProcess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0 ) && obj.andar.toString() === '1' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
      setUnprocess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0 ) && obj.andar.toString() === '1' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
    }else if (event==="P2"){
      setProcess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0 ) && obj.andar.toString() === '2' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
      setUnprocess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0 ) && obj.andar.toString() === '2' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));

    }else if (event==="P3"){

      setProcess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0  ) && obj.andar.toString() === '3' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
      setUnprocess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0  ) && obj.andar.toString() === '3' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
    }else{
      setProcess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0  ) && obj.andar.toString() === '4' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
      setUnprocess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0  ) && obj.andar.toString() === '4' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
    }
    
  }

  const readInput=(event)=>{
     setValueInput(event.target.value);
     if(Category==='P1'){
      setProcess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0  ) && obj.andar.toString() === '1' && obj.nombre.toLowerCase().includes(event.target.value.toLowerCase())));
      setUnprocess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0  ) && obj.andar.toString() === '1' && obj.nombre.toLowerCase().includes(event.target.value.toLowerCase())));
    }else if (Category==="P2"){
      setProcess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0  ) && obj.andar.toString() === '2' && obj.nombre.toLowerCase().includes(event.target.value.toLowerCase())));
      setUnprocess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0  ) && obj.andar.toString() === '2' && obj.nombre.toLowerCase().includes(event.target.value.toLowerCase())));

    }else if (Category==="P3"){

      setProcess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0  ) && obj.andar.toString() === '3' && obj.nombre.toLowerCase().includes(event.target.value.toLowerCase())));
      setUnprocess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0  ) && obj.andar.toString() === '3' && obj.nombre.toLowerCase().includes(event.target.value.toLowerCase())));
    }else{
      setProcess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0  ) && obj.andar.toString() === '4' && obj.nombre.toLowerCase().includes(event.target.value.toLowerCase())));
      setUnprocess(Choose.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0  ) && obj.andar.toString() === '4' && obj.nombre.toLowerCase().includes(event.target.value.toLowerCase())));
    }

  }

  const selectMessage=(categoria)=>{
    if (categoria==="P1"){
      return "Ejemplares del andar del Trote y Galope"
    }else if (categoria==="P2"){
       return "Ejemplares del andar de la Trocha y Galope"
    }else if (categoria==="P3"){
       return "Ejemplares del andar de la Trocha Pura Colombiana"
    }else{
      return "Ejemplares del andar del Paso Fino Colombiano"
    }
  }
  function dataURLtoFile(dataurl, filename) {
 
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, {type:mime});
}

  const checkVideo=async()=>{
    
    
    if(inputVideoFile===null){
       Swal.fire({
         icon: 'error',
         title: 'Sube un video para analizar',
       })
     }else{

      if(typeModel==="Tipo"){
        Swal.fire({
          icon: 'error',
          title: 'Selecciona el tipo de modelo para procesar',
        })
      }else{

        if(typeModel==="Conteo"){
          let result=undefined;
            //setLoading(true);
            setLoading_video(true);

            result=await setVideo(SelectHorse,token,dataURLtoFile(trimmedVideoFile,'project.mp4')).catch((error)=>{
              console.log(error);
              setLoading_video(false);
              //setLoading(false);
              Swal.fire({
                icon: 'error',
                title: 'Problemas para ejecutar el modelo',
              })
            })
            if(result!== undefined){
              console.log(result['data']);
              result=undefined;

              result=await ProcessVideo(SelectHorse,token).catch((error)=>{
              
                console.log(error);
                setLoading_video(false);
                //setLoading(false);
                Swal.fire({
                  icon: 'error',
                  title: 'Problemas para ejecutar el modelo',
                })

              })

              if (result!== undefined){
                console.log(result['data']);
                setLoading_video(false);
                //setLoading(false);
                Swal.fire({
                  icon: 'success',
                  title: 'Modelo ejecutado con exito',
                })



          //       /* CAMBIAMOS EL CABALLO SELECCIONADO */
                setSelectHorse(result['data'].caballo);
                let Copy={...Choose};
                for (var i=0;i<Choose.Horses.length;i++){
                  if(Choose.Horses[i].id===result['data'].caballo.id){
                    
                    Copy.Horses[i]=result['data'].caballo;
                    setChoose(Copy);
                    break;

                  }
                }
              }
              
              

            }
        


     
        }else{
            let result=undefined;
            setLoading_video(true);
            result=await setVideo(SelectHorse,token,dataURLtoFile(trimmedVideoFile,'project.mp4')).catch((error)=>{
              console.log(error);
              setLoading_video(false);
              Swal.fire({
                icon: 'error',
                title: 'Problemas para ejecutar el modelo',
              })
            })
            if(result!== undefined){
              console.log(result['data']);
              result=undefined;
              result=await ProcessVideoEsqueleto(SelectHorse,token).catch((error)=>{
              
                console.log(error);
                setLoading_video(false);
                Swal.fire({
                  icon: 'error',
                  title: 'Problemas para ejecutar el modelo',
                })

              })

              if (result!== undefined){
                console.log("resultados caballo esqueleto: ",result['data']);
                setLoading_video(false);
                Swal.fire({
                  icon: 'success',
                  title: 'Modelo ejecutado con exito',
                })



          //       /* CAMBIAMOS EL CABALLO SELECCIONADO */
                setSelectHorse(result['data'].caballo);
                let Copy={...Choose};
                for (var i=0;i<Choose.Horses.length;i++){
                  if(Choose.Horses[i].id===result['data'].caballo.id){
                    
                    Copy.Horses[i]=result['data'].caballo;
                    setChoose(Copy);
                    break;

                  }
                }
              }
              
              

            }

        }
        


      }
       
       
  }
 }


 const saveVideo=async()=>{

  if(typeModel==="Tipo"){
    Swal.fire({
      icon: 'error',
      title: 'Selecciona el tipo de modelo para procesar',
    })
  }else{
    if (typeModel==="Conteo"){

      setLoading(true);

      if (SelectHorse.video_procesado==="" || SelectHorse.video_procesado===null){
        Swal.fire({
          icon: 'error',
          title: 'No hay analisis previo para guardar.',
        })
        setLoading(false);
      }else{
        let result=undefined;
        result=await SaveVideoConteo(SelectHorse,token).catch((error)=>{
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Selecciona el tipo de modelo para procesar',
          })
          setLoading(false);
  
        })
        if (result!==undefined){
          console.log(result['data']);
          Swal.fire({
            icon: 'success',
            title: 'Resultados guardados correctamente',
          })
          setLoading(false);
           /* CAMBIAMOS EL CABALLO SELECCIONADO */
           setSelectHorse({...result['data'].caballo,['video_procesado']:""});
           let Copy={...Choose};
           for (var i=0;i<Choose.Horses.length;i++){
             if(Choose.Horses[i].id===result['data'].caballo.id){
               
               Copy.Horses[i]={...result['data'].caballo,['video_procesado']:""};
               setChoose(Copy);
               break;

             }
           }

     //       /* CAMBIAMOS EL ARREGLO GLOBAL DE EVENTOS */
           let Copy_events=[...events];
           for (var i=0;i<events.length;i++){
             if(events[i].id===Copy.id){
               Copy_events[i]=Copy;
               setEvents(Copy_events);
               break;

             }
           }

     //       /* CAMBIAMOS EL ARREGLO  */

           if(Category==='P1'){
             setProcess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0  ) && obj.andar.toString() === '1' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
             setUnprocess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0  ) && obj.andar.toString() === '1' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
           }else if (Category==="P2"){
             setProcess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0  ) && obj.andar.toString() === '2' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
             setUnprocess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0  ) && obj.andar.toString() === '2' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
       
           }else if (Category==="P3"){
       
             setProcess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0  ) && obj.andar.toString() === '3' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
             setUnprocess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0  ) && obj.andar.toString() === '3' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
           }else{
             setProcess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0  ) && obj.andar.toString() === '4' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
             setUnprocess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0  ) && obj.andar.toString() === '4' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
           }
          
        }
      
      }
       
       

    }else{

      if (SelectHorse.video_esqueleto==="" || SelectHorse.video_esqueleto===null){
        Swal.fire({
          icon: 'error',
          title: 'No hay analisis previo para guardar.',
        })
        setLoading(false);
      }else{
        let result=undefined;
        result=await SaveVideoEsqueleto(SelectHorse,token).catch((error)=>{
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Error al guardar resultados.',
          })
          setLoading(false);
  
        })
        if (result!==undefined){
          console.log(result['data']);
          Swal.fire({
            icon: 'success',
            title: 'Resultados guardados correctamente',
          })
          setLoading(false);

              /* CAMBIAMOS EL CABALLO SELECCIONADO */
              setSelectHorse({...result['data'].caballo,['video_esqueleto']:""});
              let Copy={...Choose};
              for (var i=0;i<Choose.Horses.length;i++){
                if(Choose.Horses[i].id===result['data'].caballo.id){
                  
                  Copy.Horses[i]={...result['data'].caballo,['video_esqueleto']:""};
                  setChoose(Copy);
                  break;

                }
              }

        //       /* CAMBIAMOS EL ARREGLO GLOBAL DE EVENTOS */
              let Copy_events=[...events];
              for (var i=0;i<events.length;i++){
                if(events[i].id===Copy.id){
                  Copy_events[i]=Copy;
                  setEvents(Copy_events);
                  break;

                }
              }

        //       /* CAMBIAMOS EL ARREGLO  */

              if(Category==='P1'){
                setProcess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0  ) && obj.andar.toString() === '1' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
                setUnprocess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0  ) && obj.andar.toString() === '1' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
              }else if (Category==="P2"){
                setProcess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0  ) && obj.andar.toString() === '2' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
                setUnprocess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0  ) && obj.andar.toString() === '2' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
          
              }else if (Category==="P3"){
          
                setProcess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0  ) && obj.andar.toString() === '3' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
                setUnprocess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0  ) && obj.andar.toString() === '3' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
              }else{
                setProcess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length!==0 || obj.video_guardado.length!==0  ) && obj.andar.toString() === '4' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
                setUnprocess(Copy.Horses.filter((obj)=>(obj.video_esqueleto_guardado.length===0 || obj.video_guardado.length===0  ) && obj.andar.toString() === '4' && obj.nombre.toLowerCase().includes(valueInput.toLowerCase())));
              }
        }
      
      }

      





    }

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
                          setcutCount(true);
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
                  <div className='option'>
                      {StadisticVideo===false ?
                        <></>
                        :
                        <BsArrowCounterclockwise className='option-icon-video' onClick={()=>{
                            if(cutCount===true){
                              setcutCount(false);
                              setRETURN_ORIGINAL(true);
                            }
                            
                        }
                         
                        }></BsArrowCounterclockwise>
                        }
                    
                  </div>
                </div>
             </div>

             {SelectHorse!==false ? 
              <div className='Container_Details_Video'>
                <div className='Container_Details_Video_1'>
                        <figure className='img-container Analitic-imag-2'>
                                    <img crossorigin="anonymous" src={SelectHorse.imagen} className='img-event Analitic-imag-2'></img>
                        </figure>
                        <div className='Details-horse-selected'>
                             <span className='white fz-big extend fz-08'>{SelectHorse.nombre}</span>
                             <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" className='tooltipEdit'>{selectMessage('P'+SelectHorse.andar)}</Tooltip>}>
                               <span className='gray fz-small display-f-80px'>Andar: <span className='orange fw'>{' P'+SelectHorse.andar+' '}</span></span>
                             </OverlayTrigger>
                             
                             <span className='gray fz-small extend'>Edad: <span className='white'>{SelectHorse.edad+ ' meses'}</span></span>
                             <span className='gray fz-small extend'>Jinete: <span className='orange fw'>{SelectHorse.caballista}</span></span>
                             <span className='gray fz-small extend'>Criador: <span className='white fw'>{SelectHorse.criador}</span></span>
                             <span className='gray fz-small extend'>Propietario: <span className='orange fw'>{SelectHorse.propietario}</span></span>
                        </div>
                        <div className='Container-horse-selected-buttons'>
                                
                                <Select
                                  styles={styles}
                                  options = {Models}
                                  onChange={(event)=>setTypeModel(event.value)}
                                  value={{value:typeModel,label:typeModel}}  
                                  className="Button-horse-selected" 
                                  placeholder="Modelo"
                                />
                                <button className='Button-horse-selected bg-red bottom-10px' onClick={()=>{
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
                                  setSelectHorse(false);
                                }}>Cancelar</button>
                                
                        </div>
                        <div className='Container-horse-selected-buttons'>
                                {Loading_video ===true ?
                                
                                <>
                                <button className='Button-horse-selected bg-green'>Analizando...</button>
                                </>
                                :
                                <>
                                <button className='Button-horse-selected bg-green' onClick={checkVideo}>Analizar video</button>
                                </>
                                }
                                
                                <button className='Button-horse-selected bg-orange' onClick={saveVideo}>Guardar</button>
                        </div>
                </div>
                {SelectHorse.bps!==null && typeModel==="Conteo" ?
                <>
                <div className='Container_Details_Video_2'>
                   <span className='white fz-big-2'>BPM</span>
                   <div className='Container-result-bpm'>
                       <span className='bpm-result-text'>{SelectHorse.video_procesado==="" ? <></> : <>{SelectHorse.bps}</>}</span>
                   </div>
                   <div className='Container-video-result-bpm'>
                      <span className='white mb-small'>video resultante:</span>
                      <div className='Container-video-result'>
                            {SelectHorse.video_procesado!=="" ? <video crossorigin="anonymous" src={SelectHorse.video_procesado} className="video-marcadores" controls></video> : <></>}
                      </div>
                   </div>
                </div>
                </>
                :
                <>
                </>
                }
                {SelectHorse.video_esqueleto!==null && typeModel==="Esqueleto" ?
                <>
                <div className='Container_Details_Video_2'>
                   <span className='white fz-big-2' style={{visibility:'hidden'}}>BPM</span>
                    <div className='Container-result-bpm' style={{visibility:'hidden'}}>
                        <span className='bpm-result-text'>{SelectHorse.video_procesado==="" ? <>---</> : <>{SelectHorse.bps}</>}</span>
                   </div>
                   <div className='Container-video-result-bpm'>
                      <span className='white mb-small'>video resultante:</span>
                      <div className='Container-video-result'>
                            {SelectHorse.video_esqueleto!=="" ? <video crossorigin="anonymous" src={SelectHorse.video_esqueleto} className="video-marcadores" controls></video> : <></>}
                      </div>
                   </div>
                </div>
                </>
                :
                <>
                </>
                }
                


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
                styles={styles}
                onChange={(event)=>ChangeSelectEvent(event,true)}
                options = {selectEvents}  
                className="selectAnalisis middle-size" 
                placeholder="Seleccione evento"
                />

              </div>
              <div className='buttonEventContainer'>
                <button className='buttonEvent pl-5 btnHoverWhite ' onClick={RedirectCreateEvent}><span className="tw-500 font-size-15pt  c-orange mr-3px mt-3px font-size ml-4px ">+</span><span className="c-orange middle-size">Nuevo Evento</span></button>
              </div>
              </>
            :
            <>

            <div className='label-event-Analitic-Container'>
                <figure className='img-container'>
                  <img crossorigin="anonymous" src={Choose.imagen} className='img-event'></img>
                </figure>
                <div className='p-column'>
                  <span className='t-white t-b font-size bold-size'>{Choose.nombre_evento}</span>
                  <span className='t-white t-xs middle-size small-size orange'>{Choose.lugar}</span>
                  <span className='t-white t-xs middle-size  small-size '>{Choose.fecha_inicio }<span className='small-size'>{' / '}</span> {Choose.fecha_fin}</span>
                  <div  className='changeContainer right-10px'>
                      <span className='TextChange' onClick={()=>{
                   setSelectEvent(false);
                   setSelectHorse(false);
                   setCategory('P1');
                   setValueInput("");
                }}>cambiar</span>
                      <IoIosArrowDropdownCircle className='IconBack'onClick={()=>{
                   setSelectEvent(false);
                   setSelectHorse(false);
                   setCategory('P1');
                   setValueInput("");
                }}/>
                  </div>
                  
                </div>
            </div>

            {
              Choose.Horses.length===0 ?
              <></>
              :
              <div className='display-row mt-3 middle-size'>
                <InputGroup onChange={readInput}  className="mt-3 ">
                  <Form.Control  aria-label="TextInput middle-size" placeholder="ejemplar"/>

                    <DropdownButton
                      variant="outline-secondary"
                      id="input-group-dropdown-2"
                      align="end"
                      title={Category}
                    >
                    <Dropdown.Item href="#"  onClick={()=>changeDrop('P1')}>P1</Dropdown.Item>
                    <Dropdown.Item href="#"  onClick={()=>changeDrop('P2')}>P2</Dropdown.Item>
                    <Dropdown.Item href="#"  onClick={()=>changeDrop('P3')}>P3</Dropdown.Item>
                    <Dropdown.Item href="#"  onClick={()=>changeDrop('P4')}>P4</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>
            </div>
            }
            
            <div className='ContainerOverflow-y'>
                

                {Choose.Horses.length===0 ?
                <>
                <div className='ListInCompetitionContainer'>
                    <div className='ListInCompetitionTitleContainer'>
                        <span className='TitleInCompetition'>No hay Ejemplares</span><span className='NumberInCompetition'>0</span>
                    </div>
                </div>

                 
               
                </>
                :
                <>
                <div className='DetailsContainer_an'>
                      <span className='white'>Participantes:  <span className='orange fw'>{Choose.Horses.length}</span></span>   
                      <span className='gray fz-small'>Andar: <span className='orange'>{Category}</span> </span> 
                      <span className='gray fz-small'><span>{selectMessage(Category)}</span></span> 
                      <p className='fz-small width-100 white'>{Choose.descripcion}</p>
                      {/* <span className='gray fz-small'>Categoria:<span className='white'> Potros en proceso con primera enfrenada</span></span>  */}
                </div>
                {unprocess.length===0 ?
                <>
                { process.length===0 ? 
                <>
                <div className='ListInCompetitionContainer'>
                    <div className='ListInCompetitionTitleContainer'>
                        <span className='TitleInCompetition white'>No hay Ejemplares</span><span className='NumberInCompetition'>{0}</span>
                    </div>
                </div>

                </>

                :
                <></>
                }

                </>
                :
                <>
                <div className='ListInCompetitionContainer'>
                    <div className='ListInCompetitionTitleContainer'>
                        <span className='TitleInCompetition c-green-title'>Sin procesar</span><span className='NumberInCompetition'>{unprocess.length}</span>
                    </div>
                </div>
                </>
                }
                
                <div className='ListHorseContainer'>
                {unprocess.map(Horse=>{
                              return(
                                <div className='ElementHorseContainer' onClick={()=>getSelectHorse(Horse)}>
                                    <figure className='img-container Analitic-imag'>
                                        <img crossorigin="anonymous" src={Horse.imagen} className='img-event Analitic-imag'></img>
                                    </figure>
                                    <div className='p-column' style={{paddingTop:"5px"}}>
                                      <span className='t-white t-b extend w-200' style={{fontSize:"1rem"}}>{Horse.nombre}</span>
                                      <span className='orange t-xs extend w-200'>{Horse.caballista}</span>
                                    </div>
                                </div>
                                            
                                            
                                );
                                            
                       })}
                </div>

                {process.length!==0 ?
                
                <>
                <div className='ListInCompetitionContainer'>
                    <div className='ListInCompetitionTitleContainer'>
                        <span className='TitleInCompetition c-green-title'>Procesados</span><span className='NumberInCompetition'>{process.length}</span>
                    </div>
                </div>
                </>
                :
                <></>}

                
                <div className='ListHorseContainer'>

                {process.map(Horse=>{
                              return(
                                <div className='ElementHorseContainer' onClick={()=>getSelectHorse(Horse)}>
                                    <figure className='img-container Analitic-imag'>
                                        <img crossorigin="anonymous" src={Horse.imagen} className='img-event Analitic-imag'></img>
                                    </figure>
                                    <div className='p-column' style={{paddingTop:"5px"}}>
                                      <span className='t-white t-b extend w-200' style={{fontSize:"1rem"}}>{Horse.nombre}</span>
                                      <span className='orange t-xs extend w-200'>{Horse.caballista}</span>
                                    </div>
                                </div>
                                            
                                            
                                );
                                            
                       })}
                     
                     
                </div>
                </>
                }

                
            </div>
           
            

             </>
            }
            <Modal_image
            show={showModal}
            onHide={() => setshowModal(false)}
          />  
          </div>
          
        </div>

        
    </>
    
  )
}
