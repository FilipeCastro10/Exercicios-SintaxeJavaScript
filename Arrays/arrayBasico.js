//um Array em javascript é um objeto. 

console.log(typeof Array, typeof new Array, typeof []);

//Criacao de um array:
let aprovados = new Array("Filipe", "Bia", "Lorena");

let reprovados = ["Carlos", "Lucas"];//forma literal é a mais recomendada.

console.log(aprovados, aprovados.length);
console.log(reprovados, reprovados.length);
console.log(reprovados[3]);//não dará erro. Retorna Undefined

//adicionando elementos.
console.log();
console.log("*****Adcionando*****");

aprovados[3] = "Paulo";//adicona Paulo no indice 3
aprovados.push("Ana");//metodo push adiciona na última posição.
aprovados[10] = "Pedro";

console.log("novos aprovados", aprovados); 
aprovados.sort();//Metodo que ordena o array original.
console.log();
console.log("Ordenado", aprovados);

//excluindo elementos
console.log();
console.log("*****Excluindo*****");
delete aprovados[1];
delete aprovados[6];// Continuará undefined
delete aprovados[7];

console.log(aprovados);
console.log();

aprovados = ["Filipe", "Bia", "Lorena", "Lucas"];//resetar o array

console.log("*****splice()*****");
//metodo splice(a_partir_do_indice, elementos_a_excluir, elementos_a_adicionar)

aprovados.splice(1, 2);//A partir do indice 1(Bia), excluir 2 elementos seguintes.
console.log("Após exclusão com splice", aprovados);

aprovados.splice(1, 1, "Jhon", "Ze ruela" );//A partir do indice 1(Lucas) excluir 1 elemento e adicionar Jhon e Ze ruela
console.log("Após excluir e adicionar", aprovados);