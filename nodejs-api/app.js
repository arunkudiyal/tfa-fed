const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const productRoute = require('./api/routes/products')
const morgan = require('morgan')
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// localhost:3000/products
app.use('/products', productRoute)

app.use((req, res, next) => {
    res.status(200)
    res.json({
        message: 'Hey, this API works!!'
    })
})

module.exports = app;