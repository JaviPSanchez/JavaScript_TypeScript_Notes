'use strict';

import { restaurant, data } from './assets';

/*
The REST PATTERN looks like the SPREAD OPERATOR, It has the same
syntax with the three dots but it does the opposite of the SPREAD
OPERATOR. En vez de separar junta. Usábamos el SPREAD OPERATOR to
build new ARRAYS or OBJECTS, o para pasar múltiples VALUES en una
función.
*/
function getTotal(...args) {
  console.log(typeof args);
}
/*
This syntax allows the function to accept any number of arguments
and gather them into an array called args
*/
getTotal(871);
/*
Para diferenciar el SPREAD de REST simplemente saber que cada uno se
hace en un lado diferentes de una igualdad, el SPREAD en el lado izquierdo,
mientras que el REST en el derecho, aunque esto no deberíamos fijarnos mucho...,
más bien en que queremos obtener.

If you want to break an array into several variables, you're using spread syntax.

If you're taking several variables and putting them into one array, you're using
rest syntax.
*/

//SPREAD --> right side of = operator

const arr = [1, 2, ...[3, 4]];
console.log(arr); //[1, 2, 3, 4] JUNTA ELEMENTOS

//REST --> left side of = operator

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2  [3, 4, 5] SEPARA ELEMENTOS
console.log(others); // [3, 4, 5]

/*
Con el ejemplo del restaurante, imaginemos que queremos poner todo en un ARRAY, el mainMenu y el starterMenu en un solo menu, lado derecho de la igualdad, y queremos sacar dos platos del menu dejando el resto en un ARRAY, lado izquierdo de la igualdad:
*/

const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); //Pizza Pasta ["Risotto", "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]
/*
Podemos ver como se ha saltado el STRING "pasta"; the REST SYNTAX collects all the array elements after the last variable, "Risotto" for that reason the REST PATTERN always must be the last in the DESTRUCTURING ASSIGMENT, si no cualdo sabe JS donde debe pararse!
*/

// const [pizza, risotto, ...otherFood, bread] // NO PERMITIDO SyntaxError: Identifier 'pizza' has already been declared

/*
Podemos también utilizar esta Propiedad en OBJECTS, la única diferencia es que juntaremos los elementos en un nuevo OBJECT y no un ARRAY.

Imaginemos que queremos solo seleccionar los días de la semana, es decir, jueves y viernes, ¡y meterlos en un OBJECT sacando el sabado into its own VARIABLE!
*/
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays); // {open: 0, close: 24} {thu: {…}, fri: {…}}
console.log(weekdays); // {thu: {…}, fri: {…}}
console.log(sat); // {open: 0, close: 24}
/*
Hasta ahora era para hacer DESTRUCTURING,
pero si quisiésemos pasar múltiples argumentos a una función nos podemos servir del SPREAD OPERATOR,
básicamente lo que hicimos con el ejemplo de los ingredientes con el SPREAD:
*/
// restaurant.orderPasta(...ingredients);
/*
teníamos un ARRAY, y expandimos este ARRAY en sus tres elementos, para pasarlos como argumentos individuales en una función:

orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicius pasta with ${ing1}, ${ing2} and ${ing3}.`
    );

Por el contrario con el REST OPERATOR vamos a hacer lo contrario, pasamos valores individuales y los convertimos en ARRAYS:
*/

const add1 = function (...numbers) {
  console.log(numbers); // [2, 3] o [2, 3, 7, 2] o [2, 3, 5, 3, 2, 1, 6, 5]
};
add1(2, 3); // [2, 3]
add1(2, 3, 7, 2); // [2, 3, 7, 2]
add1(2, 3, 5, 3, 2, 1, 6, 5); // [2, 3, 5, 3, 2, 1, 6, 5]

/*
Con el REST SYNTAX we COMPRESS while with the SPREAD SYNTAX we EXPAND!
La siguiente función es una función que acepta cualquier número de parámetros, los suma y saca el resultado:
*/

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum); //57
};

const x = [50, 3, 4];
add(...x); // UNPACKAGED

/*
Vamos a crear otro METHOD en nuestro OBJECT restaurant,
necesitamos pedir una pizza con al menos un ingrediente puesto que el resto son opcionales,
para esto REST PARAMETRS are perfect!
*/
const pizzaMediterranea = restaurant.orderPizza(
  'mushrooms',
  'onions',
  'olives',
  'spinach'
);
pizzaMediterranea;

//mushrooms ["onions", "olives", "spinach"]
/*
El primer elemento se almacena en el ARGUMENT mainIngredient y el resto en otherIngredients como un ARRAY.

Si solo pidiésemos un ingrediente, quedaría el ARRAY otherIngredients vacío.
*/
const pizzaChampi = restaurant.orderPizza('mushrooms'); //mushrooms []
pizzaChampi;

function getBook(id) {
  return data.find(book => book.id === id);
}

const book = getBook(1);
book;

const { id, title, author, genres } = book;
id;
title;
author;
genres;

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
primaryGenre;
secondaryGenre;
otherGenres;

//Modificamos el ARRAY Genres

const newGenresBad = [genres, 'epic fantasy'];
newGenresBad;

//Pero esto no es lo que queremos, queremos un ARRAY que contenga todos los valores, por ello usamos el SPREAD operator

const newGenresGood = [...genres, 'epic fantasy'];
newGenresGood;

//Podemos usar el REST PATTERN en OBJECTS, permitiendonos modificarlos o actualizarlos:

const updatedBook = { ...book, moviePublicationDate: '2001-12-19' };
updatedBook;

//Podemos hacer un update, cuidado con el orden de los parámetros, si ponemos ...book detrás de pages, no veremos el cambio...

const updatebookPages = { ...book, pages: 5000 };
updatebookPages;
