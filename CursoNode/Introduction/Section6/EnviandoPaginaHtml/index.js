//=================================Enviando arq html de res com ( res.sendFile)====================================

// const express = require('express')
// const app = express() 
// const path = require('path')

// const port = 3000

// //fez o caminho para acessar a pasta 'templates' que é onde esta o arquivo html: \Section6\templates
// const basePath = path.join(__dirname, 'templates') //(diretorio atual, diretorio com os arq html)
// //basePath :  ....\CursoNode\Introduction\Section6\templates

// app.get('/', (req, res) => {
//   res.sendFile(`${basePath}/index.html`) //envia o arq html
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



//=====================================Enviar pagina de erro=====================================================
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