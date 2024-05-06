const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')
const { default: Choices } = require('inquirer/lib/objects/choices')
const { error } = require('console')

menu()



function menu(){
  inquirer.prompt([{
    type: 'list',
    name: 'menu',
    message: 'Qual operação deseja realizar?',
    choices: [
      'Criar Conta',
      'Consultar Saldo',
      'Depositar',
      'Sacar',
      'Sair'
    ]

  }])
  .then(resposta =>{
    const operaçao = resposta['menu'] 

    if(operaçao === 'Criar Conta'){
      welcome()
      createAccount()
    }
    else if(operaçao === 'Depositar'){
      deposit()
    }
    else if(operaçao === 'Consultar Saldo'){
      consultarSaldo()
    }
    else if(operaçao === 'Sacar'){
      sacar()
    }
    else if(operaçao === 'Sair'){
      console.log(chalk.bgBlue.white('Obrigado por utilizar nossos serviços!'))
      process.exit()
    }
  })
  .catch(error =>{
    console.log(error)
  })
}

function welcome(){
  console.log(chalk.bgBlue.black('Seja bem vindo ao nosso banco!'))
  console.log(chalk.green('Vamos dar início ao cadastro dos dados!'))
}

function createAccount(){
  inquirer.prompt([
    {
      name: 'usuario',
      message: 'Digite o nome que será seu usuario na conta:'
    }
  ])
  .then(resName => {
    console.log('aq')
    const userName = resName['usuario']
    if(!fs.existsSync(`Contas/${userName}.json`)){
      console.info("Seu usuário na conta é: " + userName)
    }
    if(fs.existsSync(`Contas/${userName}.json`)){
      console.log(chalk.bgRed.white('Esta conta já existe, digite um outro nome para conta'))
      createAccount()
      return
    }

    fs.writeFileSync(`Contas/${userName}.json`, '{"balance": 0}', function(error){
      console.log(error)
    })
  
    console.log(chalk.green('Parabens! Conta criada com sucesso'))
    menu()
  })
}

function deposit(){
  inquirer.prompt([
    {
      name: 'nomeConta',
      message: 'Qual o usuário da sua conta?'
    }
  ])
  .then((resposta) => {
    const userAccount = resposta['nomeConta']
    
    if(!checkConta(nomeConta)){
      return deposit()
    }

    inquirer.prompt([
      {
        name: 'valDeposit',
        message: 'Qual o valor para depósito?'
      }
    ])
    .then(resposta => {
      const valorDep = resposta['valDeposit']
      addValor(userAccount, valorDep)

    })
    .catch(error => console.log(error))
  })
  .catch(error => console.log(error))
}

function consultarSaldo(){
  inquirer.prompt([
    {
      name: 'nomeConta',
      message: 'Qual o nome da sua conta?'
    }
  ])
  .then((resposta) => {
    const conta = resposta['nomeConta']

    //verificando se a conta existe
    if(!checkConta(conta)){
      return consultarSaldo()
    }

    const  dadosConta = getConta(conta)
    console.log(chalk.bgBlue(`O saldo da sua conte é ${dadosConta.balance}`))

    menu()
  })
  .catch(error => console.log(error))
}

function sacar(){
  inquirer.prompt([
    {
      name: 'nomeConta',
      message: 'Qual o nome da sua conta?'
    }
  ])
  .then((resposta) => {
    const conta = resposta['nomeConta']

    //verificando se a conta existe
    if(!checkConta(conta)){
      return sacar()
    }

    inquirer.prompt([
      {
        name: 'valSacar',
        message: 'Qual valor voce deseja sacar?'
      }
    ]).then((resposta) => {
      const saque = resposta['valSacar']
      removerValor(nomeConta, saque)
    })
    .catch(error => console.log(error))
  })
  .catch(error => console.log(error))
  menu()
}

function checkConta(nomeConta){
  if(!fs.existsSync(`Contas/${nomeConta}.json`)){
    console.log(chalk.bgRed('Esta conta não existe, verifique se o usuario digitado esta correto!'))
    return false
  }else{
    return true
  }
}

function addValor(nomeConta, valDeposit){
  const dadosconta = getConta(nomeConta)

  if(!valDeposit){
    console.log(chalk.bgRed('Ocorreu um erro'))
    return deposit()
  }

  dadosconta.balance = parseFloat(valDeposit) + parseFloat(dadosconta.balance)

  fs.readFileSync(
    `Contas/${nomeConta}.json`,
    JSON.stringify(dadosconta),
    
    function(err){
      console.log(err)
    }
  )
  console.log(`O valor depositado foi ${valDeposit}`)
  menu()
}

function getConta(nomeConta){
  const contaJson = fs.readFileSync(`Contas/${nomeConta}.json` , {
    encoding: 'utf-8',
    flag:'r'
  })
  return JSON.parse(contaJson)
}

function removerValor(nomeConta, saque){
  const dadosConta = getConta(nomeConta)

  if(!nomeConta){
    console.log(chalk.bgRed('Ocorreu um erro'))
    return sacar()
  }

  if(dadosConta.balance < saque){
    console.log(chalk.bgRed('Valor indisponivel'))
  }

  dadosConta.balance = parseFloat(dadosConta.balance) - parseFloat(sacar)

  fs.readFileSync(
    `Contas/${nomeConta}.json`,
    JSON.stringify(dadosConta),
    
    function(err){
      console.log(err)
    }
  )

  console.log(chalk.bgGreen('Saque realizado com sucesso'))
  menu()
}
