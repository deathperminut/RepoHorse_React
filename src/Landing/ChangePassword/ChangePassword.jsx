import React from 'react';
import './ChangePassword.css';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../../Sources/Images/Landing/LoginBackground.png'; 
import Logo from '../../Sources/Images/Landing/Logo.png';
import {Link} from  'react-router-dom';
import {IoChevronBackOutline} from 'react-icons/io5';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'



export default function ChangePassword() {
  /* NAVIGATE */
  const navigate=useNavigate();
  
  /* VARIABLES */
  const [Password,setPassword]=React.useState('');
  const [RepeatPassword,setRepeatPassword]=React.useState('');

  /* FUNCIONES */
  const onChangePassword=(event)=>{
    setPassword(event.target.value);
  }
  const onChangeRepeatPassword=(event)=>{
    setRepeatPassword(event.target.value);
  }

  const onSubmit=(event)=>{
    event.preventDefault();
    //Logica de base de datos
    
    //Redirigir a dirección de recuperación de correo
    if(Password===RepeatPassword){
        navigate('/Login');
    }else{
        Swal.fire({
            icon: 'info',
            title: 'Error',
            text: 'No hay similitud en el formulario.',
          }) 
    }

    //OBTENEMOS LA INFORMACIÓN
  }


  return (
    <>
     <div  className="LoginContainer" style={{backgroundImage: `url(${logo})`,backgroundSize:'cover'}}>
                <div className="ForgetContainer bottom-0">
                    <div class="card-body">
                    <img  className='Logo Login_Logo' src={Logo} alt=""></img>
                    <form   action="" class="FormContainer">
                      <div class="mb-3">
                        <div class="col-12">
                          <div class="form-floating inner-addon left-addon">
                            <input   type="password" autocomplete="off" class="form-control INPUT_DATA"  id="correo" placeholder="Correo"/>
                            <label class="c-orange op-1 textForm">Nueva contraseña</label>
                            <AiOutlineEye className='eye-password'></AiOutlineEye>
                          </div>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="col-12">
                          <div class="form-floating inner-addon left-addon">
                            <input   type="password" autocomplete="off" class="form-control INPUT_DATA"  id="correo" placeholder="Correo"/>
                            <label class="c-orange op-1 textForm">Repetir contraseña</label>
                            <AiOutlineEye className='eye-password'></AiOutlineEye>
                          </div>
                        </div>
                      </div>
                      <div class="">
                        <button className="ButtonLogin mt-big" type="submit">
                          <span className="textForm ">Cambiar Contraseña</span>
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

            

         </div>

    </> 
  )
}

