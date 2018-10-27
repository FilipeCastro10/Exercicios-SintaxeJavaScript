const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

const axios = require('axios');

//funcao que retorna se o objeto é do genero feminino e é chinesa.
const chineaEMulher = objeto => {
    return objeto.pais === "China" && objeto.genero === "F"; //retorna true or false
};

//para usar com reduce(). Uma funcao que retorna apenas o objeto com menor salario.
const menorSalario = (atual, proximo) => {
    return atual.salario < proximo.salario ? atual : proximo;
}


axios.get(url).then(response => {
    const funcionarios = response.data;

    const func = funcionarios.filter(chineaEMulher).reduce(menorSalario);
    console.log(func);//menor salario: 2435.61
});



