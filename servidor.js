const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./bancoDeDados')


app.use(bodyParser.urlencoded({extended: true}))

app.get('/products', (req, res) => {
    res.send(database.getProdutos())
})

app.get('/products/:id', (req, res, next) => {
    res.send(database.getProduto(req.params.id))
})

app.post('/products', (req, res, next) => {
    const product = database.salvarProduto({
        name: req.body.name,
        cost: req.body.cost
    })
    res.send(product) //JSON
})

app.put('/products/:id', (req, res, next) => {
    const product = database.salvarProduto({
        id: req.parans.id,
        name: req.body.name,
        cost: req.body.cost
    })
    res.send(product) //(put)Alterar
})

app.delete('/products/:id', (req, res, next) => {
    const product = database.deleteProduto(req.params.id)
    res.send(product) //(deletet) excluir
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
