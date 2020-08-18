const produtos = [
    { nome: 'Notebook', preco: 2045, fragil: true },
    { nome: 'IPad Pro', preco: 4175, fragil: true },
    { nome: 'Copo de vidro', preco: 12, fragil: true },
    { nome: 'Mesa', preco: 200, fragil: false },
    { nome: 'Colher', preco: 2.75, fragil: false }
]

console.log(produtos.filter(p => p.preco < 20 && p.fragil))