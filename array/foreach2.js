const aprovados = ['Agatha', 'Marcos', 'Julia', 'Raquel']

Array.prototype.forEach2 = function(callback){
    for(let x = 0; x < this.length; x++){
        callback(this[x], x, this)
    }
}

aprovados.forEach2((nome, indice) => {
    console.log(`${indice+1}: ${nome}`)
})
