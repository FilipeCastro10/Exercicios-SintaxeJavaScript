//produtos:
const produto1 = {
    nome : 'Smartphone',
    preco: 850
}

const produto2 = {
    nome : 'TV 32',
    preco: 1100
}

//uma function factory(função fábrica) retorna um objeto 
function CriarProd(nome = "Produto padrão" , preco = 0){
    return {
        nome : nome,
        preco : preco
    }
}

const produto3 = CriarProd("Geladeira", 550);
console.log(produto3);
console.log(CriarProd('Caneta', 0.50));
console.log(CriarProd('Aparador de gramas', 2210));
