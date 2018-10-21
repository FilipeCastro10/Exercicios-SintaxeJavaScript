//map() retorna um novo array modificado de acordo com a função passada como parametro

const nums = [1, 2, 2, 3, 3, 4];

//map(function)
const novoArray = nums.map(function(valor, ind, array){
    if(valor === 2){
        return 'dois'
    } else {
        return valor*3
    }
});

const dobro = nums.map(x => x*2);

console.log("Original",nums);
console.log("dobro:  -", dobro);
console.log(novoArray);

