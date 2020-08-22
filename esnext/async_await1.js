function espararPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}
console.time('promise')
async function executar() {
    await espararPor(2000)
    console.log('Async/Await 1')
    await espararPor(200)
    console.log('Async/Await 2')
    await espararPor(700)
    console.log('Async/Await 3')
    await espararPor(500)
    console.log('Async/Await 4')
    console.timeEnd('promise')
}

executar()