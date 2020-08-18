console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Amanda')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Amanda']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
aprovados[3] = 'Ana'
aprovados.push('Paulo')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)
console.log(aprovados[8])
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
aprovados = ['Bia', 'Carlos', 'Amanda']
aprovados.push('Ana', 'Carlos', 'Rafael')
aprovados.splice(3, 1) //Excluir -> primeiro elemnt = onde começa, segundo elemnt = quantos apartir do primeiro elemento
console.log(aprovados)
aprovados.splice(2, 2) // Excluir a partir do segundo elemento, dois elementos
aprovados.splice(2, 0, 'Elemento1', 'Elemento2') // add novos elementos
aprovados.splice(2, 1, 'Elemento3', 'Elemento4') // exclusão e add de elementos
console.log(aprovados)