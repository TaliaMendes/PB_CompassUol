let pessoas = {
  nome: 'talia',
  age: '24'
}

console.log(pessoas.nome)


//---------------------------------------Assing-----------------------------------------------------------
let carro = {
  portas: 4,
  motor: 2.0
}

let carroAdicional = {
  tetoSolar: true
}

Object.assign(carro, carroAdicional)
console.log(carro) // {portas: 4, motor: 2, tetoSolar: true}
console.log(Object.keys(carro)) // pega a chave do objeto ['portas', 'motor', 'tetoSolar']


//------------------------------------Mutação-------------------------------------------------------
let pessoa = {
  nome: 'talia',
  idade: 24
}

let pessoa2 = pessoa

pessoa2.nome = 'alex' //altera nos dois objetos 

console.log(pessoa2)
console.log(pessoa)
console.log(pessoa2 == pessoa)//true

let pessoa3 = {
  nome: 'samyla',
  idade: 19
}

console.log(pessoa3 == pessoa) //false 


//---------------------------------Destructuring em Objetos---------------------------------------
const pessoa2 = {
  name: 'Talia',
  lastName: 'Mendes'
}

const {name: nomeO , lastName: lastNameO} = pessoa2

console.log(nomeO)
console.log(lastNameO)