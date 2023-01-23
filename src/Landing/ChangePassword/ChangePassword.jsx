import React from 'react';
import './ChangePassword.css';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../../Sources/Images/Landing/LoginBackground.png'; 
import Logo from '../../Sources/Images/Landing/Logo.png';
import {Link} from  'react-router-dom';
import {IoChevronBackOutline} from 'react-icons/io5';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { ConfirmResetPassword } from '../../Services/Auth/auth';
import Preloader from '../../Shared/preloader/preloader';
import { AppContext } from '../../Context';



export default function ChangePassword() {
  
  /* APPCONTEXT */
  
  let {loading,setLoading}=React.useContext(AppContext);
  
  /* NAVIGATE */
  const navigate=useNavigate();
  
  /* VARIABLES */
  const [Token,setToken]=React.useState('');
  const [Password,setPassword]=React.useState('');
  const [blockButton,setBlockButton]=React.useState(true);
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

  /* FUNCIONES */
  const onChangeToken=(event)=>{
    CheckData(event.target.value,'token');
    setToken(event.target.value);
  }
  const onChangePassword=(event)=>{
    CheckData(event.target.value,'password');
    setPassword(event.target.value);
  }


  const CheckData=(data,type)=>{

    if(type==="token"){
      if(data!=="" && Password!==""){
        setBlockButton(false);
      }else{
        setBlockButton(true);
      }
    }else{
      if(Token!=="" && data!==""){
        setBlockButton(false);
      }else{
        setBlockButton(true);
      }

    }

  }

  const onSubmit=async(event)=>{
    event.preventDefault();
    
    //Logica de base de datos
    setLoading(true);
    let result=undefined;

    result=await ConfirmResetPassword({token:Token,password:Password}).catch((error)=>{
      console.log(error);
      setLoading(false);
      Swal.fire({
                 icon: 'error',
                 title: 'error al completar la acción o se suministro un token invalido',
      }) 

    })
    
    if(result!==undefined){
      setLoading(false)
      console.log(result['data']);
      Swal.fire({
        icon: 'success',
        title: 'contraseña cambiada correctamente',
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
     <div  className="LoginContainer" style={{backgroundImage: `url(${logo})`,backgroundSize:'cover'}}>
                <div className="ForgetContainer bottom-0">
                    <div className="card-body">
                    <img  className='Logo Login_Logo' src={Logo} alt=""></img>
                    <form   action="" className="FormContainer">
                      <div className="mb-3">
                        <div className="col-12">
                          <div className="form-floating inner-addon left-addon">
                            <input onChange={onChangeToken}  type="text" autocomplete="off" className="form-control INPUT_DATA font-small"  id="correo" placeholder="ingresa el token de seguridad"/>
                            <label className="c-orange op-1 textForm">Token </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="col-12">
                          <div className="form-floating inner-addon left-addon">
                            <input onChange={onChangePassword}   type="password" autocomplete="off" className="form-control INPUT_DATA c-orange font-small"  id="password" placeholder="Correo"/>
                            <label className="c-orange op-1 textForm">Nueva contraseña</label>
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
                      <div className="">
                        <button onClick={onSubmit} disabled={blockButton} className="ButtonLogin mt-big" type="button">
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

