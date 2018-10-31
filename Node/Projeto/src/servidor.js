//Objetivo: O express inicia um servidor e escuta a porta 3003 por conexões

//porta aleatoria
const porta = 3003;

//carrega o express
const express = require('express');
const app = express();

//dentre os parametros usaremos apenas a resposta.
const funcMidlleware = (pedido, resposta, nextFunc) => {
    //objeto que será enviado como resposta. Ele será convertido por padrão para JSON
    resposta.send({nome: 'PC', preco: 1489.99})
    console.log('houve um pedido na porta');
}

//chama a funcMidlleware quando houver uma requisição de algum cliente
app.get('/produtos', funcMidlleware );

//ficará escutando por requisiçoes na porta 3003
app.listen(porta, ()=> console.log(`servidor executando na porta ${porta}`));

//para fazer uma requisicao digite localhost:3003/produtos no navegador