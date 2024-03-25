"use strict";

import { restaurant, data } from "../03_Data_Structures_Arrays/assets";

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
  time: "20:00",
  address: "5 Rue Marie Guerlais",
  mainIndex: 2,
  starterIndex: 2,
});

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((book) => book.id === id);
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

("use strict");
/*
CODING CHALLENGE #1
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2') //DESTRUCTURING//
*/
const [players1, players2] = game.players;
console.log(players1); // ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"]
console.log(players2); // ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"]

/*
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players.//REST PATTERN//
*/
const [gk, ...fieldPlayers] = players1;
console.log(gk); // Neuer
console.log(fieldPlayers); // ["Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"]
/*
3. Create an array 'allPlayers' containing all players of both teams (22
players) //SPREAD OPERATOR//
*/
const allPlayers = [...players1, ...players2];
console.log(allPlayers); //["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski", "Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"]
/*
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic' // UNPACKING//
*/
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final); //["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski", "Thiago", "Coutinho", "Perisic"]
/*
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2') //NESTED DESTRUCTURING//
*/
const { team1, x: draw, team2 } = game.odds;
//Tambien podriamos meter el .odds en el lado izquierdo:
//const {odds: {team1, x: draw, team2} } = game;
console.log(team1); //1.33
console.log(draw); //3.25
console.log(team2); //6.5
/*
/*
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) (Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
*/
//REST PARAMETER como ARGUMENT, transformara todos los incoming ARGUMENTS en un ARRAY
const printGoals = function (...players) {
  console.log(players); //"Lewandowski", "Gnarby", "Lewandowski", "Hummels"
  console.log(`${players.length} goals were scored.`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich"); //4 goals were scored.
printGoals(
  "Davies",
  "Muller",
  "Lewandowski",
  "Kimmich",
  "Akanji",
  "Hakimi",
  "Weigl",
  "Witsel",
  "Hazard",
  "Brandt"
); //10 goals were scored.
printGoals(...game.scored); //4 goals were scored.

/*
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator. //LOGICAL OPERATOR//
*/
team1 < team2 && console.log("Team1 is more likely to win.");
team1 > team2 && console.log("Team2 is more likely to win.");
/*
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/
