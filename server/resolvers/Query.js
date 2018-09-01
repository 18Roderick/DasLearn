const models = require('../models');



async function getAll(root, args) {

  const data = await models.Modulos.findAll({
    attributes: ['id', 'titulo', 'descripcion'],
    include: [{
      model: models.Preguntas,
      as: 'preguntas',
      attributes: ['id', 'pregunta'],
      include: [{
        model: models.Respuestas,
        as: 'respuestas',
        attributes: ['id', 'opcion', 'correcta'],
      }]
    }]
  });

  return data;

}

async function getRanking(root, args) {
  try {
    const data = await models.Ranking.findAll({
      include:[{
        model: models.Usuario,
        as: 'usuario',
      }]
    })
    //console.log(data[0].dataValues)
    return data;
  } catch (error) {
    console.log(error)
  }
}




module.exports = {
  getAll,
  getRanking,
}