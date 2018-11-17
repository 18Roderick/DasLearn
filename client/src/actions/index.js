import { fetchModulos } from '../api'

export const GET_AUTH = 'AUTH'
export const AUTH = 'AUTH'
export const NO_AUTH = 'NO_AUTH'
export const LOAD_MODULOS = 'LOAD_MODULOS'
export const GET_MODULOS = 'GET_MODULOS'

export const setAuth = payload => ({type: AUTH, payload})
//export const loadingModulos = payload => ({type: LOAD_MODULOS, payload})
export const getModulos = payload => ({type: GET_MODULOS, payload})

export const loadModulos = (payload) => {
  return dispatch => {
      fetchModulos().then(data => {
        dispatch(getModulos(data.data))
      })
  }
}

export const getAuth = payload => {
  return dispatch => {

  }
}