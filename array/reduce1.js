const alunos = [
    { nome: 'João', nota: 7.35, bolsita: false },
    { nome: 'Maria', nota: 8.9, bolsita: true },
    { nome: 'José', nota: 5.8, bolsita: true },
    { nome: 'Ana', nota: 6.5, bolsita: false },
]

let resultado = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    return acumulador + atual
    
})
console.log(resultado)

resultado = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    return acumulador + atual
    
}, 10)
console.log(resultado)