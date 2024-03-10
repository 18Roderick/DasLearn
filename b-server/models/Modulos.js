'use strict';
module.exports = (sequelize, DataTypes) => {
  var Modulos = sequelize.define('Modulos', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    titulo:{
      type: DataTypes.TEXT,
    },

    descripcion:{
      type: DataTypes.TEXT,
    }

  }, {
    freezeTableName: true,
    comment: "Tabla de usuarios del proyecto Daslearn",

  });
  Modulos.associate = function (models) {
    // associations can be defined here
    Modulos.hasMany(models.Preguntas, {as: 'preguntas', onDelete: 'CASCADE'});
  };
  return Modulos;
};