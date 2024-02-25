/*
*******************OPERATORS PRECEDENCE***************************

JS tiene una tabla de precedence, se puede ver en : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
Hay que tener en cuenta que algunos Operators empiezan a leerse por la derecha en vez de hacerlo por la izquierda como en la mayoria de las ocasiones.
*/
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, y = 10, si lo hiciesemos al reves no funcionaria: x = y es Indifined.
console.log(x, y);

const yearNow = 2021;
const ageJavi = yearNow - 1987;
const ageMelissa = yearNow - 1989;
const averageAge = (ageJavi + ageMelissa) / 2; // Aqui si no indicamos los parentesis, que tienen la mayor preferencia, no funcionaria.
console.log(ageJavi, ageMelissa, averageAge);
