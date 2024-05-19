
//======================================Middlewares============================================
//serve para verificar se o usuarios esta logado (por exemplo). 
//se estiver satisfazendo a condição, ele deixa prosseguir, se nao , ele manda para outro lugar
//sera executado a partir da requisição para verificar e enviar determinada resposta

//È uma "função" que nos podemos criar do jeito que precisamos, e ela passa a ser chamada em toda rota que ela esta sendo 'chamada ou todas abaixo dela

const express = require('express')
const app = express() 
const path = require('path')

const port = 3000

const basePath = path.join(__dirname, 'templates')

app.use(express.json())

const checkAtutenticaçao = function(req, res, next){ //verificando se o usuario tem autorização
  req.autenticado = true; //esta retornando na mao a requisição dizendo que o usuario tem acesso 

  if(req.autenticado){
    console.log('Esta logado, pode continuar')
    next() // manda fazer a proxima coisa , nao ficar garrado aq 
  }else{
    console.log('Não esta logado')
    next()
  }
}

app.use(checkAtutenticaçao)// chamando o middleware, toda requisisção vai passar por essa verificação

app.get('/users', (req, res) => {
  res.sendFile(`${basePath}/index.html`) //envia o arq html
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
}) 

