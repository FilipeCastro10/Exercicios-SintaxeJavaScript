/*O método filter() cria um novo array com todos os elementos que passaram
 no teste implementado pela função(callBack) fornecida.*/

const faculdades = [
    { nome: "Cesupa", mensalidade: 1450, belem: true },
    { nome: "Unama", mensalidade: 1050, belem: true },
    { nome: "Famaz", mensalidade: 1500, belem: true },
    { nome: "Esmac", mensalidade: 950, belem: false },
]

//filtrará as mais baratas
const menorPreco = faculdades.filter(function (facul) {
    return facul.mensalidade < 1100;//Retorna a facul se a mensalidade for menor
});
console.log("****As mais baratas****");
console.log(menorPreco);

//filtrará as faculdades que são de belém.
const arrayBelem = faculdades.filter(facul => facul.belem === true);//retorna a facul

console.log("****Em Belem****");
console.log(arrayBelem);
console.log();

//filtrará as mais baratas & em Belém
const barato = fac => fac.mensalidade < 1100;
const emBelem = fac => fac.belem === true;

const baratoEmBelem = faculdades.filter(barato).filter(emBelem);
console.log("****Barato & Belem****");
console.log(baratoEmBelem);
console.log();


