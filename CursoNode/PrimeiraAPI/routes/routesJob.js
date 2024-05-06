const express = require('express') //impotando o express 
const routes = express.Router() //uitlizante a funcionalidade router do express
const Job = require('../models/Job')// importando o model da tabela jobs


routes.get('/', (req, res) => { //rota get
  res.send('Rota deu certo');
})

routes.get('/add' , (rq, res) => {
  res.render('add')
})

routes.post('/add', (req, res) => {
  let {title, salary, company, description, email, new_job} = req.body //pega as informações e ja armazena nas variaveis do parentese
  Job.create({ // vai inserir os dados que receber na tabela
    title,    //passar as variaveis que criou na model, pois vai inserir neles na ordem
    description,
    salary,
    company,
    email,
    new_job
  })
  .then(() => {
    res.redirect('/')//quando gravar os dados, valta para a rota principal
  })
  .catch(error => {
    console.log(error)
  })
})

module.exports = routes