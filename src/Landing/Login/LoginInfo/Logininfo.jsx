import React from 'react';
import "./LoginInfo.css";
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import {Link} from  'react-router-dom';
/* ICONS */
import * as Icon from 'react-bootstrap-icons';
import { FaHorseHead } from 'react-icons/fa';
import ToggleSwitch from '../../../Shared/buttonToggle/buttonToggle';
// import Button from 'react-bootstrap/Button';




function LoginInfo() {

    
    
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
    const onSubmit=(event)=>{
      event.preventDefault();
      
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

   

    return (
      <div className="LoginInfoContainer">
        <div class="card-body">
        <FaHorseHead className='IconLogin mt-10'/>
        <h5 class="mb-7 " ></h5>
        <h4 class="c-orange " >Hola!</h4>
        <h4 class="mb-7 mb-6 c-orange" >Bienvenido a Mr Horse</h4>
        <h20 class="mb-7 xss mb-20 c-white textForm" >Ingrese sus credenciales para continuar</h20>
        <form onSubmit={onSubmit}  action="" class="FormContainer">
          <div class="mb-3">
            <div class="col-12">
              <div class="form-floating inner-addon left-addon">
                <input onChange={onChangeEmail}  type="email" autocomplete="off" class="form-control INPUT_DATA" value={Email} id="correo" placeholder="Correo"/>
                <label class="c-orange op-1 textForm">Usuario</label>
              </div>
            </div>
          </div>
          <div >
            <div class="col-12">
              <div class="form-floating inner-addon right-addon">
                <input onChange={onChangePassword} type="password"  class="form-control INPUT_DATA c-orange op-1"  value={Password} id="floatingPassword" placeholder="Password"
                  />
                <label class="c-orange op-1 textForm">Contraseña</label>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class="col-12">
            <ToggleSwitch label="Recordarme" />
            </div>
          </div>
          <div class="">
            <button className="ButtonLogin" type="submit">
              <span className="textForm">Ingresar</span>
            </button>
          </div>
        </form>

      </div>
      <div className="LinkedContainer">
        <Link id="LinkedLabel" to='/ForgetPassword'><span className="LinkedText textForm"  size="sm">Olvide mi Contraseña</span></Link>
      </div>
          <div class="">
            <button className="ButtonCount" type="button">
              <span className="textForm">Solicitar una cuenta</span>
            </button>
          </div>
      </div>
    );
  }

export default LoginInfo;