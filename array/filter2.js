const produtos = [
    { nome: 'Notebook', preco: 2045, fragil: true },
    { nome: 'IPad Pro', preco: 4175, fragil: true },
    { nome: 'Copo de vidro', preco: 12, fragil: true },
    { nome: 'Mesa', preco: 200, fragil: false },
    { nome: 'Colher', preco: 2.75, fragil: false }
]

Array.prototype.filter2 = function (e) {
    const dados = []
    for (let x = 0; x < this.length; x++) {
        if (e(this[x], x, this)) {
            dados.push(this[x])
        }
    }
    return dados
}

console.log(produtos.filter2(p => p.preco < 20 && p.fragil))