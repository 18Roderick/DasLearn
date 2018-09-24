const services = require('../utils/token')

function isAuth(req, res, next ){

   if(!req.headers.authorization){
     return res.status(403).json({ message: "No tienes autorizacion"})
   }

   const token = req.headers.authorization.split(' ')[1]

    services.decodeToken(token)
      .then( response => {
        req.user = response
        next()
      })

      .catch( response => {
        res.status(response.status).json(response)
      })


}

module.exports = isAuth