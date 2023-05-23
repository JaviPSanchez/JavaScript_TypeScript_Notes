'use strict';

/*
In the past JS has always had very little built-in DATA STRUCTURES, we had basically only OBJECTS and ARRAYS.

But in ES6 two more DATA STRUCTURES were introduced, los SETs que veremos a continuacion y los MAPs que veremos en la proxima seccion.

1/SETs --> Its basically just a collection of unique VALUES. that means that a set can never have any duplicates making it useful in certain situations.
Para crear los set hay que simplemente que escribir "new Set()" y pasarle un ITERABLE (ARRAY por ejemplo).

Vamos a crear un SET al que le pasamos un ARRAY con 6 STRINGS (Podriamos haber metido otros tipos de datos o incluso mezclar DATA TYPES)
*/
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet); // {"Pasta", "Pizza", "Risotto"}
/*
Efectivamente, all the duplicates are gone!, podemos ver tambien que es parecido a un ARRAY, no hay KEY VALUES pairs como en los OBJECTS.

Decir que los SETs al igual que los ARRAYS son ITERABLES. No obstante, un SET es muy diferente a un ARRAY, lo primero porque sus elementos son unicos (solo puede haber un VALUE con un nombre especifico) y segundo, porque el orden de sus elementos es irrelevante.
*/
//elementos que devuelve un SET
console.log(new Set('Javi')); // {"J", "a", "v", "i"}
//Pueden estar vacios
console.log(new Set()); // { }
//Podemos saber el tamaño de un set, parecido al .length de las ARRAYS
console.log(orderSet.size); //3 --> Este es un valor interesante por ejemplo para alguien que quiere saber el numero de algo dentro de un STRING
console.log(new Set(['Pepe', 'Raul', 'Manolo']).size); // 3
// Podemos tambien obtener un METHOD parecido al de las ARRAYS include()
console.log(orderSet.has('Pizza')); //True
console.log(orderSet.has('Bread')); //False
//Podemos añadir elementos a un set, o varias veces el mismo...aunque no lo considere, puesto que tiene que ser unique!
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet); //{"Pasta", "Pizza", "Risotto", "Garlic Bread"}
//Tambien podemos eleminar valores
orderSet.delete('Risotto');
console.log(orderSet); //{"Pasta", "Pizza", "Garlic Bread"}
//Borrar todos los elementos
// orderSet.clear();
console.log(orderSet); // { }
/*
Podemos ver como el DATA STRUCTURE SETs es muy intuitivo de usar o por lo menos, mas que los ARRAYS.

Un aspecto importante es saber sacar valores de un SET, pero...¿Podemos usar index como en los ARRAYs orderset[0]?,

la respuesta es no, sale undefined. Esto es porque en los SETs no hay indexes, de hecho no hay forma de sacar los valores de un SET!

Esto tiene sentido, puesto que no hace falta sacar los valores dentro de un SET, sabemos que son unicos y que su orden no importa, no tiene sentido querer sacarlos, todo lo que nos interesa saber es si un VALUE esta o no en un SET. Si nuestro objetivo es almacenar VALUES y despues sacarlos, mejor usar un ARRAY.

Como hemos comentado los SET son ITERABLES luego podemos hacer bucles:
*/

for (const order of orderSet) console.log(order);
/*
Pasta
Pizza
Garlic Bread
*/
/*
Hay un BIG USE que merece la pena estudiar, en condiciones normales, los SETs ayudan a eliminar valores repetidos de un ARRAY, imaginemos que tenemos en nuestro restaurante un ARRAY con el personal!
*/
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
/*
Imaginemos que queremos saber que puestos tenemos en nuestro restaurante mediante un ARRAY unique:
*/
const staffUnique = new Set(staff);
console.log(staffUnique); // {"Waiter", "Chef", "Manager"}
/*
Ahora lo queremos convertir en ARRAY, algo facil de hacer puesto que son ITERABLES, podemos usar el SPREAD OPERATOR en todos los ITERABLES, incluido los SETs.
*/
const staffUnique2 = [...new Set(staff)];
console.log(staffUnique2); //["Waiter", "Chef", "Manager"]
/*
Podriamos incluso saber el numero de letras que hay dentro de un SET:
*/
console.log(new Set('JavierPalominoSanchez').size); //15
