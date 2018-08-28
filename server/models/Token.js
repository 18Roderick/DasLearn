'use strict'

module.exports = (sequelize, DataTypes) => {
  let Token = sequelize.define('Token', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    token: {
      type: DataTypes.TEXT,
      
    }
  }, {
    freezeTableName: true,
    comment: "Tabla de usuarios del proyecto DasLearn",


  })

  Token.associate = function (models) {
    Token.belongsTo( models.Usuario )
  }

  return Token;
}