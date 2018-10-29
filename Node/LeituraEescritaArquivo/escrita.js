const fs = require('fs');

//objeto que será salvo no arquivo
const produto = {
    nome: "Geladeira",
    preco: 1250.00,
    desconto: 0.15
}

//writeFile(local_do_arquivo, informacoes_em_JSON, funcao_callBack)
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), (erro) =>{
    //se erro, imrpirma erro. Se não imprima 'informações salvas...'
    console.log(erro || 'Informações salvas com sucesso');

});