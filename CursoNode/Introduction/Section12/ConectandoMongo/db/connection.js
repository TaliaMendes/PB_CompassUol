const { MongoClient } = require('mongodb')

const uri = 'mongodb://localhost:27017/testemongodb'

const Client = new MongoClient(uri)

async function run(){
  try{
    await Client.connect()
    console.log('MongoDb conectado!')
  }
  catch(error){
    console.log(error)
  }
}

run()

module.exports = Client