var string1 = "jamal";

function ab(){
 return this;    
}



const a = ab() == undefined;
console.log(a);

var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); 

/*console.log(string1 === "Jamal");
console.log(module.exports);*/