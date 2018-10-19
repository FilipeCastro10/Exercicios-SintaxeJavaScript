//use Object.setPrototypeOf() ao invés de __proto__ (Deprecated)

const car = {
    velAtual: 0,
    velMaxima: 200,

    acelerar(delta){
        if(this.velAtual + delta <= this.velMaxima){
            this.velAtual += delta;
        }else{
            this.velAtual = this.velMaxima;
        }
    },

    status(){
        return `Velocidade: ${this.velAtual} de ${this.velMaxima}`
    }
}

//não usaremos __proto__ para criar a relacao de heranca
const ferrari = {
    modelo: "ferrari",
    velMaxima: 300, 
    
    status(){
        return `${this.modelo}  ${super.status()}`//super chamará o metodo pai
    },

}

const camaro = {
    modelo: "camaro amarelo"
}

//metodo que define a relação de heranca. define car como prototipo de ferrari:
Object.setPrototypeOf(ferrari, car);
Object.setPrototypeOf(camaro, car);

console.log(ferrari.status());
ferrari.acelerar(100);
console.log(ferrari.status());
console.log(ferrari.velAtual);

console.log();
console.log(camaro);
camaro.acelerar(50);
console.log(camaro.status());//o metodo chamado é o do objeto pai car