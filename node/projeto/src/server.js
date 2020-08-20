const express = require('express')
const port = 3003
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// app.use((request, response, next) =>{
//     response.send({nome: 'Notebook', preco: 2342.22})
// })

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (request, response, next) => {
    response.send(bancoDeDados.getProdutos())
})


app.get('/produtos/:id', (request, response, next) => {
    response.send(bancoDeDados.getProduto(request.params.id))
})


app.post('/produtos', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco
    })
    response.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(port, () => {
    console.log(`Executando na porta ${port}`)
})