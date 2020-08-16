// Object.preventExtensions -> evita que não adicione novo atributos, mas pode alterar/deletar
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})

console.log('Extensível:', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descriacao = 'Borracha escolar'
delete produto.tag
console.log(produto)

//Object.seal -> não conseguer adicionar/excluir, mas é possivel alterar
const pessoa = {nome: 'Julia', idade: 35} 
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome =  'Borges'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes