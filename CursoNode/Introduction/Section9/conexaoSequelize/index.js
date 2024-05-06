//ORM: frameworks que ajuda a trabalhar com bd , faz as coisas mais automaticas , precisa so dos dados
//sequelize é uma ORM para usar no node. baseada em promisses. mts bds rodam nela.
//precisamos criar o model, que é o arquivo que tem tds as propriedades, tipos, o escopo em si da tabela para fazer as operações... enviar , atualizar etc

//npm install sequelize (nao precisa do  install mysql e sim o mysql2)
//npm install mysql2 (pq ta usando o mysql)

const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const connectionbd = require('./db/connection')
const User = require('./models/User')

//define o handlebars como o tample engine que vai usar 
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//confihuração para dados do body
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())


//definindo pasta onde vai estar os arquivos css
app.use(express.static('public')) 

//rotas
app.get('/users/create', (req, res) => {
  res.render('adduser')
})

app.post('/users/create', async,(req, res) => { 
  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter
  
  if(newsletter === 'on'){
    newsletter = true
  }else{
    newsletter = false
  }
 // inserindo dados
 //utilizando o sequelize para manipular os dados no bd
 await User.create({name, occupation, newsletter})

 res.redirect('/')
})



app.get ('/users/:id', async, (req, res) => {
  const id = req.params.id

  //retornando dados do bd com o filtro WHERE
  const user = await User.findOne({raw:true, where: {id: id}}) //pode filtrar com mais de um parametro

  res.render('userview', {user})
})

app.post('/users/delete/:id', async, (req, res) => {
  const id = req.params.id

  //removendo dados do bd, pega o where para saber quem deletar
  await User.destroy({where: {id:id}})

  res.redirect('/')
})

app.get('/users/edit/:id', async, (req, res) => {
  //atualizar os dados. Pega o que digitou e depois atualiza o dado no bd
  const id = req.params.id

  //retornando dados do bd com o filtro WHERE
  const user = await User.findOne({raw:true, where: {id: id}})

  res.render('useredit', {user})
})

app.post('/users/update/:id', async, (req, res) => {
  const id = req.params.id
  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter

   
  if(newsletter === 'on'){
    newsletter = true
  }else{
    newsletter = false
  }

  const userData = {
    id: id,
    name: name,
    occupation: occupation,
    newslatter: newsletter
  }

  //atualizou com os dados enviados no body para alterar 
  await User.update(userData, { where: {id: id}})

  res.redirect('/')
})

app.get('/', async, (req, res) => {

  //retorna um array com os dados do BD, pegar dados.
 const users = await User.findAll({raw:true}) //{raw:true} : para o array vim com as inf que precisamos mais diretamente

 res.render('home', {users: users})

})


connectionbd
.sync()
//.sync({ force: true }) // deleta a tabela e cria uma nova , so que sem os dados que tinha antes, cria do 0 , (com msm colunas) 
.then(() => { //espera conectar com o bd para iniciar o servidor
  app.listen(3000, () => {
    console.log('Servidor rodando')
  })
})
.catch((err) => console.log(err))
