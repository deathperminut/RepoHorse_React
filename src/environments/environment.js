import {configuraciones} from '../../src/webConfig';

let server=configuraciones.server;

export const environment={
  production:false,

  //API
  api:server,

  //AUTH
  register:'register/',
  login:'login/',
  ResetPassword_1:'password_reset/',
  ResetPassword_2:'password_reset/confirm/',
  ChangePassword:'change-password/',
  LogoutAll:'logout/',

  //EVENTS
  setEvent:'create-event/',
  getEvents:'list-event/',

  //HORSES
  setHorse:'create-caballo/',
  getHorse:'listar-caballos/',

  //MODEL
  setVideoHorse:'agregar-video/',
  processVideo:'procesar-video/',

  



}