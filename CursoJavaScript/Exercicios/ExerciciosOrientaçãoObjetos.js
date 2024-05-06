// ----------------------------------------Banco-------------------------------------------------------------

// class Banco {
//   constructor(saldo){
//     this.saldo = saldo
//   }
 
//   saque(valor, saldo){
//     if(valor > saldo){
//       return 'Saldo indisponível'
//     }else{
//       let novoVal = saldo - valor
//       return novoVal
//     }
//   }

//   deposito(valor , saldo){
//     let novoSaldo = saldo + valor
//     return novoSaldo
//   }
// }

// let bank = new Banco(200)
// console.log('Valor após o saque: '+ bank.saque(20,500))
// console.log('Valor após o deposito: '+ bank.deposito(500,300))


//----------------------------------Calculadora-------------------------------------------------------------

// class Calculadora{
 
  // soma(a,b){
  //   return a + b
  // }

  // subtraçao(a,b){
  //   return a - b
  // }

  // multiplicaçao(a,b){
  //   return a * b
  // }

  // divisao(a,b){
  //   return a/b
  // }
// }

// let calculadora = new Calculadora()
// console.log(calculadora.soma(1,2))
// console.log(calculadora.subtraçao(10,5))
// console.log(calculadora.multiplicaçao(2,8))
// console.log(calculadora.divisao(10,5))


//------------------------------------Carrinho de Compra--------------------------------------------------
// class Carrinho{
//   constructor(listItens, qtdTotal, valorTotal){
//     this.listItens = listItens
//     this.qtdTotal = qtdTotal
//     this.valorTotal = valorTotal
//   }

//   addCarrinho(novoIten){
//     let cont = 0

//     for(let i=0 ; i<this.listItens.length ; i++){
//       if(this.listItens[i].id == novoIten.id){
//         this.listItens[i].quantidade += novoIten.quantidade
//         cont = 1
//       }
//     }

//     if(cont == 0){
//       this.listItens.push(novoIten)
//     }

//     this.qtdTotal += novoIten.quantidade
//     this.valorTotal += novoIten.quantidade * novoIten.preco
//   }

//   removeCarrinho(removeItem){
//     for(let i=0 ; i<this.listItens.length ; i++){
//       if(this.listItens[i].id == removeItem.id){
//         let itensNoCarrinho = this.listItens[i] //pega todos os itens que esta no carrinho
//         let indexItens = this.listItens.findIndex( //findIndex: pega o indice do elemento que estamos procurando. A função passou o elemento para ele achar o index
//         function(itensNoCarrinho){
//           return itensNoCarrinho.id == removeItem.id //função retorna o elemento que estamos querendo excluir , se estiver na lista 
//         })
      
//         this.qtdTotal -= removeItem.quantidade
//         this.valorTotal -= removeItem.preco * removeItem.quantidade

//         this.listItens.splice(indexItens,1) // index, qtd de elementos a ser removido
//       }
//     }
//   }
// }

// let carrinho = new Carrinho([
//   {id: 1, nome:'Mouse', quantidade:3, preco:50},
//   {id: 2, nome:'Teclado', quantidade:2, preco:70},
//   {id: 3, nome:'Monitor', quantidade:1, preco:400}
// ], 6, 690)


// carrinho.addCarrinho({id: 1, nome:'Mouse', quantidade:1, preco:50})
// carrinho.addCarrinho({id: 4, nome:'MousePad', quantidade:1, preco:20})
// carrinho.addCarrinho({id: 4, nome:'ventilador', quantidade:1, preco:20})
// console.log(carrinho)
// //console.log('---------------------------------------------------------------------')
// carrinho.removeCarrinho({id: 1, nome:'Mouse', quantidade:4, preco:50})
// console.log(carrinho)

//-----------------------------------------Endereço--------------------------------------------------------

// class Endereço{
//   constructor(adress){
//     this.adress = adress
//   }

//   newAdress(novoEnd){
//     this.adress.push(novoEnd)
//   }

//   removeAdress(remEnd){
//     for(let i=0 ; i<this.adress.length ; i++){
//       if(this.adress[i].id == remEnd.id){
//         let endereços = this.adress[i] //pega o endereço que deseja excluir
//         let indexEnd = this.adress.findIndex( //retorna o index do endereço a ser removido
//           function(endereços){
//             return endereços.id == remEnd.id 
//           }
//         )
//         this.adress.splice(indexEnd, 1)
//       }
//     }
//   }

//   updateAddress(upEnd){
//     for(let i=0 ; i<this.adress.length ; i++){
//       if(this.adress[i].id == upEnd.id){
//         let endeço = this.adress[i] //pega o endereço que deseja excluir
//         let indexEnd = this.adress.findIndex( //retorna o index do endereço a ser removido
//           function(endereço){
//             return endereço.id == upEnd.id 
//           }
//         )
//         this.adress[indexEnd] = upEnd
//       }
//     }
//   }
// }


// let adress = new Endereço([
//   {id:1, rua:'rua E', bairro:'Centro', cidade:'Alvinopolis', estado:'Minas Gerais'},

// ])

// adress.newAdress({id:2, rua:'Rua abc', bairro:'Novo', cidade:'Sao paulo', estado:'SP'})
// adress.newAdress({id:3, rua:'Rua D', bairro:'Horizonte', cidade:'São João', estado:'RJ'})

// adress.removeAdress({id:3, rua:'Rua D', bairro:'Horizonte', cidade:'São João', estado:'RJ'})

// adress.updateAddress({id:2, rua:'Rua A', bairro:'Novo', cidade:'Sao paulo', estado:'SP'})
// console.log(adress)

