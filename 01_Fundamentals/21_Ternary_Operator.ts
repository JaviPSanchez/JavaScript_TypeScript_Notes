/*

🔍 Why is it referred to as a "Ternary operator," and what does the term "Ternary" signify?

Hay una forma de hacer el Statement if / else en una sola linea, usando los signos ?, :
*/

import { p } from 'vitest/dist/reporters-P7C2ytIv.js';

// const age = prompt("¿Que edad tienes?");
const age = 17;
age >= 18
  ? console.log('Puedo beber 🍷') // el signo ? actua como if, y el signo : como else.
  : console.log('No tengo edad para beber alcohol');

/*
Hay que tener en cuenta que es un operador, no un statement, lo cual quiere decir que
podemos guardar nuestro operador en una variable. Lo cual puede guardarnos mucho codigo
y claridad!
*/
const drink = age >= 18 ? 'beber 🍷' : 'beber 🥛';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'beber 🍷';
} else {
  drink2 = 'beber 🥛';
}
// Podemos incluso meter nuestro condicional en una expresion:

// const age2 = prompt("¿Que edad tienes?");
const age2 = 22;
console.log(`I like to ${age2 >= 18 ? 'beber 🍷' : 'beber 🥛'}`);
