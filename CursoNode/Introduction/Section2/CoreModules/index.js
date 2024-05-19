//Core Modules: São modulos que ja são nativos do node.js, não é nescessário criá-los ou instalá-los


//==================File system (pacote responsavel por trabalhar com arquivos e diretórios)======================================

//-----------------readFile (Ler arquivos)-----------------------------------

let {readFile} = require('fs');

readFile("arquivo.txt", "utf8", (error , text) =>{ // nome do arquivo , padrão de leitura
  if(error){
    console.log(error); //se nao encontrar o arquivo relata erro
  }else{
    console.log(text) //faz a leitura do arquivo
  }
});

//---------------writwFile (Escreve em arquivos)-----------------------------

let {writeFile} = require('fs');

// nome do arquivo , Texto que sera inserido no arquivo
writeFile("arquivo.txt", "Escrecevndo no arquivo pelo metodo writeFile", (error) =>{
  if(error){
    throw error; //se nao encontrar o arquivo relata erro
  }else{
    console.log("Escreveu com sucesso") //relata sucesso na escrita
  }
});



//===========================================Modulo http====================================================
const {createServer} = require ('http');

let server = createServer((request, response) => {
  // status de 200 para informar sucesso. Tipo de dado que vai ser como resposta a aplicação
  response.writeHead(200, {"content-type" : "text/html"}); 
  response.write(` 
    <h1>"Metodo HTTP"</h1> 
    <p> Hello World </p>`
  );//texto que vai ser enviado como resposta a pagina http
  response.end()//finalizando a resposta
});

server.listen(8000) //porta que vai escutar a aplicação

console.log("conexão feita")//mensagem no console de sucesso da conexão

//---------------------------------------------------------------------------

//(essa forma envia texto
// res.write('Oi http') //envia uma resposta de texto
// res.end() //encerra a resposta
//)

const http = require('http') //importando o modulo http

const port = 3004

const app = http.createServer((req, res) => { //cria o servidor web
  res.writeHead(200, {'Content-type' : 'text/html'}) //habilitou para enviar resposta em texto html
  res.end('<h1> Primeiro servidor com HTML! </h1>')
})

app.listen(port, () => { //faz o servidor rodar na porta determinada
  console.log('Servidor rodando na porta ' + port)
})

//=============================================Modulo Path=====================================================
const path = require('path')

const extension = path.extname('arquivo.pdf')// 'path.extname' retorna a extensão do arquivo:
console.log(extension)//.pdf



//==================================Capturando argumentos===============================================
//argumentos é o que passamos no comando: ex node -v (o -v é um argumento que verifica a versão do node)
//digitei este comando: node index.js nome=talia

console.log(process.argv)//mostra o vetor com tds argumento no terminal 

//  [ 'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\talia\\OneDrive\\Documentos\\Estagio Compass\\CursoNode\\Introduction\\index.js',
//   'nome=talia']

const args = process.argv.slice(2) //resgata o argumento no vetor na posição doi 
console.log(args) // [ 'nome=talia' ]

//do vetor agrs, quando acha '=' , separa o conteudo, e pega o segundo conteudo(posição 1 do vetor args)
const nome = args[0].split('=')[1]
console.log(nome) // talia



//==================================Lendo input do terminal========================================
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout   //configurações para receber os dados digitados no terminal
})

//faz a pergunta , a resposta é armazenada na var 'language' , e utilizada como no exemplo
readline.question('Qual a sua linguagem preferida? ', (language) =>{ 
  if(language === 'Python'){
  console.log('Isso nem é linguagem kkkkkkkkk')
  }else{
    console.log('Sua linguagem preferida é ' + language)
  }
})