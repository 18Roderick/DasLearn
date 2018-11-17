import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers'

window.localStorage.removeItem('auth_daslearn');
const initialState = {
  authorization: {
    token: window.localStorage.getItem('auth_daslearn'),
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore( reducers, initialState, composeEnhancers(
  applyMiddleware(thunk))
)