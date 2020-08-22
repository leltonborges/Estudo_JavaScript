// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salaria: 8231.54 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Amanda', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Alex']
console.log(grupoFinal)