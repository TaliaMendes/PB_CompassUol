//Modules internos, são os modulos que nos mesmos criamos e importamos para serem uitlizados em alguma finalidade

//importando a função que esta no arquivo: modulo_interno.js
module.exports = {
  soma(a,b){
    console.log(a + b)
  }
}

//importando o modulo que criamos
const meuModulo = require('./modulo_interno')

const somaVar = meuModulo.soma() //pegando a função do modulo e passando para a var para ser utilizada
somaVar.soma(1,2) //utilizando o modulo que importamos
