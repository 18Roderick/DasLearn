'use strict'

module.exports = (sequelize, DataTypes) => {

	let Usuario = sequelize.define('Usuario', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		nombre: {
			type: DataTypes.STRING,

		},

		tipo:{
			type: DataTypes.STRING,
			defaultValue: 'B',
		},

		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {
					msg: "Falta password"
				}
			}
		},

		email: {
			type: DataTypes.STRING,
			unique: true,
			valide: {
				isEmail: true,
				notEmpty: {
					msg: "Falta correo"
				}
			}
		},

		token: {
			type: DataTypes.STRING,
			unique: true,
		},

	}, {

		freezeTableName: true,
		comment: "Tabla de usuarios del proyecto ",

	})

	Usuario.associate = function(models) {
			Usuario.hasOne(models.Ranking,{ as: 'ranking', onDelete: 'CASCADE'})
			Usuario.hasOne(models.Token)
	}

	return Usuario;

}