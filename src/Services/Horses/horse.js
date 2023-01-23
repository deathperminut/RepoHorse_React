import axios from 'axios';
import { environment } from '../../environments/environment';

const setHorse= async (HorseData,token)=>{
    const path= environment.api + environment.setHorse;

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };

  
    let body={
      id_evento:HorseData.id_evento,
      nombre:HorseData.nombre,
      caballista:HorseData.caballista,
      edad:HorseData.edad,
      tipo:"Caballo",
      andar:HorseData.andar,
    }
  
  
   return await axios.post(path,body,config);
    
  }

  const getAllHorses= async (token)=>{
    const path= environment.api + environment.getHorse;

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };

  
  
   return await axios.get(path,config);
    
  }










export {setHorse,getAllHorses};