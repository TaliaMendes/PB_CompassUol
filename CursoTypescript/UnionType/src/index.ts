//ele permite que o valor passado possa ser de mais de um tipo, basta fazer o tratamento 

function userImput(imput1: number | string , imput2: number | string ){
  let result
  if(typeof imput1 === 'number' && typeof imput2 === 'number'){
    result = imput1 + imput2
  }
  else{
    result = imput1.toString() + imput2.toString()
  }
  return result
}

const paramsNumber = userImput(10,20)
console.log(paramsNumber)

const paramsString = userImput('celular', 'notebook')
console.log(paramsString)