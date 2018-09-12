const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth20')

const googleCredentials = require('../credentials')

const models = require('../models')



passport.use(new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: googleCredentials.clientID,
    clientSecret: googleCredentials.clientSecret
}, (accessToken, refreshToken, profile, done) => {

    const { _json: userInfo} = profile

    models.Usuario.findOrCreate({ where: {email: userInfo.emails[0].value},
        defaults: { nombre: userInfo.displayName ,
            password: '123456x-s-sawsa' }})
        .then( (user) => {
    
           user[0].createRanking({puntaje:0})
            .then( ranking => {
                console.log(ranking)
                return done(null, true, userInfo)
            })
           
        })
    
}))


