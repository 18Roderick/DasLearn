const express = require('express');
const {
  ApolloServer,
  gql
} = require('apollo-server-express');
const uuidv4 = require('uuid/v4');


const schema = require('./schema');
const resolvers = require('./resolvers');
const models = require('./models/index');


const typeDefs = gql `${schema}`;

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const app = express();

server.applyMiddleware({
  app
});



app.listen(3000, () => {
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
})