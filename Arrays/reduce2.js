const alunos = [
    {nome: "Pablo", nota: 8.1, bolsista: false},
    {nome: "Renato", nota: 8.2, bolsista: false},
    {nome: "Camila", nota: 7.8, bolsista: false},
    {nome: "Regina", nota: 9.3, bolsista: false}
]

//1° desafio: todos os alunos são bolsistas?
console.log(alunos.map(valor => valor.bolsista).reduce((acumulador, atual) => acumulador && atual));

//2° algum aluno é bolsista?
console.log(alunos.map(valor => valor.bolsista).reduce((acumulador, vAtual) => acumulador || vAtual));
