const arrayTeste = [0] ;

//formas de adicionar valores.
arrayTeste[1] = 1;
arrayTeste.push(3, 8.1, 'Hello'); //Push adiciona ao final do array

//tamplete string
console.log(`

Array [ ${arrayTeste} ]
tamanho ${arrayTeste.length}
Remove o último elemento: ${arrayTeste.pop()}
Novo Array: ${arrayTeste}

`);

delete arrayTeste[1]; //delete valor com indice 1
console.log(arrayTeste);

arrayTeste[1] = "a"; //adiciona novo valor ao indice 1

for (let index of arrayTeste) { //iterator. percorre cada elemento do array
    
    console.log(index);    
}

const array2 = [0, 0, 0];
const array3 =[1, 1, 2, array2];
const array4 = ["7", "a", 2];

console.log(array3); 
console.log("concat:" + array4.concat(array2));
