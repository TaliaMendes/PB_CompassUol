//sqlite é um bd que cria um arquivo onde serão armazenadas as informaçoes. (relacional)

const Sequelize = require('sequelize');//responsavel pela conexao, manutenção , utilização do sqlite

const sequelize = new Sequelize({ //instanciando o sequelize para utilizar
  dialect: 'sqlite', //qual banco de dados vai utilizar 
  storage: './db/app.db' //caminho (vai criar o arquivo app.db para gravar nele)
});

module.exports = sequelize //exportando o db