const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config/config').variables


function createToken(user){
  const payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(5, 'days').unix(),
  }

  return jwt.encode(payload, config.SECRET_TOKEN)
}


function decodeToken(token) {
  const decode = new Promise( (resolve, reject ) => {
    try {

      const payload = jwt.decode(token, config.SECRET_TOKEN)

      if( payload.exp <= moment().unix()){
        reject({
          status: 401,
          message: 'El token ha expirado',
        })
      }

      resolve(payload.sub)
   
    } catch (error) {
      reject({
        status: 500,
        message: 'invalid token'
      })
    }
  })

  return decode
}

module.exports = {
  createToken,
  decodeToken,
}