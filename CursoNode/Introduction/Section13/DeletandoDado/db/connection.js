const mongoose = require('mongoose')

async function connection(){
  await mongoose.connect(
    //'mongodb://localhost:27017/testemongoose'
    'mongodb+srv://taliaMendes:k$K8$HhttKmBPw6@primeiroteste.qyjureu.mongodb.net/?retryWrites=true&w=majority&appName=PrimeiroTeste'

  )
}

try{
  connection()
  console.log('Banco de dados conectado')
}
catch(error){
  console.log(error)
}

module.exports = mongoose