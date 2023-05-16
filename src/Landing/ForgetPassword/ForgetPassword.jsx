
import React from 'react';
import './ForgetPassword.css';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../../Sources/Images/Landing/LoginBackground.png'; 
import Logo from '../../Sources/Images/Landing/Logo.png';
import {Link} from  'react-router-dom';
import {IoChevronBackOutline} from 'react-icons/io5';
import { AppContext } from '../../Context';
import Preloader from '../../Shared/preloader/preloader';
import { setResetPassword } from '../../Services/Auth/auth';

function ForgetPassword() {

  /* CONTEXT */
    
  let {loading,setLoading}=React.useContext(AppContext);


  /* NAVIGATE */
  const navigate=useNavigate();

  /* VARIABLES */
  const [Email,setEmail]=React.useState('');
  const [disabledButton,setDisabledButton]=React.useState(true);
  

  /* FUNCTIONS */
  const onChangeEmail=(event)=>{
    if(event.target.value===""){
      setDisabledButton(true);

    }else{
      setDisabledButton(false);
    }
    setEmail(event.target.value);
  }

  const onSubmit=async(event)=>{
    
    event.preventDefault();


    let result=undefined;
    setLoading(true);

    result=await setResetPassword(Email).catch((error)=>{

      console.log(error);
      setLoading(false);
      if(error.response.data.email[0]==="Enter a valid email address."){
        Swal.fire({
          icon: 'error',
          title: 'No hay una cuenta asociada a este correo',
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Falla en la conexión comprueba tu red de internet',
        })
      }
      

    })

    if(result!==undefined){
      console.log(result['data']);
      setLoading(false);
      Swal.fire({
        icon: 'info',
        title: 'se ha enviado un token de recuperación a tu dirección de correo.',
      })
      navigate('/Landing/ChangePassword');
    }

  
    

    //OBTENEMOS LA INFORMACIÓN
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
         <div  className="LoginContainer" style={{backgroundImage: `url(${logo})`,backgroundSize:'cover'}}>
                <div className="ForgetContainer bottom-0">
                    <div className="card-body">
                    <img  className='Logo Login_Logo' src={Logo} alt=""></img>
                    <form   action="" className="FormContainer">
                      <div className="mb-3">
                        <div className="col-12">
                          <div className="form-floating inner-addon left-addon">
                            <input onChange={onChangeEmail}  type="email" autocomplete="off" className="form-control INPUT_DATA font-small"  id="correo" placeholder="Correo"/>
                            <label className="c-orange op-1 textForm">Correo de recuperación</label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button  onClick={onSubmit} disabled={disabledButton} className="ButtonLogin mt-big" type="button">
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


