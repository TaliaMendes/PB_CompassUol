//=====================================pegar parametros=============================================
//Query params    /users?nome=talia
//routes params:  /users/5
//request body:   passada  no body (Precisa flar que vai usar jason)

const exp = require('constants')
const express = require('express')
const app = express() 
const path = require('path')

const port = 3000


//Query params
// NO FRONT-END: www.meusite.com.br/users?nome=talia
app.get('/users', (req, res) => {
  console.log(req.query) //{ pesquisei: 'abacate' }
  res.send('Pegando parametro por query')
})


//routes params
// NO FRONT-END: www.meusite.com.br/users/5
app.get('/users/:id', (req, res) => {
  const id = req.params.id //pegando o id enviado por parametro na requisição
  console.log(id) //5
  //faz algo como pesquisar no bd o id
  
  res.send('ola') //envia a resposta
})


//request body
// app.use(express.json())//sinalizando que ira utiliza jason a resposta 

app.post('/users', (req, res) => {
  console.log(req.body) //{ nome: 'talia' }
  res.send('estou pegando parametros pelo body')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
}) 