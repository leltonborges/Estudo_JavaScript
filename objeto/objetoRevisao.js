// Coleçao dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generico'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo : 'A4',
    valor: 89000,
    proprietatio: {
        nome: 'Paul',
        endereco: {
            logradouro: 'Rua ABC',
            numero: 012
        }
    },
    condutores:[{
        nome: 'junior',
        idade: 18
    },{
        nome: 'Ana',
        idade: 43
    }],
    calcularValorSeguro: function(){
        // ...
    }
}

carro.proprietatio.endereco.numero = 1000
carro['proprietatio']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)

delete carro.condutores
delete carro.proprietatio.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)