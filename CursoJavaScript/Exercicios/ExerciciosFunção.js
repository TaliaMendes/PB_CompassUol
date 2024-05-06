//----------------------------------Exercicios Função----------------------------------------------------------------

function numeroAleatorio(n){
  return Math.floor(Math.random()* n) + 1
}

console.log(numeroAleatorio(10))

//--------------------------------------------------------------------------------------------------

function tipoDado(d){
  let tipo = typeof(d)
  return tipo
}

console.log(tipoDado(1))
console.log(tipoDado('talia'))
console.log(tipoDado(true))

//--------------------------------------------------------------------------------------------------

function numeroPositivo(n){
  let positivo = Math.abs(n)
  return positivo
}

console.log(numeroPositivo(-10))
console.log(numeroPositivo(-30))

//--------------------------------------------------------------------------------------------------

function tamanhoTexto(text){
  let tamanho = text.length
  if(tamanho > 10){
    console.log('Texto muito grande ' + tamanho)
  }
  else{
    console.log('texto dentro do limite de caracteres ' + tamanho)
  }
}

tamanhoTexto('talia')
tamanhoTexto('taliadefatimamendes')

//--------------------------------------------------------------------------------------------------

function numerosPares(n){
  for(let i = n ; i >=0 ; i--){
    if(i % 2 == 0){
      console.log('Numeros pares: ' + i)
    }
  }
}

numerosPares(10)
numerosPares(20)

//------------------------------------Exercicios Objeto---------------------------------------------------------

let onibus = {
  rodas: 8,
  limitePassageiros: 40,
  portas:2
}

console.log(onibus)

delete onibus.rodas
console.log(onibus)

onibus.janelas = 20
console.log(onibus)
