const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer')

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, resp) => {
    upload(req, resp, err => {
        if(err){
            return resp.end('Ocorreu um erro.')
        }

        resp.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, resp) => {
    resp.send({
        ...req.body,
        id: 8
    })
})

app.get('/parOuImpar', (req, resp) => {
    //req.body
    //req.query
    //req.params
    const par = parseInt(req.query.numero) % 2 === 0;
    resp.send({
        result: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))