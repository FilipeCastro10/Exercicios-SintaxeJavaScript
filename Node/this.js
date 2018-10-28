//This no Node

console.log('fora de uma funcao...');
console.log('typeof this:',typeof this);
console.log('this === module.exports:', this === module.exports);//true
console.log('this === global:',this === global);//false
console.log();

function exibir(){
    console.log("dentro da funçao...");
    console.log('this === module.exports:', this === module.exports);
    console.log('this === global:', this === global);
    this.varGlobal = 12;
}

exibir();
console.log(varGlobal);
console.log(module.exports.varGlobal);

