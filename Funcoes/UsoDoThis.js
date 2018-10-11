//Objeto pessoa
const person = {
    firstName : "Jhon",
    lastName  : "Lennon",
    fullName  : function() {
        // This
        console.log( `${this.firstName} ${this.lastName}` );

        // Também poderia se ter escrito(forma menos recomendada):
        console.log( `${person.firstName} ${person.lastName}` );
    }
}


person.fullName();