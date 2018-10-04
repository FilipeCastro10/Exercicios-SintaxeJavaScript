//um objeto é mua instância de uma function. Estas representam as classes em javascript.

function name (name){
    let stringName = name;
}

const func2 = function(){
}

const obj1 = new name("pedro");// um objeto. uma instância da function name
const obj2 = new func2; // na criação de um objeto os parenteses são opcionais.

console.log(typeof name);
console.log(typeof func2);
console.log(typeof obj1, typeof obj2);

class carro{ // uma class é uma function. Essa forma é apenas um facilitador para a criação.   
}
console.log("a classe carro é do tipo :"+ typeof carro);

const chevrolet = new carro();// um objeto criado a partir da classe/function carro.

console.log("chevrolet é do tipo: "+ typeof chevrolet);


//Com a notação literal é possivel criar um único objeto, sem a necessidade de criar uma classe/function:
//Perceba que os atributos são separados por virgula
const casa = { 
    numeroCasa: 10,
    cor: "Red"
};

console.log("cor da casa: "+ casa.cor, typeof casa);

//  outro exemplo. construindo um objeto notação literal:
const cliente = {
    nome : "pedro", 
    peso : 70,
    endereco: {//um objeto endereço dentro do objeto cliente
        rua: "Av. Almirante Barroso",
        numero : 1050
    }
}

//Um objeto também pode ser criado e seus atributos e funções adicionados posteriormente:
const aluno = new Object();

aluno.nome = "José";
aluno.nota1 = 10.0;
aluno.nota2 = 8.0;
aluno.media = function(){
    return (this.nota1 + this.nota2)/2;
}

console.log("nome: "+aluno.nome, "media: "+ aluno.media());