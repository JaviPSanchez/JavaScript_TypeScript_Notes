/*
************DOT VS BRACKET NOTATION*************


Para poder obtener los datos de un object utilizamos los DOT . o BRACKET NOTATION [], con los brackets podemos utilizar cualquier expresion con palabras repetidas:
*/
const user = {
  firstName: "Javi",
  lastName: "Palomino",
  age: 2021 - 1987,
  job: "Digital Expert",
  friends: ["Meli", "Guille", "Pepe"],
};

console.log(javi.lastName); // Solo podemos acceder a lastName, que sera "Palomino".
console.log(javi["lastName"]); //Podemos acceder a todas las propiedades que contengan el string 'Name' y guardarlo en una variable:

const nameKey = "Name";

console.log(javi["first" + nameKey]); // el resultado es Javi Palomino.
console.log(javi["last" + nameKey]);

/*
Podriamos incluso mediante un prompt preguntar que info buscamos y enlazarla a la respuesta gracias a los brackets:
*/
const javi = {
  firstName: "Javi",
  lastName: "Palomino",
  age: 2021 - 1987,
  job: "Digital Expert",
  friends: ["Meli", "Guille", "Pepe"],
};

const interestedIn = prompt(
  "Que informacion te interesa? firstName, lastName, age, job or friends?"
);
console.log(javi[interestedIn]); //al introducir un dato, automaticamente nos devolvera el valor asociado, si es la edad, sera el resultado 34.

// Si el valor que nos devuelve es undefined, es porque esa propertie no existe en nuestro objeto. Podemos servirnos de los statements if/else:

if (javi[interestedIn]) {
  console.log(javi[interestedIn]);
} else {
  console.log(
    "Wrong parameter! choose between firstName, lastName, age, and friends."
  );
}
/*
LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation
*/
const myCountry = {
  country: "Spain",
  capital: "Madrid",
  language: "Spanish",
  population: "40",
  neighbours: ["Portugal", "France"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
myCountry.population = 40 + 2;
console.log(myCountry.population);
myCountry["population"] = 40 - 2;
console.log(myCountry.population);
