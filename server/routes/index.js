const express = require('express')

const passport = require('passport')

const passportSetup = require('../utils/passport-setup')

const router = express.Router()

router.get('/', (req, res, next) => {
   res.send('Hello from the server')
})

router.get('/google', passport.authenticate('google',{
  scope:['profile','openid', 'email']
}) )

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res, next) =>{
  console.log(req)
  res.send('succefully')
})

router.post('/login', (req, res, next ) => {
  res.redirect('/')
})


module.exports = router