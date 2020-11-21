module.exports = (app, text) => {
    
    function salvar (req, res){
        res.send(`Product > save > ${text}`)
    }

    function obter(req, res){
        res.send(`Produc > obter > ${text}`)
    }

    app.post('/product/other', salvar)
    app.get('/product/other', obter)

    return {salvar, obter}
}