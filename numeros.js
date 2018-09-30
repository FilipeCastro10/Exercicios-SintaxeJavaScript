const peso1 = 71.0;
const peso2 = Number("65.0");
const peso3 = 81.25;

console.log(peso1 , typeof peso1);
console.log(peso2 , typeof peso2);
console.log(peso3 , typeof peso3);


console.log(Number.isInteger(peso1)); // true, 1.0 é um interger
console.log(Number.isInteger(peso2)); // true, 2.0 é um interger
console.log(Number.isInteger(peso3)); // false, 1.1 é um float

const media = (peso1 + peso2 + peso3)/3;
const stringMedia = media.toString();


console.log("valor" + stringMedia, "tipo:" + typeof stringMedia);
console.log(media.toFixed(2)); //Exibe com duas casas decimais
console.log(media.toFixed(3)); //Exibe com três casas decimais
console.log("valor: "+ media, "Tipo: " + typeof media); //O metodo toFixed() não altera o valor real da constante.

console.log(10/0); //infinito
console.log("10" * 2);// 20
console.log("Hello"* 2);  //NaN Note a Number 

//calculo de area com o objeto Math
const raio = 3.1;
const area = Math.PI * Math.pow(raio, 2);
console.log("area ",area);