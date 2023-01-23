import axios from 'axios';
import { environment } from '../../environments/environment';

const setResetPassword= async (email)=>{
    const path= environment.api + environment.ResetPassword_1;

  
    let body={
      email:email,
    }
  
  
   return await axios.post(path,body);
    
  }

const ConfirmResetPassword=async (userData)=>{
    const path= environment.api + environment.ResetPassword_2; 
    let body={
        token:userData.token,
        password:userData.password
      }
    
    
     return await axios.post(path,body);
}







export {setResetPassword,ConfirmResetPassword};