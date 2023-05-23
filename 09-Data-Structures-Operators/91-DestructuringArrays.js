'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//Si quisiésemos extraer los elementos del ARRAY categories:

const [firstElement, secondElement] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

//Y si quisiesemos solo los elementos primero y tercero saltandose el segundo:

const [first, , second] = restaurant.categories;
console.log(first, second); // Italian Vegetarian

// Si quisiesemos cambiar el orden de dos elementos de un METHOD determinado (cambiar Vegetarian por Italian y viceversa), podriamos hacer

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // Vegetarian Italian

// Pero con DESTRUCTURING es mucho mas sencillo, no hace falta definir una VARIABLE de mas...

[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

//Podríamos crear una FUNCTION que nos devuelva un ARRAY y DESTRUCTURE el ARRAY al mismo tiempo, imaginemos que alguien nos pide “Garlic Bread” de entrante y “Pizza” de plato principal:

console.log(restaurant.order(2, 0)); // ["Garlic Bread","Pizza"]

// Ahora vamos a ir un paso más allá, ¿Qué pasaría si tuviésemos un NESTED ARRAY (one ARRAY inside other)?

const nested = [2, 5, [6, 8]];
const [i, , j] = nested;
console.log(i, j); // 2 [6, 8]

//Y si quisiésemos los valores individuales:

const nested = [2, 5, [6, 8]];
const [i, , j] = nested;
console.log(j); // [6, 8]
console.log(i, j); // 2 [6, 8]
const [x, y] = j;
console.log(x, y); // 6 8
console.log(i, x, y); // 2 6 8

//¡¡¡¡O aún más fácil!!!!

const nested = [2, 5, [6, 8]];
const [i, , [j, k]] = nested;
console.log(i, j, k); //2 6 8

// Hay otra herramienta útil, si quisiésemos extraer información de un API por ejemplo:
// ¡Imaginemos que tenemos un ARRAY con “x” elementos, pero no sabemos cuántos! por lo que creamos una variable destructurando los tres primeros valores de un ARRAY que solo tiene dos elementos! lo que pasara es que nos devolverá un tercer elemento undefined inservible!

const [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined

// Para evitar esto, podemos asignar valores a los elementos undefined, permitiendonos utilizar esta info:

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
