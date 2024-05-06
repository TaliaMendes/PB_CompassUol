const { DataTypes } = require('sequelize')
const db = require('../db/connection')
const User = require('./User')

const Address = db.define('Address', { //configurando a tabela de endereço

  street: {
    type: DataTypes.STRING,
    require: true,
  },
  number: {
    type: DataTypes.STRING,
    require: true,
  },
  city: {
    type: DataTypes.STRING,
    require: true,
  },
})

User.hasMany(Address)// um usuario tem varios endereços
Address.belongsTo(User)// um endereço pertence a um unico usário... criando o relacionamento de cada usuario tem um end... chave primaria id e estrageira idUser na tabela endereço

module.exports = Address
