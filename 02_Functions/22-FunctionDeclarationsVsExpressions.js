/*
************FUNCTIONS : DECLARATION / EXPRESSION / ARROW**************


****************FUNCTION DECLARATION VS FUNCTION EXPRESSION*****************


Hay dos formas de escribir las funciones, la primera es la ya estudiada, dandole un nombre a la funcion, y la segunda es sin darle un nombre especifico. Quizas es mejor usar el metodo EXPRESSION por temas de organizacion.

FUNCION DECLARATION: La ventaja que tiene es que podemos llamarla lineas antes de donde este escrita la funcion, podemos llamarla y luego tenerla escrita donde sea en nuestro codigo.
*/
const age1 = calcAge1(1987); // Como hemos dicho podemos llamarla unas lineas antes.

function calcAge1(birthYear) {
  return 2021 - birthYear;
}

// FUNCION EXPRESSION:

const calcAge2 = function (birthYear) {
  // Aqui la funcion no tiene nombre, directamente la guardamos en la variable calcAge2.
  return 2021 - birthYear;
};
const age2 = calcAge2(1987); // Aqui es obligatorio lamarla despues de crearla.

console.log(age1, age2);
/*
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/
function percentageOfWorld1(country, population) {
  return `${country} has ${population} million people, so it's about ${
    (population / 7900) * 100
  } of the world population.`;
}
const spain = percentageOfWorld1("Spain", 40);
console.log(spain);
const portugal = percentageOfWorld1("Portugal", 10);
console.log(portugal);
const france = percentageOfWorld1("France", 60);
console.log(france);

const percentageOfWorld2 = function (country, population) {
  return `${country} has ${population} million people, so it's about ${
    (population / 7900) * 100
  } of the world population.`;
};
const spain2 = percentageOfWorld2("Spain", 40);
console.log(spain2);
const portugal2 = percentageOfWorld2("Portugal", 10);
console.log(portugal2);
const france2 = percentageOfWorld2("France", 60);
console.log(france2);
