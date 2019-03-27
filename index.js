//Import packages
const express = require('express')
const morgan = require('morgan')

//App
const app = express()

//Morgan
app.use(morgan('tiny'))

//First route
app.get('/products', (req,res) => {
    reqBackup = req;
    const data = [
        {
            name: 'Fanta',
            sku: 'ABC123',
            content: 'Producto prueba',
            expiration: null,
            price: '3.14',
            description: 'Holis bolis',
            image: null,
        }
    ]

    res.json(data)
})

//// Starting server
app.listen('8080')
console.log("listening in port 8080");