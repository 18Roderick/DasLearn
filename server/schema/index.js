module.exports = `
  type Usuario{
    id: ID!
    nombre: String!
    password: String!
    email: String!
    token: String!
    ranking: Ranking!
  }

  type Ranking{
    id: ID!
    puntaje: Int
    usuario: Usuario
  }

  type Modulos{
    id: ID!
    titulo: String
    descripcion: String
    preguntas: [Preguntas]
  }

  type Preguntas{
    id: ID!
    pregunta: String!
    respuestas: [Respuestas]
    autor: Modulos
  }

  type Respuestas{
    id: ID!
    opcion: String!
    correcta: Boolean
    autor: Preguntas
  }

  type Query{

    getAll(first: Int): [Modulos]
    getRanking(first: Int): [Ranking]
    getUserInfo(id:ID!): Usuario
    getPreguntas(idModulo: ID): [Preguntas]
    getRespuestas(idPregunta: ID): [Respuestas]
  }

  

  type Mutation{
    createModulo(titulo: String!, descripcion: String): Modulos
    updateModulo(id:ID, titulo: String, descripcion: String): Modulos
    deleteModulo(id:ID): Modulos

    createPregunta(idModulo: ID!, pregunta: String): Preguntas
    updatePregunta(id: ID!, pregunta: String): Preguntas
    deletePregunta(id: ID!): Preguntas

    createRespuesta(idPregunta: ID, opcion: String, correcta: Boolean): Respuestas
    updateRespuesta(id: ID, opcion: String, correcta: Boolean): Respuestas
  }


  type Subscription {
    rankingUpdated: [Ranking]
  }



`;