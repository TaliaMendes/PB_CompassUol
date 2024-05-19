//Esta função pode receber diversas quantidades de parâmetros diferentes
num = 2
num1 = 6
num2 = 9 

function imprimirNumeros(...args){
  for(let i = 0 ; i< args.length ; i++){
    console.log(args[i])
  }
}

//pode passar paramentros variados que ela aceita
imprimirNumeros(num)
console.log("--------------")
imprimirNumeros(num, num1, num2) 
console.log("--------------")
imprimirNumeros(1,8,3,7,9,6,5,4,3,10,89)
imprimirNumeros("talia")

//---------------------------------------------------------------------------------------------------------------
//Pode ou não receber todos os parametros passados na função
function pessoa(idade, nome){
  if(idade === undefined){
    console.log('Seu nome é ' + nome)
  }
  else{
    console.log("seu nome é " + nome + 'e sua idade é ' + idade)
  }
}

pessoa(20)
pessoa(24, 'Maria')

//---------------------------------------------------------------------------------------------------------------
//Pode nao passar o valor do parametro , e é atribuido um valor caso nao seja informado
function frases(frase, n=2){
  for(let x=1 ; x<=n ; x++){
    console.log(frase + ' ' + x)
  }
}

frases('Tesyando' , 5)
frases('testando sem passar o segundo parametro')