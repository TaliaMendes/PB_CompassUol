const poll = require('./db/pool')


app.post('/books/updatebook', (req, res) => {
  //atualizando de fato no banco de dados
  const id = req.body.id
  const title = req.body.title
  const pages = req.body.page

  //fazendo no banco de dados
  const atualizar = `UPDATE books SET title = '${title}' , pages = '${pages}' WHERE id = ${id}`

  poll.query(atualizar, function (error, data){
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

  poll.query(remove, function (error, data){
    if(error){
      console.log(error)
      return
    }
    res.redirect('view/books')
  })

})

//conexão com o mysql
//vai ser feita pelo poll , fizemos em aqruivo separado


app.listen(3001, () => {
  console.log('Servidor rodando')
})




// no arquivo principal , utiliza ele como pool, importado...
//quando for fazer a conexão, usar ele chama o poll




