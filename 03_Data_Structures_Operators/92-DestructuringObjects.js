'use strict';

import { restaurant, data } from './assets';

/*
En vez de utilizar square brackets [], utilizaremos curly brackets {}

All we have to provide is the VARIABLE NAMES that exactly match the PROPERTY NAMES from the OBJECT.

En un OBJECT el orden de sus elementos no es importante como pasaba con los ARRAYS
*/

const { name, openingHours, categories } = restaurant;
name;
openingHours;
categories;

/*
Utilizar bien estas herramientas es muy muy util,
puesto que cuando obtenemos informacion de otras APIs normalmente vinen en formato OBJECT.

Si queremos cambiar las VARIABLES NAMES de las PROPERTIES NAMES basta con utilizar los dos puntos en las
VARIABLES NAMES
*/

const {
  name: restaurantsName,
  openingHours: hours,
  categories: tags,
} = restaurant;

restaurantsName;
hours;
tags;

/*
Other useful tool when using third-party data from somewhere else, for exemple an API call,
is to have default values [] for a property that does not exist on the object.

We usually get undefined, for exemple if we search the property .menu from the restaurant OBJECT, it wouldn't fint it.
*/

const { menu = [], starterMenu: starters = [] } = restaurant;
menu;
starters;

/*
En el ejemplo anterior en vez de tener undefined tendremos un ARRAY EMPTY.
Esto es util de tener DEFAULTS cuando recibimos data from other sites which we don't even know how it looks like,
rara vez tendremos HARD-CODED in our app como el OBJECT restaurant.

El proximo paso es hablar de MUTATING VARIABLES while DESTRUCTURING OBJECTS, it works differently than in ARRAYS,
imaging that we want to override two VARIABLES a and b:
*/
let a = 256;
let b = 693;
const obj = { a: 3, b: 7, c: 56 };
({ a, b } = obj); // OJO AQUI! si no ponemos los parentesis sale Syntax error.

a;
b;

/*
Pasamos a NESTED OBJECTS, podemos ver como openingHours es un OBJECT y dentro de este otros OBJECTS como fri, sat y thu que a su vez estan todos dentro del OBJECT restaurant.
*/

const { fri } = restaurant.openingHours;
fri;

/*
const { open, close } = fri;
console.log(open, close); // 11 23
*/

// O mejor aun:

const {
  fri: { open, close },
} = restaurant.openingHours;

open;
close;

// O hilar mas fino y reasignar el nombre de las VARIABLES:

const {
  fri: { open: o, close: c },
} = restaurant.openingHours;

o;
c;

/*
Una herramienta muy util seria utilizar una funcion como METHOD donde podamos
meter la informacion de un OBJECT externo, utilizaremos un nuevo METHOD en nuestro OBJECT
restaurant llamado orderDelivery, siendo su elemento una FUNCTION con varios argumentos.
Si alguno de los siguientes METHODs no concuerda con los de la FUNCTION orderDelivery,
no pasa nada, se quedarian los valores pord DEFAULT.
*/

restaurant.order({
  time: '20:00',
  address: '5 Rue Marie Guerlais',
  mainIndex: 2,
  starterIndex: 2,
});

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find(book => book.id === id);
}

const books = getBooks();
books;

const book = getBook(2);
book;

// const title = book.title;
// const author = book.author;
// title
// author

// Puede ser más interesante usar el Object Destructuring:

const {
  title,
  author,
  pages,
  publicationDate,
  genres,
  hasMovieAdaptation,
  reviews,
} = book;
title;
author;
pages;
publicationDate;
genres;
hasMovieAdaptation;
reviews;

//Si queremos acceder al Array:

// const primaryGenre = genres[0]
// const secondaryGenre = genres[1]
// primaryGenre
// secondaryGenre

//Definimos un Array:

const [primaryGenre, secondaryGenre] = genres;
primaryGenre;
secondaryGenre;

//No funcionaria:

const { firstReview, secondReview } = reviews;
firstReview;
secondReview;

console.log(reviews[0]);
console.log(reviews.goodreads);

const { goodreads, librarything } = reviews;
goodreads;
librarything;

// const { rating, ratingsCount, reviewsCount } = reviews[0];
// rating
// ratingsCount
// reviewsCount

//Tenemos que respetar el tipo de estructura, si es un Object o un Array

// const [rating, ratingsCount, reviewsCount] = goodreads
// rating
// ratingsCounts
// reviewsCount

const { rating, ratingsCount, reviewsCount } = goodreads;
rating;
ratingsCount;
reviewsCount;
