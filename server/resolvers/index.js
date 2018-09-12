const Query = require('./read');


Query.getPreguntas('16abaa6f-b175-4030-b867-24959405742b', 5)
  .then( data => {
    console.log(data)
  })