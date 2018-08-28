'use strict';

module.exports = (sequelize, DataTypes) => {
  let Ranking = sequelize.define('Ranking', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    puntaje:{
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }
  }, {
    freezeTableName: true,
    comment: "Tabla de Ranking del proyecto Daslearn",


  });

  Ranking.associate = function (models){
      Ranking.belongsTo(models.Usuario, { as: 'usuario'})
      
  }

  return Ranking;
}