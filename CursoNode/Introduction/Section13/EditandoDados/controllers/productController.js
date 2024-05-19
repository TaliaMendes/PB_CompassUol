const Produto = require('../models/Produtos')

module.exports = class ProdutoController {

  static async newProduct(req, res){
    const name = req.body.name
    const price = req.body.price
    const description = req.body.description

    const produto = new Produto({name, price, description}) //instancia o Schema que cria o produto no banco... passa o obj cm os dados para inseir
    await produto.save() // chama o metodo save do mongoose para inserir dados

    res.send('Produto criado no mongoDB')
  }

  static async allProducts(req, res){
    const produtos = await Produto.find().lean() //metodo que retorna todos os produtos

    res.send(`Listagem de todos os produtos ${produtos}`)
  }

  static async uniqueProduct(req, res){
    const id = req.params.id

    const produto = await Produto.findById(id).lean() //metodo que busca um produto pelo id
    res.send(`Listar um produto específico ${produto}`)
  }
  
  static async editeProduct(req, res){

    const id = req.params.id
    const name = req.body.name
    const price = req.body.price
    const description = req.body.description

    const produto = {name, price, description}
    
    await Produto.updateOne({ _id : id}, produto) // ataualiza o produto 
    
  }
}