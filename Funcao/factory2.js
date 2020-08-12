//Factory com param

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.9 * preco
    }
}

console.log(criarProduto("Tablet", 100))