const data = require("./data.json");
const models = require("../models");

async function createTester() {
  const persona = {
    nombre: "Roderick Romero",
    email: "rjrr507@gmail.com",
    password: "09roderick"
  };
  let ranking = {
    puntaje: 0
  };

  const userCreated = await models.Usuario.create(persona);

  ranking.usuarioId = userCreated.dataValues.id;

  const rankingCreated = await userCreated.createRanking(ranking);

  console.log(rankingCreated.dataValues);
}

async function createAdmin() {
  const admin = {
    nombre: "admin",
    email: "admin",
    password: "admin09"
  };

  const adminCreated = await models.Usuario.create(admin);
}
async function main() {
  try {
    const sync = await models.sequelize.sync({ force: true });

    console.log(`Conexion exitosa a la basee de datos, Tablas sincrnoizadas`);

    await createTester();

    for (const datos of data) {
      //console.log(datos.titulo);

      let Pregunta = await models.Modulos.create({
        titulo: datos.titulo,
        descripcion: datos.descripcion
      });

      for (const pregunta of datos.preguntas) {
        //console.log(pregunta.pregunta)

        let Respuesta = await Pregunta.createPregunta({
          pregunta: pregunta.pregunta
        });

        for (const respuesta of pregunta.respuestas) {
          //console.log(respuesta.opcion)

          const fin = await Respuesta.createRespuesta({
            opcion: respuesta.opcion,
            correcta: respuesta.correcta
          });
        }
      }
    }

    console.log("Inserccion de modulos y y sus preguntas, completado");
    process.exit(0);
  } catch (error) {
    throw error;
  }
}

main();

module.exports = main;
