const express = require('express')

const morgan = require('morgan')

const compression = require('compression')

const helmet = require('helmet')

const uuidv4 = require('uuid/v4')


const apiRoute = require('./api')

const indexRoute = require('./routes')

const app = express()

const port = process.env.PORT || 3000

app.set('port', port)

app.use(helmet())

app.use(compression())

app.use(morgan('tiny'))

app.use('/', indexRoute)

app.use('/api', apiRoute)


app.listen(port, () => {	
	console.log(`🚀 Server ready at http://localhost:${app.get('port')}`)  
})