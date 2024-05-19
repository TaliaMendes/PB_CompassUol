//cria a model dos produtos com classe e faz o metodo de inserir manualmente, pois não esta utilizando a ORM que faz automatico(mongoose)

const connection = require('../db/connection')

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
}

module.exports = Produto