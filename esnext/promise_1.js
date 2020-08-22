let p = new Promise((cumprirPromessa) => {
    cumprirPromessa(3)
})

console.log(typeof Promise)
console.log(p) // Forma incorreta

p.then((valor) => { //forma correta
    console.log(valor)
})
.then((valor) => console.log(isNaN(valor)))