const express = require('express');

const MerrorModule = require('express-merror');


const Read = require('../resolvers/read');

const Merror = MerrorModule.Merror;

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(req.params)
  let data = {}
  Read.getAll()
    .then( datos => {
      data.data = datos
      res.json(data)
    })

    .catch( err => {
      return next(new Merror(401, "Data not available", {code: 1001,status: "REFRESH_TOKEN"} ));
    })
})


router.get('/modulos', (req, res, next ) => {
   let data = {}
    Read.getModulos()
      .then( datos => {
        data.data = datos
        res.json(data)
      })

      .catch( err => {
        return next(new Merror(401, "Data not available", {code: 1001,status: "REFRESH_TOKEN"} ));
      })
})

router.get('/modulos/preguntas/:id', (req, res, next) =>{
  //res.send('todo bien '+ req.params.id)
  let data = {}
  if( req.params.id ){
    const limit = req.params.limit ? req.params.id :  5;

    Read.getPreguntas(req.params.id, limit)
    .then( datos => {
      data.data = datos
      res.json(data)
    })
  
    .catch( err => {
      return next(new Merror(401, "Data not available", {code: 1001,status: "REFRESH_TOKEN"} ));
    })

  }else{
    return next(new Merror(401, "id module missing", {code: 1001,message: "id parama missing"} ));
  }

})


router.get('/modulos/preguntas/respuestas/:id', (req, res, next ) => {

  if( req.params.id ){

  } else {

  }

})



router.get('/ranking', (req, res, next ) => {
    Read.getRanking()
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