import React from 'react';
import "./LoginInfo.css";
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import {Link} from  'react-router-dom';
/* ICONS */
import * as Icon from 'react-bootstrap-icons';
import { FaHorseHead } from 'react-icons/fa';
import ToggleSwitch from '../../../Shared/buttonToggle/buttonToggle';
import Logo from '../../../Sources/Images/Landing/Logo.png';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { delay } from 'lodash';
import { AppContext } from '../../../Context';
import Preloader from '../../../Shared/preloader/preloader';
// import Button from 'react-bootstrap/Button';




function LoginInfo() {


  /* APP CONTEXT */

  let {loading,setLoading,sleep}=React.useContext(AppContext);

    
    
  //VARIABLE ROUTING
    const navigate=useNavigate();

    //DEFINIMOS LOS ESTADOS PARA MANEJAR EL FORMULARIO
    const [Email,setEmail]=React.useState('');
    const [Password,setPassword]=React.useState('');
    const [RememberPassword,setRememberPassword]=React.useState(false);

    //CARGAMOS INFORMACIÓN CON USE EFFECT
    React.useEffect(()=>{
      let Data= localStorage.getItem('User');
      if(Data!==null && Data!==undefined){
        Data=JSON.parse(Data);
        setEmail(Data.email);
        setPassword(Data.password);
      }
    },[]);


    

    const onChangeEmail=(event)=>{
      setEmail(event.target.value);
    }

    const onChangePassword=(event)=>{
      setPassword(event.target.value);
    }
    const onChangeCheckboxRememberPassword=(event)=>{
      setRememberPassword(event.target.checked);
    }

    //METODO EVALUAR FORMULARIO
    const onSubmit=async(event)=>{
      event.preventDefault();

      setLoading(true);
      
      await sleep(3000);

      setLoading(false);

      
      if(Email==="mendezsebas8@gmail.com" && Password==="Carrito_1"){

        if(RememberPassword){
          let Dict={email:Email,password:Password};
          Dict=JSON.stringify(Dict);
          localStorage.setItem("User",Dict);
        }
        navigate('/Main/HorseApp');



      }else{
        Swal.fire({
          icon: 'error',
          title: 'Credenciales incorrectas.',
        })

      }

      //OBTENEMOS LA INFORMACIÓN
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
                <input onChange={onChangeEmail}  type="email" autocomplete="off" className="form-control INPUT_DATA" value={Email} id="correo" placeholder="Correo"/>
                <label className="c-orange op-1 textForm">Usuario</label>
              </div>
            </div>
          </div>
          <div >
            <div className="col-12">
              <div className="form-floating inner-addon right-addon">
                <input onChange={onChangePassword} type="password"  className="form-control INPUT_DATA c-orange op-1"  value={Password} id="floatingPassword" placeholder="Password"
                  />
                <label className="c-orange op-1 textForm">Contraseña</label>
                <AiOutlineEye className='eye-password'></AiOutlineEye>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="col-12">
            <ToggleSwitch label="Recordarme" />
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