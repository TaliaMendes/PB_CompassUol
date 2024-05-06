//===============================File system========================================================
//pacote responsavel por trabalhar com arquivos e diretórios. è um modulo "core modules"

//----------------------------------readFile (Ler arquivos)-----------------------------------------

// let {readFile} = require('fs');

// readFile("arquivo.txt", "utf8", (error , text) =>{ // nome do arquivo , padrão de leitura
//   if(error){
//     console.log(error); //se nao encontrar o arquivo relata erro
//   }else{
//     console.log(text) //faz a leitura do arquivo
//   }
// });

//----------------------------------writwFile (Escreve em arquivos)-----------------------------------------

// let {writeFile} = require('fs');

// // nome do arquivo , Texto que sera inserido no arquivo
// writeFile("arquivo.txt", "Escrecevndo no arquivo pelo metodo writeFile", (error) =>{
//   if(error){
//     throw error; //se nao encontrar o arquivo relata erro
//   }else{
//     console.log("Escreveu com sucesso") //relata sucesso na escrita
//   }
// });

//===================================================================================================


//---------------------------------------Modulo http----------------------------------------------

// const {createServer} = require ('http');

// let server = createServer((request, response) => {
//   // status de 200 para informar sucesso. Tipo de dado que vai ser como resposta a aplicação
//   response.writeHead(200, {"content-type" : "text/html"}); 
//   response.write(` 
//     <h1>"Metodo HTTP"</h1> 
//     <p> Hello World </p>`
//   );//texto que vai ser enviado como resposta a pagina http
//   response.end()//finalizando a resposta
// });

// server.listen(8000) //porta que vai escutar a aplicação

// console.log("conexão feita")//mensagem no console de sucesso da conexão


//===============================Modulos==========================================================

//----------------------------------Internos------------------------------------------------------
//importando a função que esta no arquivo: modulo_interno.js

// module.exports = {
//   soma(a,b){
//     console.log(a + b)
//   }
// }

// const meuModulo = require('./modulo_interno')//importando o modulo que criamos

// const somaVar = meuModulo.soma //pegando a função do modulo e passando para a var para ser utilizada

// somaVar(1,2) //utilizando o modulo que importamos(nele tem uma função soma que soma dois numeros)


//------------------------------Forma mais nova de importar e exportar --------------------------

//exportar

// function soma(a,b){
//   console.log(a+b)
// }

// export default soma;


// //importar

// import soma from './modulo_interno' //caminho onde esta o arquivo

// soma(1,2)

//----------------------------------Core Modules------------------------------------------------------
//importando e utilizando o modulo path, que ja vem pronto junto com o node 

// const path = require('path')

// const extension = path.extname('arquivo.pdf')
// //utiliza a path.extname que vai dizer qual a extensão do arquivo:
// console.log(extension)//.pdf

//----------------------------------Externos------------------------------------------------------

// const minimist = require('minimist')

// //foi digitado o comando: node --nome=talia
// const args = minimist(process.argv.slice(2))//pegou o vetor de agr na posição que esta o argumento que digitamos no comando
// //[{}, : , nome:talia]

// const nome = args['nome'] //pegou do vetor de argumentos o nome
// console.log(nome) //talia



//==================================Capturando argumentos===============================================

// //argumentos é o que passamos no comando: ex node -v (o -v é um argumento que verifica a versão do node)

//digitei este comando: node index.js nome=talia

// console.log(process.argv)//mostra o vetor com tds argumento no terminal 

// //  [ 'C:\\Program Files\\nodejs\\node.exe',
// //   'C:\\Users\\talia\\OneDrive\\Documentos\\Estagio Compass\\CursoNode\\Introduction\\index.js',
// //   'nome=talia']

// const args = process.argv.slice(2) //resgata o argumento no vetor na posição doi 
// console.log(args) // [ 'nome=talia' ]

// //do vetor agrs, quando acha '=' , separa o conteudo, e pega o segundo conteudo(posição 1 do vetor args)
// const nome = args[0].split('=')[1]
// console.log(nome) // talia



//==================================Mais utilizações do console===============================================

// //Vai mostrar quantas vezez chamei esta frase , contagem : x
// console.count('Vai mostrar quantas vezez chamei esta frase , contagem ') //1
// console.count('Vai mostrar quantas vezez chamei esta frase , contagem ') //2
// console.count('Vai mostrar quantas vezez chamei esta frase , contagem ') //3

// //variavel entre string (igual no c)
// const nome = 'talia'
// console.log('Meu nome é %s' , nome)//meu nome é talia

// //limpar o console
// setTimeout(() =>{
//   console.clear() //depois de 2s limpa o console 
// },2000)


//==================================Mudando a cor das letras no console========================================

//mudando cor das letras impressas no console

//npm install chalk@4.1.2
// const chalk = require('chalk')

// let nota = 4

// if(nota >=6){
//   console.log(chalk.green('Parabéns, voçe foi aprovado')) //se for aprovado a letra vai ser verde
// }else{
//   console.log(chalk.red('Voçe precisa fazer a prova de recuperação'))//se nao, vermelha
// }


//==================================Lendo input do terminal========================================

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout   //configurações para receber os dados digitados no terminal
// })

// //faz a pergunta , a resposta é armazenada na var 'language' , e utilizada como no exemplo
// readline.question('Qual a sua linguagem preferida? ', (language) =>{ 
//   if(language === 'Python'){
//   console.log('Isso nem é linguagem kkkkkkkkk')
//   }else{
//     console.log('Sua linguagem preferida é ' + language)
//   }
// })

//----------------------------forma instalando um pacote de capturar input---------------------

//npm install inquirer@8.1.2
// const inquirer = require('inquirer')

// inquirer.prompt([ //metodo que faz as oerguntas, passa um array e cada pergunta é um objeto [{} ,{}]
//   {
//     name: 'nota1', 
//     message: 'Qual a primeira nota'
//   },
//   {                                       //Fazendo as perguntas
//     name: 'nota2',
//     message: 'Qual a segunda nota'
//   },
// ])
// .then((respostas) =>{
//   console.log(respostas)//{ nota1: '9', nota2: '5' }

//   const media = ((parseInt(respostas.nota1)) + parseInt((respostas.nota2)) / 2)
//   console.log(media)
// })
// .catch((error) => {
//   console.log(error)
// })



//==================================Fluxo de execução==============================================

//event loop: é a leitura e execução do codigo de cima para baixo, (normal dos programas)

//event Emitter : cria um evento e chama quando precisar 

// const EventEmitter = require('events')
// const eventEmitter = new EventEmitter()

// eventEmitter,on('start' , () => {
//   console.log('Durante: vou executar apenas quando chama-la')
// })

// console.log(' Antes: primeiro codigo aq')

// eventEmitter.emit('start')

// console.log('Depois')

//foi impresso nesta ordem: 
// Antes: primeiro codigo aq
// Durante: vou executar apenas quando chama-la
// Depois

//======================================Sincrono e Assincrono========================================

//forma sincrona: o codigo espera cada linha ser totalmente executada para seguir e executar os codigos abaixo

// const fs = require('fs')

// console.log('Inicio')

// fs.writeFileSync('arquivo.txt' , 'oi') //espera essa terminar de gravar e depois vai pro console 

// console.log('Fim')

//Vai executar nesta ordem:

//Inicio
//(Vai esperar terminar de gravar no arquivo)
//Fim

//----------------------------------------------------------------------------------------

//forma assincrona: o codigo nao espera cada linha ser totalmente executada(retornar resposta), ele segue a execução dos codigos abaixo e depois mostra o resultado da linha que ficou pendente

// const fs = require('fs')

// console.log('Inicio')

// fs.writeFile('arquivo.txt' , 'oi' , function (error) {
//   setTimeout(() => {
//     console.log("Gravado no arquivo") //não vai esperar esta função terminar e vai para o console abaixo
//   }, 1000)
// })

// console.log('Fim')

//Vai executar nesta ordem:

//Inicio
//Fim
 //Gravado no arquivo