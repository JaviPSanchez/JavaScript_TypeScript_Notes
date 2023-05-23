"use strict";
/*
*******************FUNCTIONS***************************


Es basicamente pequeños chunks de codigo que podemos reutilizar una y otra vez. Es como una variable pero con grandes trozos de codigo en ella. Nos permite tener un codigo mas manejable, pudiendo usar la funcion tantas veces como queramos en vez de tener que escribir mucho codigo. Keep the code dry!! avoid to repeat yourself CODE DRY!!
*/

function logger(inputs) {
  console.log("My name is Javi");
}
//Los parametros o inputs que metamos, son como espacios vacios que podemos llenar
//El cuerpo de la funcion, donde se encuentra el codigo que ejecutaremos cuando llamemos a la funcion
logger(); // Calling  or running or invoking the function.
logger();
logger();
logger();

// Una funcion no solo puede reusar lineas de codigo, sino que puede recibir informacion y devolverla.

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; //Nos devuelve el parametro que hayamos definido dentro del cuerpo de la funcion.
}
const appleJuice = fruitProcessor(5, 0); // Argumentos de nuestra funcion.
console.log(appleJuice); // Una forma de ejecutar la funcion con la variable juice
console.log(fruitProcessor(5, 0)); // Otra forma de hacerlo sin capturar el valor dentro de una variable.

// Podemos reutilizar la funcion y modificar sus inputs:

const appleOrangeJuice = fruitProcessor(2, 4); // Nuevos argumentos
console.log(appleOrangeJuice);
/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its
    capital city is ${capitalCity}.`;
}
const country1 = describeCountry("Finland", 6, "Helsinki");
console.log(country1);
const country2 = describeCountry("Spain", 40, "Madrid");
console.log(country2);
const country3 = describeCountry("France", 60, "Paris");
console.log(country3);
