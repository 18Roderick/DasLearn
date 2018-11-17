import React from 'react'
import Signin from './Signin'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const submitSignin = async values => {
  await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}

const submitting = e => {
  console.log(e)
}

const Auth = ({noAuth}) => (
  <div>
    {
      noAuth && 'no tienes autorizacion para acceder debes iniciar sesion o registrarte'
    }
    login de la aplicacion o creacion del usuario
    <Signin  handleSubmit={submitSignin} />
    
  </div>
)


export default Auth;