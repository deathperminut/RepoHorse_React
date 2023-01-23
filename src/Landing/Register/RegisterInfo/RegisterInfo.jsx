import React from 'react';
import "./RegisterInfo.css"; 
import Logo from '../../../Sources/Images/Landing/Logo.png';
import {Link} from  'react-router-dom';
import {IoChevronBackOutline} from 'react-icons/io5';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { AppContext } from '../../../Context';
import { setRegister } from '../../../Services/Auth/register';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';
import Preloader from '../../../Shared/preloader/preloader';

function RegisterInfo() {

     /* CONTEXT */
    
    let {loading,setLoading}=React.useContext(AppContext);


    //VARIABLE ROUTING
    const navigate=useNavigate();

    /* USE STATE */

    let [userData,setUserData]=React.useState({
        username:"",
        password:"",
        email:"",
        first_name:"", 
    })
    let [button,setButton]=React.useState(true);
    const [eye,setEye]=React.useState(true);


    const SeePassword=()=>{
      console.log("dd")
      setEye(false);
      const input = document.querySelector("#password");
      // When an input is checked, or whatever...
      input.setAttribute("type", "text");
      input.classList.add( "colorWhite" );
    }
    const HidePassword=()=>{
      console.log("dad")
      setEye(true);
      const input = document.querySelector("#password");

        input.setAttribute("type", "password");
        input.classList.remove( "colorWhite" );
    }

    const ReadInputs=(event,type)=>{
     
      let Data={...userData,[type]:event.target.value};
      CheckData(Data);
      setUserData(Data);
    }

    const CheckData=(data)=>{
     
      if(data.username!=="" && data.password!=="" && data.email!=="" && data.first_name!==""  ){
        setButton(false);
      }else{
        setButton(true);

      }

    }

    const submit=async(event)=>{
     
      event.preventDefault();

      setLoading(true);
      
      let result=undefined

      result=await setRegister(userData).catch((error)=>{
        console.log("Response",error.response.data.username[0]);
        setLoading(false);
        if(error.response.data.username[0]==="A user with that username already exists."){
          Swal.fire({
            icon: 'error',
            title: 'Nombre de usuario ya existente',
          })
        }else if (error.response.data.email[0]==="A user with that email already exists."){
          Swal.fire({
            icon: 'error',
            title: 'Correo ya registrado',
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Falla en la conexión',
            text: 'Comprueba tu red de internet',
          })
        }
        
      })

      if (result!==undefined){
         setLoading(false);
         console.log(result['data']);
         Swal.fire({
          icon: 'Success',
          title: 'Registro completado con éxito',
        })
        navigate('/Landing/Login');

      }
   

    }

    return (
      <>
      {
        loading ?
        <>
        <Preloader></Preloader>
        </>
        :

        <></>
      }
      <div className="LoginInfoContainer">
        <div class="card-body">
        <img  className='Logo Login_Logo' src={Logo} alt=""></img>
        <form   action="" class="FormContainer">
          <div class="mb-3">
            <div class="col-12">
              <div class="form-floating inner-addon left-addon">
                <input onChange={(event)=>ReadInputs(event,'first_name')}   type="text" autocomplete="off" class="form-control INPUT_DATA font-small"  id="correo" placeholder="Correo"/>
                <label class="c-orange op-1 textForm">Nombre</label>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="col-12">
              <div class="form-floating inner-addon left-addon">
                <input onChange={(event)=>ReadInputs(event,'username')}   type="text" autocomplete="off" class="form-control INPUT_DATA font-small"  id="correo" placeholder="Correo"/>
                <label class="c-orange op-1 textForm">Nombre de usuario</label>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="col-12">
              <div class="form-floating inner-addon left-addon">
                <input onChange={(event)=>ReadInputs(event,'email')}    type="text" autocomplete="off" class="form-control INPUT_DATA font-small"  id="correo" placeholder="Correo"/>
                <label class="c-orange op-1 textForm">Correo</label>
              </div>
            </div>
          </div>
          <div >
            <div class="col-12">
              <div class="form-floating inner-addon right-addon">
                <input onChange={(event)=>ReadInputs(event,'password')}  type="password" id="password"  class="form-control INPUT_DATA c-orange op-1 font-small"  placeholder="Password"
                  />
                <label class="c-orange op-1 textForm">Contraseña</label>
                {eye===true  ? 
                <>
                 <AiOutlineEye className='eye-password' onClick={SeePassword}></AiOutlineEye>
                </>
                :
                <>
                 <AiOutlineEyeInvisible className='eye-password' onClick={HidePassword}></AiOutlineEyeInvisible>
                </>
                }
              </div>
            </div>
          </div>
          <div class="">
            <button disabled={button} onClick={submit} className="ButtonLogin mt-big" type="submit">
              <span className="textForm ">Registrarse</span>
            </button>
          </div>
        </form>

      </div>
      <div className="LinkedContainer">
        <Link id="LinkedLabel"  to='/Landing/Login'><span className="LinkedText textForm display-flex-row"  size="sm">
          <IoChevronBackOutline/>Volver</span>
        </Link>
      </div>
      </div>

      </>
      
      
    );
  }

export default RegisterInfo;