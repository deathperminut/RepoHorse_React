import axios from 'axios';
import { environment } from '../../environments/environment';

const generateHorse= async (HorseData,token)=>{
    const path= environment.api + environment.setHorse;

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };

    let body = new FormData();
    
    body.append('id_evento',HorseData.id_evento);
    body.append('nombre',HorseData.nombre);
    body.append('caballista',HorseData.caballista);
    body.append('edad',HorseData.edad);
    body.append('tipo',HorseData.tipo);
    body.append('andar',HorseData.andar);
    body.append('imagen',HorseData.imagen);
    
    console.log("body: ",body);

  
  
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
  const deleteHorse= async (HorseData,token)=>{
    const path= environment.api + environment.deleteHorse;

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };

    let body = {
      id_evento:HorseData.id_evento_id,
      nombre:HorseData.nombre,
      id:HorseData.id,
    };
    

    

  
  
   return await axios.post(path,body,config);
    
  }

  const changeHorse= async (HorseData,token,img)=>{
    const path= environment.api + environment.editHorse+HorseData.id;

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };

    let body = new FormData();
    
    body.append('id_evento',HorseData.id_evento);
    body.append('nombre',HorseData.nombre);
    body.append('caballista',HorseData.caballista);
    body.append('edad',HorseData.edad);
    body.append('tipo',HorseData.tipo);
    body.append('andar',HorseData.andar);
    body.append('imagen',img);
    
    console.log("body: ",body);

  
  
   return await axios.post(path,body,config);
    
  }










export {generateHorse,getAllHorses,deleteHorse,changeHorse};