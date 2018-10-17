//Alguns metodos da funcao Object do javaScript.

console.log("*********Typeof Object**********");
console.log(typeof Object);

const car = {
    modelo: "Uno",
    ano: 2010,
    cor: "Gray"
}

//The Object.keys() method returns an array
console.log()
console.log("keys: "+ Object.keys(car)); //Retorna um array com as chaves
console.log("values: "+ Object.values(car));//retorna um array com os valores.
console.log(Object.entries(car)); //retorna um array contendo outros arrays com os pares [keys, value] 
console.log(Object.entries(car)[1]);

//usando forEach para percorrer os elementos
console.log()
console.log("*********ForEach, par [key, value]**********");
Object.entries(car).forEach(function(elemento){
    console.log("chave: "+ elemento[0] + "  valor: "+elemento[1]);
});

console.log();

/*definindo propriedades no objeto existente Object.defineProperty()
 * o metodo permite definir "caracteristicas" a propriedade, como por exemplo
 * enumerable: false que impede que a propriedade seja exibida num forEach.
 */

//(objeto, "nomeAtributo", {});
Object.defineProperty(car, "fabricante", {
    enumerable: true, //permitirá enumeração. Experimente usar 'false'
    writable : false, //impede qualquer modificação em Fabricante
    value: "Fiat" //valor sendo atribuido
});

car.fabricante = "Toyota";//Não permite atribuição
console.log("*********defineProperty**********");
console.log(car);

console.log();

//Object.assign(objDestino, obj2, obj3, ...) retorna um novo objeto formados a partir dos objetos parametros.

const obj1 = {economico: true};//um objeto qualquer
const NewCar = {automatico: true};//O objeto de destino. Receberá a união dos outros objetos.
 
// (destino, obj1 , obj2, ...). Atributos repetidos são sobescritos.
Object.assign(NewCar, car, obj1);
console.log("******New car******");
console.log(NewCar);
console.log("carro padrão: ");
console.log(car);

Object.freeze(NewCar); // impede novas modificações 
NewCar.modelo = "Siena"; //o modelo continuará sendo uno

