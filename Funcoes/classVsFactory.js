/* Class em Javascript e uma funcao escrita de uma maneira mais simples.
    O this aqui varia de acordo com quem chamou.
*/
class Aluno{
    constructor(nome , nota){
        //variaveis públicas estão acessiveis
        this.nome = nome;
        this.nota = nota;
    }
    
    falar(){
        console.log(`Aluno: ${this.nome} Nota: ${this.nota}`);
    }

}

const aluno1 = new Aluno("Carlos", 8.0);
aluno1.falar();
console.log(aluno1.nome);//atributo visivel sendo acessado.

//funcao factory:
const ConstruirAluno = (nome, nota) => {
    return {
        nome : nome,
        nota : nota,

        falar : () => console.log(`Aluno: ${nome} Nota: ${nota}`)
    }
}

const aluno2 = ConstruirAluno("Pedro", 10.0);
aluno2.falar();

//funcao construtora:
function Pessoa(nome, idade){
    let name = nome;
    let yearsOld = idade;

    this.falar = () => console.log(`Nome: ${name} Idade: ${yearsOld}`)
}

const pessoa = new Pessoa("Bruna", 20);
pessoa.falar();