
app.post('/books/insertbook' , (req, res) => {
  //inserção de dados no bd
  const title = req.body.title
  const pages = req.body.pages

  //Inserindo os dados title e pages na tabela books
  const sqlInsert = `INSERT INTO books (??, ??) VALUES ('?', '?')`  //esconde os dados (para coluna do bd '??', para os dados do req '?')
  const dado = ['title', 'pages', title, pages] //vetor com os dados la de cima (na ordem) 

  //faz de fato a inserção no bd
  conBd.query(sqlInsert, dado,  (error) =>{
    if(error){
      console.log(error)
      return
    }
    //se der certo volta para a pagina inicial
    res.redirect('/books')
  })
})