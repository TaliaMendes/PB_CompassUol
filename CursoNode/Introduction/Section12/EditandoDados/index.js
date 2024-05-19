//npm install mongodb

const exp = require('constants')
const connection = require('./db/connection') // importando a conexão 
const express = require('express')
const app = express()
const routerProdutos = require('./routes/routerProduto')

//conf req body
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

//usar as rotas 
app.use(routerProdutos)

//Inicializando servidor
app.listen(3000, () => {
  console.log('Servidor rodando')
})
