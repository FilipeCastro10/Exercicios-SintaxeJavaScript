//Funcao + switch
//Para seleções múltiplas é preferivel o Switch em detrimento do if(){  }else if(){  }
function imprimirNota(nota){

    switch(nota){
        case 10:
            console.log("Nota máxima");
            //sem break executará esse comando e o próximo também, até encontrar o Break;
        case 9:
            console.log("Muito Bom");
            break;
        case 8: case 7:
            console.log("está na média");
            break;
        case 6: case 5: case 4:
            console.log("Precisa melhorar");
            break;
        case 2: case 1: case 0:
            console.log("Péssimo");
            break;
        default : 
            console.log("Nota inválida");
    }
}

imprimirNota(10);
imprimirNota(5);
imprimirNota(-1);



const notas = [3.5, 7.8, 10, 9.7];
//Iterando por um array:
for(let i = 0; i < notas.length; i++){
    console.log(`Nota ${notas[i]} na posição ${i}`);
}

//Iterando por um array com For/In. Terá o mesmo efeito do for comum.
for(let i in notas){
    console.log(`Indice i = ${i} , valor ${notas[i]}`);
}
//console.log(i);

//Podemos iterar sobre os atributos de um objeto:
const pessoa = {
    nome : "Filipe",
    SobreNome: "Castro",
    Sexo: "M",
    peso: 80
}

for(let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`);
}



//Quando é necessário um número indeterminado de iterações, utilizamos o while em detrimento do for

