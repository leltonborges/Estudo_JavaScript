// let e const
let b = 2
{
    var a = 1
    let b = 3
}

console.log(a)
console.log(b)

// Template String
const produto = 'IPad'
console.log(`${produto} é caro!`)

// Destructuring

// Com Array
const [l, e, ...tras] = 'Alunos'
console.log(l, e, tras)
const [x, , y] = [1, 4, 6.3, 72, 72]
console.log(x, y)


// Com Object
const { nome, idade } = { nome: 'Ana', idade: 9 }
const { nome: n, idade: i } = { nome: 'Ana', idade: 9 }

console.log(nome, idade)
console.log(i, n)