function Carro(velocidadeMaxima = 200, delta = 5){
    //Atributo private, só pode ser acessado por metodos publicos.
    let velocidadeAtual = 0;

    //metodo publico. O this torna o metodo público. 
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //metodo publico para acessar o atributo velocidadeAtual
    this.getVelocidade = function(){
        return velocidadeAtual;
    }
}


const uno = new Carro();
uno.acelerar();
uno.acelerar();
console.log(`velocidade atual uno: ${uno.getVelocidade()}`);

const ferrari = new Carro(350, 35);
ferrari.acelerar();
console.log(ferrari.getVelocidade());


