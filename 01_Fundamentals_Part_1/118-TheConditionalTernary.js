/*
 ****************CONDITIONAL OPERATOR o TERNARY OPERATOR*******

 
Hay una forma de hacer el Statement if / else en una sola linea, usando los signos ?, :
*/

const age = prompt("¿Que edad tienes?");
age >= 18
  ? console.log("Puedo beber 🍷") // el signo ? actua como if, y el signo : como else.
  : console.log("No tengo edad para beber alcohol");

// Hay que tener en cuenta que es un operador, no un statement, lo cual quiere decir que podemos guardar nuestro operador en una variable. lo cual puede guardarnos mucho codigo y claridad!
const drink = age >= 18 ? "beber 🍷" : "beber 🥛";
console.log(drink); // Aqui estamos guardando un condicional en la variable drink directamente, no hace falta declararla fuera del statement if / else como podemos ver en el ejemplo siguiente con la variable drink2.
let drink2;
if (age >= 18) {
  drink2 = "beber 🍷";
} else {
  drink2 = "beber 🥛";
}
// Podemos incluso meter nuestro condicional en una expresion:

const age = prompt("¿Que edad tienes?");
console.log(`I like to ${age >= 18 ? "beber 🍷" : "beber 🥛"}`);
/*
No obstante no podemos sustituir siempre nuestro if / else statement por el operador ternary, este solo es util en situaciones rapidas donde el numero de opciones a elegir es pequeño.

LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/
let populationSpain = 60;
console.log(
  `Spain's population is ${populationSpain >= 33 ? "above" : "below"} average.`
);
