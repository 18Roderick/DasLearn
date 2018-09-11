import constants from '../constants';

function loadModulos(){

}

function loadModulosRequest(){
    return {
      type: constants.LOAD_MODULOS_REQUEST,
    }
}

function loadModulosSucces(modulos){
   return{
     type: constants.LOAD_MODULOS_SUCCES,
     payload: modulos,
   }
}

function loadModulosFailure(error){
  return {
    type: constants.LOAD_MODULOS_FAILURE,
    payload: error,
    error: true,

  }
}