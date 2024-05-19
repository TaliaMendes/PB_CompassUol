//cria a model dos produtos com classe e faz o metodo de inserir manualmente, pois não esta utilizando a ORM que faz automatico(mongoose)

const connection = require('../db/connection')
const { ObjectId } = require('mongodb') //importa para criar o id de acordo com o que é criado automaticamente no mongo

class Produto {
  constructor(name, price, description){
    this.name = name,
    this.price = price,
    this.description = description
  }

  save(){
    //chama a conexão e o banco de dados, e cria a collection "produtos" e chama o metodo de iserir dados no bd
    const produto = connection.db().collection('produtos').insertOne({
      name: this.name,    //salva esse conteudo no bd
      price: this.price,
      description: this.description
    })
    return produto
  }

  static getProducts(){
    //chama a conexão e o banco de dados, e cria a collection "produtos" e chama o metodo de resgatar todos os dados e converte p\ array
    const produto = connection.db().collection('produtos').find().toArray

    return produto
  }

  static async uniqueProduct(id){
    //chama a conexão e o banco de dados, e cria a collection "produtos" e chama o metodo de resgatar um dado pelo id
    const produto = await connection.db().collection('produtos').findOne({_id: ObjectId(id)}) //utilizou o 'ObjectId' para transformar no id que o bd cria automaticamente
  
    return produto
  }

  static async removeProduct(id){
    //chama a conexão e o banco de dados, e cria a collection "produtos" e chama o metodo de deletar um dado pelo id
    const produto = await connection.db().collection('produtos').deleteOne({_id: ObjectId(id)}) 
  
    return produto
  }
}

module.exports = Produto