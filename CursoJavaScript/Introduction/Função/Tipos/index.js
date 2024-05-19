function imprimirConsole(name){ 
  console.log(name)
}

imprimirConsole('Talia')

const numeroAleatorio = function(){ //função anonima que é ferenciada pela variavel
  console.log(Math.random() * 10)
}

numeroAleatorio()

const parOuImpar = (n) => { //Arrow Functions
  if(n % 2 == 0){
    return n
  }
}