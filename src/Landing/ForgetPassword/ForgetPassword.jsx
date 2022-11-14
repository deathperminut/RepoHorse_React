
import React from 'react';
import './ForgetPassword.css';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

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
      <body className='GeneralContainer'>
         
         <form className='Container formElement_mt-0' onSubmit={onSubmit}>
           <h1 className='title formElement_mt-0'>Olvidé mi contraseña<span className='SpanTitle'>.</span></h1>
           <h2 className='subtitle formElement'>Ingrese el correo electronico para enviarle las instrucciones de recuperación.</h2>
           <input className='input formElement' type="email" onChange={onChangeEmail} placeholder='Ingresa el correo electronico'></input>
           <button className='ButtonSubmit formElement' type="submit">Recuperar</button>
         </form>



      </body>
    </>
    
  )
}

export default ForgetPassword;


