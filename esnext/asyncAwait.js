// Com promise...
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

//Recurso do ES8
// Objetivo de simplifica r o uso de promises...

let obterAlunos = async () => {
    const turmA = await getTurma('A')
    const turmB = await getTurma('B')
    const turmC = await getTurma('C')

    return [].concat(turmA, turmB, turmC)
} // Retorna um objeto asyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))

