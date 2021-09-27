const express = require('express')
const router = express.Router()         // router --> get, post, patch, delete
const mongoose = require('mongoose')

const Product = require('../model/product')

// localhost:3000/products
router.get('/', (req, res, next) => {
    Product.find()
        .exec()
        .then(doc => {
            console.log('Message from the DB : ' + doc)
            res.status(200).json(doc)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.post('/', (req, res, next) => {
    const createdProduct = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })

    createdProduct.save()
        .then(result => {
            res.status(200).json(result)
            console.log('Message from the DB : ' + createdProduct)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

// localhost:3000/products/id
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId
    Product.findById(id)
        .exec()
        .then(doc => {
            console.log('Message from the DB : ' + doc)
            res.status(200).json(doc)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.patch('/', (req, res, next) => {
    res.status(200)
    res.json({
        message: 'Handling PATCH requests to /products'
    })
})

router.delete('/:productId', (req, res, next) => { 
    const id = req.params.productId

    Product.remove({_id: id})
        .exec()
        .then(doc => {
            console.log('Message from the DB : ' + doc)
            res.status(200).json(doc)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router