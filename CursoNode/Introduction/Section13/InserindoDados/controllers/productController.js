const Produto = require('../models/Produtos')

module.exports = class ProdutoController {

  static async newProduct(req, res){
    const name = req.body.name
    const price = req.body.price
    const description = req.body.description

    const produto = new Produto({name, price, description}) //instancia o Schema que cria o produto no banco... passa o obj cm os dados para inseir
    await produto.save() // chama o metodo save do mongosso para inserir dados

    res.send('Produto criado no mongoDB')
  }
}