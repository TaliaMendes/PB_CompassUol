const express = require('express')
const router = express.Router()
const ProdutoController = require('../controller/controllerProduto')

router.post('/create', ProdutoController.newProduct )
router.get('/all', ProdutoController.allProducts)
router.get('/unique/:id', ProdutoController.uniqueProduct)
router.put('/edite/:id', ProdutoController.editeProduct)
router.delete('/remove/:id', ProdutoController.removeProduct)