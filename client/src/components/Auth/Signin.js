import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'


const Signin = props => {
  console.log(props)
  const {handleSubmit, submitting} = props

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <div>
          <Field 
            name='email' 
            component='input'
            type='email'
            placeholder='escriba su email'
          />
        </div>

        <label htmlFor="password">contraseña</label>
        <div>
          <Field 
            name='password' 
            component='input'
            type='password'
            placeholder='contraseña'
          />
        </div>
        <button type="submit" disabled={submitting} >iniciar</button>
      </form>
    </div>
  )
}

Signin.propTypes = {
  submit: PropTypes.func.isRequired,
}
export default reduxForm({
  form: 'signinForm',
})(Signin)