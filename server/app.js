const express = require('express')

const morgan = require('morgan')

const compression = require('compression')

const helmet = require('helmet')

const MerrorModule = require('express-merror');

const bodyParser = require('body-parser')


const apiRoute = require('./api')

const indexRoute = require('./routes')

const MerrorMiddleware = MerrorModule.MerrorMiddleware;

const app = express()

const port = process.env.PORT || 3001

app.set('port', port)

app.use(morgan('common'))

app.use(helmet())

app.use(compression())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/', indexRoute)

app.use('/api', apiRoute)

app.use( (req, res, next ) => {
  res.send('Error 404 Cannot find this site')
})

app.use(MerrorMiddleware())


app.listen(port, () => {	
	console.log(`🚀 Server ready at http://localhost:${app.get('port')}`)  
})