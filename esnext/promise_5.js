function gerarNumerosEntre(min, max, time) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
            resolve(aleatorio)
        }, time)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 10000),
        gerarNumerosEntre(1, 60, 700),
        gerarNumerosEntre(1, 60, 2000),
    ])
}

gerarVariosNumeros().then(console.log)

setInterval(()=> {
    console.log(Math.random())
}, 100)
