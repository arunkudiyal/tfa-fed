const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const productRoute = require('./api/routes/products')
const morgan = require('morgan')
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Connect the DB before mapping any route
mongoose.connect('mongodb+srv://gudiyasharma:examplepwd@cluster0.gr09l.mongodb.net/products?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connection established successfully...')
    }).catch((err) => {
        console.log('Database  Error : ' + err)
        process.exit(-1)
    })

// localhost:3000/products
app.use('/products', productRoute)

app.use((req, res, next) => {
    res.status(200)
    res.json({
        message: 'Hey, this API works!!'
    })
})

module.exports = app;