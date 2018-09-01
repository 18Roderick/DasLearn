const express = require('express');

const router = express.Router();

const resolvers = require('../resolvers');

router.get('/', (req, res, next) => {
   res.json({
     message: "hello from the server"
   })
})


router.get('/modulos', (req, res, next ) => {
  console.log(resolvers);
    resolvers.Query.getAll()
      .then( data => {
        res.json(data)
      })
})

router.get('/ranking', (req, res, next ) => {
  resolvers.Query.getRanking()
    .then( data => {
      res.json(data)
    })
})

module.exports = router;