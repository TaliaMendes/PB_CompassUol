//------------------------------------Promises/ Async, Await-------------------------------------------------

//utilizando so promise
const getUserInfoP = (id) => {
  const data = fetch()//busca alguma api  
  .then(response => {
    return response.json() //pega a resposta e passa para o formato jason
  })
  .then(data => {
    console.log(data) //mostra a resposta
  })
}

//utilizando o async await  
const getUserInfo = async (id) => {
  const response = await fetch() //busca alguma api  
  const data = await response.json() //pega a resposta e passa para o formato jason
  console.log(data)
}

getUserInfo(1)

//----------------------------exemplo----------------------------------------------------------

async function buscarDados() { //nome 'async' na frente para utilizar o await
  try { //forma abreviada de pegar a resolve da promise (.then)
    //o await vai dizer para esperar o resultado da requisição para seguir a execução
    const response = await fetch('<https://api.exemplo.com/dados>'); //pega dados da api
    const dados = await response.json(); // converte os dados para jason
    console.log(dados);
  } catch (erro) { //forma abreviada de pegar o reject da promise (.catch)
    console.error(erro);
  }
}