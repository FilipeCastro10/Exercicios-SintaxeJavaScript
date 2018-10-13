/*
 * em funções arrow o uso do this não varia de acordo com o objeto que 
 * está chamando.
 * o this, dentro de uma arrow func refere-se ao objeto na qual a func foi declarada.
 */

function pessoa(){
    this.idade = 0

    /*
     *função setInterval(funcao, tempo_em_milisegundos)
     *dispará a função a cada periodo decorrido.
     */
    setInterval(
        
        () => {
            this.idade++
            console.log(this.idade)
        }
    
    , 1000); //a função arrow será executada a cada 1 segundo.
} //use ctrl + alt + m para interromper a exec do código.

new pessoa 