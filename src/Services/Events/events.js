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
  
    console.log(EventData.imagen);
    
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










export {createEvent,getAllEvents};