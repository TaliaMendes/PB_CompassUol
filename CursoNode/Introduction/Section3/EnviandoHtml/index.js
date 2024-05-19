//===========================================Enviando arquivo HTML como resposta=========================================================
const http = require('http')
const fs = require('fs')

const port = 3004

const server = http.createServer((req, res) => {
  fs.readFile('index.html', function(error, data){ //função que le o arquivo html
    res.writeHead(200, {'Content-type' : 'text/html'})
    res.write(data)//retorna como resposta o conteudo do arquivo
    return res.end() //fecha a resposta
  })
})

server.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})

//==================================Escrevendo no arquivo a partir da resposta da req============================================

const http = require('http')
const fs = require('fs')

const PORT = 3004

const app = http.createServer((req,res) =>{
  const urlInfo = require('url').parse(req.url, true) //esta pegando a url que é enviado na requisição
  const name = urlInfo.query.name //pega o nome 
  
  if(!name){ //se nao tiver o nome, vai mandar o formulario que esta no arquivo html para inserir o nome
    fs.readFile('escrevendo.html' , function(error, data){
      res.writeHead(200, { 'Content-type':'text/html' })
      res.write(data)//retorna o conteudo que esta no arquivo
      res.end()
    })
  }else{
    fs.writeFile('arquivo.txt' , name , function(err, data){ //grava o nome recebido na req pela URL no arquivo.txt
      res.writeHead(302, {
        Location: '/' //apos gravar no arquivo é direcionado a pagina principal 
      })
      return res.end()//finaliza a resposta
    })
  }
})

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + port)
})


//----------------------------Para nao apagar o que esta no arquivo td vez que insere um novo nome-----------------------------------------
//fs.appendFile (vai atualizar o arquivo , nao vai apagar o que esta e escrever por cima , como o 'fs.writeFile' faz. )


const servidor = http.createServer((req,res) =>{
  const urlInfo = require('url').parse(req.url, true) //esta pegando a url que é enviado na requisição
  const name = urlInfo.query.name//pega o nome 
  
  if(!name){ //se nao tiver o nome, vai mandar o formulario para inserir o nome
    fs.readFile('escrevendo.html' , function(error, data){
      res.writeHead(200, { 'Content-type':'text/html' })
      res.write(data)//retorna o conteudo que esta no arquivo
      res.end()
    })
  }else{
    const nameNewLine = name + '\r\n'

    fs.appendFile('arquivo.txt' , nameNewLine , function(err, data){ //grava o nome recebido na req pela URL no arquivo.txt
      res.writeHead(302, {
        Location: '/' //apos gravar no arquivo é direcionado a pagina principal 
      })
      return res.end()//finaliza a resposta
    })
  }
})
