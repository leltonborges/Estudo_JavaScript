// usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construturas
function Produto(name, price, quantity) {
    this.name = name
    this.getPriceWithDesc = () => {
        return (price * quantity) * 0.90
    }
}
const p1 = new Produto('Caderno', 10, 3)
const p2 = new Produto('Notebook', 2193.21, 2)
console.log(p1.getPriceWithDesc(), p2.getPriceWithDesc())

//Função Factory
function criarFuncionario(name, salary, faltas) {
    return {
        name,
        salary,
        faltas,
        getSalario() {
            return (salary / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Nate', 9323, 4)
const f2 = criarFuncionario('Maria', 11200, 2)
console.log(f1.getSalario(), f2.getSalario())

// Objesct.create
const filha = Object.create(null)
filha.name = 'Ana'
console.log(filha)

//Um função famosa que retorna Object
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)