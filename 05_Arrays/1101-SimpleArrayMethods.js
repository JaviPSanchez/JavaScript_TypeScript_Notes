'use strict';

/*
👉 Los ARRAYS son OBJECTS con acceso a built-in METHODS.
👉 Los METHODS son como funciones simples que podemos llamar en los OBJECTS.
👉 los ARRAYS tienen acceso a estos METHODS gracias al PROTOTYPAL INHERITANCE.
*/

//Creacion de un ARRAY muy simple:
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr);

/*
✅ PUSH METHOD : Introduce un elemento al final de nuestro ARRAY mutando el original
*/
console.log('Push Method :');
console.log(arr.push(4)); // ['a', 'b', 'c', 'd', 'e', 4,]
console.log(arr.push('4')); // ['a', 'b', 'c', 'd', 'e', 4, '4']

/*
✅ POP METHOD : Saca el elemento al final de nuestro ARRAY
*/
console.log('Pop Method :');
console.log(['a', 'b', 'c', 'd', 'e', 4].pop()); // 4

/*
✅ SHIFT METHOD : Elimina el primer index
*/
console.log('Shift Method :');
console.log([1, 2, 3].shift()); // 1

/*
✅ UNSHIFT METHOD : Elimina el primer index
*/
console.log('UnShift Method :');
console.log([1, 2, 3, 4].unshift(0)); // a

/*
✅ SLICE METHOD : Muy parecido al que utilizamos con los STRINGS, podemos extraer una parte de nuestro ARRAY sin modificar el original. Hay que meter el parametro de inicio y el de final (no siendo obligatorio este ultimo), el parametro corresponde al index del ARRAY:
*/
console.log(arr.slice(2)); //["c", "d", "e"]
//Podemos indicar el parametro final, el cual no se incluye, ojo!
console.log(arr.slice(2, 4)); //["c", "d"]
//Podemos definir un parametro de inicio negativo, empezara a copiar por el final
console.log(arr.slice(-2)); //["d", "e"]
//Podemos tambien poner un parametro final negativo
console.log(arr.slice(1, -2)); //["b", "c"]
//Finalmente podemos utilizar el slice METHOD para crear una copia SHALLOW de un ARRAY, simplemente no ponemos parametros.
console.log(arr.slice()); //["a", "b", "c", "d", "e"]
//Cabe resaltar que podemos crear tambien una copia de nuestro ARRAY con el SPREAD OPERATOR, la unica diferencia es que con slice podemos concatenar multiples METHODs de una vez.
console.log([...arr]); //["a", "b", "c", "d", "e"]

/*
✅  SPLICE METHOD :  Funciona casi de la misma forma que el .slice() pero en este caso cambia el ARRAY original, muta el ARRAY, si llamamos al ARRAY original, este es modificado!
*/
console.log(arr.splice(2)); //["c", "d", "e"]
console.log(arr); //["a", "b"]

//Normalmente con el SPLICE METHOD lo que nos interesa es eliminar info no necesaria. Por ejemplo eliminar el ultimo elemento de un ARRAY.
arr.splice(-1);
console.log(arr); //["a"]
let arr2 = ['a', 'b', 'c', 'd', 'e'];
//Aqui empieza por b hasta c y los elminina.
arr2.splice(1, 2);
console.log(arr2); //["a", "d", "e"]

/*
✅ REVERSE : Cambia el sentido de un ARRAY. En este caso muta el array original como en el caso de .splice()
*/
const arr3 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr3.reverse()); // ["f", "g", "h", "i", "j"]
console.log(arr3); //["f", "g", "h", "i", "j"]

//Muchos de estos metodos mutan, haciendolos inservible en ciertas ocasiones!

/*
✅ CONCAT :  Concatena dos ARRAYs, no muta nada.
*/
const letters = arr2.concat(arr3);

console.log('Letters :');
console.log(letters); //["a", "d", "e", "f", "g", "h", "i", "j"]

//podriamos usar de nuevo el SPREAD OPERATOR
console.log([...arr2, ...arr3]); //["a", "d", "e", "f", "g", "h", "i", "j"]

//Tambien podemos incluir un elemento:
const letters_2 = letters.concat('k');
console.log(letters_2);

/*
✅ JOIN : Junta los ARRAYS con un separador que le digamos, el resultado es un STRING
*/
console.log(letters.join('_')); //a_d_e_f_g_h_i_j

console.log(letters_2.join('-')); //a-d-e-f-g-h-i-j-k
