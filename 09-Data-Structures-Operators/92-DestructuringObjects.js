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
  orderDelivery: function ({
    starterIndex = 1, // Default
    mainIndex = 0, // Default
    time = '20:00', // Default
    address, // Default
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
/*
En vez de utilizar square brackets [], utilizaremos curly brackets {} to destrocture, all we have to provide is the VARIABLE NAMES that exactly match the PROPERTY NAMES from the OBJECT.

En un OBJECT el orden de sus elementos no es importante como pasaba con los ARRAYS, por ello no hace falta saltarse elementos.
*/
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} ["Italian", "Pizzeria", "Vegetarian", "Organic"]
/*
Utilizar bien estas herramientas es muy muy util, puesto que cuando obtenemos iunformacion de otras APIs normalmente vinen en formato OBJECT.

Si queremos cambiar las VARIABLES NAMES de las PROPERTIES NAMES basta con utilizar los dos puntos en las VARIABLES NAMES,
*/
const {
  name: restaurantsName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantsName, hours, tags); //Classico Italiano {thu: {…}, fri: {…}, sat: {…}}  ["Italian", "Pizzeria", "Vegetarian", "Organic"]
/*
Other useful tool when using third-party data from somewhere else, for exemple an API call, is to have default values [] for a property that does not exist on the object. We usually get undefined, for exemple if we search the property .menu from the restaurant OBJECT, it wouldn't fint it.
*/
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); //[] ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]
/*
En el ejemplo anterior en vez de tener undefined tendremos un ARRAY EMPTY. Esto es util de tener DEFAULTS cuando recibimos data from other sites which we don't even know how it looks like, rara vez tendremos HARD-CODED in our app como el OBJECT restaurant.

El proximo paso es hablar de MUTATING VARIABLES while DESTRUCTURING OBJECTS, it works differently  than in ARRAYS, imaging that we want to override two VARIABLES a and b:
*/
let a = 256;
let b = 693;
const obj = { a: 3, b: 7, c: 56 };
({ a, b } = obj); // OJO AQUI! si no ponemos los parentesis sale Syntax error.
console.log(a, b); // 3 7 en vez de 256 693;
/*
Pasamos a NESTED OBJECTS, podemos ver como openingHours es un OBJECT y dentro de este otros OBJECTS como fri, sat y thu que a su vez estan todos dentro del OBJECT restaurant.
*/
const { fri } = restaurant.openingHours;
console.log(fri); // {open: 11, close: 23} But we want two VARIABLEs, one called open and the other close:
/*
const { open, close } = fri;
console.log(open, close); // 11 23
*/
// O mejor aun:

const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close); // 11 23

// O hilar mas fino y reasignar el nombre de las VARIABLES:

const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c); // 11 23
/*
Una herramienta muy util seria utilizar una funcion como METHOD donde podamos meter la informacion de un OBJECT externo, utilizaremos un nuevo METHOD en nuestro OBJECT restaurant llamado orderDelivery, siendo su elemento una FUNCTION con varios argumentos. Si alguno de los siguientes METHODs no concuerda con los de la FUNCTION orderDelivery, no pasa nada, se quedarian los valores pord DEFAULT.
*/
restaurant.orderDelivery({
  time: '20:00',
  address: '5 Rue Marie Guerlais',
  mainIndex: 2,
  starterIndex: 2,
});
