const models = require('../models');
const crypt = require('../utils/encryptPass')


async function crearUsuario(nombre, email, password){
  try {
    let ranking = {
      puntaje: 0
    }
    const data = await models.Usuario.findOrCreate({
      where: { email },
      defaults: {
        nombre,
        email,
        password: crypt.encrypt(password)
      },
      attributes: ['id', 'nombre', 'email']

    })

    if(!data[1]){
      return Object.assign({
        error: 'este usuario ya existe'
      }, data[0])
    }

    ranking.usuarioId = data[0].dataValues.id;

    const rankingCreated = data[0].createRanking(ranking);

    return {
      id: data[0].id,
      tipo: data[0].tipo,
      nombre: data[0].nombre,
      email: data[0].email
    }

  } catch (error) {
    return error
  }
  
}

module.exports = {
  crearUsuario,
}