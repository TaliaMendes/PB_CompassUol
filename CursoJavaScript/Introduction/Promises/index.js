let pro = Promise.resolve(3+2)

console.log("outros codigos que será executado")

console.log(pro)

pro.then((value) => {return value + 5})
.then(value => console.log(value))

//---------------------------------------Promises / Falhas---------------------------------------------
let p = Promise.resolve(new Error ('foi identificado um erro'))//foi criado um erro para simulação

console.log('O codigo demais é executado normalmente')

//aqui quando chamamos o promise que da o erro
p.then(value => console.log(value)) //tenta executar a promise
.catch(reason => console.log('Falhou' + reason)) //mostra a erro 


//---------------------------------------Promises /Resolve e Reject---------------------------------------------
function verificarNumero(num){
  return new Promise((resolve,reject) => {
    if(num == 2){
      resolve(console.log('o numero é ' + num))
    }else{
      reject(new Error('Falhou'))
    }
  })
}

verificarNumero(2)//resolve
verificarNumero(3)//reject


//----------------------------------------varias promises---------------------------------------------------------
let pSumNumber = new Promise((resolve, reject) =>{
  let c = 10 + 5
  if(c >= 15){
    resolve(c)
  }else{
    reject('Error soma')
  }
})

let nome = 'Talia'
let pName = new Promise((resolve, reject) =>{
  if(nome == 'Talia'){
    resolve(nome)
  }else{
    reject('Error name')
  }
})

//chamando varias promises ao mesmo tempo
Promise.all([pSumNumber, pName]).then((res) => console.log(res))