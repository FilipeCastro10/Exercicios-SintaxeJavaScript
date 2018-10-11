//Toda função possui a variável local arguments, com exceção de um Arrow functions.
function concatenacao(){//função sem parâmetros
    let concat = 0;

    //The arguments object is an Array-like object corresponding to the arguments passed to a function.
    for(let i in arguments){ 
        concat += arguments[i];
    }

    return concat;
}

console.log(concatenacao(1,5,"Ok", "1+1"));//Pode-se passar parametros a função mesmo que ela não exija.

//funcção com valores padroões de variaveis.
function soma(a = 1, b = 2, c = 0){
    return a+b+c;
}

console.log(soma(5));
console.log(soma(5 , 6));

