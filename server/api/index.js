const express = require('express');

const MerrorModule = require('express-merror');


const resolvers = require('../resolvers');

const Merror = MerrorModule.Merror;

const router = express.Router();

router.get('/', (req, res, next) => {
   res.json({
     message: "hello from the server"
   })
})


router.get('/modulos', (req, res, next ) => {
   let data = {}
    resolvers.Query.getAll()
      .then( datos => {
        data.data = datos
        res.json(data)
      })

      .catch( err => {
        return next(new Merror(401, "Data not available", {code: 1001,status: "REFRESH_TOKEN"} ));
      })
})

router.get('/modulos/preguntas/:id/:limit', (req, res, next) =>{
  console.log(req.params)
  res.send('todo bien '+ req.params.id)
})



router.get('/ranking', (req, res, next ) => {
  resolvers.Query.getRanking()
    .then( data => {
      res.json(data)
    })

    .catch( err => {
      return next(new Merror(401, "Data not available", {code: 1001,status: "connection failed"} ));
    })
})


router.use( (req, res, next) => {

  return next(new Merror(404, 'Ruta no encontrada',{ description: 'Can not find this link'}) )

})
module.exports = router;