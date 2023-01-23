import axios from 'axios';
import { environment } from '../../environments/environment';

const setRegister= async (userData)=>{
    const path= environment.api + environment.register;

  
    let body={
      username:userData.username,
      password:userData.password,
      email:userData.email,
      first_name:userData.first_name,
    }
  
  
   return await axios.post(path,body);
    
  }








export {setRegister};