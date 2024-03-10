const models = require('../models');



async function getAll(limit = 10) {

  const data = await models.Modulos.findAll({
    attributes: ['id', 'titulo', 'descripcion'],
    limit
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




module.exports = {
  getAll,
  getRanking,
}