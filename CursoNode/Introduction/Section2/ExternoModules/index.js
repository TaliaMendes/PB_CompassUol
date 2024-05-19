//Modulos Externos: São os módulos que já existem, e precisamos instala-los para utiliza-los em nosso projeto.

//=====================================Capturar argumentos do terminal==================================================
const minimist = require('minimist')

//foi digitado o comando: node --nome=talia
const args = minimist(process.argv.slice(2))//pegou o vetor de agr na posição que esta o argumento que digitamos no comando
//[{}, : , nome:talia]

const nome = args['nome'] //pegou do vetor de argumentos o nome
console.log(nome) //talia




//====================================Capturar input dp terminal=====================================================
//npm install inquirer@8.1.2
const inquirer = require('inquirer')

inquirer.prompt([ //metodo que faz as oerguntas, passa um array e cada pergunta é um objeto [{} ,{}]
  {
    name: 'nota1', 
    message: 'Qual a primeira nota'
  },
  {                                       //Fazendo as perguntas
    name: 'nota2',
    message: 'Qual a segunda nota'
  },
])
.then((respostas) =>{
  console.log(respostas)//{ nota1: '9', nota2: '5' }

  const media = ((parseInt(respostas.nota1)) + parseInt((respostas.nota2)) / 2)
  console.log(media)
})
.catch((error) => {
  console.log(error)
})


//==================================Mudando a cor das letras no console========================================
//npm install chalk@4.1.2
const chalk = require('chalk')

let nota = 4

if(nota >=6){
  console.log(chalk.green('Parabéns, voçe foi aprovado')) //se for aprovado a letra vai ser verde
}else{
  console.log(chalk.red('Voçe precisa fazer a prova de recuperação'))//se nao, vermelha
}
