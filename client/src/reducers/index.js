import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import {authorization} from './auth'
import {modulos} from './modulos'

export default combineReducers({
  authorization,
  modulos,
  form: formReducer,
})