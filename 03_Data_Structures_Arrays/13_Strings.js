'use strict';

/*
En este caso trabajaremos con compañias aéreas en vez de un restaurante:
*/
const airline = 'Iberia Airlines';
const plane = 'A320';

//Como en las ARRAYs podemos obtener un caracter determinado de estos STRINGS:

console.log(plane[0]); //"A"
console.log(plane[1]); //3
console.log(plane[3]); //0
console.log(plane[4]); //undefined

//Podemos hacerlo directamente sin necesidad de definir la variable:

console.log('B737'[0]); //"B"

//Podemos obtener su longitud directamente:

console.log(airline.length); //15
console.log('B737'.length); //4

/*Ahora hablemos de METHODS, vamos a comparar los STRINGS con los ARRAYS, los STRINGS tambien tienen METHODS,siendo similares a los de sus primos los ARRAYS.
 */
//Index OF: encontrar la posicion de una letra en particular:
console.log(airline.indexOf('r')); //3
//Si necesitamos la ultima instancia
console.log(airline.indexOf('i')); //4 La primera que encuentra
console.log(airline.lastIndexOf('i')); //11 Nos da la ultima
//Podemos buscar palabras enteras:
console.log(airline.indexOf('Airlines')); //7
console.log(airline.indexOf('airline')); //-1 No la encuentra

// Que podemos hacer con estos indexes?, podemos extraer una parte de un string usando el METHOD SLICE, el cual necesita indexes como argumentos
console.log(airline.slice(4)); //"ia Airlines"
console.log(airline.slice(7)); // "Airlines"
/*
El resultado de este metodo, en nuestro caso "ia Airlines" se le conoce como SUBSTRING,
es un parte de otra STRING, cabe decir que no es posible cambiar STRINGS, esto es, mutate STRINGS, es imposible, son primitivas.

Si quisiesemos usar el resultado habria que guardarla en una variable o un DATA STRUCTURE

Todos los metodos devuelven un nuevo STRING

Tambien podemos especificar un end parameter, JS realizara la operacion de 7-4 = 3 caracteres, la length.
*/
console.log(airline.slice(4, 7)); //" ia"
console.log(airline.slice(7, 10)); //"Air"

//Hasta ahora hemos HARDCODED estos VALUES, pero a veces no sabemos ni siquiera el STRING que recibimos, podemos intentar extraer la primera palabra de la VARIABLE airline sin conocer ninguno de sus indexes:

console.log(airline.slice(0, airline.indexOf(' '))); //"Iberia"
console.log(airline.slice(airline.indexOf(' '), airline.lastIndexOf())); //" Airline"

//  El problema es que nos inluye el espacio, se soluciona con el +1

const airline2 = 'Vueling Flight235';
console.log(airline2.length); // 17
console.log(airline2.indexOf(' ') + 1); // 8
console.log(airline2.indexOf('F')); // 8
console.log(airline2.indexOf('F') + 1); // 9

console.log(airline2.slice(airline2.indexOf(' ') + 1, airline2.lastIndexOf())); //"Fligh23"

// Puede empezar a contar desde el final:

console.log(airline2.slice(-2)); // 35

//Podemos cortar una pocicion en particular:

console.log(airline2.slice(1, -1)); //"ueling Flight23"

/*
Vamos a crear una funcion que recibe un asiento del avion, y nos devuelve un STRING diciendo si es un asiento en el centro o no.
*/
const checkMiddleSeat = function (seat) {
  const findSeat = seat.slice(-1);
  if (findSeat === 'B' || findSeat === 'E')
    console.log('You have got the middle seat 😫');
  else console.log('You are lucky 🤩');
};

checkMiddleSeat('11B'); //You have got the middle seat 😫
checkMiddleSeat('23C'); //You are lucky 🤩
checkMiddleSeat('03B'); //You have got the middle seat 😫

/*
Nos puede surgir la duda de porque es posible utilizar METHODs en PRIMITIVAS como las STRINGs, no deberian solo poder usarse en OBJECTS como los ARRAYs?, en teoria es cierto, pero JS es muy listo, esto es posible porque cuando llamamos a un METHO con un STRING, JS automaticamente en segundo plano, convierte esta STRING PRIMITIVE en  un STRING OBJECT con el mismo contenido y es entonces en el OBJECT donde los METHODS son llamados, este proceso es llamado BOXING. Coge nuestro STRING y lo mete en una BOX, que es el OBJECT en si.

Lo que hace JS es hacer la siguiente conversion:
*/
console.log(new String('Javier'));
console.log(typeof new String('Javier')); //Object

/*
String {"Javier"}
0: "J"
1: "a"
2: "v"
3: "i"
4: "e"
5: "r"
*/

// Cuando el OBJECT es reconvertido a una STRING normal:

console.log(typeof new String('Javier').slice(1)); //String

('use strict');
/*
Continuamos trabajando con STRINGS!!!
*/
const airline = 'Iberia Airlines';
const plane = 'A320';

console.log(airline.toLowerCase()); //iberia airlines
console.log(airline.toUpperCase()); //IBERIA AIRLINES
console.log('javier'.toUpperCase()); //JAVIER

//Fix capitalization in name
const passenger = 'jAvIeR'; // Buscamos Javier
const passengerLowerCase = passenger.toLowerCase();
console.log(passengerLowerCase); //javier
const passengerCorrect =
  passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
console.log(passengerCorrect); //Javier

//Podemos crear una funcion que haga el trabajo de conversion:

const passengerName = function (name) {
  const passengerNameTransforLowerCase = name.toLowerCase();
  const passengerNameTransform =
    name[0].toUpperCase() + passengerNameTransforLowerCase.slice(1);
  return console.log(passengerNameTransform);
};
passengerName('melissa'); // Melissa
passengerName('GaBriEl'); //Gabriel
passengerName('NAPOLEOn'); //Napoleon

//Ejemplo BONUS, imaginemos que queremos comprobar todos los nombres dentro de un ARRAY en vez de llamar todo el rato a la funcion commo en el caso anterior:

let nameCorrect, characterLow;

const caseCorrection = function (character) {
  characterLow = character.toLowerCase();
  const correction = (nameCorrect =
    characterLow[0].toUpperCase() + characterLow.slice(1));
  return console.log(correction); // Peter, Heidi, Pietro, Bert
};

caseCorrection('PETer');

const namesToCorrect = ['HEIdi', 'pIEtRo', 'BERt'];
for (const Name of namesToCorrect) {
  caseCorrection(Name);
}

//Otro ejemplo util, seria comparar los inputs que meten los usuarios en su info de email

const email = 'jp.sanchez@hotmail.es';
const loginEmail = '  Jp.sanchEz@hotmail.es \n';

const lowerCapitalEmail = loginEmail.toLowerCase();
console.log(lowerCapitalEmail); //"  jp.sanchez@hotmail.es \n"

/*
Ahora toca eliminar los espacios y el enter (\n), usamos el 
METHOD .trim
*/
const trimmedEmail = lowerCapitalEmail.trim();
console.log(trimmedEmail); //jp.sanchez@hotmail.es
console.log(trimmedEmail.length); //21

//Lo ideal es ahorrarse el paso de crear la variable trimmedEmail y aprovechar que tenemos STRINGS para concatenar "CHAINING" METHODS:

const rightEmail = loginEmail.toLowerCase().trim();
console.log(rightEmail); //jp.sanchez@hotmail.es
console.log(email === rightEmail); //True

//Replacing METHOD
const priceGB = '256,58£';
const priceUS = '256,58$';
const transformCurrency = priceGB.replace('£', '$').replace(',', '.');
console.log(transformCurrency); //"256.58$"

//Veamos el siguiente ejemplo, iamginemos que queremos cambiar mas de una palabra o numero, en este caso "door":

const announcement =
  'All passangers come to boarding door 25. Boarding door 3!';
console.log(announcement.replace('door', 'gate')); //All passangers come to boarding gate 25. Boarding door 3!

//Podemos ver que solo lo hace en la primera ocurrence. Basta con usar .replaceAll

console.log(announcement.replaceAll('door', 'gate')); //All passangers come to boarding gate 25. Boarding gate 3!

//Una solucion alternativa y ya vieja,puesto que antes no existia este METHOD de .replaceAll, es lo que se conoce como REGULAR EXPRESSION, algo que confunde y es complejo en programacion, vamos a crear una REGULAR EXPRESSION sencilla, para ello se usan slashes / / en vez de comillas " " y añadilos el flag g de "global":

console.log(announcement.replaceAll(/door/g, 'gate')); //All passangers come to boarding gate 25. Boarding gate 3!

/*
Los siguiente METHODS que vamos a ver devuelven BOOLEANS:
*/
//INCLUDES
const plane2 = 'A320neo';
console.log(plane2.includes('A320')); //true
console.log(plane2.includes('A330')); //false
//START WITH
console.log(plane2.startsWith('Air')); //false
console.log(plane2.startsWith('A')); //true

if (plane2.startsWith('A3') && plane2.endsWith('eo')) {
  console.log('Es un AIRBUS'); //Es un AIRBUS
}

//Queremos comprobar si el equipaje de un pasajero puede pasar al vuelo o sino le esta permitido meter la maleta, muy importante de siempre usar el METHOD .toLowerCase
const checkBagage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('Your are NOT allowed on board');
  else {
    console.log('Welcome aboard!');
  }
};

checkBagage('I have a laptop, some Food and a pocket Knife'); //Your are NOT allowed on board
checkBagage('Socks and camera'); //Welcome aboard!
checkBagage('Got some snacks and a gun for protection'); //Your are NOT allowed on board

('use strict');
/*
Ultima parte de los STRINGS!!!

*******************SPLIT METHOD******************

METHOD para dividir un STRING en multiples STRINGS, simplemente hay que utilizar el METHOD .split y definir un devider string.
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

/*


*******************SUBSTRING METHOD******************

Nos dará todos los carecteres dentro de un rango (start, end)
*/

const text = 'Marianito';
console.log(text.substring(0));
console.log(text.substring(0, 2));
console.log(text.substring(0, 10));

const KeyPhrase = 'Create a file';
const phrase = 'Create a file and some more text';
console.log(phrase.substring(KeyPhrase.length + 1));

('use strict');
/*
En las ultimas unidades hemos aprendido como trabajar con STRINGS y los multiples METHODs que podemos aplicar, en esta seccion vamos a resolver otro Challenge muy interesante sobre STRINGS

El objetivo de esta practica es trasformar el STRING caotico que tenemos en algo legible y entendible, la info la hemos obtenido de una WEB API 
*/
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
/*
🔴 Delayed Departure from FAO to TXL (11h25)
             Arrival from BRU to FAO (11h45)
  🔴 Delayed Arrival from HEL to FAO (12h05)
           Departure from FAO to LIS (12h30)
*/
//Divimos obteniendo un ARRAY
const divide = flights.split('+');
console.log(divide);
/*
["_Delayed_Departure;fao93766109;txl2133758440;11:25",
"_Arrival;bru0943384722;fao93766109;11:45",
"_Delayed_Arrival;hel7439299980;fao93766109;12:05",
"_Departure;fao93766109;lis2323639855;12:30"]
*/
//Queremos una linea por vuelo, por lo que tendremos que LOOPEAR l ARRAY para obtener un STRING en cada una de las ITERACIONES.
/*
for (const n of divide) {
  console.log(`${n}`);
}

_Delayed_Departure;fao93766109;txl2133758440;11:25
_Arrival;bru0943384722;fao93766109;11:45
_Delayed_Arrival;hel7439299980;fao93766109;12:05
_Departure;fao93766109;lis2323639855;12:30
*/
/*
for (const n of divide) {
  console.log(n.split(';'));
}
*/
/*
["_Delayed_Departure", "fao93766109", "txl2133758440", "11:25"]
["_Arrival", "bru0943384722", "fao93766109", "11:45"]
["_Delayed_Arrival", "hel7439299980", "fao93766109", "12:05"]
["_Departure", "fao93766109", "lis2323639855", "12:30"]
*/
/*
Usamos DESTRUCTURING para extraer las 4 partes que nos interesan del ARRAY
*/
/*
for (const n of divide) {
  const [type, from, to, time] = n.split(';');
  const output = `${type.startsWith('_Delayed') ? '💥' : ' '}${type.replaceAll(
    '_',
    ' '
  )}${from}${to}(${time.replace(':', 'h')})`;
  console.log(output);
}

💥 Delayed Departurefao93766109txl2133758440(11h25)
 Arrivalbru0943384722fao93766109(11h45)
 💥 Delayed Arrivalhel7439299980fao93766109(12h05)
   Departurefao93766109lis2323639855(12h30)
*/
//Aqui vamos a ahorrarnos lineas de codigo creando una funcion ARROW que haga el trabajo de slice y capitalizar!
/*
const getCode = str => str.toUpperCase().slice(0, 3);

for (const n of divide) {
  const [type, from, to, time] = n.split(';');
  const output = `${type.startsWith('_Delayed') ? '💥' : ' '}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`;
  console.log(output);
}
*/
/*
💥 Delayed Departure from FAO to TXL (11h25)
  Arrival from BRU to FAO (11h45)
💥 Delayed Arrival from HEL to FAO (12h05)
Departure from FAO to LIS (12h30)
*/

//Ahora vamos a formatear la STRING para dejarlo todo alineado, nos ayudaremos de padStart
const getCode = str => str.toUpperCase().slice(0, 3);

for (const n of divide) {
  const [type, from, to, time] = n.split(';');
  const output = `${type.startsWith('_Delayed') ? '💥' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(55); //Hemos puesto 55 de forma aleatoria, es el valor que consigue alinear las horas...
  console.log(output);
}
/*

            💥 Delayed Departure from FAO to TXL (11h25)
                         Arrival from BRU to FAO (11h45)
              💥 Delayed Arrival from HEL to FAO (12h05)
                       Departure from FAO to LIS (12h30)
*/
