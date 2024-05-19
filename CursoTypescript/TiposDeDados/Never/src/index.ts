//È utilizada para gerar um erro, não retornar nadaaa, nem undefined ...vai mostrar somente o erro criado

function error(message: string , code: number ) :never{
  throw{message: message , errorCode: code}  //retorna o erro com a mensagem e o status que foi passada como parametro
}

error('Aplicação falhou' , 500)