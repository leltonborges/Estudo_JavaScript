function salva(req, res){
    res.send('Usuario > salvar')
}

function obter(req, res){
    res.send('usuario > obter')
}


module.exports = {
    salva, obter
}