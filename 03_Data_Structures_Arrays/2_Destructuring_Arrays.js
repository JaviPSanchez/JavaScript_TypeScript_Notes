'use strict';

import { restaurant } from './assets';

//Si quisiésemos extraer los elementos del ARRAY categories:

const [firstElement, secondElement] = restaurant.categories;
firstElement;
secondElement;

//Y si quisiesemos solo los elementos primero y tercero saltandose el segundo:

const [first, , third] = restaurant.categories;
first;
third;

// Si quisiesemos cambiar el orden de dos elementos de un METHOD determinado
// (cambiar Vegetarian por Italian y viceversa), podriamos hacer:

let [main, , secondary] = restaurant.categories;
main;
secondary;
const temp = main;
temp;
main = secondary;
main;
secondary = temp;
secondary;

// Pero con DESTRUCTURING es mucho mas sencillo, no hace falta definir una VARIABLE de mas...

[main, secondary] = [secondary, main];
main;
secondary;

//Podríamos crear una FUNCTION que nos devuelva un ARRAY y DESTRUCTURE el ARRAY al mismo tiempo,
// imaginemos que alguien nos pide “Garlic Bread” de entrante y “Pizza” de plato principal:

const result = restaurant.order(2, 0);
result;

// Ahora vamos a ir un paso más allá, ¿Qué pasaría si tuviésemos un NESTED ARRAY (one ARRAY inside other)?

const nested1 = [2, 5, [6, 8]];
const [a, , c] = nested1;
a;
c;

//Y si quisiésemos los valores individuales:

const nested2 = [2, 5, [6, 8]];
const [i, , j] = nested2;
j;
i;
const [x, y] = j;
x;
y;

//¡¡¡¡O aún más fácil!!!!

const nested3 = [2, 5, [6, 8]];
const [m, , [n, r]] = nested3;
m;
n;
r;

// Hay otra herramienta útil, si quisiésemos extraer información de un API por ejemplo:
// ¡Imaginemos que tenemos un ARRAY con “x” elementos, pero no sabemos cuántos! por lo que creamos una variable destructurando los tres primeros valores de un ARRAY que solo tiene dos elementos! lo que pasara es que nos devolverá un tercer elemento undefined inservible!

const [k, f, l] = [8, 9];
k;
f;
l;

// Para evitar esto, podemos asignar valores a los elementos undefined, permitiendonos utilizar esta info:

const [p = 1, q = 1, t = 1] = [8, 9];
p;
q;
r;

/*
We can even destructure an ARRAY using Objects, ARRAY is inherited from Object class, whcich means internally JS uses the object to construct the ARRAY

So, every item in an ARRAY is internally mapped to an Object with index as a Key and item as the Value {key(index): value(item)}

This is useful if we want to destructure only from a specific place in a big size ARRAY.

Instead of using the tradictional way:

const [company, price, os] = data
console.log(price) // 99.96

We can do also:

const os = data[100]
console.log(os) // 99.96
*/

const data = ['Microsoft', 99.96, 'Windows 11'];

const { 1: price } = data;

price;
