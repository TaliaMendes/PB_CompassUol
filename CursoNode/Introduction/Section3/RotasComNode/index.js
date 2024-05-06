
const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3004

const server = http.createServer((req,res) => {
  const q = url.parse(req.url, true)//pega a url 
  const fileName = q.pathname.substring(1)//pega o endereço do arquivo na url(Qual pagina estamos)ex: localhost:2004/index.html , pega o index.html
  
  if(fileName.includes('html')){//so vai responder com arquivo html, entra precisa saber se na url esta tentado acessar um arquivo(pagina) com html
    if(fs.existsSync(fileName)){//verifica se o arquivo procurado existe
      fs.readFile(fileName, function(error, data){
        res.writeHead(200, { 'Content-type':'text/html' }) //se a pagina existir exibe o conteudo
        res.write(data)
        res.end()
      })
    }else{//se a pagina nao existir
      fs.readFile('404.html', function(error, data){
        res.writeHead(200, { 'Content-type':'text/html' }) //se a pagina nao existir exibe o conteudo de 404.html
        res.write(data)
        return res.end()
      })
    }
  }
})

server.listen(port, () => {
      console.log('Servidor rodando na porta ' + port)
})