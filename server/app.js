const express = require('express');

const uuidv4 = require('uuid/v4');


const models = require('./models/index');


const app = express();


app.listen(3000, () => {
  console.log(`🚀 Server ready at http://localhost:3000`);
})