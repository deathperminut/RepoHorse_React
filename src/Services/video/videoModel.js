import axios from 'axios';
import { environment } from '../../environments/environment';

const setVideo= async (Horse,token,video)=>{
    const path= environment.api + environment.setVideoHorse;

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };

    let body = new FormData();
    
    body.append('id_evento',Horse.id_evento_id);
    body.append('nombre',Horse.nombre);
    body.append('id',Horse.id);
    body.append('video_original',video);
    
  
  
   return await axios.post(path,body,config);
    
  }

  const ProcessVideo= async (Horse,token)=>{
    const path= environment.api + environment.processVideo;

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };
    
    let body={
        id_evento:Horse.id_evento_id,
        nombre:Horse.nombre,
        id:Horse.id,
    }
   

  
  
   return await axios.post(path,body,config);
    
  }

  const ProcessVideoEsqueleto= async (Horse,token)=>{
    const path= environment.api + environment.processVideoEsqueleto;

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };
    
    let body={
        id_evento:Horse.id_evento_id,
        nombre:Horse.nombre,
        id:Horse.id,
    }
   

  
  
   return await axios.post(path,body,config);
    
  }










export {setVideo,ProcessVideo,ProcessVideoEsqueleto};