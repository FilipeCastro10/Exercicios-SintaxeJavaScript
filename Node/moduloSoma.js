module.exports = {
    soma(a,b){
        return soma(a,b);
    }
}

let c = 1;
//moduloSoma2 não conseguirá acessar essa funcao diretamente. 
const soma = function(a,b){
    return a+b+c;
}
