const express = require('express');

const MerrorModule = require('express-merror');


const Read = require('../resolvers/read');

const Create = require('../resolvers/create')

const token = require('../utils/token')

const isAuth = require('../middlewares/auth')

const encryt = require('../utils/encryptPass')

const models = require('../models')

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
      return next(new Merror(401, "Data not available", {code: 1001,message:"try next time"} ));
    })
})


router.get('/test',  (req, res, next ) => {

  let data = req.params.body || 'no data disponible';
  console.log( req.query, req.headers )
  res.send( req.query );
})

router.get('/modulos', (req, res, next ) => {
   let data = {}
    Read.getModulos()
      .then( datos => {
        data.data = datos
        res.json(data)
      })

      .catch( err => {
        return next(new Merror(500, "Data not available", {code: 1001,status: "REFRESH_TOKEN"} ));
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
      return next(new Merror(204, "Data not available", {status: "no content "} ));
    })

  }else{
    return next(new Merror(400, "id module missing", {message: "id parama missing"} ));
  }

})


router.get('/modulos/preguntas/respuestas/:id', (req, res, next ) => {

  if( req.params.id ){
      Read.getRespuestas(req.params.id)
      .then( data => {
        res.json(data)
      })

      .catch( err => {
        return next(new Merror(204, "Data not available", {status: "no content "} ));
      })
  } else {
    return next(new Merror(400, 'id missing', { message: "some params missing id "}))
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


router.get('/profile', isAuth, (req, res ) =>{
   res.status(200).json({ message: 'ya tienes acceso'})
})


router.post('/signup', (req, res, next) => {  
  
  Create.crearUsuario(req.body.nombre, req.body.email, req.body.password)
  .then( user => {
    
    if(!user.error){
      res.status(200).json({ 
        message: 'registro exitoso',
        token: token.createToken(user)
      })      
    }else{
      res.status(300).json({ message: 'usuario ya existe'})
    }

  })
  

  
})

router.post('/signin', (req, res, next) => {
    let email = req.body.email || ''
    let password = req.body.password || ''
    console.log(req.body, req.query, req.params, req.headers)
    if(! email &&  !password){
        res.status(301).json({ message: ' datos vacios, ingrese datos validos'})
    }

    models.Usuario.findOne({
      where:{
        email,
        password: encryt.encrypt(password)
      }
    })

    .then( data => {
        console.info('consulta exitosa ')
        res.status(200).json({
          message: 'logeado exitosamente',
          token: token.createToken(data) 
        })
    })

    .catch( error => {
       console.error('error en la consulta' ,error)

       res.status(401).json({ message: 'error al realizar consulta'})
    })
})



router.use( (req, res, next) => {

  return next(new Merror(404, 'Ruta no encontrada',{ description: `nose puede encontrar la ruta ${req.url}`}) )

})
module.exports = router;