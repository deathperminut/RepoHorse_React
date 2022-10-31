import React from 'react';
import "./RegisterInfo.css"; 

function RegisterInfo() {
    return (
      <div className="RegisterInfoContainer">
        <div class="card-body">
        <h4 class="txt-xxl-static txt-color-light font-notosans-bold mb-7 RegisterTitle" >Bienvenido</h4>
        <form action="" class="position-relative">
          <div class="row mb-3">
            <div class="col-12">
              <div class="form-floating inner-addon left-addon">
                <input type="email" class="form-control" id="correo" placeholder="Correo"/>
                <label class="font-notosans-regular">Correo electrónico</label>
                <i class="fa icon-mail fs-xs"></i>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="form-floating inner-addon right-addon">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                  />
                <i class="fa icon-contrasena fs-xs"></i>
                <label class="font-notosans-regular">Contraseña</label>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <div class="form-check d-flex flex-row justify-content-start align-items-center align-self-center">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label ps-2" for="flexCheckDefault">
                  <span class="txt-xxs-static txt-color-gray font-notosans-regular">Recordar contraseña</span>
                </label>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 col-12 mx-auto mt-4">
            <button class="ButtonRegister" type="button">
              <span >Ingresar</span>
            </button>
          </div>
        </form>
      </div>
        
      </div>
    );
  }

export default RegisterInfo;