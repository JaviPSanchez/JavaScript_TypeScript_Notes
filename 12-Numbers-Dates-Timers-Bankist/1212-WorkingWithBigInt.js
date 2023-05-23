'use strict';

/*
Vamos a ver uno de los PRIMITIVE DATA TYPES que no hemos visto, es el BigInt.

Es un SPECIAL TYPE de INTEGERS que fue introducido en el año 2020!

Sabemos que los NUMEBRS estan representados internamente en JS en Base 64 bits, lo cual quiere decir que hay exactamente 64 ceros y unos para representar cualquier numero. De estos 64 bits solo se usan 53 para guardar los numeros y el resto para los decimales y el signo.

El problema es que si solo tenemos 53 bits para el numero, esto quiere decir que para numeros muy grandes no hay suficiente espacio, por lo que tiene que haber un limite, lo calculamos:
*/

console.log(2 ** 53 - 1); //9007199254740991 el numero mas grande que podemos guaradar, el -1 es para tener en cuenta la posicion 0. El 2 es por la Base 2.

//Este numero esta guardado en la memoria como:

console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

//Cualquier INTEGER mas grande que este no es seguro, o lo que es lo mismo, no puede ser representado de una forma precisa.

//Esto puede ser un problema porque en ciertas situaciones, necesitaremos numeros muy grandes, por ejemplo para Data Base ID's o cuando interactuamos con numeros de 60 bits usados en otras lenguajes, podemos tambien recibir un numero de una API mas grande que este limite.

//Por lo menos hasta ahora, porque a partir de JS 2020 se implemento una nueva primitiva llamada BigInt "Big Integer" y se usa para guardar cualquier tipo de numero, independientemente de su tamaño.

//Para activar el BigInt hay que poner al final del numero una n.

console.log(58941989819828987979898789n); //58941989819828987979898789n
console.log(BigInt(58941989819828987979898789)); //58941989819828986124959744n

//Los OPERATORS funcionan sin problemas con los BigInt
console.log(10000n * 10000n); //100000000n

//Lo que no es posible es mezclar BigInt's con regular numbers

const huge = 56484984494555555944654n;
const num = 23;
// console.log(huge * num); //Error
console.log(huge * BigInt(num)); //1299154643374777786727042n

console.log(20n > 15); //True

//Hay una excepcion con los LOGICAL OPERATORS, con el TRIPLE OPERATOR no funciona bien
console.log(20n === 20); //False, esto es normal porque no hace TYPE COERCION con el TRIPLE EQUAL OPERATOR
console.log(typeof 20n); //bigint
console.log(typeof 20); //number

//Sin embargo con el DOUBLE o LOSE EQUAL OPERATOR si funciona:
console.log(20n == 20); //true Aqui si hace TYPE COERCION, combierte en 20n a regular number.

//La otra excepcion es con los STRINGS concatenacion
console.log(huge + ' is REALLY BIG!!!!'); //56484984494555555944654 is REALLY BIG!!!!

//Otra cosa que no funciona es
// console.log(Math.sqrt(20n)); //TypeError

//Divisions
console.log(10n / 3n); //3n
console.log(10 / 3); //3.3333333333333335

//Podemos ver que corta los decimales
