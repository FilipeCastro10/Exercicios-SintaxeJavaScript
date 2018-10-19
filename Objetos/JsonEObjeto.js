/* Json é um modelo para armazenar e transmitir dados em formato de texto.
 * Json é uma string com um formato padrão.
 * representação do JSON é um par atributo/valor → → "key": value
 */

console.log(typeof JSON);

const obj1 = {
    a: 1.5, 
    b: 2, 
    c:3, 
    soma(){
        return a+b+c
    }
}

//metodo que converte um Objeto Javascript em um Json
const json1 = JSON.stringify(obj1); 
console.log(typeof json1, json1);//Apenas dados são representados, não metodos.

const obj2 = JSON.parse(json1); //metodo que converte um Json em objeto javascript
console.log(typeof obj2, obj2);

//representacao de um number, string, boolean, objeto e array num Json:
const obj3 = JSON.parse('{ "w": 10, "x": "textoEx", "y": true, "z":{}, "k": [] }');
console.log(obj3);

