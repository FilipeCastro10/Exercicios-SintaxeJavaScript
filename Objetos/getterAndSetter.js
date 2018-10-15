/*Javascript não possui atributos private. Por convenção utilizamos
 * um _ antes do nome de uma variável para "defini-la" como privada.
 * Todavia nada impede que o atributo seja modificado diretamente.
 */
const sequencia = {
    //esperasse que outros desenvolvedores respeitem o _ e não acessem o atributo diretamente
    _valor: 1, 

    //Por convenção, nomear get e se com o mesmo nome da variavel que se quer modificar.
    get valor(){ 
        this._valor++;
        return this._valor
    },

    set valor(valor){
        if(valor > this._valor){
            this._valor = valor;
        }
    }
}

console.log(sequencia.valor);//acessa o get e retorna 2
console.log(sequencia.valor);//acessa o get e retorna 3
sequencia.valor = 100; //acessa o set e atribui 100
console.log(sequencia.valor);//acessa o get e retorna 101

sequencia._valor = 10; // nada impede que o atributo seja modificado diretamente.
console.log(sequencia.valor);