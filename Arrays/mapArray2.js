//desafio. Exibir apenas os preços do array abaixo:
const carrinho = [ //array
    '{ "nome" : "Borracha", "preco" : 3.45}',
    '{ "nome" : "Caderno", "preco" : 13.90}',
    '{ "nome" : "Kit de Lapis", "preco" : 41.22}',
    '{ "nome" : "Caneta", "preco" : 7.50}'
]

const arrayProdutos = carrinho.map(function(produto){
    return JSON.parse(produto);
});

arrayProdutos.forEach(function(obj){
    return console.log(obj.preco);
});
