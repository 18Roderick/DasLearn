import { LOAD_MODULOS, GET_MODULOS} from '../actions'

const initialSate = { }
export const modulos = (state = initialSate, action) => {
  switch(action.type){
    case LOAD_MODULOS:{
      return{
        ...state,
      }
    }
    case GET_MODULOS: {
      return {
        ...state,
        data:action.payload
      }
    }
    default:
      return state
  }
}