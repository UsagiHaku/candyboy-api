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
            id: "1",
            name: 'Fanta',
            sku: 'ABC123',
            content: 'Producto prueba',
            expiration: null,
            price: 8.5,
            description: 'Bebida refresecante sabor naranja',
            image: "https://i.pinimg.com/originals/bc/61/ca/bc61caaa5a11ecc081b5637ef367157e.gif",
        },
        {
            id: "2",
            name: 'Coca',
            sku: 'ABC123',
            content: 'Producto prueba',
            expiration: null,
            price: 10,
            description: 'Bebida refrescante sabor coca cola',
            image: "https://i.pinimg.com/originals/bc/61/ca/bc61caaa5a11ecc081b5637ef367157e.gif",
        },
        {
            id: "3",
            name: 'Sprite',
            sku: 'ABC123',
            content: 'Producto prueba',
            expiration: null,
            price: 10,
            description: 'Bebida refrescante sabor torinja',
            image: "https://i.pinimg.com/originals/bc/61/ca/bc61caaa5a11ecc081b5637ef367157e.gif",
        },
                {
            id: "4",
            name: 'Coca',
            sku: 'ABC123',
            content: 'Producto prueba',
            expiration: null,
            price: 10,
            description: 'Bebida refrescante sabor coca cola',
            image: "https://i.pinimg.com/originals/bc/61/ca/bc61caaa5a11ecc081b5637ef367157e.gif",
        },
                {
            id: "5",
            name: 'Coca',
            sku: 'ABC123',
            content: 'Producto prueba',
            expiration: null,
            price: 10,
            description: 'Bebida refrescante sabor coca cola',
            image: "https://i.pinimg.com/originals/bc/61/ca/bc61caaa5a11ecc081b5637ef367157e.gif",
        },
                {
            id: "6",
            name: 'Coca',
            sku: 'ABC123',
            content: 'Producto prueba',
            expiration: null,
            price: 10,
            description: 'Bebida refrescante sabor coca cola',
            image: "https://i.pinimg.com/originals/bc/61/ca/bc61caaa5a11ecc081b5637ef367157e.gif∫",
        }
    ]

    res.json(data)
})

//// Starting server
const PORT = process.env.PORT || 8080
app.listen(PORT)
console.log("listening in port 8080");