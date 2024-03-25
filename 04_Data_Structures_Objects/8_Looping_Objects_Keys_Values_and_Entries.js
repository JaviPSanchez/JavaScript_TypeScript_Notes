"use strict";

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

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
};

/*
Hemos aprendido el FOR OF LOOP para hacer un bucle de ARRAYS, el cual es ITERABLE, pero podemos tambien hacer bucles de OBJECTS que no son ITERABLES de forma indirecta.

Tenemos varias opciones dependiendo de que queremos buclear.

Si queremos hacer un bucle de:
1: KEYS
2: VALUES
3: BOTH: KEYS + VALUES
 OBJECTS o de PROPERTIES NAMES over the VALUES o si queremos hacerlo de los dos a la vez:

//////LOOPING OVER PROPERTY NAMES (KEYS)////////

No vamos a hacer el bucle sobre el OBJECT itself sino que lo haremos de una forma indirecta, vamos a hacer el bucle a un ARRAY:
*/
for (const day of Object.keys(openingHours)) {
  console.log(day); //thu fri sat
}
//Obtenemos los tres keys names del OBJECT OPENINGHOURS.
/*
el Object.keys es simplemente un ARRAY con 3 PROPERTIES NAMES
*/
const properties = Object.keys(openingHours);
console.log(properties); //["thu", "fri", "sat"]
/*
Podemos usar este ARRAY para calcular el numero de PROPERTIES que hay dentro del OBJECT.

Imaginemos que queremos ver cuantos dias el restaurante esta abierto con un STRING:
*/
console.log(`We are open on ${properties.length} days per week`); //We are open on 3 days per week
/*
Ahora usaremos el LOOP para construir un STRING con las PROPERTIES NAMES:
*/
let openString = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openString += `${day}, `;
}
console.log(openString); //We are open on 3 days: thu, fri, sat,

//Que pasaria si quisieramos los VALUES de las PROPERTIES, pues habria que utilizar Object.values

///////PROPERTIES VALUES//////
const values = Object.values(openingHours);
console.log(values);

/*
0: {open: 12, close: 22}
1: {open: 11, close: 23}
2: {open: 0, close: 24}
*/
/*
Para realmente simular el bucle de todo el OBJECT necesitariamos los ENTRIES, que son los KEY mas los VALUES juntos.
*/

//Entire OBJECT
const entries = Object.entries(openingHours);
console.log(entries);
/*
[Array(2), Array(2), Array(2)] // Cada uno de los ARRAYS tiene su KEY y VALUE
0: "thu" // KEY 
1: {open: 12, close: 22} // VALUE
0: "fri"
1: {open: 11, close: 23}
0: "sat"
1: {open: 0, close: 24}
*/
//Podemos usar esto para basicamente hacer el loop de nuestro OBJECT:

for (const x of entries) {
  console.log(x);
}
//Obteniendo each KEY and each VALUE
/*
0: "thu" //KEY 
1: close: 22, open: 12 // VALUE
0: "fri"
1:
close: 23
open: 11
0: "sat"
1:
close: 24
open: 0
 */

// el value al ser un OBJECT podemos destructurarlo en {open, close}, lo cual es necesario para tener una STRING "limpia".
for (const [key, value] of entries) {
  // console.log(`On ${key} we open at ${open} and close at ${close}`);
}
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
//Obteniendo las STRINGS limpias:
/*
On thu we open at 12 and close at 22
On fri we open at 11 and close at 23
On sat we open at 0 and close at 24
 */

/*
To remove a key in an object we use the “delete” keyword and it mutates the original object.

But mostly we don’t want to mutate the original object we can use the power of spread operator
to get the rest of the values into new object what we get is all the values except the key
which we provided not to include in new object.

Si queremos borrar una key de un Object sin mutar:
*/

const ventasBmw = { serie2: 235, serie1: 45, x3: 34, m2: 56, m3: 23 };
const ventasBmwMutate = { serie2: 235, serie1: 45, x3: 34, m2: 56, m3: 23 };

const removeKey = (key, object) => {
  const { [key]: ommited, ...rest } = object;
  return rest;
};

//Mutating

const removeKeyMutating = (key, object) => {
  delete object[key];
  return object;
};

const newVentasBmw = removeKey("serie1", ventasBmw);
const mutateVentasBmw = removeKeyMutating("serie1", ventasBmwMutate);

console.log(newVentasBmw);

console.log(ventasBmw);
console.log(ventasBmwMutate);

/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
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
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
*/
//LOOP OVER ARRAY game.scored
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}.`);
/*
/*
2. Use a loop to calculate the average odd and log it to the console.
*/
//LOOP OVER OBJECT :VALUES
const odds = Object.values(game.odds);
console.log(odds); // ARRAY [1.33, 3.25, 6.5]
let average = 0;
for (const odd of odds) average += odd; //  average = average + odd --> (0 + 1.33 + 0 + 3.25 + 0 + 6.5)
console.log(average); // 11.08
console.log(odds.length); // 3
average /= odds.length; // average = average / 3
console.log(average); //
/*
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw").
Hint: Note how the odds and the game objects have the same property names.
*/
//LOOP OVER OBJECT :ENTIRE OBJECT
for (const formatted of Object.entries(game.odds)) console.log(formatted);
/*
["team1", 1.33]
["x", 3.25]
["team2", 6.5]
*/
for (const [team, odd] of Object.entries(game.odds)) console.log(team, odd);
/*
team1 1.33
x 3.25
team2 6.5
*/
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(`Odd of victory ${team}: ${odd}`);
}
/*
Odd of victory team1: 1.33
Odd of victory x: 3.25
Odd of victory team2: 6.5
*/
for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === "x" ? "draw" : "victory";
  console.log(`Odd of ${teamString}: ${odd}`);
}
/*
Odd of victory : 1.33
Odd of draw: 3.25
Odd of victory : 6.5
*/
for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamString}: ${odd}`);
}
/*
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
*/
/*
NOTA!!! De donde coño sale el game[team] o mejor dicho, porque funciona, si las PROPERTIES team1 y team2 no se llaman team?
Because we want to access properties team1 & team2 inside the game object. Since we can't use the dot . notation to access the properties, we use the [] notation to access them. If you try to use dot notation, you'll get undefined because game.team command will try  to find property team and won't be found because we didn't define it inside game object, thus it will return undefined.
*/
/*
4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/

const person = {
  name: "javier",
  age: 36,
  gender: "male",
};

const jobObject = {
  job: "CTO",
  salary: "80000",
};

const finalObject = Object.assign(person, jobObject);
console.log(finalObject);
