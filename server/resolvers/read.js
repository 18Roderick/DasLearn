const models = require('../models');


async function getModulos(limit = 10) {
  limit = (limit > 0) ? limit: 10;
  const data = await models.Modulos.findAll({
    attributes: ['id', 'titulo', 'descripcion'],
    limit,
  });

  return data;

}


async function getPreguntas(idModulo, limit = 5){
  try {

    limit = (limit > 0) ? limit: 5;

    const data = await models.Preguntas.findAll({
      where: {
        ModuloId: idModulo,
      },
      attributes: [ 'id', 'pregunta'],
      limit,
    })

    return data;

  } catch (error) {
    console.log(error)
    throw error;
  }
}


async function getRespuestas(idPregunta){
  try {
      if(idPregunta){
        return await models.Respuestas.findAll({
          where:{
            PreguntasId: idPregunta
          },
          attributes: ['id', 'opcion', 'correcta']
        })
      } else {
        return new Error('Parama missing')
      }
  } catch (error) {
    console.log(error)
    throw error;
  }
}


async function getAll(limit = 10) {

  const data = await models.Modulos.findAll({
    limit,
    attributes: ['id', 'titulo', 'descripcion'],
    include:[{
      model: models.Preguntas,
      as: 'preguntas',
      attributes: [ 'id', 'pregunta'],
      include:[{
        model: models.Respuestas,
        as: 'respuestas',
        attributes: ['id', 'opcion', 'correcta']
      }]
    }]
  });

  return data;

}

async function getRanking(limit = 10) {
  try {
    const data = await models.Ranking.findAll({
      order: models.sequelize.fn('max', models.sequelize.col('puntaje')),
      limit,
      attributes:['id', 'puntaje'],
      include:[{
        model: models.Usuario,
        as: 'usuario',
        attributes:['id', 'nombre', 'email']
      }]
    })

    return data;
  } catch (error) {
    console.log(error)
    throw error;
  }
}


function getPuntaje(){
  try {
    
  } catch (error) {
    
  }
}




module.exports = {
  getAll,
  getModulos,
  getPreguntas,
  getRespuestas,
  getRanking,
}