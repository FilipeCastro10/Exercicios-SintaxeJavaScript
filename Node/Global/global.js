//Objeto global do Node.
//console.log(global);

console.log(typeof global);
console.log(global === module.exports);//False


//evitar fazer atribuicoes no global.
global.MeuApp = { //MeuApp agora é um objeto global. 
    nome: "Meu app",
    saudacao(){
        return "Hello";
    }
}