//============================================Apagar arquivo============================================================
const fs = require('fs')

fs.unlink('arquivo.txt', function(error){
  if(error){
    console.log(error)
    return
  }else{
    console.log("Arquivo removido")
  }
})


//=========================================Renomear arquivo========================================================
const fs = require('fs')

fs.rename('arquivo.txt', 'novoNomeArquivo.txt', function(error){
  if(error){
    console.log(error)
    return
  }else{
    console.log('Arquivo renomeado')
  }
})


//===========================================Verificar detalhes de arquivo=============================================================

const { error } = require('console')
const fs = require('fs')

fs.stat('arquivo.txt' , (error, stats) =>{
  if(error){
    console.log(error)//imprime se houver erro
    return
  }else{
    console.log(stats.isFile())//é um arquivo?
    console.log(stats.isDirectory())//é um diretorio
    console.log(stats.isSymbolicLink())
    console.log(stats.ctime)//data de criação
    console.log(stats.size)//tamanho
  }
})
