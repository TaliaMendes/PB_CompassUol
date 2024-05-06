//interno
// const func = require('./soma') //extraindo o modulo soma 
// const soma = func.soma

//externo
// const minimist = require('minimist')

//aplicando o minimist
// const args = minimist(process.argv.slice(2)) //vetor com os elementos digitados
// console.log(args)

// const a = parseInt(args['a']) //pega os elementos a e b que digitamos 
// const b = parseInt(args['b'])

// soma(a,b) //faz a soma com os elementos que capturamos 




// const inquirer = require('inquirer') 
// const chalk = require('chalk')

// inquirer.prompt([{
//   name: 'nome',
//   message: 'Digite seu nome',
// },
// {
//   name: 'idade',
//   message: 'Digite sua idade',
// }])
// .then((resposta) =>{
//   console.log(chalk.bgYellow.black(`O seu nome é ${resposta.nome}, sua idade é ${resposta.idade}`))
// })
// .catch((error) => {
//   console.log(error)
// })