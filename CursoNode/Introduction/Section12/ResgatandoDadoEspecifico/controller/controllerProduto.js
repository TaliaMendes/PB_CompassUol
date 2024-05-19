const Produto = require('../models/Produtos')

module.exports = class ProdutoController {

  static newProduct(req, res){
    const name = req.body.name
    const price = req.body.price
    const description = req.body.description

    const produto = new Produto(name, price, description) //instancia a classe que cria o produto no banco
    produto.save() // chama o metodo do classe que faz realmente a criação

    res.send('Produto criado no mongoDB')
  }

  static async allProducts(req, res){
    const produtos = await Produto.getProducts()

    res.send(`Listagem de todos os produtos ${produtos}`)
  }

  static async uniqueProduct(req, res){
    const id = req.params.id

    const produto = await Produto.uniqueProduct(id)
    res.send(`Listar um produto específico ${produto}`)
  }
}