const express = require('express');
const bodyParser = require('body-parser')

const usuarioApi = require('./api/user')
const { saudacao } = require('./saudacaoMiddleware');

const app = express();

require('./api/product')(app, "com param!")

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(saudacao("Lelton"))

app.post('/usuario', usuarioApi.salva);
app.get('/usuario', usuarioApi.obter);

app.use("/opa", (res, resp, next) => {
    console.log("Antes")
    next()
})

app.get("/opa", (req, res, next) => {
    console.log("Durante")
    res.json(
        {
            data:
                [
                    { id: 1, name: "Ana" },
                    { id: 2, name: "Julia" },
                    { id: 3, name: "Alex" },
                    { id: 4, name: "Marcos" },
                ],
            size: 30,
            pageIndex: 2,
            pageTotal: 10,
            status: 200
        }
    )
    next()

    // res.json({
    //     name: "Ipad 35GB",
    //     price: 5465.546,
    //     discount: 0.12
    // })

    // res.send("estou bem")

})

app.use("/opa", (req, resp) => {
    console.log("Depois")
})

app.get("/client/report", (req, resp) => {
    resp.send(`Report client: completo: ${req.query.complete}, Year: ${req.query.year}`)
})

app.post("/body", (req, res) => {
    let body = '';

    req.on('data', function (part) {
        body += part;
    })

    req.on('end', function () {
        return res.send(body)
    })
})

app.post("/body2", (req, res) => {
    res.send(req.body)
})

app.get("/client/:id", (req, resp) => {
    resp.send(`Client ${req.params.id}`)
})


app.listen(3000, () => {
    console.log('Em execução')
})
