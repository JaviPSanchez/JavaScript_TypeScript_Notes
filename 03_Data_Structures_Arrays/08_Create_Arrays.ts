'use strict';

/**
 *
 * 0️⃣ HardCoded 👉 old way
 * 1️⃣ new Array() 👉 fill method
 * 2️⃣ Array.from()  👉
 */

/**
 * 0️⃣ HardCoded 👉 old way
 */
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/**
 *
 * 1️⃣ new Array() : El mas conocido es el Array() constructor function. Solo podemos usarlo con el .fill() method
 *
 */
const x = new Array(9);
console.log(x); //[empty × 9]
/*
Un problema de esto es que no podemos realmente usar este ARRAY X para nada, por ejemplo si quisiesemos utilizar
el .map() para rellenarlo no podriamos:
*/
console.log(x.map(() => 5)); // Podemos ver que no pasa nada.
/*
Esto no es util, excepto por una cosa, hay un METHOD que si podemos llamar en este ARRAY vacio, el FILL METHOD.

Solo hay que pasarle un valor y rellenara todo el ARRAY con ese valor:
*/
console.log(x.fill(1)); //[1, 1, 1, 1, 1, 1, 1, 1, 1] mutando el ARRAY x.

/*
El FILL METHOD es parecido al SLICE METHOD en una cosa, a parte del VALUE que podemos meter para rellenar, podemos
decirle a partir de cuando comenzar a rellenar y donde terminar:
*/
const y = new Array(9);
y.fill(5, 3, 6);
console.log(y); // [empty × 3, 5, 5, 5, empty × 3]

//Por supuesto tambien podemos rellenar ARRAYs normales con FILL:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.fill(23, 4, 6);
console.log(arr); //[1, 2, 3, 4, 23, 23, 7, 8, 9]

/**
 * 2️⃣ Array.from()
 * 
En este caso Array es una funcion, y en esta function Object llamamos al .from() method.
 * 
 */

const z = Array.from({ length: 9 }, () => 1);
console.log(z);

/*
1º argumento: throwaway parameter (current value)
2º segundo paramatro el index
*/

const w = Array.from({ length: 9 }, (_, index) => index + 1);
console.log(w);
