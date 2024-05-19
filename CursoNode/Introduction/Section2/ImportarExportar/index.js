//-------------exportar----------------
function soma(a,b){
  console.log(a+b)
}

module.exports = soma

//-----------importar------------------
const soma = require('CaminhoDoArquivo')
soma(2,8)



//------------------------------Forma mais nova de importar e exportar --------------------------
//----------exportar---------
function soma(a,b){
  console.log(a+b)
}

export default soma;


//-----------importar-----------
import soma from './modulo_interno' //caminho onde esta o arquivo
soma(1,2)
