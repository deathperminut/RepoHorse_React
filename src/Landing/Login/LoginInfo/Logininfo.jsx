import React from 'react';
import "./LoginInfo.css";
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import {Link} from  'react-router-dom';
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
        navigate('/Main');



      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Incorrect Credentials!',
        })

      }

      //OBTENEMOS LA INFORMACIÓN
    }

   

    return (
      <div className="LoginInfoContainer">
        <div class="card-body">
        <h4 class="mb-7 RegisterTitle" >Bienvenido</h4>
        <form onSubmit={onSubmit}  action="" class="">
          <div class="row mb-3">
            <div class="col-12">
              <div class="form-floating inner-addon left-addon">
                <input onChange={onChangeEmail}  type="email" class="form-control" value={Email} id="correo" placeholder="Correo"/>
                <label class="font-notosans-regular">Correo electrónico</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="form-floating inner-addon right-addon">
                <input onChange={onChangePassword} type="password"  class="form-control"  value={Password} id="floatingPassword" placeholder="Password"
                  />
                <label class="font-notosans-regular">Contraseña</label>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <div class="">
                <input  onChange={onChangeCheckboxRememberPassword} class="form-check-input" type="checkbox"  id="flexCheckDefault"/>
                <label class="form-check-label ps-2" for="flexCheckDefault">
                  <span class="">Recordar contraseña</span>
                </label>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 col-12 mx-auto mt-4">
            <button class="ButtonLogin" type="submit">
              <span >Ingresar</span>
            </button>
          </div>
        </form>

      </div>
      <div className="LinkedContainer">
        <Link id="LinkRegister" to='/ForgetPassword'><span className="Linked"  size="sm">Olvide mi Contraseña</span></Link>
        <Link id="LinkRegister" to='/Landing'><span className="Linked"  size="sm">Volver al inicio</span></Link>
      </div>
      
        
      </div>
    );
  }

export default LoginInfo;