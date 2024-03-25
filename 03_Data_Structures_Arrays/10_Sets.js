'use strict';

/*
In the past JS has always had very little built-in DATA STRUCTURES, we had basically
only OBJECTS and ARRAYS.

But in ES6 two more DATA STRUCTURES were introduced, los SETs que veremos a continuacion
y los MAPs que veremos en la proxima seccion.

1/SETs --> Its basically just a collection of unique VALUES. that means that a set can
never have any duplicates making it useful in certain situations.

Para crear los set hay que simplemente que escribir "new Set()" y pasarle un ITERABLE (ARRAY por ejemplo).
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
Efectivamente, all the duplicates are gone!, podemos ver tambien que es parecido a un ARRAY,
no hay KEY VALUES pairs como en los OBJECTS.

Decir que los SETs al igual que los ARRAYS son ITERABLES. No obstante, un SET es muy diferente a
un ARRAY, lo primero porque sus elementos son unicos (solo puede haber un VALUE con un nombre especifico)
y segundo, porque el orden de sus elementos es irrelevante.
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

('use strict');

/*
CODING CHALLENGE #3
*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔄 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔄 Substitution'],
  [64, '🟡 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔄 Substitution'],
  [72, '🔄 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟡 Yellow card'],
]);

/*
Let's continue with our football betting app! This time, we have a map called
'gameEvents' with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
*/
console.log(gameEvents.values());
/*
{"⚽ GOAL", "🔄 Substitution", "⚽ GOAL", "🔄 Substitution", "🟡 Yellow card", …}
[[Entries]]
0: "⚽ GOAL"
1: "🔄 Substitution"
2: "⚽ GOAL"
3: "🔄 Substitution"
4: "🟡 Yellow card"
5: "🔴 Red card"
6: "🔄 Substitution"
7: "🔄 Substitution"
8: "⚽ GOAL"
9: "⚽ GOAL"
10: "🟡 Yellow card"
*/
const events1 = new Set(gameEvents.values());
console.log(events1);
/*
{"⚽ GOAL", "🔄 Substitution", "🟡 Yellow card", "🔴 Red card"}
[[Entries]]
0: "⚽ GOAL"
1: "🔄 Substitution"
2: "🟡 Yellow card"
3: "🔴 Red card"
*/
const events = [...new Set(gameEvents.values())];
console.log(events);
/*
/*
["⚽ GOAL", "🔄 Substitution", "🟡 Yellow card", "🔴 Red card"]
0: "⚽ GOAL"
1: "🔄 Substitution"
2: "🟡 Yellow card"
3: "🔴 Red card"
*/
/*
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
*/
gameEvents.delete(64);
console.log(gameEvents);
/*
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" ( calculate the average, keep in mind that a game has 90 minutes)
*/
console.log(gameEvents.size); // 10
console.log(`An event happened, on
average, every ${
  90 / gameEvents.size
} minutes`); /*An event happened, on average, every 9 minutes*/
/*
//Si quisiesemos hilar fino y dar el valor exacto de la duracion del partido (y no hacer un HARD CODe de 90), es decir introducir el ultimo valor del ARRAY de una forma automatica 92', podriamos convertir nuestro MAP en un KEY ARRAY y despues sacar el ultimo elemento del ARRAY con el METHOD .pop
*/
const time = [...gameEvents.keys()].pop();
console.log(time); // 92
console.log(`An event happened, on
// average, every ${
  time / gameEvents.size
} minutes`); /*An event happened, on average, every 9.2 minutes*/
/*
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
*/
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}.`);
}
/*
[FIRST HALF] 17: ⚽ GOAL.
[FIRST HALF] 36: 🔄 Substitution.
[FIRST HALF] 36: 🔄 Substitution.
[SECOND HALF] 47: ⚽ GOAL.
[SECOND HALF] 61: 🔄 Substitution.
[SECOND HALF] 69: 🔴 Red card.
[SECOND HALF] 70: 🔄 Substitution.
[SECOND HALF] 72: 🔄 Substitution.
[SECOND HALF] 76: ⚽ GOAL.
[SECOND HALF] 80: ⚽ GOAL.
[SECOND HALF] 92: 🟡 Yellow card.
*/
