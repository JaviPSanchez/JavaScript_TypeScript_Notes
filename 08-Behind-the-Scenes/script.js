'use strict';
/*
//VARIABLES
console.log(me); // undefined (esto puede dar problemas, como llamar a funciones no deseadas, debido a que el valor que adoptara VAR me sera undefined)
console.log(job); //ReferenceError: Cannot access 'job' before initialization
console.log(year); //ReferenceError: Cannot access 'job' before initialization

var me = 'Javi';
let job = 'teacher';
const year = 1987;


//VARIABLES

console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); //ReferenceError: Cannot access 'job' before initialization
console.log(addArrow(2, 3)); // Not a function

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;



console.log(this);
//SIMPLE FUNCTION 
const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this);
};
calcAge(1987);
//ARROW FUNCTION
const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  console.log(this);
};
calcAgeArrow(1987);
*/
//PRIMITIVE TYPES
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);
//REFERENCE TYPES
const singleMelissa = {
  firstName: 'Melissa',
  lastName: 'Boyer',
  age: 27,
};
const marriedMelissa = singleMelissa;
marriedMelissa.lastName = 'Palomino-Sanchez';
console.log('Before marriage:', singleMelissa);
console.log('After marriage:', marriedMelissa);

// marriedMelissa = {}, // No esta permitido

//COPYING TYPES
const singleMelissa2 = {
  firstName: 'Melissa',
  lastName: 'Boyer',
  age: 27,
  family: ['Gabriel', 'Javier'], // Array que estara en los dos OBJECTS
};
Object.assign({}, singleMelissa2); //Con el .assign lo que hacemos es juntar dos OBJECTS en uno,
const marriedMelissaCopy = Object.assign({}, singleMelissa2);
marriedMelissaCopy.lastName = 'Palomino-Sanchez';

console.log('Before marriage:', singleMelissa2);
console.log('After marriage:', marriedMelissaCopy);

marriedMelissaCopy.family.push('Napoleon');
marriedMelissaCopy.family.push('Sofia');
