import axios from 'axios';
import { environment } from '../../environments/environment';

const setVideo= async (Horse_video,token)=>{
    const path= environment.api + environment.setVideoHorse;

    let config = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };

  
    let body={
        id_evento:Horse_video.id_evento,
        nombre:Horse_video.nombre,
        id:Horse_video.id,
        video_original:Horse_video.video_original,
    }
  
  
   return await axios.post(path,body,config);
    
  }

  const ProcessVideo= async (Horse_video,token)=>{
    const path= environment.api + environment.processVideo;

    let config = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };
    
    let body={
        id_evento:Horse_video.id_evento,
        nombre:Horse_video.nombre,
        id:Horse_video.id,
    } 

  
  
   return await axios.get(path,body,config);
    
  }










export {setVideo,ProcessVideo};