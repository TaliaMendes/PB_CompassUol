const express = require('express')
const exphbs = require('express-handlebars') //importando o pacote 

const app = express()

app.engine('handlebars', exphbs.engine())//define o handlebars como o tample engine que vai usar 
app.set('view engine', 'handlebars')


const hbs = exphbs.create({
  partialsDir: ['views/partiais']
})

app.engine('handlebars', hbs.engine)//para usar o partials


app.get('/post', (req, res) => {
  const posts = [
    {
      title: 'Aprendendo Node.js',
      category: 'JavaScript',
      comments: 4
    },
    {
      title: 'Aprendendo Java',
      category: 'Java',
      comments: 7
    }
  ]
 // caminho do arquivo handlebars que ira ser enviado como resposta, enviando o objeto como parametro p/ os handlebars
  res.render('partiais/blog', { posts : posts })
})

app.get('/pessoa' , (req, res) => {
  const pessoa = {
    name: 'talia',
    age: 24,
    cidade: 'alvinopolis'
  }

  res.render('layouts/pessoa', {pessoa: pessoa})
})

app.get('/autenticado' , (req, res) => {
  let items = ['Alex', 'Samyla', "Talia", "Carol"]

  res.render('layouts/autenticada', {items})
})

app.get('/', (req, res) => {
  const user = {
    name: 'Talia', //objeto como exemplo de dado que poderia vir do banco de dados
    age: 24
  }
  const aute = true
  const aprov = false

  //esta passando o objeto e vamos captura-lo no handlebars para utiliza-lo no HTML
  res.render('layouts/home', {user: user, aute: aute, aprov: aprov}) 
})

app.listen(3000, () => {
  console.log('Servidor rodando!')
})