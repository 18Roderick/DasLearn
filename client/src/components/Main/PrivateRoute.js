import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types'

const PrivateRoute = ({component: Component, ...rest}) => {
  const authorization = rest.authorization 
  return(
    <Route {...rest} render={ 
      props =>  authorization.token ? 
        <Component {...props} ></Component> :
        <Redirect to={{pathname: '/auth', state: { from: props.location }} }></Redirect>     
    }></Route>
  )
}

PrivateRoute.propTypes = {
  authorization: PropTypes.object.isRequired,
}
export default withRouter(PrivateRoute);