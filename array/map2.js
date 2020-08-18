const carrinho = [
    '{"nome": "Borracha", "preco": 4.54}',
    '{"nome": "Balinha", "preco": 0.54}',
    '{"nome": "anotação", "preco": 10.6}',
    '{"nome": "Lapis", "preco": 7.55}'
]

//Retornar um array apenas com os preços
const parseObj = e => JSON.parse(e)
const precos = e => e.preco
console.log(carrinho.map(parseObj).map(precos))