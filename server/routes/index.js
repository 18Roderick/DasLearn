const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
   res.send('Hello from the server')
})

module.exports = router