//===========================================Módulo http========================================================

// res.statusCode = 200 //status que indica sucesso na res
// res.setHeader('Contenty-type' , 'text/html')//habilitou para enviar resposta em texto html

//( essa forma envia texto
// res.write('Oi http') //envia uma resposta de texto
// res.end() //encerra a resposta
// //)

// const http = require('http') //importando o modulo http

// const port = 3004

// const server = http.createServer((req, res) => { //cria o servidor web
//   res.writeHead(200, {'Content-type' : 'text/html'}) //habilitou para enviar resposta em texto html
//   res.end('<h1> Primeiro servidor com HTML! </h1>')
// })

// server.listen(port, () => { //faz o servidor rodar na porta determinada
//   console.log('Servidor rodando na porta ' + port)
// })

//===========================================Módulo URL=========================================================
//o modulo url serve para verificarmos cada parte da url separadas como desejamos

// const url = require('url') //importando o metodo url
// const address = 'https://www.meusite.com.br/catalogo?produtos=cadeira' //endereço
// const parsedURl = new url.URL(address) //instanciando o metodo para ve cada parte do endereço url passado

// console.log(parsedURl.host)//endereço do site : www.meusite.com.br
// console.log(parsedURl.pathname)//pagina que esta dentro do site: catalogo
// console.log(parsedURl.search)// O que esta sendo passado no parametro que ta pesquisando: ?produtos=cadeira
// console.log(parsedURl.searchParams) //Objeto com o parametro de pesquisa: { 'produtos' => 'cadeira' }
// console.log(parsedURl.searchParams.get('produtos'))// cadeira: ao ver o parametro no obj, pode pegar o valor
//(pegou o valor "cadeira" direto da chave produto)


//===========================================Unindo HTTP e URL=========================================================
//de acordo com os parametros da URL vai exibir um conteudo

// const http = require('http') //importando o modulo http
// const port = 3004

// const server = http.createServer((req, res) => {//cria o servidor web

//   //pega a url que vem da requisição e divide os pedaços para analizar
//   const urlInfo = require('url').parse(req.url, true) 
//   const name = urlInfo.query.name //pega o parametro nome na url (?nome=Ana)
 
//   res.writeHead(200, {'Content-type' : 'text/html'}) //habilitou para enviar resposta em texto html

//   if (!name) {//se nao tiver o parametro nome, vai enviar um formulario para preencher e o nome sera passado na req  
//     res.end(
//       '<h1> Preencha o seu nome: </h1><form method="GET"><input type="text" name="name"/> <input type="submit" value="Enviar"/></form>')
//   }else{
//     res.end('<h1> Seja bem vinda ' + name)
//   }
// })

// server.listen(port, () => {
//   //faz o servidor rodar na porta determinada
//   console.log('Servidor rodando na porta ' + port)
// })


//===========================================Enviando arquivo HTML como resposta=========================================================

// const http = require('http')
// const fs = require('fs')

// const port = 3004

// const server = http.createServer((req, res) => {
//   fs.readFile('index.html', function(error, data){ //função que le o arquivo html
//     res.writeHead(200, {'Content-type' : 'text/html'})
//     res.write(data)//retorna como resposta o conteudo do arquivo
//     return res.end() //fecha a resposta
//   })
// })

// server.listen(port, () => {
//     console.log('Servidor rodando na porta ' + port)
// })

//==================================Escrevendo no arquivo a partir da resposta da req============================================

// const http = require('http')
// const fs = require('fs')

// const port = 3004

// const server = http.createServer((req,res) =>{
//   const urlInfo = require('url').parse(req.url, true) //esta pegando a url que é enviado na requisição
//   const name = urlInfo.query.name //pega o nome 
  
//   if(!name){ //se nao tiver o nome, vai mandar o formulario que esta no arquivo html para inserir o nome
//     fs.readFile('escrevendo.html' , function(error, data){
//       res.writeHead(200, { 'Content-type':'text/html' })
//       res.write(data)//retorna o conteudo que esta no arquivo
//       res.end()
//     })
//   }else{
//     fs.writeFile('arquivo.txt' , name , function(err, data){ //grava o nome recebido na req pela URL no arquivo.txt
//       res.writeHead(302, {
//         Location: '/' //apos gravar no arquivo é direcionado a pagina principal 
//       })
//       return res.end()//finaliza a resposta
//     })
//   }
// })

// server.listen(port, () => {
//     console.log('Servidor rodando na porta ' + port)
// })

//----------------------------Para nao apagar o que esta no arquivo td vez que insere um novo nome-----------------------------------------
//fs.appendFile (vai atualizar o arquivo , nao vai apagar o que esta e escrever por cima , como o 'fs.writeFile' faz. )

// const http = require('http')
// const fs = require('fs')

// const port = 3004

// const server = http.createServer((req,res) =>{
//   const urlInfo = require('url').parse(req.url, true) //esta pegando a url que é enviado na requisição
//   const name = urlInfo.query.name//pega o nome 
  
//   if(!name){ //se nao tiver o nome, vai mandar o formulario para inserir o nome
//     fs.readFile('escrevendo.html' , function(error, data){
//       res.writeHead(200, { 'Content-type':'text/html' })
//       res.write(data)//retorna o conteudo que esta no arquivo
//       res.end()
//     })
//   }else{
//     const nameNewLine = name + '\r\n'

//     fs.appendFile('arquivo.txt' , nameNewLine , function(err, data){ //grava o nome recebido na req pela URL no arquivo.txt
//       res.writeHead(302, {
//         Location: '/' //apos gravar no arquivo é direcionado a pagina principal 
//       })
//       return res.end()//finaliza a resposta
//     })
//   }
// })

// server.listen(port, () => {
//     console.log('Servidor rodando na porta ' + port)
// })

//---------------------------------------Apagar arquivo---------------------------------------------------------

// const fs = require('fs')

// fs.unlink('remove.txt', function(error){
//   if(error){
//     console.log(error)
//     return
//   }else{
//     console.log("Arquivo removido")
//   }
// })

//---------------------------------------Renomear arquivo---------------------------------------------------------

// const fs = require('fs')

// fs.rename('rename.txt', 'novoNomeArquivo.txt', function(error){
//   if(error){
//     console.log(error)
//     return
//   }else{
//     console.log('Arquivo renomeado')
//   }
// })


//===========================================Criando rotas com node puro=============================================================
// const http = require('http')
// const fs = require('fs')
// const url = require('url')
// const port = 3004

// const server = http.createServer((req,res) => {
//   const q = url.parse(req.url, true)//pega a url 
//   const fileName = q.pathname.substring(1)//pega o endereço do arquivo na url(Qual pagina estamos)
//   //ex: localhost:2004/index.html , pega o index.html
  
//   if(fileName.includes('html')){//so vai responder com arquivo html, entra precisa saber se na url esta tentado acessar um arquivo html
//     if(fs.existsSync(fileName)){//verifica se o arquivo procurado existe
//       fs.readFile(fileName, function(error, data){
//         res.writeHead(200, { 'Content-type':'text/html' }) //se a pagina existir exibe o conteudo
//         res.write(data)
//         res.end()
//       })
//     }else{//se a pagina nao existir
//       fs.readFile('404.html', function(error, data){
//         res.writeHead(200, { 'Content-type':'text/html' }) //se a pagina nao existir exibe o conteudo de 404.html
//         res.write(data)
//         return res.end()
//       })
//     }
//   }
// })

// server.listen(port, () => {
//       console.log('Servidor rodando na porta ' + port)
// })


//===========================================Verificar detalhes de arquivo=============================================================

//const { error } = require('console')
// const fs = require('fs')

// fs.stat('escrevendo.html' , (error, stats) =>{
//   if(error){
//     console.log(error)//imprime se houver erro
//     return
//   }else{
//     console.log(stats.isFile())//é um arquivo?
//     console.log(stats.isDirectory())//é um diretorio
//     console.log(stats.isSymbolicLink())
//     console.log(stats.ctime)//data de criação
//     console.log(stats.size)//tamanho
//   }
// })

//===========================================Path=========================================================
//extrair informaçoes sobre caminhos e arquivos

// const path = require('path')

// const caminho = '/documetos/talia/relatorio.pdf'

// console.log(path.dirname(caminho))//caminho para chegar no arquivo(pdf,txt,html etc) : /documetos/talia
// console.log(path.basename(caminho))//nome do arquivo : relatorio.pdf
// console.log(path.extname(caminho))//extenção do arquivo : .pdf

//---------------------------Path Absoluto-----------------------------------

// const path = require('path')

// //path absoluto: retorna o caminho até o arquivo passado
// console.log(path.resolve('escrevendo.html'))//retorna o caminho ate o arquivo: 

// //\Users\talia\OneDrive\Documentos\Estagio Compass\CursoNode\Introduction\Section3\escrevendo.html

// //formar path: junta os arquivos ou pastas passadas e faz um caminho
// const dir = 'relatios'
// const arq = 'resumo.pdf'

// const finalPath = path.join('/' , 'arquivos' , dir , arq) // vai fazer o caminho, iniciando com o que escreveu : /arquivos/....
// console.log(finalPath) //  \arquivos\relatios\resumo.pdf


//===========================================Fs trabalhando com diretorios=============================================================
// const fs = require('fs')

// if(fs.existsSync('./RotasComNode')){ //se existe a pasta RotasComNode
//   console.log('Existe')
// }
// else if(!fs.existsSync('./RotasComNode')){ // se nao existe a pasta RotasComNode
//   console.log("Não existe")
//   fs.mkdirSync('RotasComNode') //cria a pasta 
//}

//===========================================Modulo OS=============================================================
//verificar informaçoes de sistema operacional 

// const os = require('os')

// console.log(os.cpus()) //quantos CPUs tem na maquina // um monte de objeto com dados 
// console.log(os.freemem()) //qunats memoria ram livre : 2045255680
// console.log(os.homedir())//qual o diretorio principal da maquina : C:\Users\talia
// console.log(os.type()) //qual o tipo de sistema operacional : Windows_NT