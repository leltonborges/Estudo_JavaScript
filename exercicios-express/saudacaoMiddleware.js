function saudacao(name) {
    return function (req, resp, next) {
        console.log(`Seja bem vindo ${name}`)
        next()
    }
}


module.exports = { saudacao }
