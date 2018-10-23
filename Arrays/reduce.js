//reduce() irá acumular os valores de acordo com a funcao passada como callback.

const alunos = [
    {nome: "Pablo", nota: 8.1, bolsista: false},
    {nome: "Renato", nota: 8.2, bolsista: true},
    {nome: "Camila", nota: 7.8, bolsista: false},
    {nome: "Regina", nota: 9.3, bolsista: true}
]

const notas = alunos.map(aluno => aluno.nota);
console.log("notas", notas);

const notasAcumuladas = notas.reduce((valAcumulado, valAtual) => {
    console.log("valor parcial acumulado:", valAcumulado.toFixed(1), 
    "+ valor atual:", valAtual);
    return valAcumulado + valAtual;//soma o valor acumulado com o valor atual;
});

console.log("Resultado final",notasAcumuladas, typeof notasAcumuladas);

//para multiplicar as notas:
console.log("Multiplicação das notas:");
console.log(notas.reduce((acumulador, atual) => acumulador*atual).toFixed(2));