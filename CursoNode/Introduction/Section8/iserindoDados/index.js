const { error } = require('console')
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const path = require('path')

//define o handlebars como o tample engine que vai usar 
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//definindo pasta onde vai estar os arquivos css
app.use(express.static('public')) 

//fazendo o caminho ate a pasta view
// const basePath = path.join(__dirname);
const viewsPath = path.join(__dirname, 'views');

app.set('views', viewsPath);

//configuração para conseguir pegar inf do body de um arq html
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())


//rotas
app.get('/', (req, res) => {
  res.render('home')
})

app.post('/books/insertbook' , (req, res) => {
  //inserção de dados no bd
  const title = req.body.title
  const pages = req.body.pages

  //Inserindo os dados title e pages na tabela books
  const sqlInsert = `INSERT INTO books (title, pages) VALUES ('${title}', '${pages}')` 

  //faz de fato a inserção no bd
  conBd.query(sqlInsert, (error) =>{
    if(error){
      console.log(error)
      return
    }
    //se der certo volta para a pagina inicial
    res.redirect('/books')
  })
})

app.get('/books', (req, res) => {
  //exibindo os dados que estao no BD

  //fazendo a seleção de todos os dados da tabela books
  const sqlSelect = 'SELECT * FROM books'
  
  conBd.query(sqlSelect, function(error , data){
    if(error){
      console.log(error)
      return
    }
    //pega os dados que estão no banco de dados para fazer algo(exibir no front por exemplo)
    const book = data
    res.render('books', {book})
  })
})

app.get('/book/:id', (req, res) => {
  //fazendo a seleção de um determinado dado específico com o WHERE
  const id = req.params.id

  const saqSelectWhere = `SELECT * FROM books WHERE i = '${id}'`
  
  conBd.query(saqSelectWhere, function (error, data){
    if(error){
      console.log(error)
      return
    }

    const book = data[0] //manda um array com todos os dados, nesse caso so pegou o primeiro
    res.render('books', {book})
  })
})

app.get('/books/edit/:id', (req, res) => {
  //fazendo a seleção de um determinado dado específico com o WHERE e dando a opção de editar os dados
  const id = req.params.id

  const saqSelectedit = `SELECT * FROM books WHERE i = ${id}`
  
  conBd.query(saqSelectedit, function (error, data){
    if(error){
      console.log(error)
      return
    }

    const book = data[0] //manda um array com todos os dados, nesse caso so pegou o primeiro
    res.render('editbooks', {book})
  })
})

app.post('/books/updatebook', (req, res) => {
  //atualizando de fato no banco de dados
  const id = req.body.id
  const title = req.body.title
  const pages = req.body.page

  //fazendo no banco de dados
  const atualizar = `UPDATE books SET title = '${title}' , pages = '${pages}' WHERE id = ${id}`

  conBd.query(atualizar, function (error, data){
    if(error){
      console.log(error)
      return
    }
    res.redirect('view/books')
  })

})

app.post('/books/remove/:id', (req, res) => {
  //deletando elemento 
  const id = req.body.id

  const remove = `DELETE FROM books WHERE id = ${id}`

  conBd.query(remove, function (error, data){
    if(error){
      console.log(error)
      return
    }
    res.redirect('view/books')
  })

})

//conexão com o mysql
const conBd = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  port: 3306,
  password: 'talia9234',
  database: 'nodemysql'
})

conBd.connect(function(error){
  if(error){
    console.log(error)
  }

  console.log('Banco de dados conectado')

  app.listen(3001, () => {
    console.log('Servidor rodando')
  })

})



