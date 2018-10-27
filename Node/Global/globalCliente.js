require('./global.js');

console.log(global.MeuApp.saudacao());
console.log(MeuApp.saudacao());
console.log(MeuApp.nome);

MeuApp.nome = 'Your App';
console.log(MeuApp.nome);

MeuApp = Object.freeze({
    nome: 'App Congelado'
});

MeuApp.nome = 'Our App';
console.log(MeuApp.nome);