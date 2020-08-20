const fs = require('fs')

const produto = {
    noma: 'Celular',
    preco: 133216.545,
    desconto: 0.04
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})