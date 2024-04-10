'use strict';

import { restaurant, data } from './assets';

/*
🔍 Discuss the benefits of using spread syntax and differentiate it from rest syntax.

Nos permite expandir un ARRAY into all its elements.
So basically, unpacking all the ARRAY elements at one.
Para poder utilizar el SPREAD OPERATOR hay que escribir ...ARRAY

Esta sería la forma tradicional o mas dolorosa de hacer:
*/
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //[1, 2, 7, 8, 9]

// Con el SPREAD OPERATOR:

const arr1 = [7, 8, 9];
const newARRAY = [1, 2, ...arr1];
console.log(newARRAY); // [1, 2, 7, 8, 9]
console.log(...newARRAY); // 1 2 7 8 9

/*
Esto es util cuando queremos expandir un ARRAY y tambien cuando queremos
pasar argumentos dentro de funciones! Imaginemos que queremos crear un
nuevo menu con mas platos:
*/

console.log(restaurant.mainMenu); //["Pizza", "Pasta", "Risotto"]
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // ["Pizza", "Pasta", "Risotto", "Gnocci"]

/*
SPREAD es muy parecido al DESTRUCTURING ambos nos ayudan a sacar elementos de
ARRAYS o OBJECTS, pero la gran diferencia es que el SPREAD saca todos los
elementos y NO crea nuevas variables. Como consecuencia we can only use it
in places where we would otherwise write values separated by commas.

There are two important use cases for SPREAD OPERATOR:

1/ CREATE SHALLOW COPIES OF ARRAYS
SHALLOW COPY of an ARRAY, for exemple the ARRAY restaurant.mainMenu
*/
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // ['Pizza', 'Pasta', 'Risotto']
/*
2/ MERGE TWO ARRAYS TOGETHER.
*/
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu); //["Pizza", "Pasta", "Risotto", "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

/*
Hay que tener en cuenta que el SPREAD OPERATOR funciona en todos los ITERABLES
(things like STRINGS, MAPS, SETS, ARRAYS) but NOT OBJECTS. So, basically most
of the built-in DATA STRUCTURES in JS are now ITERABLES except OBJECTS.

Como STRINGS son ITERABLES podemos usar el SPREAD OPERATOR.
*/

const str1 = 'Javi';
const str2 = 'Melissa';
const strTotal = [...str1, 'y', ...str2];
console.log(strTotal); // ["J", "a", "v", "i", "y", "M", "e", "l", "i", "s", "s", "a"]

/*
Solo podemos usar el SPREAD OPERATOR when building an ARRAY or when passing
arguments into a function. But, what we can't do is to use this to build a
string using a template literal.
*/
console.log(`${...str}` Palomino); // SyntaxError: Unexpected token '...'
/*
Podemos crear una FUNCTION que acepte multiple arguments and then use the SPREAD OPERATOR
to pass those ARGUMENTS. Vamos a crear otro METHOD en nuestro ARRAY restaurant encargado
de pedir pasta con tres ingredientes, queremos ademas obtener estos ingredientes con el
prompt window:
*/

const ingredients = [
  prompt('Que primer ingrediente quieres?'),
  prompt('Que segundo ingrediente quieres?'),
  prompt('Que tercer ingrediente quieres?'),
];

console.log(ingredients); // ["a", "b", "c"]

//Forma larga

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//Forma SPREAD

restaurant.orderPasta(...ingredients);

/*
NOTA IMPORTANTE!!! desde ES2018 SPREAD OPERATOR funciona también con OBJECTS
a pesar de que no sean ITERABLES. Vamos a crear un nuevo OBJECT utilizando la
info dentro de restaurant y añadiéndole información adicional
*/

const newRestaurant = { ...restaurant, founder: 'Javier', foundedIn: 2021 };
newRestaurant;
console.log(newRestaurant.founder);
console.log(newRestaurant.foundedIn);

// creando un OBJECT con nuevos METHODS.

function getBooks(id) {
  return data.find(book => book.id === id);
}

const book = getBooks(2);
book;

const { id, title, author, genres } = book;
id;
title;
author;
genres;

//Si queremos obtener el resto, con el spread operator se creará un ARRAY con el resto de generos

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
primaryGenre;
secondaryGenre;
otherGenres;
