const numero0 = 0;
const numero1 = 1;
const numero10 = 10;

const string0 = '0';
const string1 = '1';
const string10 = '10';
const stringTrue = 'true';

const varTrue = true;

console.log(numero0 == string0); //retorna true pois não considera o tipo na comparação.

//retorna false pois === considera o tipo na compração. Semelhante ao operador == de outras linguagens.
console.log(numero0 === string0);

console.log(stringTrue == varTrue); //false. o true em javaScript representa o valor 1 e não a string 'true'
console.log(numero1 == varTrue); // retorna true. Esse trecho equivale a compração 1 == true?.
console.log(string1 == varTrue); // True. Pois não considera o tipo.
console.log(string1 === varTrue);// False pois === considera o tipo
