//callbacks são funçoes normalmente utilizados para continuar a execução do código após uma operação ser terminada 


//esta é a função callback, pois ela foi utilizada para executar algo assim que foi feito alguma ação(coletar o nome)
function returnName(nome){
  console.log('Bem vinda ' + nome)
}

//Função coleta o nome e passa para a variavel callback que é retornada para a função callback acima 
function getName(callback){
  var nome = 'Talia Mendes'
  callback(nome)
}

getName(returnName) //chama a função de retornar nome, passando a funçao callback como parametro 



//---------------------------------SetTimeout---------------------------------------------
console.log("Codigos")

//esta função so é executada apos atingir 2 segundos.
setTimeout(function(){
  console.log("Função callback, so vou entrar em ação após 2 segundos") //esta é a função callback 
},2000) //tempo me milisegundos

console.log("Codigos")
