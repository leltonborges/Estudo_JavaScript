function Pessoa(nome){
    this.nome = nome
    this.falar = function(){
        console.log(this.nome)
    }
}

const p1 = new Pessoa('Marcos')
p1.falar()
console.log(p1.nome)