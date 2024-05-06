const express = require('express')
const exphbs  = require('express-handlebars');
const app = express() //instanciando o express
const path = require('path')
const db = require('./db/connection.js') //importando o bd 
const bodyParser = require('body-parser')

const PORT = 3000 //constante que indica a porta que ira rodar a aplicação


//falando que vai utilizar o body parser
app.use(bodyParser.urlencoded({extended: false}))

//handle bars
app.set('views', path.join(__dirname, 'views'));
console.log(path.join(__dirname, 'views'))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

//static folder
app.use(express.static(path.join(__dirname, 'public')))


//dizendo pro arquivo principal que vai usar as rotas
app.use(require('./routes/routesJob.js'))//serve para identificar que as rotas são do job , passa o arquivo de rotas


//fazendo a conexão com o banco de dado
db.authenticate() //faz a conexão com o bd (retorna promisse)
  .then(() => {
    console.log('Banco de dados conectado') //sucesso na conexão
  })
  .catch((error) => {
    console.log('Ocorreu um erro ao conectar' + error) //erro 
  })


app.get('/', (req,res) => {
  res.render('index')
})  

//fazendo a conexão da aplicação com a porta
app.listen(PORT, () => { //fazendo a conexão do serviço com a porta
  console.log(`Servidor rodando na porta ${PORT}`);
})