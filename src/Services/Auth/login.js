import axios from 'axios';
import { environment } from '../../environments/environment';


 
const https=require('https');

const setLogin= async (userData)=>{
    const path= environment.api + environment.login;

    const instance = axios.create({
      httpsAgent: new https.Agent({  
        rejectUnauthorized: false
      })
    });


  
    let body={
      username:userData.username,
      password:userData.password,
    }
  
  
   return await instance.post(path,body);
    
  }








export {setLogin};