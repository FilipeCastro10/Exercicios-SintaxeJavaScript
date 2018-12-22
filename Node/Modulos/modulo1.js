//Cada arquivo em node é um modulo.
//formas de adicionar atributos no modulo1: 

this.variavel1 = "Hello World"
exports.variavel2 = 20;
module.exports.variavel3 = true;
let a = 1; //Essa variavel estará visivel apenas dentro do modulo e não poderá ser acessada fora.

//os atributos serão acessados no moduloCliente

// o modulo é um objeto.
console.log(typeof module.exports, typeof this, typeof exports);//object object object
console.log(module.exports === this); //true
console.log(module.exports === exports); //true

console.log("variavel2",module.exports.variavel2);//20
console.log("Mensagem de teste", a);

/*

module.exports = {} //atribuindo um novo objeto

//ao imprimir novamente a variavel2 teremos undefined pois module.exports recebeu um novo objeto. 
console.log("variavel2",module.exports.variavel2); 

*/