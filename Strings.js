//ver documentação em http://devdocs.io/javascript-string/

const frase = "A vida é feita de escolhas!";

console.log(frase.charAt(7)); // Retornar o caractere na posição 7
console.log(frase.charCodeAt(3)); //Retorna o Código Unicode do caractere na posição 3

const excl = String("!!!");
const concatenado = frase.concat(excl);
console.log(concatenado);

console.log(frase.indexOf("a")); //retorna o indice da primeira ocorrência de a
console.log(frase.length);

const regex = /[A-Z]/g;
console.log(frase.match(regex)); //Retorna as occorências encontradas na frase, de acordo com a Expressão Regular
console.log(frase.match("y")); // não encontra o y na frase. Null
console.log(regex.test(frase)); // regex busca ocorrencias na frase. Encontra e retorna true 
console.log(frase.repeat(2)); //retorna uma string contendo uma repetição

const array = frase.split(" "); //Separa a frase em substrings dentro de um array. O parametro aceita regex
console.log(array);
console.log(array[3]);

const frase2 = "A noite está      bonita  ."
const regex2 = /[\s]+/; //o \s indica espaço em branco, o + indica 1 ou mais vezes a ocorrência de \s
const array2 = frase2.split(regex2); 
console.log(array2);
console.log(frase2.substring(0,9));//retorna a substring entre o indice 0 e 7.