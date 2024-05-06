const Sequelize = require('sequelize')
const db = require('../db/connection')

//inserindo e selecionando dados na tabela via metodos do framework, ele faz sem precisarmos implementar
//é a forma de definir a estrutura das tabelas, deve ser exatamente igual, pois assim a transfrencia e atualizaçoes na tabela vai ser feita de forma automatica

const Job = db.define('job', { //define : cria model, a estrutura dos dados, igual da tabela no bd
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  salary: {
    type: Sequelize.STRING,
  },
  company: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  new_job: {
    type: Sequelize.INTEGER
  }
})

module.exports = Job