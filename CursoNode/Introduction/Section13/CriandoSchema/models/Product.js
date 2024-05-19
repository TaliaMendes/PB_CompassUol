const mongoose = require('mongoose')
const { Schema } = mongoose

const Produto = mongoose.model('Produto',
  new Schema({
    name: {type: String , required: true},
    price: {type: Number, required: true},
    description: {type: String , required: true} 
  })
)

module.exports = Produto