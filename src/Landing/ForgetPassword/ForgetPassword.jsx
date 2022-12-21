
import React from 'react';
import './ForgetPassword.css';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../../Sources/Images/Landing/LoginBackground.png'; 
import Logo from '../../Sources/Images/Landing/Logo.png';
import {Link} from  'react-router-dom';
import {IoChevronBackOutline} from 'react-icons/io5';

function ForgetPassword() {
  /* NAVIGATE */
  const navigate=useNavigate();

  /* VARIABLES */
  const [Email,setEmail]=React.useState('');

  /* FUNCTIONS */
  const onChangeEmail=(event)=>{
    setEmail(event.target.value);
  }

  const onSubmit=(event)=>{
    event.preventDefault();
    Swal.fire({
      icon: 'info',
      title: 'Revisa tu correo',
      text: 'Si el correo esta asociado a una cuenta, se ha enviado un correo con el instructivo de recuperación.',
    })
    
    //Logica de base de datos
    
    
    //Redirigir a dirección de recuperación de correo
    navigate('/ChangePassword');

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
                            <input   type="text" autocomplete="off" class="form-control INPUT_DATA"  id="correo" placeholder="Correo"/>
                            <label class="c-orange op-1 textForm">Correo de recuperación</label>
                          </div>
                        </div>
                      </div>
                      <div class="">
                        <button className="ButtonLogin mt-big" type="submit">
                          <span className="textForm ">Recuperar Contraseña</span>
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

export default ForgetPassword;


