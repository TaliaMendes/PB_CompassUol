//faz a união de dois ou mais 'obj' pre-definidos , que é o Alias

type user = {
  nome: string
  idade: number
}

type trabalho = {
  id: number
  cargo: string
}

type uniao = user & trabalho // uniao é o alias que contem os dois de cima

const profissional: uniao = {
  nome: 'talia',
  idade: 24,
  id: 7,
  cargo: 'desenvolvedora back-end'
}

console.log(profissional)