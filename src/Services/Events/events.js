import axios from 'axios';
import { environment } from '../../environments/environment';

const createEvent= async (EventData,token,img)=>{
    const path= environment.api + environment.setEvent;

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };
  
    
    let body = new FormData();
    
    body.append('nombre_evento',EventData.nombre_evento);
    body.append('competidores',"20");
    body.append('imagen',img);
    body.append('fecha_inicio',EventData.fecha_inicio);
    body.append('fecha_fin',EventData.fecha_fin);
    body.append('lugar',EventData.lugar);
    body.append('descripcion',EventData.descripcion);
  
  
   return await axios.post(path,body,config);
    
  }

  const getAllEvents= async (token)=>{
    const path= environment.api + environment.getEvents;

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };

  
  
   return await axios.get(path,config);
    
  }
  const deleteEvent= async (event,token)=>{
    const path= environment.api + environment.deleteEvent;

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };

      
      let body={
        id_evento:event.id,
        nombre:event.nombre,
        id:event.id,
      }
  
  
   return await axios.post(path,body,config);
    
  }










export {createEvent,getAllEvents,deleteEvent};