// Pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// Pessoa -> 321 -> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //Não deixa fazer mais alterações no obj

pessoa.nome = 'Maria'
pessoa.address = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Alex'})
console.log(pessoaConstante)