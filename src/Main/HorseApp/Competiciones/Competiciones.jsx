import React from 'react'
import {Navigate,Routes, Route} from 'react-router-dom';
import './Competiciones.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons';
import HorsePhoto from '../../../Sources/Images/Estadisticas/HorsePhoto.jpg';
import EventImageDefault from '../../../Sources/Images/Estadisticas/EventDefaultImage.jpg';
import HorseImageDefault from '../../../Sources/Images/Estadisticas//HorseDefaultImage.jpg';
import {AiFillPlusCircle,AiFillCloseCircle} from 'react-icons/ai';
import {RiEdit2Fill} from 'react-icons/ri';
import {BiImageAdd} from 'react-icons/bi';
import $ from 'jquery';
import Table from 'react-bootstrap/Table';
// import { Col, Row, Container } from "react-bootstrap-grid";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AiOutlineLeft} from 'react-icons/ai';
import {FaTrash} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import Select from 'react-select';
import moment from 'moment';
/*ListGroup*/
import ListGroup from 'react-bootstrap/ListGroup'; 

/* TOOL TIP */
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import CreatableSelect from 'react-select/creatable';




/* CALENDAR */
import { DatePicker } from 'antd';
/* APP CONTEXT */

import { AppContext } from '../../../Context';
import Preloader from '../../../Shared/preloader/preloader';
import { toNumber } from 'lodash';
import Swal from 'sweetalert2';
import { createEvent, deleteEvent, editEvent } from '../../../Services/Events/events';
import { changeHorse, deleteHorse, editHorse, generateHorse } from '../../../Services/Horses/horse';

const options_andar = [
  { value: 1, label: 'P1' },
  { value: 2, label: 'P2' },
  { value: 3, label: 'P3' },
  { value: 4, label: 'P4' },

]
const options_tipo=[
  { value: 'Mular', label: 'Mular' },
  { value: 'Asnal', label: 'Asnal' },
  { value: 'Caballar', label: 'Caballar' },
]

const styles = {
  option: (base) => ({
      ...base,
      cursor: "pointer",
      background: "#e7d6a7",   // this was the mistake (I needed to remove this)
      ":hover": {
         backgroundColor: "#FF9300",
         color:'white',
       },
      ":active":{
        backgroundColor: "#FF9300",
      }
})
}



const customStyles = {
  option: (base, { data, isDisabled, isFocused, isSelected }) => {
  return {
    ...base,
    backgroundColor: isFocused ? "red" : "blue",
  };
}
};

export default function Competiciones() {
  //VARIABLE ROUTING
  const navigate=useNavigate();

  /* APPCONTEXT */
  let {
    token,setcutCount,
    SelectEvent,setSelectEvent,
    SelectHorse,setSelectHorse,
    StadisticVideo,setStatisticVideo, setInputVideoFile
      ,setVideoMeta , setTrimmedVideoFile, setURL, setTrimIsProcessing, setRstart, setRend
      , setThumbNails, setThumbnailIsProcessing,loading,setOriginalVideo,events,setEvents,sleep,setLoading,eventChoosed,setEventChoosed,
  }=React.useContext(AppContext); 
  


  function onChange_start(date, dateString) {
    console.log(date,dateString);
    if(dateString===""){
      setDisabledDate(true);
      setEvent({...event,['fecha_fin']:""})
    }else{
      setDisabledDate(false);
    }
    setEvent({...event,['fecha_inicio']:dateString})
    checkEvent({...event,['fecha_inicio']:dateString});

  }
  function onChange_end(date, dateString) {
    setEvent({...event,['fecha_fin']:dateString})
    checkEvent({...event,['fecha_fin']:dateString});

  }
  function onChange_start_Edit(date, dateString) {
    setEditarEvento({...editarEvento,['fecha_inicio']:dateString});
    checkEvent_Edit({...editarEvento,['fecha_inicio']:dateString});
  }

  function onChange_end_Edit(date, dateString) {
    setEditarEvento({...editarEvento,['fecha_fin']:dateString});
    checkEvent_Edit({...editarEvento,['fecha_fin']:dateString});
  }
  
  /*USE STATES */
  let [CreateButton,setCreateButton]=React.useState(false);
  const [file, setFile] = React.useState(null);
  let [imgFormEvent,setimgFormEvent]=React.useState(null);
  let [imgFormHorse,setImgFormHorse]=React.useState(null);
  let [EditEvent,setEditEvent]=React.useState(false);
  let [EventSelected,setEventSelected]=React.useState(null);
  let [AddHorseButton,setAddHorseButton]=React.useState(false);
  let [EditHorseButton,setEditHorseButton]=React.useState(false);
  let [filter,setFilter]=React.useState(events);
  let [valueFilter,setValueFilter]=React.useState("");
  let [Andar,setAndar]=React.useState(0);
  let [filterValueHorse,setFilterValueHorse]=React.useState("");
  let [ListHorses,setListHorses]=React.useState([]);
  let [disabledDate,setDisabledDate]=React.useState(true);
  let [file_edit_event,set_file_edit_event]=React.useState(null);
  let [Lista_lugares,setLista_lugares]=React.useState([]);
  let [editarEvento,setEditarEvento]=React.useState({
    imagen:'',
    nombre_evento:'',
    lugar:'',
    fecha_inicio:'2023-02-07',
    fecha_fin:'2023-02-07',
    competidores:'',
    descripcion:'',
    Horses:[],
  });

  let [ButtonEventEdit,setButtonEventEdit]=React.useState(false);


  let [event,setEvent]=React.useState({
    imagen:'',
    nombre_evento:'',
    lugar:'',
    fecha_inicio:'',
    fecha_fin:'',
    competidores:'',
    descripcion:'',
    Horses:[],
  })

  let [horse,setHorse]=React.useState({
    id_evento:'',
    nombre:'',
    imagen:'',
    caballista:'',
    edad:'',
    tipo:'Mular',
    andar:1,
    criador:'',
    propietario:'',
    competidor:'',

  })
  let [buttonEvent,setButtonEvent]=React.useState(true);
  let [buttonHorse,setButtonhorse]=React.useState(true);
  let [horseEdit,setHorseEdit]=React.useState(null);

   /* INPUTS */
   const CheckInput=(Event,type)=>{
    setEvent({
      ... event,
      [type]: Event.target.value
    })
    checkEvent({
      ... event,
      [type]: Event.target.value
    });
  }
  const ReadSelectEvent=(EVENT,type)=>{
    console.log("EVENT SELECT: ",EVENT);
    if(event===null){
      setEvent({
        ... event,
        [type]: ""
      })
      checkEvent({
        ... event,
        [type]: "",
      })
    }else{
      console.log("EVENT SELECT: ",EVENT);
       setEvent({
         ... event,
         [type]: EVENT.value.charAt(0).toUpperCase() + EVENT.value.slice(1),
       })
      checkEvent({
        ... event,
        [type]: EVENT.value,
      })
    }
  

  }
  const ReadSelectEvent_edit=(EVENT,type)=>{
    if(event===null){
      setEditarEvento({
        ... editarEvento,
        [type]: ""
      })
      checkEvent_Edit({
        ... editarEvento,
        [type]: "",
      })
    }else{
       setEditarEvento({
         ... editarEvento,
         [type]: EVENT.value.charAt(0).toUpperCase() + EVENT.value.slice(1),
       })
       checkEvent_Edit({
        ... editarEvento,
        [type]: EVENT.value,
      })
    }
  

  }
  const CheckInput_Edit=(Event,type)=>{
      setEditarEvento({
        ... editarEvento,
        [type]: Event.target.value
      })
    
    checkEvent_Edit({
      ... editarEvento,
      [type]: Event.target.value
    });

  }
  const ChangeInputHorse=(Event,type)=>{
    if(type==="edad" || type==="competidor"){
      const inputValue = Event.target.value;
      const numberValue = Number(inputValue);
      if (isFinite(numberValue)) {
        setHorse({
          ... horse,
          [type]: Event.target.value
        })
        checkHorse({
          ... horse,
          [type]: Event.target.value
        });
      } 



    }else{
      setHorse({
        ... horse,
        [type]: Event.target.value
      })
      checkHorse({
        ... horse,
        [type]: Event.target.value
      });
    }
    
  }
  
  const checkHorse=(caballo)=>{
    
     if (caballo.nombre!=="" && caballo.caballista!=="" && caballo.edad!=="" && caballo.tipo !=="" && caballo.andar!=="" && caballo.criador!=="" && caballo.propietario!=="" && caballo.competidor  ){
       setButtonhorse(false);
     } else{
       setButtonhorse(true);
     }


  }

    /* SELECTS */

  const CheckSelect=(Event,type)=>{
    console.log("EVENT: ",Event);

      setHorse({
         ... horse,
         [type]: Event.value
       })
      
    }
   
  async function createFile(URL){
      let response = await fetch(URL);
      let data = await response.blob();
      let metadata = {
        type: 'image/png'
      };
      let file = new File([data], "test.png", metadata);
      return file;

  }





  /*FUNCTION IMAGE */
  function handleChange(e) {
    
    console.log(new File([e.target.files[0]], 'project.png',{type: "image/png"}));
    setimgFormEvent(new File([e.target.files[0]], 'project.png',{type: "image/png"}));
    setFile(URL.createObjectURL(e.target.files[0]));
    setEvent({...event,['imagen']:URL.createObjectURL(e.target.files[0])})

  }
  function handleChange_edit_event(e) {
    
    set_file_edit_event(new File([e.target.files[0]], 'project.png',{type: "image/png"}));
    setEditarEvento({...editarEvento,['imagen']:URL.createObjectURL(e.target.files[0])});
  }
  function handleChange_horse(e) {
    console.log(new File([e.target.files[0]], 'project.png',{type: "image/png"}));
    setImgFormHorse(new File([e.target.files[0]], 'project.png',{type: "image/png"}));
    setFile(URL.createObjectURL(e.target.files[0]));
    setHorse({...horse,['imagen']:URL.createObjectURL(e.target.files[0])})
    checkHorse({...horse,['imagen']:URL.createObjectURL(e.target.files[0])});
  }
  const clickImageInput=()=>{
    let A_element=$("input")[1];
    A_element.click();
  }

    
  
  /*EDIT EVENT FUNCTION */
  const goToHorsesFunction=(Event)=>{
    setEventChoosed(Event);
    setListHorses(Event.Horses);
    setEditEvent(true);
    setCreateButton(false);
    //setEventSelected(event);
  }
  const EditEventFunction_2=()=>{
    setEditEvent(false);
    setFile(null);
    setHorse({
      id_evento:'',
      nombre:'',
      imagen:'',
      caballista:'',
      edad:'',
      tipo:'Mular',
      andar:1,
      criador:'',
      propietario:'',
      competidor:'',
  
    });
  }



  /*SELECT*/


  const ResetAddHorse=()=>{
    setAddHorseButton(false);
    setEditHorseButton(false);
    setHorse({
      id_evento:'',
      nombre:'',
      imagen:'',
      caballista:'',
      edad:'',
      tipo:'Mular',
      andar:1,
      criador:'',
      propietario:'',
      competidor:'',
  
    });
    setFile(null);
  }
  const EditHorse=async(HORSE)=>{
    if(HORSE.imagen!==undefined){
      console.log(HORSE.imagen);
      setAddHorseButton(true);
      setEditHorseButton(true);
      setHorse(HORSE);
      setLoading(true);
      setImgFormHorse(await createFile(HORSE.imagen));
      setLoading(false);
      setFile(HORSE.imagen);
      setButtonhorse(false);
    }
    
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
    setcutCount(false);
    
  },[])
  /* useEffect */
  React.useEffect(()=>{
    setFilter(events);
    if(events!==null){
      getPlaces(events);
    }
  },[events])

  const createHorse=async (event)=>{
    
    event.preventDefault();
    console.log({...horse,['id_evento']:eventChoosed.id,['imagen']:imgFormHorse});

     setLoading(true);
     
     if (imgFormHorse===null){
      let imageDefault_1=await createFile(HorseImageDefault);

      let result=await generateHorse({...horse,['id_evento']:eventChoosed.id,['imagen']:imageDefault_1},token).catch((error)=>{
        console.log(error);
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Problemas al crear el ejemplar',
          text:'revisa tu conexión a internet',
        })
      })
      if (result!==undefined){
         console.log({...result['data'].caballo,['video_original']:"",['video_procesado']:""});
         setLoading(false);
         Swal.fire({
            icon: 'success',
            title: 'Ejemplar creado correctamente',
          })
          eventChoosed.Horses.push({...result['data'].caballo,['video_original']:"",['video_procesado']:"",['video_esqueleto']:"",['video_esqueleto_guardado']:"",['video_guardado']:""});
          setFilterValueHorse("");
          if(Andar!==0){
           setListHorses(eventChoosed.Horses.filter((obj)=>toNumber(obj.andar)=== toNumber(Andar)));
         }else{
           setListHorses(eventChoosed.Horses);
         }
          replaceEvent(eventChoosed);
          setHorse({
            id_evento:'',
            nombre:'',
            imagen:'',
            caballista:'',
            edad:'',
            tipo:'Mular',
            andar:1,
            criador:'',
            propietario:'',
            competidor:'',
        
          });
         setFile(null);
 
      }

     }else{
      let result=await generateHorse({...horse,['id_evento']:eventChoosed.id,['imagen']:imgFormHorse},token).catch((error)=>{
        console.log(error);
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Problemas al crear el ejemplar',
          text:'revisa tu conexión a internet',
        })
      })
      if (result!==undefined){
         console.log({...result['data'].caballo,['video_original']:"",['video_procesado']:""});
         setLoading(false);
         Swal.fire({
            icon: 'success',
            title: 'Ejemplar creado correctamente',
          })
          eventChoosed.Horses.push({...result['data'].caballo,['video_original']:"",['video_procesado']:""});
          setFilterValueHorse("");
          if(Andar!==0){
           setListHorses(eventChoosed.Horses.filter((obj)=>toNumber(obj.andar)=== toNumber(Andar)));
         }else{
           setListHorses(eventChoosed.Horses);
         }
          replaceEvent(eventChoosed);
          setHorse({
            id_evento:'',
            nombre:'',
            imagen:'',
            caballista:'',
            edad:'',
            tipo:'Mular',
            andar:1,
            criador:'',
            propietario:'',
            competidor:'',
        
          });
         setFile(null);
 
      }
     }
     
  }

  const getPlaces=(EVENTS)=>{
  
    let Lugares=[];
    for (var i=0;i<EVENTS.length;i++){
      let place=EVENTS[i].lugar.charAt(0).toUpperCase() + EVENTS[i].lugar.slice(1);
      if( Lugares.indexOf(place)===-1){
        Lugares.push(place);
      }
        
    }

    let ListRepeatClean=[...new Set(Lugares)];
    Lugares=[];
    for (var i=0;i<ListRepeatClean.length;i++){
      Lugares.push({value:ListRepeatClean[i],label:ListRepeatClean[i]})
    }
    setLista_lugares(Lugares);
  }


  const replaceEvent=(eventReplace)=>{

    let eventsCopy=[...events];

    for (var i=0; i<events.length;i++){
      if( eventsCopy[i].id===eventReplace.id){
        eventsCopy[i]=eventReplace;
        break;
      }
    }
    setEvents(eventsCopy);
  }






  const AppendEvent=async(EVENT)=>{
     EVENT.preventDefault();

     setLoading(true);
     let result=undefined;
     if (imgFormEvent===null){
        let imageDefault_1=await createFile(EventImageDefault);
        result=await createEvent(event,token,imageDefault_1).catch((error)=>{
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Problemas al crear el evento',
            text:'revisa tu conexión a internet'
          })
          setLoading(false);
         })
    
         if(result!==undefined){
          console.log(result['data']);
          setLoading(false);
          Swal.fire({
            icon: 'success',
            title: 'Evento creado correctamente',
          })
          let Events=[...events];
          Events.push({...result['data'].evento,['Horses']:[],['image']:'https://back.orcas-buho.com.co/'+result['data'].imagen});
          setEvents(Events);
          setFilter(Events);
          setCreateButton(false);
          setimgFormEvent(null);
          setFile(null);
          setEvent({
            imagen:'',
            nombre_evento:'',
            competidores:'',
            fecha_inicio:'',
            fecha_fin:'',
            lugar:'',
            descripcion:'',
            Horses:[],
          })
          setButtonEvent(true);
         }
        
     }else{
      result=await createEvent(event,token,imgFormEvent).catch((error)=>{
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Problemas al crear el evento',
          text:'revisa tu conexión a internet'
        })
        setLoading(false);
       })
  
       if(result!==undefined){
        console.log(result['data']);
        setLoading(false);
        Swal.fire({
          icon: 'success',
          title: 'Evento creado correctamente',
        })
        let Events=[...events];
        Events.push({...result['data'].evento,['Horses']:[],['image']:'https://back.orcas-buho.com.co/'+result['data'].imagen});
        setEvents(Events);
        setFilter(Events);
        setCreateButton(false);
        setimgFormEvent(null);
        setFile(null);
        setEvent({
          imagen:'',
          nombre_evento:'',
          competidores:'',
          fecha_inicio:'',
          fecha_fin:'',
          lugar:'',
          descripcion:'',
          Horses:[],
        })
        setButtonEvent(true);
       }

     }
     
  }

  const checkTotalCompetidores=()=>{
      let count=0;
      console.log("eventos total competidores.",events);
      for (var i=0;i<events.length;i++){
           count=toNumber(count)+toNumber(events[i].Horses.length); 
        }
      return count
  }

  const DeleteEvent=(Event)=>{
    console.log(event);
    Swal.fire({
      title: '¿Seguro que desea eliminar el evento?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {

        setLoading(true);

        let Result=undefined;
        Result=await deleteEvent(Event,token).catch((error)=>{
          console.log(error);
          setLoading(false);
          Swal.fire({
            icon: 'error',
            title: 'Falla al eliminar evento',
          })

        })
        if(Result!==undefined){
          console.log(Result['data']);
          setLoading(false);
          Swal.fire({
            icon: 'success',
            title: 'Evento eliminado correctamente',
          })
          let ListEvents=[]
          for (var i=0;i<events.length;i++){
           if(events[i].id.toString() !==Event.id.toString()){
             ListEvents.push(events[i]);
           }
          }
         setEvents(ListEvents);
         setFilter(ListEvents);
         setValueFilter("");


        }
          
      }
   })
   }

  const checkEvent=(event)=>{
    if(event.nombre_evento !==""   && event.fecha_inicio!=="" && event.fecha_fin!=="" && event.lugar!==""){
      setButtonEvent(false);
    }else{
      setButtonEvent(true);
    }
  }
  const checkEvent_Edit=(event)=>{
    if(event.nombre_evento !==""   && event.fecha_inicio!=="" && event.fecha_fin!=="" && event.lugar!==""){
      setButtonEventEdit(false);
    }else{
      setButtonEventEdit(true);
    }
  }
  
  const filterFunction=(event)=>{
      setValueFilter(event.target.value);
      if(event.target.value===""){
        setFilter(events);
      }else{
        const Array=events.filter((obj)=> obj.nombre_evento.toLowerCase().includes(event.target.value.toLowerCase()))
        setFilter(Array);
      }
  }



  const DeleteH=async(HORSE)=>{
    ResetAddHorse();
    Swal.fire({
      title: '¿Seguro que desea eliminar el ejemplar?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {

        let result=undefined;

        setLoading(true);
    
        result=await deleteHorse(HORSE,token).catch((error)=>{
          console.log(error);
          setLoading(false);
          Swal.fire({
            icon: 'error',
            title: 'Falla al eliminar ejemplar',
          })

        })
        if (result!==undefined){
          console.log(result['data']);
          setLoading(false);
          Swal.fire({
            icon: 'success',
            title: 'Ejemplar eliminado',
          })
          /* ELIMINAMOS DEL ARREGLO LOCAL DEL EVENTO SELECCIONADO*/
          let CopyEventChoosed={...eventChoosed,['Horses']:eventChoosed.Horses.filter((obj)=> obj.id.toString() !== HORSE.id.toString())};
          setEventChoosed(CopyEventChoosed);

          /* VOLVEMOS A FILTRAR EN LOS QUE ESTABAMOS */

          setFilterValueHorse("");
          if(Andar!==0){
            setListHorses(CopyEventChoosed.Horses.filter((obj)=>toNumber(obj.andar)=== toNumber(Andar)));
          }else{
            setListHorses(CopyEventChoosed.Horses);
          }
          
          replaceEvent(CopyEventChoosed);
        }
         
      }
   })
   
    

  }

  const editHorses=async(EVENT)=>{

    EVENT.preventDefault();
    setLoading(true);  
    let result=undefined;
    result=await changeHorse(horse,token,imgFormHorse).catch((error)=>{
      console.log(error);
      setLoading(false);  
      Swal.fire({
        icon: 'error',
        title: 'Problemas al editar ejemplar',
      })
    })
    if(result !==undefined){
      console.log(result['data']);
      setLoading(false);  
      Swal.fire({
        icon: 'success',
        title: 'Ejemplar actualizado',
      })
      /* ACTUALIZAMOS DEL ARREGLO LOCAL DEL EVENTO SELECCIONADO*/
      let Horses=[];
      for (var i=0;i<eventChoosed.Horses.length;i++){
        if(eventChoosed.Horses[i].id.toString()===horse.id.toString()){
          Horses.push(horse);
        }else{
          Horses.push(eventChoosed.Horses[i]);
        }
      }

      let CopyEventChoosed={...eventChoosed,['Horses']:Horses};
      setEventChoosed(CopyEventChoosed);

      /* COLOCAMOS TODOS LOS CABALLOS  */

      setFilterValueHorse("");
      if(Andar!==0){
        setListHorses(CopyEventChoosed.Horses.filter((obj)=>toNumber(obj.andar)=== toNumber(Andar)));
      }else{
        setListHorses(CopyEventChoosed.Horses);
      }
      replaceEvent(CopyEventChoosed);


    }
  }

  const editarEventoFuncion=async (eventoEdit)=>{
    
    setEditarEvento(eventoEdit);
    setCreateButton(true);
    setLoading(true);
    let File=await createFile(eventoEdit.imagen)
    set_file_edit_event(File);
    setLoading(false);
    

  }

  const EditEventFunction=async (EVENT)=>{
     EVENT.preventDefault();
     
     if(file_edit_event===null){
      setLoading(true);
     let result=undefined;
     let imagen=await createFile(EventImageDefault);
     result=await editEvent(editarEvento,token,imagen).catch((error)=>{
      console.log(error);
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Problemas para actualizar evento',
      })
     })
     if (result!==undefined){
        console.log("evento actualizado: ",result['data']);
        Swal.fire({
          icon: 'success',
          title: 'evento actualizado con exito.',
        })
        setLoading(false);

        /* ACTUALIZAMOS EN EL ARREGLO GLOBAL DE EVENTOS */
        let ListEvents=[]
        for (var i=0;i<events.length;i++){
          if(events[i].id.toString() !==editarEvento.id.toString()){
            ListEvents.push(events[i]);
          }else{
            ListEvents.push({...editarEvento,['imagen']:EventImageDefault})
          }
        }
         setEvents(ListEvents);
         setFilter(ListEvents);
         setValueFilter("");
         setEditarEvento({
          imagen:'',
          nombre_evento:'',
          lugar:'',
          fecha_inicio:'2020-01-01',
          fecha_fin:'2020-01-01',
          competidores:'',
          descripcion:'',
          Horses:[],
        })
        setCreateButton(false);
        set_file_edit_event(null);

     }

     }else{
      setLoading(true);
     let result=undefined;
     result=await editEvent(editarEvento,token,file_edit_event).catch((error)=>{
      console.log(error);
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Problemas para actualizar evento',
      })
     })
     if (result!==undefined){
        console.log("evento actualizado: ",result['data']);
        Swal.fire({
          icon: 'success',
          title: 'evento actualizado con exito.',
        })
        setLoading(false);

        /* ACTUALIZAMOS EN EL ARREGLO GLOBAL DE EVENTOS */
        let ListEvents=[]
        for (var i=0;i<events.length;i++){
          if(events[i].id.toString() !==editarEvento.id.toString()){
            ListEvents.push(events[i]);
          }else{
            ListEvents.push({...editarEvento,['imagen']:URL.createObjectURL(file_edit_event)})
          }
        }
         setEvents(ListEvents);
         setFilter(ListEvents);
         setValueFilter("");
         setEditarEvento({
          imagen:'',
          nombre_evento:'',
          lugar:'',
          fecha_inicio:'2020-01-01',
          fecha_fin:'2020-01-01',
          competidores:'',
          descripcion:'',
          Horses:[],
        })
        setCreateButton(false);
        set_file_edit_event(null);

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
    <div className='CompetenciasContainer'>
        {EditEvent===false ?
          <>
          <div className='CountsContainer mt-40'>
              <div className='CountContainer'>
                 <span className='TextTitle bold-size '>Total competencias</span>
                 <div className='CountsBox'>
                   {events!==null ?
                   <>
                   {events.length===0  ?
                   <><span className='TextCount '>{0}</span></>
                   :
                   <>
                   <span className='TextCount '>{events.length}</span>
                   </>
                   }
                   </>
                   :
                   <></>}
                   
                 </div>
              </div>
              <div className='CountContainer'>
                 <span className='TextTitle bold-size'>Total competidores</span>
                 <div className='CountsBox'>
                 {events!==null ?
                   <>
                   <span className='TextCount'>{checkTotalCompetidores()}</span>
                   </>
                   :
                   <></>}
                     
                 </div>
              </div>
          </div>
        
        <div className='EventsContainer-2'>
                
                <InputGroup onChange={filterFunction} className='inputComp middle-size'>
                  <InputGroup.Text  id="basic-addon1"><Icon.Search/></InputGroup.Text>
                  <Form.Control
                    value={valueFilter} 
                    placeholder="Buscar competición"
                    aria-label="Buscar competición"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
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
                  {filter!==null ?
                  <>
                  {filter.map(Event=>(


                            <Col key={Event.id} className='EventComponent'>
                            <div className='Event display-row' >
                              <figure className='img-container CompetitionsImag_2' onClick={()=>goToHorsesFunction(Event)} style={{cursor:'pointer'}}>
                                  <img  crossorigin="anonymous"  className='img-event CompetitionsImag' src={Event.imagen} alt=""></img>
                              </figure>
                              <div className='p-column-event' >
                                <span className='t-white t-b t-b2  overflox-x-hidden ' onClick={()=>goToHorsesFunction(Event)} style={{cursor:'pointer'}}>{Event.nombre_evento}</span>
                                <span className='t-white t-xs small-size orange' onClick={()=>goToHorsesFunction(Event)} style={{cursor:'pointer'}}>{Event.lugar+' '}</span>
                                <span className='t-white t-xs small-size gray-dc' onClick={()=>goToHorsesFunction(Event)} style={{cursor:'pointer'}}>{Event.fecha_inicio }<span className='small-size'>{' / '}</span> {Event.fecha_fin}</span>
                                <div className='d-row flex-end'>
                                      <div className='iconEditEvent' >
                                      <RiEdit2Fill className='iconVideoPlay' onClick={()=>editarEventoFuncion(Event)}/>
                                      </div>
                                      <FaTrash className='option-icon IconPointer' onClick={()=>DeleteEvent(Event)}></FaTrash>
                                </div>
                              </div>
                            </div>
                            </Col>

                            ))}

                  </>
                  :
                  <>

                  </>}
                  
                  
                  
                </Row>
          </Container>
           </>
           
           :
           <>

           {editarEvento.competidores==="" ?
           <>
           <div className='buttonregisterEvent_2 mt-14px' onClick={()=>{
                      setFile(null);
                      setimgFormEvent(null);
                      
                      setEvent({
                        imagen:'',
                        nombre_evento:'',
                        lugar:'',
                        fecha_inicio:'',
                        fecha_fin:'',
                        competidores:'',
                        descripcion:'',
                        Horses:[],
                      })
                      setButtonEvent(true);
                      setCreateButton(false);
           }}>
               <AiFillPlusCircle className='IconEventButton_2' />
               <div className='textButtonregisterEvent font-size-1rem'>
                  <span className='TextTitle'>Crear</span>
                  <span className='TextTitle'>nuevo evento</span>
               </div>
           </div>
           <form className='RegisterEvent mt-14px'>
               <div className='CloseContainer'>
                    <span className='TextTitle2'> Crear nuevo evento</span>
                    <AiFillCloseCircle className='CloseIcon' onClick={()=> {
                      setFile(null);
                      setimgFormEvent(null);
                      setEvent({
                        imagen:'',
                        nombre_evento:'',
                        lugar:'',
                        fecha_inicio:'',
                        fecha_fin:'',
                        competidores:'',
                        descripcion:'',
                        Horses:[],
                      })
                      setButtonEvent(true);
                      setCreateButton(false);
                    }}/>
               </div>
               <div className='imageContainer'>
                   {file===null ?
                   <div className="imageInputContainer">
                      <BiImageAdd style={{cursor:'pointer'}} className='iconImageFile' onClick={clickImageInput}/>
                      <input style={{visibility:"hidden"}} type="file" onChange={handleChange} accept="image/png, image/gif, image/jpeg" />
                   </div>
                   :
                   <img  crossorigin="anonymous" style={{cursor:'pointer'}} className='imageEvent'   src={event.imagen} onClick={()=>{
                      setFile(null);
                      setimgFormEvent(null);
                      setEvent({...event,['imagen']:''})
                      setButtonEvent(true);

                   }}/> 
                   } 
               </div>
               <div className='nameContainer containrow'>
                 <span className="textFormEvent second-size">Nombre</span>
                 <input onChange={(event)=>CheckInput(event,'nombre_evento')} maxLength={21} className='inputEventForm second-size' type="text" placeholder='ingrese el nombre del evento'/>
               </div>
               
               <div className='dateContainer containrow second-size'>
                 <span className="textFormEvent second-size ">Fecha</span>
                 <DatePicker className='datepicker' onChange={onChange_start}  placeholder='Inicio' disabledDate={d => !d || d.isAfter(event.fecha_fin)} />
                 <DatePicker  className='datepicker' onChange={onChange_end}  placeholder='Fin' disabled={disabledDate}  disabledDate={d => !d || d.isBefore(event.fecha_inicio)} />
               </div>
               <div className='placeContainer containrow'>
                 <span className="textFormEvent second-size">Lugar</span>
                <CreatableSelect  options = {Lista_lugares}  
                className="selectAnalisis middle-size" 
                placeholder="Seleccione un lugar"
                onChange={(event)=>ReadSelectEvent(event,'lugar')}
                styles={styles}
                />
               </div>
               <div className='DescriptionContainer containrow'>
                 <span className="textFormEvent second-size">Descripción</span>
                 <textarea onChange={(event)=>CheckInput(event,'descripcion')}  className='textareaFormEvent second-size' placeholder='Descripción (opcional)'/>
               </div>
               <div className='containersubmitButton'>
                  <button disabled={buttonEvent} onClick={AppendEvent} className='buttonComp_2 button_correct_position'>Crear</button>
               </div>
           </form>
           </>
           :

           <>
           <form className='RegisterEvent_2 mt-14px'>
               <div className='CloseContainer'>
                    <span className='TextTitle2'> Editar evento</span>
                    <AiFillCloseCircle className='CloseIcon' onClick={()=> {
                      setEditarEvento({
                        imagen:'',
                        nombre_evento:'',
                        lugar:'',
                        fecha_inicio:'2020-01-01',
                        fecha_fin:'2020-01-01',
                        competidores:'',
                        descripcion:'',
                        Horses:[],
                      })
                      setCreateButton(false);
                      set_file_edit_event(null);
                    }}/>
               </div>
               <div className='imageContainer'>
                   {file_edit_event===null ?
                   <div className="imageInputContainer">
                      <BiImageAdd style={{cursor:'pointer'}} className='iconImageFile' onClick={clickImageInput}/>
                      <input style={{visibility:"hidden"}} type="file" onChange={handleChange_edit_event} accept="image/png, image/gif, image/jpeg" />
                   </div>
                   :
                   <img  crossorigin="anonymous" style={{cursor:'pointer'}} className='imageEvent'   src={editarEvento.imagen} onClick={()=>{
                      set_file_edit_event(null);
                      setEditarEvento({...editarEvento,['imagen']:""});
                      checkEvent_Edit({...editarEvento,['imagen']:""});
                   }}/> 
                   } 
               </div>
               <div className='nameContainer containrow'>
                 <span className="textFormEvent second-size">Nombre</span>
                 <input onChange={(event)=>CheckInput_Edit(event,'nombre_evento')} maxLength={21} className='inputEventForm second-size' type="text" placeholder='ingrese el nombre del evento' value={editarEvento.nombre_evento}/>
               </div>
               
               <div className='dateContainer containrow second-size ojala'>
                 <span className="textFormEvent second-size ">Fecha</span>
                 <DatePicker onChange={onChange_start_Edit} className='datepicker_2 datepicker_start'   placeholder={editarEvento.fecha_inicio}   />
                 <DatePicker onChange={onChange_end_Edit} className='datepicker_2 datepicker_end'      placeholder={editarEvento.fecha_fin}      />
               </div>
               <div className='placeContainer containrow'>
                 <span className="textFormEvent second-size">Lugar</span>
                 <CreatableSelect  options = {Lista_lugares}  
                  className="selectAnalisis middle-size" 
                  placeholder="Seleccione un lugar"
                  onChange={(event)=>ReadSelectEvent_edit(event,'lugar')}
                  value={{value:editarEvento.lugar,label:editarEvento.lugar}}
                  styles={styles}
                 />
               </div>
               <div className='DescriptionContainer containrow'>
                 <span className="textFormEvent second-size">Descripción</span>
                 <textarea onChange={(event)=>CheckInput_Edit(event,'descripcion')}  className='textareaFormEvent second-size' placeholder='Descripción (opcional)' value={editarEvento.descripcion}/>
               </div>
               <div className='containersubmitButton'>
                  <button disabled={ButtonEventEdit} onClick={EditEventFunction} className='buttonComp_2 button_correct_position'>Editar</button>
               </div>
           </form>

            
           </>
           
           }
           
           
           </>
           

           }
           
           
        </div>
          </>
         
        :
        <>
         <div className='BackToCreateEventContainer mt-40'>
             <div className='BackContainer'  onClick={EditEventFunction_2}>
               <AiOutlineLeft className='orange'/>
             </div>
         </div>
         <div className='EventInfoContainer mt-3'>
            <div className='label-event-Estadistics-Container  '>
                <figure className='img-container'>
                  <img crossorigin="anonymous" src={eventChoosed.imagen} className='img-event'></img>
                </figure>
                <div className='p-column-event'>
                  <span className='t-white t-b t-b2  overflox-x-hidden bold-size'>{eventChoosed.nombre_evento}</span>
                  <span className='t-white t-xs  small-size orange'>{eventChoosed.lugar}</span>
                  <span className='t-white t-xs small-size gray-dc' >{eventChoosed.fecha_inicio }<span className='small-size'>{' / '}</span> {eventChoosed.fecha_fin}</span>
                </div>
            </div>
            <div className='containerCountsEvent'>
                  <div className='CountsContainer '>
                    <div className='CountContainer align-center margin-left-90px'>
                      <span className='TextTitle mb-'>Total competidores</span>
                      <div className='CountsBox w-'>
                          <span className='TextCount'>{eventChoosed.Horses.length}</span>
                      </div>
                    </div>
                  </div>
            </div>

         </div>
         <div className='EventsContainer HorseFilter '>
                <InputGroup onChange={(event)=>{
                  setFilterValueHorse(event.target.value);
                  if(event.target.value===""){
                    if(Andar===0){
                      setListHorses(eventChoosed.Horses);
                    }else{
                      setListHorses(eventChoosed.Horses.filter((obj)=> toNumber(obj.andar) === toNumber(Andar)))
                    }
                    
                  }else{
                    if (Andar===0){
                      setListHorses(eventChoosed.Horses.filter((obj)=> obj.nombre.toLowerCase().includes(event.target.value.toLowerCase()))) 
                    }else{
                      setListHorses(eventChoosed.Horses.filter((obj)=> obj.nombre.toLowerCase().includes(event.target.value.toLowerCase() && toNumber(obj.andar) === toNumber(Andar))))
                    }
                    
                  }

                }} className='inputComp middle-size' >
                  <InputGroup.Text id="basic-addon1" ><Icon.Search/></InputGroup.Text>
                  <Form.Control
                    placeholder="Buscar ejemplar "
                    aria-label="Buscar ejemplar"
                    aria-describedby="basic-addon1"
                    value={filterValueHorse}
                  />
                </InputGroup>
                {eventChoosed.Horses.length!==0 ?
                <>
                <ListGroup horizontal defaultActiveKey="#linkAll" className='ListAndar'>
                          <ListGroup.Item action eventKey="#linkAll" onClick={()=>{
                                setListHorses(eventChoosed.Horses);
                                setAndar(0);
                                setFilterValueHorse("");
                             }}>Todos
                          </ListGroup.Item>
                             
                          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" className='tooltipEdit'>Ejemplares del andar del Trote y Galope</Tooltip>}>
                             <ListGroup.Item action eventKey="#link1" onClick={()=>{
                                setListHorses(eventChoosed.Horses.filter((obj)=>obj.andar===1 || obj.andar==="1"));
                                setAndar(1);
                                setFilterValueHorse("");
                             }}>Andar P1</ListGroup.Item>
                          </OverlayTrigger>
                          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" className='tooltipEdit'>Ejemplares del andar de la Trocha y Galope</Tooltip>}>
                             <ListGroup.Item action eventKey="#link2" onClick={()=>{
                                setListHorses(eventChoosed.Horses.filter((obj)=>obj.andar===2 || obj.andar==="2"));
                                setAndar(2);
                                setFilterValueHorse("");
                             }}>Andar P2</ListGroup.Item>
                          </OverlayTrigger>
                          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" className='tooltipEdit'>Ejemplares del andar de la Trocha Pura Colombiana</Tooltip>}>
                             <ListGroup.Item action eventKey="#link3" onClick={()=>{
                                setListHorses(eventChoosed.Horses.filter((obj)=>obj.andar===3 || obj.andar==="3"));
                                setAndar(3);
                                setFilterValueHorse("");
                             }}>Andar P3</ListGroup.Item>
                          </OverlayTrigger>
                          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" className='tooltipEdit'>Ejemplares del andar del Paso Fino Colombiano</Tooltip>}>
                             <ListGroup.Item action eventKey="#link4" onClick={()=>{
                                setListHorses(eventChoosed.Horses.filter((obj)=>obj.andar===4 || obj.andar==="4"));
                                setAndar(4)
                             }}>Andar P4</ListGroup.Item>
                          </OverlayTrigger>
                </ListGroup>
                </>
                :
                <> </>
                }
                
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
                              <input style={{visibility:"hidden"}} type="file" onChange={handleChange_horse}  accept="image/png, image/gif, image/jpeg"/>
                          </div>
                          :
                          <img  crossorigin="anonymous" className='imageEventHorse' style={{cursor:'pointer'}}  src={file} onClick={()=>{
                            setFile(null);
                            setHorse({...horse,['imagen']:''});
                            checkHorse({...horse,['imagen']:''});
                          }}/> 
                          } 
                      </div>
                      <div className='nameContainer containrowHorse'>
                        <span className="textFormEvent second-size">Nombre</span>
                        <input onChange={(event)=>ChangeInputHorse(event,'nombre')} value={horse.nombre} className='inputEventForm second-size' maxLength={39}  type="text" placeholder='Nombre del ejemplar'/>
                      </div>
                      <div className='competidoresContainer containrowHorse'>
                        <span className="textFormEvent second-size"># Competidor</span>
                        <input onChange={(event)=>ChangeInputHorse(event,'competidor')} value={horse.competidor} className='inputEventForm second-size' type="number"  maxLength={4} placeholder='# del competidor'/>
                      </div>
                      <div className='competidoresContainer containrowHorse'>
                        <span className="textFormEvent second-size">Jinete</span>
                        <input onChange={(event)=>ChangeInputHorse(event,'caballista')} value={horse.caballista} className='inputEventForm second-size' maxLength={20} type="text" placeholder='Nombre Jinete'/>
                      </div>
                      <div className='competidoresContainer containrowHorse'>
                        <span className="textFormEvent second-size">Edad</span>
                        <input onChange={(event)=>ChangeInputHorse(event,'edad')} value={horse.edad} className='inputEventForm second-size' type="number" maxLength={20} placeholder='Edad (meses)'/>
                      </div>
                      <div className='competidoresContainer containrowHorse'>
                        <span className="textFormEvent second-size">Criador</span>
                        <input onChange={(event)=>ChangeInputHorse(event,'criador')} value={horse.criador} className='inputEventForm second-size' type="text" maxLength={20} placeholder='Criador'/>
                      </div>
                      <div className='competidoresContainer containrowHorse'>
                        <span className="textFormEvent second-size">Propietario</span>
                        <input onChange={(event)=>ChangeInputHorse(event,'propietario')} value={horse.propietario} className='inputEventForm second-size' type="text" maxLength={20} placeholder='Propietario'/>
                      </div>
                      <div className='competidoresContainer containrowHorse'>
                        <span className="textFormEvent second-size">Andar</span>
                        <Select options = {options_andar}  className="selectAnalisis middle-size"   styles={styles}  onChange={(event)=>CheckSelect(event,'andar')} value={{value:horse.andar,label:'P'+horse.andar}}/>
                        {/* <input className='inputEventForm second-size' type="text" placeholder='Ingrese la categoria'/> */}
                      </div>
                      <div className='competidoresContainer containrowHorse'>
                        <span className="textFormEvent second-size">Tipo</span>
                        <Select options = {options_tipo}  className="selectAnalisis middle-size"   styles={styles}  onChange={(event)=>CheckSelect(event,'tipo')} value={{value:horse.tipo,label:horse.tipo}}/>

                        {/* <input className='inputEventForm second-size' type="text" placeholder='Ingrese la categoria'/> */}
                      </div>
                      <div className='ButtonContainer'>
                           {EditHorseButton===true  ?
                            <button className='buttonComp_2 middle-size bottom-10' disabled={buttonHorse} onClick={editHorses}>Editar</button>
                            :
                            <button className='buttonComp_2 middle-size bottom-10' disabled={buttonHorse} onClick={createHorse}>Añadir</button>
                            }
                      </div>
                </form>
               </>

               }
              
               {eventChoosed.Horses.length!==0 ?
               <>
               <div className='tableContainerHorse'>
              <div className='table_2'>
                <Table>
                  <thead>
                    <tr>
                      <th className='titletext'>Nombre</th>
                      <th className='titletext'>Edad</th>
                      <th className='titletext'>Andar</th>
                      <th className='titletext'>Tipo</th>
                      <th className='titletext'>Jinete</th>
                      <th className='titletext'>#</th>
                      <th className='titletext'></th>
                      <th className='titletext'></th>
                    </tr>
                  </thead>
                  <tbody className='tablebody'>
                    
                  {ListHorses.map(Horse=>{
                                return(
                                  <tr>
                                    <td className='NameTable b-none'> <img  crossorigin="anonymous" src={Horse.imagen} className='HorseImage'/><span className='NameText middle-size max-140'>{Horse.nombre}</span></td>
                                    <td className='b-none text-table'><span className='item middle-size'>{Horse.edad+' meses'}</span></td>
                                    <td className='b-none text-table'><span className='item middle-size'>{'P'+Horse.andar}</span></td>
                                    <td className='b-none text-table'><span className='item middle-size'>{Horse.tipo}</span></td>
                                    <td className='b-none text-table'><span className='item middle-size'>{Horse.caballista}</span></td>
                                    <td className='b-none text-table'><span className='item middle-size'>{Horse.competidor}</span></td>
                                    <td className='b-none'>
                                      <div className='iconVideoPlayContainer' onClick={()=>EditHorse(Horse)}>
                                        <RiEdit2Fill className='iconVideoPlay'/>
                                      </div>
                                    </td>
                                    <td className='b-none' onClick={()=>DeleteH(Horse)}>
                                        <FaTrash className='GarbageHorse item'/>
                                    </td>
                                  </tr>
                                                  
                                    
                                );
                                    
                                })}
                   
                   
                    
                    
                  </tbody>
                </Table>
              </div>
             

              </div> 
               </>
               :
               <>

               </>
               }
              
             
         </div>
          
          
        </>
        }
        </div>     
        
        

    </>
    
   
  )
}
