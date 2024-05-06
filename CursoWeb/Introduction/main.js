// var firstName = prompt('Digite seu primeiro nome: ')
// var lastName = prompt('Digite seu sobrenome: ')
// var age = parseInt(prompt("Digite a sua idade: "))
// var bv = 'Seja bem vinda'

// var celsius = parseFloat(prompt('Digite a temperarura em Celsius'))
// var fahrenheit = 0

// fahrenheit = (celsius * 1.8) + 32

// document.getElementById('ref').innerHTML =  bv + ' ' + firstName
// document.getElementById('temperatura').innerHTML = 'A temperatura em Fahrenheit é: ' + fahrenheit.toFixed(2)

//----------------------------------If else----------------------------------------------------------------------

// var nota = parseInt(prompt('Digite sua nota'))
// var avaliacao 

// if(nota > 100){
//   alert('Nota inválida')
// }
// else if (nota >= 90 && nota <=100){
//   avaliacao = 'A'
// }
// else if(nota >= 80 && nota <=89 ){
//   avaliacao = 'B'
// }
// else if(nota >= 70 && nota <=79){
//   avaliacao = 'C'
// }
// else if(nota >= 60 && nota <=69){
//   avaliacao = 'D'
// }
// else{
//   avaliacao = 'F'
// }

// document.getElementById('nota').innerHTML = 'Avaliação do aluno: ' + avaliacao

//--------------------------------Vetor-------------------------------------------------------
// let numberList = document.getElementById('listen') //conectando o html com o js

// for(let i=0 ; i<5 ; i++){
//   var elementos = document.createElement('li') //criando as li de acordo com o for
//   elementos.textContent = i //as li recebendo o conteudo do for
//   numberList.appendChild(elementos) //diciona no html as li com o conteudo
// }

//------------------------------------------------------------------------------------------

// let fruits = ['banana', 'maça', 'abacate', 'pera', 'morango', 'mamão']
// let numberList = document.getElementById('listen') //conectando o html com o js

// for(let i=0 ; i<5 ; i++){
//   var elementos = document.createElement('li') //criando as li de acordo com o for
//   elementos.appendChild(document.createTextNode(fruits[i])) // adiciona o conteudo do array na var elementos
//   numberList.appendChild(elementos) //diciona no html as li com o conteudo da var elementos
// }

//---------------------------------Função--------------------------------------------------------------

// function changeColor(){ //essa funçao é chamada quando é clicado o botao do html
//   let titleH1 = document.getElementById('changeh1')
//   titleH1.style.color = 'purple' //a propriedade 'style.color' troca a cor do titulo do html para roxo
// }

//-----------------------------------------------------------------------------------------------

// function changeBackgroud(){
//   let colors = ['pink', 'red', 'purple', 'blue', 'yellow']

//   colorRandom = colors[Math.floor(Math.random() * colors.length)]
//   document.body.style.backgroundColor = colorRandom
// }

//--------------------------utilizando metodo js que escuta o que esta acontecendo no html------------------

// let checkButon = document.getElementById('checkButon') //pegando o click no botao
// let ageImput = document.getElementById('ageInput') //pega a idade digitada

// checkButon.addEventListener('click', function(){ // escuta e quando ocorrer o click ele faz a função
//   let age = ageImput.value //pega o valor da idade
//   let message = (age >= 18) ? 'you are and  adult' : ' you are not adult ' // operador trenario: verifica se age>=18, se for V faz a primeira : se for menor faz a segunda
//   alert(message)
//   ageImput.value = ''
// }) 

//-------------------------------while---------------------------------------------------------------------

// let start  = document.getElementById('start') //pega o numero de inicio
// let end = document.getElementById('end') // pega o numero final
// let output = document.getElementById('output') 

// function showNumbers(){

//   let inicio = Number(start.value)
//   let fim = Number(end.value)

//   let i = start
//   let even = 0

//   while(i <= end){
//     if(i % 2 == 0){
//       even = even + i + ' '
//       output.innerHTML = even
//     }
//     i++
//   }
// }