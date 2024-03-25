/*
**********************OBJECT METHODS****************************


En esta seccion podemos ver como meter funciones dentro de nuestros objetos, llamandose METHODS, no obstante solo podemos meter EXPRESSIONS y no DECLARATIONS.

Dentro de nuestros OBJECTS podemos meter VALUES, ya sean STRINGS, NUMBERS, BOOLEANS, ARRAYS o FUNCTIONS.

*/
const javi = {
  firstName: "Javi", //STRING VALUE
  lastName: "Palomino",
  birthYear: 1987, //NUMBER VALUE
  job: "Digital Expert",
  friends: ["Meli", "Guille", "Pepe"], //ARRAY VALUE
  hasDriverLicense: true,

  // calcAge: function (birthYear) {  // Forma normal de hacerlo
  //     return 2021 - birthYear;
  // }

  // calcAge: function () {  // Metemos el this, con el this ya se sabe que es el key birthYear.
  //     return 2021 - this.birthYear;
  // }

  calcAge: function () {
    //FUNCTION VALUE // ademas del this, vamos a dejar aun mas eficiente el codigo,
    this.age = 2021 - this.birthYear;
    return this.age;
  },
};

// NOTA IMPORTANTE!!! Para no repetirnos con las cifras (como el año de nacimiento en este caso 1987) utilizamos la propiedad "this" que basicamente hace referencia al key birthYear.

console.log(javi.calcAge()); // Al utilizar la propiedad this, no hace falta meter el valor, ya esta plasmado en el key birthYear de nuestro OBJECT.
console.log(javi["calcAge"]());

//Forma eficiente de llamar el key value function calcAge, basicamente buscamos reducir codigo, en vez de escribir toda la retaila de calcAge(1987), directamente metemos el .DOT

console.log(javi.age);

const javi2 = {
  firstName: "Javi", //STRING VALUE
  lastName: "Palomino",
  birthYear: 1987, //NUMBER VALUE
  job: "Digital Expert",
  friends: ["Meli", "Guille", "Pepe"], //ARRAY VALUE
  hasDriverLicense: true,

  calcAge: function () {
    //FUNCTION VALUE // ademas del this, podemos dejar aun mas eficiente el codigo,
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} drivers license.`;
  }, // Con la propiedad TERNARIA podemos en funcion del key hasDriverLicense dar un valor u otro.
};
console.log(javi2.calcAge()); // Una forma de llamar a la function calcAge
console.log(javi2.age); // La version optimizada apoyandonos en la propiedad .DOT
console.log(javi2.getSummary());
/*

LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property
*/
const myCountry = {
  country: "Spain",
  capital: "Madrid",
  language: "Spanish",
  population: 40,
  neighbours: ["Portugal", "France"],
  isIsland: false,
  checkIsland: function () {
    return `${this.isIsland ? "it's an Island." : "it isn't an Island."}`;
  },
  describe: function () {
    return console.log(
      `${this.country} has ${
        this.population
      } million finnish-speaking people, ${
        this.neighbours.length
      } neighbouring countries and a capital called ${this.capital}. ${
        this.country
      } ${this.checkIsland()}`
    );
  },
};
myCountry.describe();
