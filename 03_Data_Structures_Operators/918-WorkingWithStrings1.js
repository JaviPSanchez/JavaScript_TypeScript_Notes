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
El resultado de este metodo, en nuestro caso "ia Airlines" se le conoce como SUBSTRING, es un parte de otra STRING, cabe decir que no es posible cambiar STRINGS, esto es, mutate STRINGS, es imposible, son primitivas.

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
console.log(airline2.length); //17
console.log(airline2.indexOf(' ') + 1); //8
console.log(airline2.indexOf('F')); //8
console.log(airline2.indexOf('F') + 1); //9

console.log(airline2.slice(airline2.indexOf(' ') + 1, airline2.lastIndexOf()));
//"Fligh23"  17-8 = 8

// Puede empezar a contar desde el final:
console.log(airline2.slice(-2)); //35
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
