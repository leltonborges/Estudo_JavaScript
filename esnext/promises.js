function falarDepoisDe(segundos, frases) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frases)
        }, segundos * 1000)
    })
}

falarDepoisDe(2, 'Que legal')
    .then(frase => frase.concat('23sdf'))
    .then(outrafrase => outrafrase.concat(' concat'))
    .then(result => console.log(result))
    .catch(e => console.log(e))