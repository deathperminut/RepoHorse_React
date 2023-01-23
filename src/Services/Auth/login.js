import axios from 'axios';
import { environment } from '../../environments/environment';

const setLogin= async (userData)=>{
    const path= environment.api + environment.login;

  
    let body={
      username:userData.username,
      password:userData.password,
    }
  
  
   return await axios.post(path,body);
    
  }








export {setLogin};