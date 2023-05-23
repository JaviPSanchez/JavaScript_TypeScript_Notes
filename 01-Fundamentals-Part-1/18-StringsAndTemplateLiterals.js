/*
LECTURE: Strings and Template Literals
*/
// Templeate Literals --> Cuando queremos crear frases largas es bastante incomodo tener en cuenta todos los espacios, por ello a partir de ES6 debemos utilizar los backtips `` y el ${}. Mucho mas limpio y sencillo!

const firstName = "Javi";
const job = "Digital Manager";
const birthYear = 1987;
const year = 2021;
// const frase = "I'm " + firstName + ", a " + (year - birthYear) + "years old" + job + "!";
// console.log(frase);
const fraseLiterals = `I'm ${firstName}, a ${
  year - birthYear
} years old ${job}!`;
console.log(fraseLiterals);

// Template Literals permite cambiar de linea facilmente presionando la tecla return, las versiones anteriores a ES6 habia que escribir \n\.

console.log("String with \n\
multiple \n\
lines");
console.log(`String with
multiple
lines`);

// 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax
let population = 66;
const language = "Spanish";
const country = "Spain";
const continent = "Europe";
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population <= 33);
const description = `${country} is in ${continent}, and its 11 million people speak ${language}`;
console.log(description);
