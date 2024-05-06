//------------------------------------Promises-------------------------------------------------
// let p = new Promise((resolve, reject) =>{  //instanciando a promise
//     //o que a promisse precisa fazer 
//   let a = 2 + 1
//   if(a == 3){
//     resolve(a)  //se for satisfeita a condição retorna um resolve com a solução
//   }else{
//     reject('Falhou') //se nao for satisfeita retorna reject e umma falha
//   }
// })


// p.then((mensagem => { //pega a resposta de sucesso
//   console.log('Peganndo a resposta da promises cm sucesso: '+ mensagem)
// }))
// .catch(error => { //pega resposta de erro
//   console.log('Ocorreu um erro: ' + error)
// })

//--------------------------------------------------------------------------

//varias promises
// let pSumNumber = new Promise((resolve, reject) =>{
//   let c = 10 + 5
//   if(c >= 15){
//     resolve(c)
//   }else{
//     reject('Error soma')
//   }
// })

// let nome = 'Talia'
// let pName = new Promise((resolve, reject) =>{
//   if(nome == 'Talia'){
//     resolve(nome)
//   }else{
//     reject('Error name')
//   }
// })

// //chamando varias promises ao mesmo tempo
// Promise.all([pSumNumber, pName]).then((res) => console.log(res))

//----------------------------------------------------------------------

// let number = 5

// function evenNumbers(){
//   return new Promise((resolve, reject) =>{
//     if(number % 2 == 0){
//       resolve(number)
//     }else{
//       reject("Nao é par")
//     }
//   })
// }

// evenNumbers()
//   .then((par) =>{
//     console.log(par)
//   }).catch((error) =>{
//     console.log(error)
//   })

//------------------------------------Promises/ Async, Await-------------------------------------------------

//utilizando so promise
// const getUserInfoP = (id) => {
//   const data = fetch()//busca alguma api  
//   .then(response => {
//     return response.json() //pega a resposta e passa para o formato jason
//   })
//   .then(data => {
//     console.log(data) //mostra a resposta
//   })
// }

// //utilizando o async await  
// const getUserInfo = async (id) => {
//   const response = await fetch() //busca alguma api  
//   const data = await response.json() //pega a resposta e passa para o formato jason
//   console.log(data)
// }

// getUserInfo(1)

//----------------------------exemplo----------------------------------------------------------

// async function buscarDados() { //nome 'async' na frente para utilizar o await
//   try { //forma abreviada de pegar a resolve da promise (.then)
//     //o await vai dizer para esperar o resultado da requisição para seguir a execução
//     const response = await fetch('<https://api.exemplo.com/dados>'); //pega dados da api
//     const dados = await response.json(); // converte os dados para jason
//     console.log(dados);
//   } catch (erro) { //forma abreviada de pegar o reject da promise (.catch)
//     console.error(erro);
//   }
// }