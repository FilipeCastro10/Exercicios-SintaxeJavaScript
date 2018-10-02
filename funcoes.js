//funcções comuns:
function imprimeSoma(a, b){
    console.log(a+b);
}

function Subtracao(a, b = 0){// Atribui 0 a b caso a chamada da função não passe o valor de b
    return a-b;
}


function pow(a, b){
    let resultado = 1;
    for (let index = 0; index < b; index++) {
        resultado = resultado * a;        
    }
    
    return resultado;
}

console.log(pow(2 , 5)); //2^5 = 32
imprimeSoma(4, 4); // 4+4
imprimeSoma(); //NaN
console.log(Subtracao(2)); //equivale a 2-0 = 2


//funções anonimas(sem nome) armazenadas em variaveis:
const soma = function (a,b){
    return a+b;
}

console.log(soma(2,3)); //5

//Arrow Functions armazenadas em uma variavel:
const div = (num1, num2) => { //=> substitui a palavra function
    return num1/num2;
}

console.log(div(10,3).toFixed(2));

//Arrow Functions com retorno implícito:
const imprimeMult = (num1, num2) => console.log(num1*num2); //não é necessário a palavra return
imprimeMult(2,2);

//Arrow Functions com retorno implícito com apenas uma parametro:
const adiciona_a = a => a+1;

console.log(adiciona_a(2));// exibe 3