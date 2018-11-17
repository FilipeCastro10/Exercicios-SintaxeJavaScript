const porta = 3003;

//carrega o express
const express = require('express');
const app = express();

const bd = require('./bancoDeDados');

//exibira todos os produtos no endereco localhost:3003/produtos
app.get('/produtos', (req, respo) => {
    respo.send(bd.getProdutos);
});

//exibira cada produto via o endereço localhost:3003/produtos/id (1, 2 , 3,...)
app.get('/produtos/:id', (req, respo, next) => {
    //:id indica um parametro na requisicao  
    //req.params pega os parametros da requisiçao   
    respo.send(bd.getProduto(req.params.id));
});

//Post
app.post('/produtos', (req, respo, next)=>{
    const produto = bd.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    });

    respo.send(produto);//JSON
});

app.listen(porta, ()=>{console.log(`Server executando na porta ${porta}`)});
