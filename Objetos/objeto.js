//Construindo dinamicamente Objetos:
const produto = new Object();

//criacao dinamica de atributos no objeto produto:
produto.nome = "Smartphone";
produto['marca do produto'] = 'Sansung'; //Uma alternativa a "notação ponto"
produto.preco = 220;

console.log(produto);
console.log(`Apenas a marca: ${produto['marca do produto']}`);

//excluindo atributos:
delete produto.preco;
delete produto['marca do produto'];

console.log(produto);

//Composição de objetos:
const carro = {
    modelo : "Camaro",
    valor : 200000,

    proprietario : { //composiçã. carro possui um objeto proprietario
        nome : "Filipe",
        idade : 26,

        endereco : { // proprietario possui um objeto endereco
            rua: "Silva Castro",
            numero : 50
        }
    },

    condutores: [ //atributo condutores que é um array de objetos.
        {nome: "ana", idade: 19},//objeto 1
        {nome: "lorena", idade: 21}//objeto 2
    ]

}

console.log("*********************************");
console.log("car info:");
console.log(carro);// Imprimindo informações do carro
console.log("*********************************");

carro.condutores[2] = {nome: "paulo", idade: 24};//incluindo novo condutor na posição 2 do arrray
console.log("car info atualizada:");
console.log(carro);
console.log("*********************************");

//duas formas de acessar o mesmo atributo:
carro["proprietario"]["endereco"]["rua"] = "São cristovão";
console.log(carro.proprietario.endereco.rua);