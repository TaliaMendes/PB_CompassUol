const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mysql = require('mysql')

app.engine('handlebars', exphbs.engine())//define o handlebars como o tample engine que vai usar 
app.set('view engine', 'handlebars')

app.use(express.static('public')) //onde vai estar os arq css


//conexão com o mysql
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  port: 3306,
  password: 'talia9234',
  database: 'nodemysql'
})


conn.connect(function(error){
  if(error){
    console.log(error)
  }

  console.log('Banco de dados conectado')

  app.listen(3001, () => {
    console.log('Servidor rodando')
  })

})





//npm instal mysql