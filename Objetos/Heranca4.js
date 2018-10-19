//Metodo Object.create(obj) criará/retorna um novo objeto contendo obj como prototipo.

const pai = {
    nome: "Zinaldo",
    corCabelo: "preto"
}

const filho = Object.create(pai);
filho.nome = "Filipe";

console.log(filho);
console.log(`${filho.nome} tem cabelo ${filho.corCabelo}`);

//Object.create(objPai, {}) criará o objeto filha e modificará o atributo nome e suas propriedades.
const filha = Object.create(pai, 
    {
        nome: {value: "Lorena", enumerable: true, writable: false }
    }
);

console.log(filha);
console.log(`${filha.nome} tem cabelo ${filho.corCabelo}`);

console.log("***keys***");
console.log(Object.keys(filho));
console.log(Object.keys(filha));

console.log();

console.log("*****for/in*****");

for(let key in filha){
    console.log(`key ${key}`); //Exibe os atributos do objeto e os herdados.
}

//diferencia os atributos herdados.
for(let key in filha){
    filha.hasOwnProperty(key) ? console.log(key) : console.log(`herdado: ${key}`);
}
