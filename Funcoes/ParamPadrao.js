function soma(a = 0, b = 1, c = 0) { //valores padrões dos parametros.
    return a + b + c;
}

let textoSimples = "Bom dia!";

console.log(soma(1,2,3));
console.log(soma(1, `Olá, ${textoSimples}!!!`));

