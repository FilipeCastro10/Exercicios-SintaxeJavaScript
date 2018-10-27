const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

//Axios é um client http. Está instalado em node_modules
const axios = require('axios');

//Faz requisições para obter informações de um servidor remoto.
//Aqui irá receber um arquivo Json, vindos da url, com as informações de vários funcionarios.
axios.get(url).then(response => {
    const funcionarios = response.data;
    console.log(typeof funcionarios);
    //console.log(funcionarios); //Exibirá os mais de 400 objetos funcionarios
});

//DESAFIO: Exibir apenas a Mulher Chinesa com o menor salário. 
//Respondido em funcionarioDesafio.js
