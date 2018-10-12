//Objeto pessoa
const person = {
    firstName : "Jack",
    lastName  : "Rogers",
    fullName  : function() {
        // This
        console.log( `this ${this.firstName} ${this.lastName}` );

        // Também poderia se ter escrito(forma menos recomendada):
        console.log( `person ${person.firstName} ${person.lastName}` );
    }
}


person.fullName();// Chama a função fullName do objeto person.

const func1 = person.fullName; //atribui fullName a uma const

/*chamada de func1 gera problemas com a palavra this presente no objeto.
 *no momento da atribuição func1 = person.fullName, this passou a referenciar
 *o objeto global 
*/
func1(); 

//o metodo bind() resolve o problema anterior.
const func2 = person.fullName.bind(person); 

func2();
