'use strict';
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
