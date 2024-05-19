
//-------------------------------------Exception-----------------------------------------------------
function saudaçao(nome){
  if(typeof nome !== 'string'){
    throw new Error('Insira somente strings') //criando o erro 
  }else{
    console.log("Bem vinda " + nome)
  }
}
saudaçao(125)// vai dar erro 
saudaçao('talia') // certo


//----------------------------------------try catch finnally----------------------------------------------------
try{                //tenta executar o bloco try
  let c = a + 2
}catch(error){      //caputura o erro e exibe o erro ou mensagem 
  console.log(error)
}finally{           //executa idependente de ter erro ou nao
  console.log("Mesmo com erro sou executada")
}
