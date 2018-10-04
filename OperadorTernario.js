//Operador ternário. Tipo + identificador = teste lógico + ? + 'caso true' : 'caso false'
//O operador ? faz o teste lógico 2 < 3 e retorna ou 'verdadeiro' ou 'falso'
const operador = 2 < 3 ? 'verdadeiro' : 'Falso';
console.log(operador);


//Testa a sentença (operador === 'verdadeiro') e atribue ou 5 ou 6 a constante valor.
const valor = (operador === 'verdadeiro') ? 5 : 6
console.log(valor); 



//=========== operador ternário e funções ================
function nota(nota){
    return nota>=7 ? 'Aprovado' : 'Reprovado';
}

console.log(nota(8.5));


//Operador ternário com Arrow Function.
//resultado = Arrow Function. num é o parametro da função. Esta retornará o result da operação ternária.
const resultado = num => num >= 1 ? 'Ok' : 'Não faz sentido';
console.log(resultado(-5));


//Operador ternário dentro de uma função, pertencente a um objeto:
Escola = {
    nome: "Escola Renato Franco",

    endereco: {
       rua: "Oliveira Belo",
       numero: '1005',
       cidade: "Belém"
    },

    contaEnergia : consumoHoras => {
        
        return (consumoHoras*7.52) > 100 ? "Pagara mais de R$100" : "pagará apenas " + consumoHoras*7.52
    }
    
};

console.log(Escola.contaEnergia(11));