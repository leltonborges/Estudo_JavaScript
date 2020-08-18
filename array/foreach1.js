const aprovados = ['Agatha', 'Marcos', 'Julia', 'Raquel']

aprovados.forEach((nome, indice) => {
    console.log(`${indice+1}: ${nome}`)
})

aprovados.forEach((nome, indice, array) => {
    console.log(`${indice+1}: ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)