//Criando objeto com a notação literal
const obj = {}
console.log("Notação literal: ");
console.log(typeof obj, obj);
console.log("---------------------------");

//Criando objeto com a funcao Object do javascript
const obj2 = new Object();
console.log("Object JS: ");
console.log(typeof Object, typeof obj2, obj2);
console.log("---------------------------");

//Criando objeto com funções construtoras. Da mesma forma que a funcao Object.
function Produto(name, preco, desc){
    this.name = name;

    this.getPrecoFinal = () => {
        return preco * (1 - desc)
    }
}

console.log("Construtora: ");
const prod1 = new Produto("Laptop", 1700, 0.10);
console.log(prod1.name, prod1.getPrecoFinal());
console.log("---------------------------");

// função Factory. Fabrica um objeto. 
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,

        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

console.log("Funções fábrica/factory: ");
const funconario1 = criarFuncionario("Ana", 1700, 1);
const funconario2 = criarFuncionario("Pedro", 1600, 10);
console.log(funconario1.nome ,funconario1.getSalario().toFixed(3));
console.log(funconario2.nome, funconario2.getSalario().toFixed(3));

//função factory e Arrow
const CriarCarro = (modelo, ano) => {
    return {
        modelo,
        ano,

        getDescription(){
            return `Carro modelo: ${this.modelo}, ano: ${this.ano}`
        }
    }
}

const carrinho = CriarCarro("V8", 2017);
console.log(carrinho.getDescription());
console.log("---------------------------");

//Criando um objeto com o metodo Object.creat().
console.log("Object.Creat(): ");

const filha = Object.create(null);
filha.nome = "Larissa";
console.log(filha);
console.log("---------------------------");

//JSON.parse(). Transforma um JSON em um objeto
console.log("JSON from Object: ");

const fromJson = JSON.parse('{"info": "Sou um JSON"}');//JSON é um TEXTO.
console.log(fromJson.info);