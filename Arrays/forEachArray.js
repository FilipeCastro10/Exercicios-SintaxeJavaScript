//forEach(funcao callback) para percorrer um array.

const alunos = ['Carlos', 'Ana', 'Pedro'];

const valorEindice = function(nomeAluno, indi){
    return console.log(`nome: ${nomeAluno}, posicao: ${indi}`);
}

//forEach percorre o Array e chama a funcao para cada elemento do array.
alunos.forEach(valorEindice);

alunos.forEach(nome => console.log(nome));//definindo arrowFunc diretamente

alunos.forEach((nome, ind, array) => console.log(ind, array));