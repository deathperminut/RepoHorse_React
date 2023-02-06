import React from 'react';
import {Navigate,Routes, Route} from 'react-router-dom';
import './Estadisticas.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as Icon from 'react-bootstrap-icons';
import Tablehorse from '../../../Shared/table_horse/tablehorse';
import {AiFillCloseCircle} from 'react-icons/ai';
/* MODAL TO ADD EVENT*/
import MyVerticallyCenteredModal from '../../../Shared/Modal/modal';
/* IMPORT APP CONTEXT */
import { AppContext } from '../../../Context';
/*ListGroup*/
import ListGroup from 'react-bootstrap/ListGroup'; 
import Swal from 'sweetalert2';






export default function Estadisticas() {


  /* APP CONTEXT */
  let {
    events,
    setSelectEvent,
    setSelectHorse,
    StadisticVideo,setStatisticVideo, setInputVideoFile
      ,setVideoMeta , setTrimmedVideoFile, setURL, setTrimIsProcessing, setRstart, setRend
      , setThumbNails, setThumbnailIsProcessing,loading,setOriginalVideo,FindEventId
  }=React.useContext(AppContext); 

  /*USE STATE */
  
  let [ListEvents,setListEvents]=React.useState([]);//LIST EVENTS
  let [Andar,setAndar]=React.useState(1);
  let [filterValueHorse,setFilterValueHorse]=React.useState("");
  let [ListHorses,setListHorses]=React.useState([]);

  
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

  
  const AppendEvent_2=(id)=>{
    let List_Events=[...ListEvents];
    let Event=FindEventId(id);
    List_Events.push(Event);
    setListEvents(List_Events);
  }

  const checkId=(id)=>{
    let result=false;
    for (var i=0;i<ListEvents.length;i++){
      if(ListEvents[i].id===id){
        return true;
      }
    }
    return result;
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

  /* USE EFFECT */
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
  

  return (
    <div className='EstadisticasContainer'>
       {ListEvents.length!=0 ?
             <>
             {ListEvents.map(Event=>{

               

                  
                
                  return (
                      <div className='InfoContainer'>
                      <div  className='InfoContainer-2' key={Event.id}>
                        <div className='Est-Container-1 margin-top-20px' >
                              <h1 className='Est-Container-1-text bold-size margin-left-15px'  >Total competidores</h1>
                              <div className='Est-Container-1-container-count display-none'  >
                                  <h1 className='Est-Container-1-container-count-text big-size'>{Event.Horses.length}</h1>
                              </div>

                          <div className='Est-Container-1-1' >
                              <h1 className='Est-Container-1-text bold-size margin-left-15px bold-size' >Total competidores</h1>
                              <div className='Est-Container-1-container-count' >
                                  <h1 className='Est-Container-1-container-count-text big-size'>{Event.Horses.length}</h1>
                              </div>
                          </div>
                          <button className='buttonEvent center buttonEventEst' ><span className="tw-500 font-size-15pt  c-orange mr-3px mt-3px" >+</span><span className="c-orange font-size-10pt middle-size" >Añadir otro</span></button>
                          
                        </div>
                        <Tablehorse Event={Event}   DeleteEvent={DeleteEvent} />
                        
                      </div>
                      </div>
                  );
                  })}

             </>
              
          
        
        :
        <></>

       } 
       
        
        {ListEvents.length===0 ?
        <>
          <div className='InfoContainer-3'>
                <h1 className='textNeedEvent bold-size'>Selecciona un evento</h1>
          </div>
          <div className='SelectEventContainer LabelDisappear'>
              <button  variant="primary"  className='buttonEvent center btnHoverWhite' onClick={AppendEvent}><span className="tw-500 font-size-15pt  c-orange mr-3px mt-3px" >+</span><span className="c-orange font-size-10pt middle-size">Añadir Evento</span></button>
          </div>
        </>
        :
        <>
          <div className='SelectEventContainer LabelDisappear'>
              <button  variant="primary" className='buttonEvent center btnHoverWhite' onClick={AppendEvent}><span className="tw-500 font-size-15pt  c-orange mr-3px mt-3px" >+</span><span className="c-orange font-size-10pt middle-size">Añadir otro</span></button>
          </div>
        </>}
        {events!== null ?
        <>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        selectEvent={(id)=>AppendEvent_2(id)}
      />
        </>
        :
        <></>
        }
        
        
    </div>
  )
}
