const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(2, 5)
imprimirResultado(3, 1, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3,2, (y, x) => x*y)

const pessoa = {
    falar: function(){
        console.log('Opa!')
    }
}

pessoa.falar()