import {configuraciones} from '../../src/webConfig';

let server=configuraciones.server;

export const environment={
  production:true,

  //API
  api:server,

  //AUTH
  register:'register/',
  login:'login/',
  ResetPassword_1:'password_reset/',
  ResetPassword_2:'password_reset/confirm/',
  ChangePassword:'change-password/',
  LogoutAll:'logout/',
  user:'api/user/',

  //EVENTS
  setEvent:'create-event/',
  getEvents:'list-event/',
  deleteEvent:'eliminar-evento/',
  editEvent:'editar-evento/',

  //HORSES
  setHorse:'create-caballo/',
  getHorse:'listar-caballos/',
  deleteHorse:'eliminar-caballo',
  editHorse:'editar-caballo/',

  //MODEL
  setVideoHorse:'agregar-video/',
  processVideo:'procesar-video/',
  processVideoEsqueleto:'procesar-esqueleto/',
  saveVideoCount:'guardar-video/',
  saveVideoEsqueleto:'guardar-esqueleto/',

  



}