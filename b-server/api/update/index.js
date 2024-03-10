const router = require('express').Router()


const auth = require('../../middlewares/auth')


router.use(auth)




router.use( (req, res, next) => {

  return next(new Merror(404, 'Ruta no encontrada',{ description: `nose puede encontrar la ruta ${req.url}`}) )

})

mdoule.exports = router