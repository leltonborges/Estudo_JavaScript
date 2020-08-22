const tecnologias = new Map()
tecnologias.set('Reat', { framework: false })
tecnologias.set('Angular', { framework: true })

console.log(tecnologias.get('Angular'))
console.log(tecnologias.get('Angular').framework)

const chaverValore = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [124, 'Número']
])

chaverValore.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chaverValore.has(124))
chaverValore.delete(124)
console.log(chaverValore.has(124))
console.log(chaverValore.size)
