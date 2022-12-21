import React from 'react';
import "./RegisterInfo.css"; 
import Logo from '../../../Sources/Images/Landing/Logo.png';
import {Link} from  'react-router-dom';
import {IoChevronBackOutline} from 'react-icons/io5';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'

function RegisterInfo() {
    return (
      <div className="LoginInfoContainer">
        <div class="card-body">
        <img  className='Logo Login_Logo' src={Logo} alt=""></img>
        <form   action="" class="FormContainer">
          <div class="mb-3">
            <div class="col-12">
              <div class="form-floating inner-addon left-addon">
                <input   type="text" autocomplete="off" class="form-control INPUT_DATA"  id="correo" placeholder="Correo"/>
                <label class="c-orange op-1 textForm">Nombres</label>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="col-12">
              <div class="form-floating inner-addon left-addon">
                <input   type="text" autocomplete="off" class="form-control INPUT_DATA"  id="correo" placeholder="Correo"/>
                <label class="c-orange op-1 textForm">Apellidos</label>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="col-12">
              <div class="form-floating inner-addon left-addon">
                <input   type="text" autocomplete="off" class="form-control INPUT_DATA"  id="correo" placeholder="Correo"/>
                <label class="c-orange op-1 textForm">Correo</label>
              </div>
            </div>
          </div>
          <div >
            <div class="col-12">
              <div class="form-floating inner-addon right-addon">
                <input  type="password"  class="form-control INPUT_DATA c-orange op-1"   id="floatingPassword" placeholder="Password"
                  />
                <label class="c-orange op-1 textForm">Contraseña</label>
                <AiOutlineEye className='eye-password'></AiOutlineEye>
              </div>
            </div>
          </div>
          <div class="">
            <button className="ButtonLogin mt-big" type="submit">
              <span className="textForm ">Registrarse</span>
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
      
    );
  }

export default RegisterInfo;