setTimeout(() => {
    console.log('Executando calllback...')
    setTimeout(() => {
        console.log('Executando calllback...')
        setTimeout(() => {
            console.log('Executando calllback...')
            setTimeout(() => {
                console.log('Executando calllback...')
            }, 2000)
        }, 2000)
    }, 2000)
}, 2000)


function espararPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

espararPor()
    .then(() => espararPor())
    .then(() => espararPor())
    .then(() => espararPor())
    .then(espararPor)