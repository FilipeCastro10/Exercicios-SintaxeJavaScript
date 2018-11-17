//Simulando um BD

//uma funcao simples para retornar um id sequencial
const sequencia = {
    _id: 1,
    get id() {return this._id++}
}

//Conteiner para armazenar os produtos
const produtos = {};

//para salvar um produto no conteiner
function salvarProduto(produto){
    if(!produto.id) { produto.id = sequencia.id }

    produtos[produtos.id] = produto;

    return produto;
}

//retorna um produto pelo id
function getProduto(id){
    return produtos[id] || {}; //retorna o produto. caso inexistente, retorna um obj vazio
}

//Retorna apenas os valores de todos os produtos
function getProdutos(){
    return Object.values(produtos);
}

module.exports = {salvarProduto, getProduto, getProdutos};
