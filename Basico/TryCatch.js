//Tratamento simples de exceção:
let a;

try{
    console.log(a.toUpperCase()); //Erro ao usar o o metodo numa variavel undefined
}catch(erro){
    console.log('erro ...');
}


//tratando em uma function.
function tratarExcecao(excecao){
    //Exemplos funcionas:
    //throw new Error("NÃO ENTRE EM PÂNICO")
    //throw "Mensagem simples";
    //throw 10;
    throw {
        name: excecao.message,
        date: new Date()
    }
}

/* 
try{
    throw "Exception teste"; 
}catch(erro){
    tratarExcecao(erro)
}
*/



//bloco Finally. Bloco que será executado sempre, mesmo com uma exceção lançada.
try {

    throw "exceção qualquer";

} catch (error) {
   tratarExcecao(error);
    
} finally{
    console.log("Ocorrendo um erro ou não, sempre serei executado");
}

