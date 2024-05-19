//===========================================Fs trabalhando com diretorios=============================================================
const fs = require('fs')

if(fs.existsSync('./RotasComNode')){ //se existe a pasta RotasComNode
  console.log('Existe')
}
else if(!fs.existsSync('./RotasComNode')){ // se nao existe a pasta RotasComNode
  console.log("Não existe")
  fs.mkdirSync('RotasComNode') //cria a pasta 
}
