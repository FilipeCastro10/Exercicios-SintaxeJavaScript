//uso de __proto__ (Deprecated)

const avo = {
    cor_dos_olhos: "Azul",
    corCabelo: "Castanho"
};

const pai = {
    __proto__: avo,
    corCabelo : "Preto"
}

const filho = {
    __proto__: pai,
    corPele: "Branca"
}

console.log("Filho: ")
console.log(filho); //Exibe apenas os atributos exclusivos do objeto filho.
console.log("Cor dos olhos: "+ filho.cor_dos_olhos);//Herdado do avo
console.log("Cor do cabelo: "+ filho.corCabelo);//herdado do pai
console.log(avo.__proto__ === Object.prototype);//true
console.log(pai.__proto__ === Object.prototype);//False.O prototipo de pai é o avo.
