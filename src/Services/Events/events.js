import axios from 'axios';
import { environment } from '../../environments/environment';

const setEvent= async (EventData,token)=>{
    const path= environment.api + environment.setEvent;

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };

  
    let body={
      nombre_evento:EventData.nombre_evento,
      competidores:EventData.competidores,
      imagen:EventData.imagen,
      fecha_inicio:EventData.fecha_inicio,
      fecha_fin:EventData.fecha_fin,
      lugar:EventData.lugar,
      description:EventData.description,
    }
  
  
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










export {setEvent,getAllEvents};