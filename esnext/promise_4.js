const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function readFile(path) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(err, conteudo){
            resolve(conteudo.toString())
        })
    })
}

readFile(caminho).then(console.log)