//===========================================Módulo URL=========================================================
//o modulo url serve para verificarmos cada parte da url separadas como desejamos

const url = require('url') //importando o metodo url
const address = 'https://www.meusite.com.br/catalogo?produtos=cadeira' //endereço
const parsedURl = new url.URL(address) //instanciando o metodo para ve cada parte do endereço url passado

console.log(parsedURl.host)//endereço do site : www.meusite.com.br
console.log(parsedURl.pathname)//pagina que esta dentro do site: catalogo
console.log(parsedURl.search)// O que esta sendo passado no parametro que ta pesquisando: ?produtos=cadeira
console.log(parsedURl.searchParams) //Objeto com o parametro de pesquisa: { 'produtos' => 'cadeira' }
console.log(parsedURl.searchParams.get('produtos'))// cadeira: ao ver o parametro no obj, pode pegar o valor
//(pegou o valor "cadeira" direto da chave produto)



//===========================================Unindo HTTP e URL=========================================================
//de acordo com os parametros da URL vai exibir um conteudo

const http = require('http') //importando o modulo http
const port = 3004

const server = http.createServer((req, res) => {//cria o servidor web

  //pega a url que vem da requisição e divide os pedaços para analizar
  const urlInfo = require('url').parse(req.url, true) 
  const name = urlInfo.query.name //pega o parametro nome na url (?nome=Ana)
 
  res.writeHead(200, {'Content-type' : 'text/html'}) //habilitou para enviar resposta em texto html

  if (!name) {//se nao tiver o parametro nome, vai enviar um formulario para preencher e o nome sera passado na req  
    res.end(
      '<h1> Preencha o seu nome: </h1><form method="GET"><input type="text" name="name"/> <input type="submit" value="Enviar"/></form>')
  }else{
    res.end('<h1> Seja bem vinda ' + name)
  }
})

server.listen(port, () => {
  //faz o servidor rodar na porta determinada
  console.log('Servidor rodando na porta ' + port)
})
