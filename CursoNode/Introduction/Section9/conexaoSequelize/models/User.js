const { DataTypes } = require('sequelize')// da acesso a todos os tipos dados que tem no banco (strin, int)
const db = require('../db/connection')

const User = db.define( 'User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false //nao pode ter null
  },

  occupation: {
    type: DataTypes.STRING,
    required: true //não pode ser vazio, nem nulo
  },

  newsletter: {
    type: DataTypes.BOOLEAN,
  },
})

module.exports = User