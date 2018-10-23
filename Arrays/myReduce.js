//Simulando o funcionamento de reduce() da Api Javascript

Array.prototype.myReduce = function(callBack){
    let total = this[0];

    for(let i = 1; i < this.length; i++){
        total = callBack(total, this[i], i, this);
        
    }

    return total;
}

const array = [1,2,3,4,5];

const func = (acc, cur) => acc + cur;
console.log(array.myReduce(func));
