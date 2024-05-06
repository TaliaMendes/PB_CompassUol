const express = require('express')
const app = express() 

const port = 3000
app.use(express.json())

app.get('/users', (req, res) => {
  res.send("Ola")
  console.log(req.query)
})

app.get('/home/:nome', (req, res) => {
  res.send('Ola home')
  console.log(req.params)
})

app.post('/home' , (req, res) => { //preciso dizer que to usando jason: app.use(express.json())
  console.log(req.body)
  res.send ('Utilizando o post')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})