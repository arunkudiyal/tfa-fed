const express = require('express')
const router = express.Router()         // router --> get, post, patch, delete

// localhost:3000/products
router.get('/', (req, res, next) => {
    res.status(200)
    res.json({
        message: 'Handling GET requests to /products'
    })
})

router.post('/', (req, res, next) =>{
    res.status(200)
    res.json({
        message: 'Handling POST requests to /products'
    })
})

// localhost:3000/products/id
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId
    if(id === 'special') {
        res.status(200)
        res.json({
            message: 'You have a SPECIAL ID'
        })
    } else {
        res.status(200)
        res.json({
            message: 'You have an ID'
        })
    }
})

router.patch('/', (req, res, next) =>{
    res.status(200)
    res.json({
        message: 'Handling PATCH requests to /products'
    })
})

router.delete('/', (req, res, next) =>{
    res.status(200)
    res.json({
        message: 'Handling DELETE requests to /products'
    })
})

module.exports = router