const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove o ultimo do array
console.log(pilotos)

pilotos.push('Verstappen') // add na ultima posição
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // Add na primeira posição
console.log(pilotos)

// Splice pode add e remover

//add
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // remove um elemento a parte do terceiro elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array da posição informada
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // o 1º elemento entra no array e o ultimo não, return array
console.log(algunsPilotos2)