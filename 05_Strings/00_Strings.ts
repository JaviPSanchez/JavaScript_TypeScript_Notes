"use strict";

/*
😎 Strings:

21. Reverse a string.
22. Check if a string is a palindrome.
23. Check if two strings are anagrams of each other.
24. Compress a string by counting consecutive characters.
25. Capitalize the first letter of each word in a sentence.
26. Determine if one string is a rotation of another.
27. Generate all permutations of a string.
28. Truncate a string to a specified length and add ellipsis if necessary.
29. Validate if a string contains only valid characters (e.g., alphanumeric).
30. Count the number of occurrences of a substring in a larger string.

*/

/**
 *
 * Con los Strings no existe el concepto de immutabilidad, son primitivas.
 *
 *
 * 1️⃣ .length()
 * 2️⃣ .toLowerCase()
 * 3️⃣ .toUpperCase()
 * 4️⃣ .indexof()
 * 5️⃣ .lastIndexOf
 * 6️⃣ .slice(inicio, final)
 * 7️⃣ .trim()
 * 8️⃣ .replace()
 * 9️⃣ .replaceAll()
 * 1️⃣0️⃣ .includes()
 * 1️⃣1️⃣ .startsWith()
 * 1️⃣2️⃣ .split()
 * 1️⃣3️⃣ .join()
 * 1️⃣4️⃣ .padStart()
 * 1️⃣5️⃣ .padEnd()
 * 1️⃣6️⃣ .repeat()
 * 1️⃣7️⃣ .substring()
 * 1️⃣8️⃣ .at()
 * 1️⃣9️⃣
 * 2️⃣0️⃣
 *
 *
 */
const airline = "Iberia Airlines";
const plane = "A320";

console.log(plane[0]); //"A"
console.log(plane[1]); //3
console.log(plane[3]); //0
console.log(plane[4]); //undefined
console.log("B737"[0]); //"B"

/**
 * 1️⃣ .length()
 */
console.log(airline.length); //15
console.log("B737".length); //4

/**
 * 2️⃣ .toLowerCase()
 * 3️⃣ .toUpperCase()
 */

console.log(airline.toLowerCase()); //iberia airlines
console.log(airline.toUpperCase()); //IBERIA AIRLINES
console.log("javier".toUpperCase()); //JAVIER

/**
 * 4️⃣ .indexof()
 * 5️⃣ .lastIndexOf
 */
console.log(airline.indexOf("r")); //3
console.log(airline.indexOf("i")); //4 La primera que encuentra
console.log(airline.lastIndexOf("i")); //11 Nos da la ultima
//Podemos buscar palabras enteras:
console.log(airline.indexOf("Airlines")); //7
console.log(airline.indexOf("airline")); //-1 No la encuentra

/**
 * 6️⃣ .slice(inicio, final) 👉 Podemos extraer una parte de un string
 */
console.log(airline.slice(4)); //"ia Airlines"
console.log(airline.slice(7)); // "Airlines"
console.log(airline.slice(4, 7)); //" ia"
console.log(airline.slice(7, 10)); //"Air"
console.log(airline.slice(0, airline.indexOf(" "))); //"Iberia"
console.log(airline.slice(airline.indexOf(" "), airline.lastIndexOf())); //" Airline"

//  El problema es que nos inluye el espacio, se soluciona con el +1

const airline2 = "Vueling Flight235";
console.log(airline2.length);
console.log(airline2.indexOf(" ") + 1);
console.log(airline2.indexOf("F"));
console.log(airline2.indexOf("F") + 1);
console.log(airline2.slice(airline2.indexOf(" ") + 1, airline2.lastIndexOf()));

// Puede empezar a contar desde el final:

console.log(airline2.slice(-2));
console.log(airline2.slice(1, -1));

const passengerName = function (name) {
  const passengerNameTransforLowerCase = name.toLowerCase();
  const passengerNameTransform =
    name[0].toUpperCase() + passengerNameTransforLowerCase.slice(1);
  return console.log(passengerNameTransform);
};
passengerName("melissa"); // Melissa
passengerName("GaBriEl"); //Gabriel
passengerName("NAPOLEOn"); //Napoleon

/*
Ejemplo BONUS, imaginemos que queremos comprobar todos los nombres dentro de
un ARRAY en vez de llamar todo el rato a la funcion commo en el caso anterior
*/

let nameCorrect, characterLow;

const caseCorrection = function (character) {
  characterLow = character.toLowerCase();
  const correction = (nameCorrect =
    characterLow[0].toUpperCase() + characterLow.slice(1));
  return console.log(correction); // Peter, Heidi, Pietro, Bert
};

caseCorrection("PETer");

const namesToCorrect = ["HEIdi", "pIEtRo", "BERt"];
for (const Name of namesToCorrect) {
  caseCorrection(Name);
}

//Otro ejemplo util, seria comparar los inputs que meten los usuarios en su info de email

const email = "jp.sanchez@hotmail.es";
const loginEmail = "  Jp.sanchEz@hotmail.es \n";

const lowerCapitalEmail = loginEmail.toLowerCase();
console.log(lowerCapitalEmail);

/**
 * 7️⃣ .trim()
 */
const trimmedEmail = lowerCapitalEmail.trim();
console.log(trimmedEmail);
console.log(trimmedEmail.length);
const rightEmail = loginEmail.toLowerCase().trim();
console.log(rightEmail);

/**
 * .replace() Solo cambia la primera ocurrencia
 */
const priceGB = "256,58£";
const priceUS = "256,58$";
const transformCurrency = priceGB.replace("£", "$").replace(",", ".");
console.log(transformCurrency);
const announcement =
  "All passangers come to boarding door 25. Boarding door 3!";
console.log(announcement.replace("door", "gate"));
/**
 * 9️⃣ .replaceAll()
 */
console.log(announcement.replaceAll("door", "gate"));

/**
 * 1️⃣0️⃣ .includes()
 */

const array4 = [];
const plane2 = "A320neo";
console.log(plane2.includes("A320"));
console.log(plane2.includes("A330"));

const checkBagage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun"))
    console.log("Your are NOT allowed on board");
  else {
    console.log("Welcome aboard!");
  }
};

checkBagage("I have a laptop, some Food and a pocket Knife");
checkBagage("Socks and camera");
checkBagage("Got some snacks and a gun for protection");

/**
 * 1️⃣1️⃣ .startsWith()
 */
//START WITH
console.log(plane2.startsWith("Air")); //false
console.log(plane2.startsWith("A")); //true

/**
 * 1️⃣2️⃣ .split() dividir un STRING en multiples STRINGS, devuelve un array
 */

console.log("javier+palomino+sanchez".split("+"));
console.log("javier palomino sanchez".split(" "));
const [firstName, lastName, secondLastName] = "javier palomino sanchez".split(
  " "
);
console.log(firstName, lastName, secondLastName);

/**
 * 1️⃣3️⃣ .join()
 */
const rejoint = [firstName, lastName, secondLastName].join(" ");
console.log(rejoint);
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName); //Mr. javier PALOMINO

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("ana alida maria"); //Ana Alida Maria
capitalizeName("javier palomino"); //Javier Palomino
/**
 * 1️⃣4️⃣ .padStart() significa añadir un numero de caracteres al STRING hasta que este alcance un tamaño determinado.
 * 1️⃣5️⃣ .padEnd()
 */

const message = "Go to the Moon";
console.log(message.padStart(25, "+"));
console.log(message.padEnd(25, "!"));

const maskCreditCard = function (number) {
  const string = number + "";
  const last = string.slice(-4);
  return last.padStart(string.length, "*");
};

console.log(maskCreditCard(6556589455645645));
console.log(maskCreditCard("6556589455645645"));

/**
 * 1️⃣6️⃣ .repeat()
 */
const message2 = "Bad weather...All departures delayed...";
console.log(message2.repeat(3));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
};
planesInLine(3); //There are 3 planes in line ✈✈✈
planesInLine(5); //There are 5 planes in line ✈✈✈✈✈
planesInLine(10); //There are 10 planes in line ✈✈✈✈✈✈✈✈✈✈

/**
 * 1️⃣7️⃣ .substring() Nos dará todos los carecteres dentro de un rango (start, end)
 */

const text = "Marianito";
console.log(text.substring(0));
console.log(text.substring(0, 2));
console.log(text.substring(0, 10));
const KeyPhrase = "Create a file";
const phrase = "Create a file and some more text";
console.log(phrase.substring(KeyPhrase.length + 1));

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
/*
🔴 Delayed Departure from FAO to TXL (11h25)
  Arrival from BRU to FAO (11h45)
🔴 Delayed Arrival from HEL to FAO (12h05)
  Departure from FAO to LIS (12h30)
*/
//Divimos obteniendo un ARRAY
const divide = flights.split("+");
console.log(divide);

const getCode = (str) => str.toUpperCase().slice(0, 3);

for (const n of divide) {
  const [type, from, to, time] = n.split(";");
  const output = `${type.startsWith("_Delayed") ? "💥" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(55); //Hemos puesto 55 de forma aleatoria, es el valor que consigue alinear las horas...
  console.log(output);
}
