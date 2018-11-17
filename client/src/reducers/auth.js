import { AUTH } from '../actions'

export const authorization = (state = {}, action) => {
  switch(action.type){

    case AUTH: {
      return {
        ...state,
        authorization:{
          token: action.payload.token
        }
      }
    }
    default:
      return state
  }
}