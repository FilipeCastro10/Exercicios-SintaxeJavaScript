//function expression
let dobro = function (num) {
    return num * 2;
}

//transformando em arrow function
dobro = (num) => { 
    return num * 2;
}

console.log(dobro(3));

let triplo = num => num * 3; //função arrow com return implícito

console.log(triplo(3));

let ola = () => console.log("func arrow sem parametros");

ola();


