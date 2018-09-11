import constants from '../constants';

const initialState = {
  modulos: [],
  isLoading: false,
  errorMessage: null,
}

export default ( state = initialState, action ) => {
  switch (action.type){
    
    case constants.LOAD_MODULOS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      })
      break;
    
    case constants.LOAD_MODULOS_SUCCES:
      return Object.assign({}, state, {
        modulos: action.payload,
        isLoading: false,
      })
      break;
    
    case constants.LOAD_MODULOS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload.errorMessage
      })
      break;

    default:
      return state;

  }
}