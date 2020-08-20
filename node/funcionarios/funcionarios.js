const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const getChina = funcionarios => funcionarios.pais == 'China'
const getGenero = funcionarios => funcionarios.genero == 'F'
const menorSalario = (f, fAtual) => f.salario < fAtual.salario ? f : fAtual

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(getChina).filter(getGenero).reduce(menorSalario))
})