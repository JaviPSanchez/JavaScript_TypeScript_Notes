'use strict';
/*
Vamos a aprender un nuevo feature para los OBJECTs y los ARRAYS, que se llama OPTIONAL CHAINING.
*/
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
/*
Imaginemos que queremos sacar el OBJECT openingHours de nuestro OBJECT restaurant pero solo los Mondays,
*/
console.log(restaurant.openingHours.mon); //Undefined
/*
Como podemos ver esta propiedad no existe, pero imaginemos que no sabemos si el restaurante abre los lunes, la informacion viene de un web service, una API, que gestiona miles de restaurantes. Imaginemos que queremos saber incluso el horario:
*/
// console.log(restaurant.openingHours.mon.open);
//TypeError: Cannot read property 'open' of undefined
/*
Para evitar este error, primero tenemos que saber si restaurant.openingHours.mon existe:
*/
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); //Undefined
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open); //11
/* Tambien podria pasar que openingHours no exista, restaurant.openingHours, siendo undefined. En este caso tendremos que mirar los dos, openingHours y el dia de la semana, quedando:
 */
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open); //Undefined
//Esto se puede complicar aun mas en NESTED OBJECTS...
/*
A partir de ES2020 se introdujo una solucion, que es OPTIONAL CHAINING ?, si una PROPERTIE no existe entonces undefined es devuelto inmediatamente, basicamente la PROPERTIE que este justo antes del signo ? sera evaluada y solo si existe seguira con la siguiente:
*/
// console.log(restaurant.openingHours.mon.open); //Error
console.log(restaurant.openingHours.mon?.open); //Undefined
// Tambien podriamos tener MULTIPLES OPTIONAL CHAININGs.
/*
En resumidas cuentas con los signos ?, podemos ahorrarnos los LOGICAL OPERATORS y los IF STATEMENTS.

Imaginemos que queremos obtener la informacion de apertura de un restaurante, a partir de un ARRAY obtenido de una API que nos diga los dias que abre de la semana y la hora:
*/
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of weekdays) {
  console.log(day); //mon tue wed thu fri sat sun
  const open = restaurant.openingHours[day]?.open;
  console.log(`On ${day}, we open at ${open}.`);
}
/*
On mon, we open at undefined.
On tue, we open at undefined.
On wed, we open at undefined.
On thu, we open at 12.
On fri, we open at 11.
On sat, we open at 0.
On sun, we open at undefined.
*/
/*
Para terminar de afinar el ejercicio, no queremos obtener los valores undefined, preferimos unos valores DEFAULT closed.
*/
const weekdays2 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of weekdays2) {
  const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`On ${day}, we open at ${open}.`);
}
/*
On mon, we open at closed.
On tue, we open at closed.
On wed, we open at closed.
On thu, we open at 12.
On fri, we open at 11.
On sat, we open at closed. // PROBLEMA CON EL 0!
On sun, we open at closed.
*/
//Para solucionar el FALSY VALUE de 0 usamos el NULLISH COALESCING OPERATOR:
const weekdays3 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of weekdays3) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}.`);
}
/*
On mon, we open at closed.
On tue, we open at closed.
On wed, we open at closed.
On thu, we open at 12.
On fri, we open at 11.
On sat, we open at 0.
On sun, we open at closed.
*/
/*
El OPTIONAL CALLING METHOD tambien funciona con los METHODS, podemos comprobar si un METHOD existe antes de llamarlo.
*/
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // ["Focaccia", "Pasta"]
// O si llamamos a un METHOD que no existe:
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // Method does not exist
/*
Por ultimo decir que OPTIONAL CHAINING funciona tambien con ARRAYS! Podemos comprobar si un ARRAY esta vacia:
*/
const users = [
  {
    name: 'Javi',
    email: 'jp.sanchez@hotmail.es',
    estadoCivil: 'soltero',
  },
];
console.log(users[0]?.name ?? 'User array empty'); // Javi
console.log(users[3]?.name ?? 'User array empty'); // User array empty
/*
Si no habria que escribir:
*/
if (users.length > 0) console.log(users[0].name);
//Javi
else console.log('User array empty');
