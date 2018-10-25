/* use require para importar lodash. Não é necessário informar o caminho para
 * bibliotecas presentes na pasta 'node_modules'
 */

// underline: forma muito comum de nomear a biblioteca lodash
const _ = require('lodash');

console.log(_.random(1,10));//sorteia um numero 1 >= numero <= 10
