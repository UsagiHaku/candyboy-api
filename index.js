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
            price: '$8.50 MXN',
            description: 'Bebida refresecante sabor naranja',
            image: null,
        },
        {
            id: "2",
            name: 'Coca',
            sku: 'ABC123',
            content: 'Producto prueba',
            expiration: null,
            price: '$10.00 MXN',
            description: 'Bebida refrescante sabor coca cola',
            image: null,
        },
        {
            id: "3",
            name: 'Sprite',
            sku: 'ABC123',
            content: 'Producto prueba',
            expiration: null,
            price: '$9.50 MXN',
            description: 'Bebida refrescante sabor torinja',
            image: null,
        },
                {
            id: "4",
            name: 'Coca',
            sku: 'ABC123',
            content: 'Producto prueba',
            expiration: null,
            price: '$12.00 MXN',
            description: 'Bebida refrescante sabor coca cola',
            image: null,
        },
                {
            id: "5",
            name: 'Coca',
            sku: 'ABC123',
            content: 'Producto prueba',
            expiration: null,
            price: '$11.00 MXN',
            description: 'Bebida refrescante sabor coca cola',
            image: null,
        },
                {
            id: "6",
            name: 'Coca',
            sku: 'ABC123',
            content: 'Producto prueba',
            expiration: null,
            price: '$7.00 MXN',
            description: 'Bebida refrescante sabor coca cola',
            image: null,
        }
    ]

    res.json(data)
})

//// Starting server
const PORT = process.env.PORT || 8080
app.listen(PORT)
console.log("listening in port 8080");