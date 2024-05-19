enum Cargo {  //atribui um  numero, um identeficador unico para cada cargo 
  adm = 1,
  gerente = 2, 
  chefe = 3
}

const funcionario = {
  nome: 'Ana',
  idade: 25,
  cargo: Cargo.chefe    //vai imprimir o valor 3, vamos utliza o numero 3 quando fazer alguma operação
}
