const linguagens = ["PHP", "JavaScript", "Java", "C#"];
console.log("Array inicial ",linguagens);

linguagens.pop();//remove o último elemento
console.log("remove o ultimo", linguagens);

linguagens.push("C");//adiciona na última posição
console.log("adiciona na última", linguagens);

linguagens.shift();//remove o primeiro
console.log("remove o primeiro", linguagens);

linguagens.unshift("Python");//adiciona no inicio
console.log("adiciona no incio", linguagens);
console.log();

//adicionar e remover com splice.
//A partir da posicao 2, remover 0 elementos e adiciona C++ e Assembly
linguagens.splice(2, 0, "C++", "Assembly");
console.log("Adicionar com splice", linguagens);

linguagens.splice(2,1); //remove um elemento a partir do indice 2
console.log("remover com splice", linguagens);
console.log();


//Array.slice(indice) retorna um novo array com os elementos a partir do indice 
const novasLinguagens = linguagens.slice(3); //Copia o array a partir do indice 3
const novasLinguagens2 = linguagens.slice(1,4);//copia a partir do 1(incluso) até 4(não incluso)

console.log("linguagens",linguagens);
console.log("novasLinguagens", novasLinguagens);
console.log("novasLinguagens2", novasLinguagens2);