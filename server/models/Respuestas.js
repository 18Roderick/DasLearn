'use strict'
module.exports = (sequelize, DataTypes) => {
  var Respuestas = sequelize.define('Respuestas', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    opcion: {
      type: DataTypes.STRING
    },

    correcta: {
      type: DataTypes.BOOLEAN,
    }
  }, {
    freezeTableName: true,
    comment: "Tabla de usuarios del proyecto DasLearn",


  });
  
  Respuestas.associate = function (models) {
    // associations can be defined here
    Respuestas.belongsTo(models.Preguntas, {as: 'preguntas'});
  };
  return Respuestas;
};