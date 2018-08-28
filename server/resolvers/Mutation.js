const models = require('../models');


//  crud de modulo
async function createModulo (root, args) {

  try {
    const {
      dataValues: newModulo
    } = await models.Modulos.create({
      titulo: args.titulo,
      descripcion: args.descripcion
    })

    const modulo = await fetchModulo(newModulo.id);
    return modulo;
  } catch (error) {
    console.log(error)
  }

}


const updateModulo = async (root, args) => {
  try {
    let dataUpdating = {}
    if (args.titulo) {
      dataUpdating.titulo = args.titulo;
    }

    if (args.descripcion) {
      dataUpdating.descripcion = args.descripcion;
    }

    if (args.id && (dataUpdating.titulo && dataUpdating.descripcion)) {

      const moduloUpdated = await models.Modulos.update(dataUpdating, {
        where: {
          id: args.id
        }
      })


      console.log(moduloUpdated);

      let modulo = await fetchModulo(args.id);
      return modulo;

    }
  } catch (error) {
    console.log(error);
  }
}


const deleteModulo = async (root, args) => {

  try {

    if (args.id) {
      let modulo = await fetchModulo(args.id);


      const moduloDeleted = models.Modulos.destroy({
        where: {
          id: args.id
        }
      })

      console.log(modulo);
      return modulo;
    }

  } catch (error) {
    console.log(`Error in deleteModulo ${error}`);
  }
}

const createPregunta = async (root, args) => {
  try {
    if( args.idModulo ){
      
      const moduloData = await models.Modulos.findById(args.idModulo)

      const {dataValues: newPregunta } = await moduloData.createPregunta({
        pregunta: args.pregunta,
      })

      //console.log( newPregunta );
      const data = await fetchPreguntas(newPregunta.id);
      //console.log(data)
      return data;

    }else{
      throw new Error('missing idModulo');
    }
    
  } catch (error) {
    console.log(error);
  }
  
}

const updatePregunta = async (root, args) => {

}

/// funiones reutilizadas
const fetchModulo = async (id) => {
  try {
    
    let modulos = await models.Modulos.findOne({
      where: {
        id,
      },
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
    })
  
    if(modulos){

      let { dataValues: modulo} = modulos;
    
      return modulo;

    }else{
      throw new Error("Modulo no existe");
    }

  } catch (error) {
    throw error;
  }
}

const fetchPreguntas = async (id) => {

  let { dataValues: data} = await models.Preguntas.findOne({
    where:{
      id,
    },
    attributes: ['id', 'pregunta', 'ModuloId'],
    include:[
      {
        model: models.Respuestas,
        as: 'respuestas',
        attributes: ['id', 'opcion', 'correcta'],
      }
    ]

  })

  const {dataValues: autor } = await models.Modulos.findById(data.ModuloId);
  data.autor = autor;
  console.log(data);
  return data;
}
module.exports = {
  createModulo,
  updateModulo,
  deleteModulo,
  createPregunta,
};