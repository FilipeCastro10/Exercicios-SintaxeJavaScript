let x = 5, y = "Hello "; //let possui escopo local diferente de var
const z = "World"; //Constante somente leitura
var a = "var a";
console.log(x + " " + y + z);

//Error: Identifier 'v' has already been declared, Impossível redeclarar let no mesmo escopo.
//let v = 15; 

var a = "new a"; //var pode ser redecladara.
x = 10;// Novo valor de let x
console.log(x, y, z, a);



let local = 5;
for (let local = 0; local < 3; local++) {
    y = "new let y"
}
console.log(local, y);


var local2 = 5;
for (var local2 = 0; local2 < 3; local2++) {
    y = "new let y"
}
console.log(local2, y);


//Javascript é uma linguagem de Tipagem fraca:
var numero = 99;
console.log(numero, typeof numero);

numero = "H";
console.log(numero, typeof numero);