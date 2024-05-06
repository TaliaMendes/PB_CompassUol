//=================================Enviando arq html de res com ( res.sendFile)====================================

// const express = require('express')
// const app = express() 
// const path = require('path')

// const port = 3000

//fez o caminho para acessar a pasta 'templates' que é onde esta o arquivo html: \Section6\templates
// const basePath = path.join(__dirname, 'templates') //(diretorio atual, diretorio com os arq html)
// basePath :  ....\CursoNode\Introduction\Section6\templates

// app.get('/', (req, res) => {
//   res.sendFile(`${basePath}/index.html`) //envia o arq html
// })

// app.listen(port, () => {
//   console.log(`Servidor rodando na porta ${port}`)
// }) 



//=====================================pegar parametros=============================================
//Query params    /users?nome=talia
//routes params:  /users/5
//request body:   passada  no body (Precisa flar que vai usar jason)

// const exp = require('constants')
// const express = require('express')
// const app = express() 
// const path = require('path')

// const port = 3000


// NO FRONT-END: www.meusite.com.br/users?nome=talia
//Query params
// app.get('/users', (req, res) => {
//   console.log(req.query) //{ pesquisei: 'abacate' }
//   res.send('Pegando parametro por query')
// })


// //routes params
// NO FRONT-END: www.meusite.com.br/users/5
// app.get('/users/:id', (req, res) => {
//   const id = req.params.id //pegando o id enviado por parametro na requisição
//   console.log(id) //5
//   //faz algo como pesquisar no bd o id
  
//   res.send('ola') //envia a resposta
// })


// //request body
// app.use(express.json())//sinalizando que ira utiliza jason a resposta 

// app.post('/users', (req, res) => {
//   console.log(req.body) //{ nome: 'talia' }
//   res.send('estou pegando parametros pelo body')
// })

// app.listen(port, () => {
//   console.log(`Servidor rodando na porta ${port}`)
// }) 


//=====================================Enviar dados pelo post=============================================

// const express = require('express')
// const app = express() 
// const path = require('path')

// const port = 3000

// const basePath = path.join(__dirname, 'templates') //caminho da pasta onde esta os arquivos

// //arquivos estaticos
// app.use(express.static('public'))// é pra ele saber qual pasta vai estar os arquivos (HTML,CSS)


// app.use( //precisa quando esta lendo dados enviados de um arquivo html
//   express.urlencoded({
//     extended: true,
//   })
// )

// app.use(express.json()) //aceitar ler arquivo json


// app.get('/users/add', (req, res) =>{
//   res.sendFile(`${basePath}/addUsers.html`) //enviando outro arq html como resposta
// })

// app.post('/users/save' , (req, res) => {
//   console.log(req.body) //Captura a resposta do body por meio de um arquivo html ,não diretamente na mão no insomia
// })

// app.get('/users', (req, res) => {
//   res.sendFile(`${basePath}/addUsers.html`) //envia o arq html
// })

// app.listen(port, () => {
//   console.log(`Servidor rodando na porta ${port}`)
// }) 


//======================================Middlewares============================================
//serve para verificar se o usuarios esta logado (por exemplo). 
//se estiver satisfazendo a condição, ele deixa prosseguir, se nao , ele manda para outro lugar
//sera executado a partir da requisição para verificar e enviar determinada resposta

//È uma "função" que nos podemos criar do jeito que precisamos, e ela passa a ser chamada em toda rota que ela esta especififcada ou abaixo dela

// const express = require('express')
// const app = express() 
// const path = require('path')

// const port = 3000

// const basePath = path.join(__dirname, 'templates')

// app.use(express.json())

// const checkAtutenticaçao = function(req, res, next){ //verificando se o usuario tem autorização
//   req.autenticado = true; //esta retornando na mao a requisição dizendo que o usuario tem acesso 

//   if(req.autenticado){
//     console.log('Esta logado, pode continuar')
//     next() // manda fazer a proxima coisa , nao ficar garrado aq 
//   }else{
//     console.log('Não esta logado')
//     next()
//   }
// }

// app.use(checkAtutenticaçao)// chamando o middleware, toda requisisção vai passar por essa verificação

// app.get('/users', (req, res) => {
//   res.sendFile(`${basePath}/index.html`) //envia o arq html
// })

// app.listen(port, () => {
//   console.log(`Servidor rodando na porta ${port}`)
// }) 



//=====================================Pagina de erro=====================================================

// const express = require('express')
// const app = express() 
// const path = require('path')

// const port = 3000

// app.use( //precisa quando esta lendo dados enviados de um arquivo html
//   express.urlencoded({
//     extended: true,
//   })
// )

// app.use(express.json())

// //arquivos estaticos
// app.use(express.static('public'))// é pra ele saber qual pasta vai estar os arquivos

// const basePath = path.join(__dirname, 'templates')

// app.get('/users/add', (req, res) =>{
//   res.sendFile(`${basePath}/addUsers.html`)
// })

// app.post('/users/save' , (req, res) => {
//   console.log(req.body)
// })

// app.get('/users', (req, res) => {
//   res.sendFile(`${basePath}/addUsers.html`) //envia o arq html
// })

// app.use(function(req, res, next){
//   res.status(404).sendFile(`${basePath}/404.html`)
// })

// app.listen(port, () => {
//   console.log(`Servidor rodando na porta ${port}`)
// }) 