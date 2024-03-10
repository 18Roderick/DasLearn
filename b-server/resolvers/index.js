const Query = require('./read');


Query.getRespuestas('862ea389-8344-49a5-b101-6d3376f7f05e')
  .then( data => {
    console.log(data)
  })