//middleware pattern (chain of responsability ou cadeia de responsabilidades)

//ctx é o contexto e pode ser um objeto ou um atributo e next é a proxima funcao a ser chamada
const passo1 = (ctx, next) => {
    ctx.valor1 = 1;
    next(); //chama a proxima funcao
}

const passo2 = (ctx, next) =>{
    ctx.valor2 = 2;
    next();
}

const passo3 = ctx => ctx.valor3 = 3; //não irá chamar next()

const exec = (ctx, ...funcoes)=>{//array de funçoes

    const execPasso = index => {//executa cada funcao do array.
        if(funcoes[index] && index < funcoes.length){
            funcoes[index](ctx, () =>{execPasso(index+1)})
        }
    }
    
    //Necessário para executar o primeiro passo. O restante será chamado via recursividade
    execPasso(0);
    
}

const obj = {}
exec(obj, passo1, passo2, passo3);
console.log(obj)

const obj2 = {}
exec(obj2, passo3, passo1); //como o passo3 não chama o next, apenas ele será executado
console.log(obj2)

const obj3 = {}
exec(obj3, passo2, passo1);
console.log(obj3)