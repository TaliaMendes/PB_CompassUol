const { Sequelize} = require ('sequelize') //exportando o o obj Sequelize do todo

const sequelize = new Sequelize( 
  'nodesequelize',  //tabela
  'root',  //usuario
  'talia9234',  //senha
  {
    host: 'localhost',
    dialect: 'mysql' //tipo de bd
  }
)


module.exports = sequelize