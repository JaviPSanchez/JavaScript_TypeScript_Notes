'use strict';
/*
Ultima parte de los STRINGS!!!

*******************SPLIT METHOD******************

//METHOD para dividir un STRING en multiples STRINGS, simplemente hay que utilizar el METHOD .split y definir un devider string.
*/

console.log('javier+palomino+sanchez'.split('+')); //["javier", "palomino", "sanchez"]
console.log('javier palomino sanchez'.split(' ')); //["javier", "palomino", "sanchez"]

//Podemos ayudarnos del poder de DESTRUCTURING y crear dos ARRAYS con la info proveniente de un STRING.

const [firstName, lastName] = 'javier palomino sanchez'.split(' ');
//No utilizamos el SLICE METHOD por ser mas complicado para frases largas como esta
/*

***********JOINT METHOD***************

Imaginemos que queremos poner Upper Case y añadir Mister al inicio,
Usamos el joint METHOD con un DIVIDER, lo que hara este METHOD es unir todo el ARRAY
*/
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); //Mr. javier PALOMINO
//La convinacion de SPLIT + JOIN es algo realmente poderoso y util.

//En el siguiente ejemplo crearemos una funcion que capitaliza la primera letra de varios nombres, lo primero que debemos hacer es pasar un ARRAY para poder LOOPEAR y que vaya convirtiendo la primera letra en capital letter.

const capitalizeName = function (name) {
  const names = name.split(' '); //["ana", "alida", "maria"]
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1)); // Ahora habra que meter todo esto en un nuevo ARRAY con el PUSH METHOD
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('ana alida maria'); //Ana Alida Maria
capitalizeName('javier palomino'); //Javier Palomino

//Habria otra forma de hacer lo mismo problema pero con el METHOD REPLACE:

const capitalizeName2 = function (name2) {
  const names2 = name.split(' '); //["ana", "alida", "maria"]
  const namesUpper2 = [];
  for (const n2 of names2) {
    namesUpper2.push(n2.replace(n2[0], n2[0].toUpperCase()));
  }
  console.log(namesUpper2.join(' '));
};

capitalizeName2('ana alida maria'); //Ana Alida Maria
capitalizeName2('javier palomino'); //Javier Palomino

/*
PADDING
En el siguiente ejemplo veremos el padding un STRING, significa añadir un numero de caracteres al STRING hasta que este alcance un tamaño determinado.
*/
const message = 'Go to the Moon';
console.log(message.padStart(25, '+')); //+++++++++++Go to the Moon
console.log(message.padEnd(25, '!')); //Go to the Moon!!!!!!!!!!!

//Hay un ejemplo muy comun con el PADDING, cuando vemos el numero de una tarjeta de credito, no solemos ver el numero entero, normalmente vemos solo ciertos digitos, con pADDING podemos conseguir esto:

const maskCreditCard = function (number) {
  const string = number + ''; // Con el signo +, cuando uno de los operadores es un STRING, el resultado sera un STRING
  const last = string.slice(-4);
  return last.padStart(string.length, '*');
};

console.log(maskCreditCard(6556589455645645)); //************5645
console.log(maskCreditCard('6556589455645645')); //************5645

//El ultimo METHOD que vamos a ver es el REPEAT
const message2 = 'Bad weather...All departures delayed...';
console.log(message2.repeat(3)); //Bad weather...All departures delayed...Bad weather...All departures delayed...Bad weather...All departures delayed...

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(3); //There are 3 planes in line ✈✈✈
planesInLine(5); //There are 5 planes in line ✈✈✈✈✈
planesInLine(10); //There are 10 planes in line ✈✈✈✈✈✈✈✈✈✈
