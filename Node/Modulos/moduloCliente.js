//Importar algo utilizando o commonjs, que é o sistema de modulos do Node:

const modulo1 = require('./modulo1.js');//Importa o modulo1 para a constante criada.
const modulo2 = require('./modulo2.js');//Importar o modulo2. O ponto indica que o modulo está no mesmo diretório.

console.log();
console.log("****No modulo cliente****");
console.log(modulo1.variavel3);
console.log(modulo2.bomDia());
console.log(modulo2.boaNoite);
console.log("valor de a:", modulo1.a);//Undefined pois a variavel é visivel apenas dentro de modulo1
console.log(modulo1);//não exibe a variavel a