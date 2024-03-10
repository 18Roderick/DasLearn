'use strict';
module.exports = (sequelize, DataTypes) => {
  var Preguntas = sequelize.define('Preguntas', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    pregunta:{
      type: DataTypes.TEXT,
    }

  }, {
    freezeTableName: true,
    comment: "Tabla de usuarios del proyecto Daslearn",


  });
  Preguntas.associate = function (models) {
    // associations can be defined here
    Preguntas.hasMany(models.Respuestas, {as : 'respuestas', onDelete: 'CASCADE'});
    Preguntas.belongsTo( models.Modulos , {as: 'modulos'})
  };
  return Preguntas;
};