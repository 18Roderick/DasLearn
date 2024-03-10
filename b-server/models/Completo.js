'use strict';

module.exports = (sequelize, DataTypes) => {
  let Completo = sequelize.define('Completo', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    cantidad_preguntas: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    
    cantidad_respondidas: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }
  }, {

    freezeTableName: true,
    comment: "Tabla de Completo del proyecto",
    

  });

  Completo.associate = function (models) {

  }

  return Completo;
}