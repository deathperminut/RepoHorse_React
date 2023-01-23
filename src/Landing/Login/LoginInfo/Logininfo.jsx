import React from 'react';
import "./LoginInfo.css";
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import {Link} from  'react-router-dom';
/* ICONS */

import ToggleSwitch from '../../../Shared/buttonToggle/buttonToggle';
import Logo from '../../../Sources/Images/Landing/Logo.png';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { AppContext } from '../../../Context';
import Preloader from '../../../Shared/preloader/preloader';
import { setLogin } from '../../../Services/Auth/login';





function LoginInfo() {


  /* APP CONTEXT */

  let {loading,setLoading,sleep}=React.useContext(AppContext);

    
    
  //VARIABLE ROUTING
    const navigate=useNavigate();

    //DEFINIMOS LOS ESTADOS PARA MANEJAR EL FORMULARIO
    const [Email,setEmail]=React.useState('');
    const [Password,setPassword]=React.useState('');
    const [RememberPassword,setRememberPassword]=React.useState(false);
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



    //CARGAMOS INFORMACIÓN CON USE EFFECT
    React.useEffect(()=>{
      let Data= localStorage.getItem('UserHorseApp');
      if(Data!==null && Data!==undefined){
        Data=JSON.parse(Data);
        setEmail(Data.email);
        setPassword(Data.password);
        setRememberPassword(Data.RememberPassword);
      }
    },[]);


    

    const onChangeEmail=(event)=>{
      setEmail(event.target.value);
    }

    const onChangePassword=(event)=>{
      setPassword(event.target.value);
    }
    const handleChange=(event)=>{
      setRememberPassword(event.target.checked);
    }

    //METODO EVALUAR FORMULARIO
    const onSubmit=async(event)=>{
      event.preventDefault();


      if(Email==="" || Password===""){
        Swal.fire({
          icon: 'error',
          title: 'Completar todos los campos para iniciar sesión',
        })
      }else{
        setLoading(true);
      
      let result=undefined;

      result=await setLogin({username:Email,password:Password}).catch((error)=>{

        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Credenciales incorrectas.',
        })
      })
      if(result!==undefined){
        setLoading(false);
        if(RememberPassword){
          /* GUARDAMOS EN LOCAL STORAGE LA CUENTA. */
          let Dict={email:Email,password:Password,RememberPassword:true};
          Dict=JSON.stringify(Dict);
          localStorage.setItem("UserHorseApp",Dict);
        }else{
          let Dict={email:"",password:"",RememberPassword:false};
          Dict=JSON.stringify(Dict);
          localStorage.setItem("UserHorseApp",Dict);
        }
        navigate('/Main/HorseApp');

      }

      }

    }

    /* GO TO REGISTER*/
    const GotoRegister=()=>{
      navigate('/Landing/Register');
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
        <div className="card-body">
        <img  className='Logo Login_Logo' src={Logo} alt=""></img>
        <form onSubmit={onSubmit}  action="" className="FormContainer">
          <div className="mb-3">
            <div className="col-12">
              <div className="form-floating inner-addon left-addon">
                <input onChange={onChangeEmail}  type="text" autocomplete="off" className="form-control INPUT_DATA font-small" value={Email} id="correo" placeholder="Usuario"/>
                <label className="c-orange op-1 textForm">Nombre de usuario</label>
              </div>
            </div>
          </div>
          <div >
            <div className="col-12">
              <div className="form-floating inner-addon right-addon">
                <input   onChange={onChangePassword} type="password"  className="form-control INPUT_DATA c-orange op-1 font-small"  value={Password} id="password" placeholder="Password"
                  />
                <label className="c-orange op-1 textForm">Contraseña</label>
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
          <div className="mt-4">
            <div className="col-12">
            <ToggleSwitch   saveFunction={handleChange} RememberPassword={RememberPassword}/>
            </div>
          </div>
          <div className="">
            <button className="ButtonLogin" type="submit">
              <span className="textForm">Ingresar</span>
            </button>
          </div>
        </form>

      </div>
      <div className="LinkedContainer">
        <Link id="LinkedLabel" to='/Landing/ForgetPassword'><span className="LinkedText textForm"  size="sm">Olvide mi Contraseña</span></Link>
      </div>
          <div className="">
            <button className="ButtonCount" type="button" onClick={GotoRegister}>
              <span className="textForm">Solicitar una cuenta</span>
            </button>
          </div>
      </div>

      </>
      
    );
  }

export default LoginInfo;