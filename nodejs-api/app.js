const express = require('express')

const app = express()

const productRoute = require('./api/routes/products')

// localhost:3000/products
app.use('/products', productRoute)

app.use((req, res, next) => {
    res.status(200)
    res.json({
        message: 'Hey, this API works!!'
    })
})

module.exports = app;