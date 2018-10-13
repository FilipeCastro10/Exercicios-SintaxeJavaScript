/*
 * function declaration vs function expression
 * Func declaration é carregada na mémoria antes da execução do programa e 
 * poderá ser chamada em qualquer local do código.
 * func expression será carregada no momento da execução do programa, de acordo
 * com sua posição no código e só poderá ser chamada após sua declaração
 * 
 */

 console.log(soma(1,5)); //Não causa erro pois a função soma já foi carregada. 

//function declaration
 function soma(x , y){
    return x + y;
 }

 //console.log(sub(8,7));//Erro:sub is not defined pois a função sub ainda não foi carregada.

 //function expression
const sub = function(x, y){
     return x - y;
 }

 console.log(sub(1,7)); //Não causa erro pois a função foi carregada.