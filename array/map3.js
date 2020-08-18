const carrinho = [
    '{"nome": "Borracha", "preco": 4.54}',
    '{"nome": "Balinha", "preco": 0.54}',
    '{"nome": "anotação", "preco": 10.6}',
    '{"nome": "Lapis", "preco": 7.55}'
]

Array.prototype.map2 = function(callback){
    const dados = []
    for(let x = 0; x < this.length; x++){
        dados.push(callback(this[x], x, this))
    }
    return dados
}

//Retornar um array apenas com os preços
const parseObj = e => JSON.parse(e)
const precos = e => e.preco
console.log(carrinho.map2(parseObj).map2(precos))