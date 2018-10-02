//o tipo var possui escopo global, enquanto let é de escopo local.
//Somente dentro de uma function é que var assume escopo local, não podendo ser acessada fora da function em que foi criada.

var num = 10;
let num2 = 20;

{
    {
        //ambas as variaveis, declaradas globalmente, são visiveis num escopo local
        console.log("var global: "+ num, "  let global: " + num2);
        var string1 = "var local";
        let string2 = "let local";
    }

}

console.log(string1);//exibe string1 que foi criada no bloco local.

/* console.log(string2);
 * Executar o comando resultará o erro String2 not defined. Indicando que a variável...
 * não existe no escopo global.
 */

{
    {
        //Reatribuir o tipo var mudará no escopo global, enquanto reatribuir let só terá efeito no escopo local
        var num = 5;
        let num2 = 6
        console.log("var interno: "+ num, "  let interno: " + num2);
    }

}
//var assumiu o novo valor atribuido no bloco anterior, enquanto let não.
console.log("new var global: "+ num, "  let global: " + num2);


//============================= variaveis dentro de um laço =========================

const element = 0;

for (let i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {

        //essa linha gera erro pois não se pode mudar o valor de uma constante depois de declarada
        //element =+ index;
        
        const constanteLocal = 0;
     
    }   
}

//var j criado dento do laço é acessível fora dele.
console.log("var j criado dentro do laço for: "+ j);

//let i criado dento do laço é inacessível fora dele.: i is not defined
//console.log(i);

//constanteLocal criado dento do laço é inacessível fora dele.: constanteLocal is not defined
//console.log(constanteLocal);