'use strict';

module.exports = (sequelize, DataTypes) => {
  let Progreso = sequelize.define('Progreso', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

  },{

    freezeTableName: true,
    comment: "Tabla de Progreso del proyecto",


  });

  Progreso.associate = function(models){
    //Progreso.hasMany(models.Preguntas);
    Progreso.belongsTo(models.Usuario);

  }

  return Progreso;
}