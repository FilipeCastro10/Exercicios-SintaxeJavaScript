// Implementando filter2 e simulando o metodo filter da API

Array.prototype.filter2 = function(func){//func é a funcao callBack
    arrayRetorno = [];

    for(let i in this){//this é o array que chamou a funcao filter2.
        if( func(this[i], i, this) ){ //testa o valor this[i] 
            arrayRetorno.push(this[i]);
        }
    }

    return arrayRetorno;
}


const arrayNumeros = [1, 5 , 10 , 3 , 2 , 11];

//Retorna um array com numeros par
const numeroPar = arrayNumeros.filter2(num => num % 2 === 0);

console.log(numeroPar);

const maiorQueCinco = arrayNumeros.filter(num => num > 5);
console.log(maiorQueCinco);
