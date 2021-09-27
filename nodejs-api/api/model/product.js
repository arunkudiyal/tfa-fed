const mongoose = require('mongoose')

// create a schema
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: String
})
module.exports = mongoose.model('Product', productSchema)