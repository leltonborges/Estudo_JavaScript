function soma(){
    let soma = 0
    for(i in arguments){
        console.log(arguments[i])
        soma += arguments[i]
    }
}

soma()
soma(1,2,4,5,1)