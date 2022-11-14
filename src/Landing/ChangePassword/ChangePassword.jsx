import React from 'react';
import './ChangePassword.css';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';



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
      <body className='GeneralContainer'>
         <form onSubmit={onSubmit} className='Container formElement_mt-0' >
           <h1 className='title formElement_mt-0'>Cambiar contraseña<span className='SpanTitle'>.</span></h1>
           <h2 className='subtitle formElement'>Ingrese la nueva contraseña</h2>
           <input className='input formElement' onChange={onChangePassword} type="password"  placeholder='Nueva contraseña'></input>
           <input className='input formElement' onChange={onChangeRepeatPassword} type="password"  placeholder='Repetir contraseña'></input>
           <button className='ButtonSubmit formElement' type="submit">Completar</button>
         </form>
      </body>
    </> 
  )
}

