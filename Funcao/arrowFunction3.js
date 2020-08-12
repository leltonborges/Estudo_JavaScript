let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // fazendo o this aponta para o obj
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) //o this aponto para module.exports
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// tentando fazer o this aponta para o obj
// mas uma 'Arrow Function' é super/mais forte do que o 'bind'
comparaComThisArrow = comparaComThisArrow.bind(obj) 
comparaComThisArrow(obj) 
comparaComThisArrow(module.exports)