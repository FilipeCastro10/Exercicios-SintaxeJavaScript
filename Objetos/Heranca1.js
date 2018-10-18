//Priorize a composição de objetos em detrimento de Herança.

/* prototipo é o objeto "pai", que será herdado pelo objeto "filho".
 * Todo objeto criado herda de Object. Ou seja, o atributo __proto__ do objeto 
 * criado aponta para o pai Object.prototype.
 * Abaixo, O prototipo(pai) de avô é o Object.prototype. 
 * __proto__ está Deprecated(descontinuado). 
 */

 console.log(typeof Object.prototype);

 const car1 = {
     ve_maxima : 200,
     modelo : "ferrari"
 }

 const car2 = {
     ve_maxima : 100,
     modelo : "fusca"
 }

 //__proto__ está presente em todo objeto.É a variavel que aponta para o objeto pai. 
console.log(car1.__proto__ === Object.prototype); //true
console.log(car2.__proto__ === Object.prototype); //true
console.log(Object.prototype.__proto__); //null pois Object não herda de nenhum outro.

//Apenas funções possuem Prototype, que é um objeto.
function criarObjeto(){}

console.log( criarObjeto.prototype, Object.prototype);

const meuObj = criarObjeto();
//console.log(meuObj.prototype);//erro
