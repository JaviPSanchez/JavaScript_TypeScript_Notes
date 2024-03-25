'use strict';

import { restaurant } from './assets';

/*
Vamos a ver un metodo introducido en ES6, el FOR OF LOOP,
imaginemos que queremos repetir en un bucle nuestro menu entero,
es decir, el starter menu y el main menu.

Ya sabemos que con un regular FOR LOOP podemos hacer un bucle,
pasando por todos los pasos, como setting up a counter,
a condition and also update the counter. Pero es demasiado
laborioso,
*/
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

/*
Por eso tenemos el FOR OF LOOP donde no necesitamos nada de eso,
es mucho mas simple:
*/
for (const item of menu) console.log(item);

/*
Como es posible que esto funcione? lo que hace es automatically
loop over the entire array and in each iteration it will give
us access to the current ARRAY element which we can specify in
the const item in our case. The item variable is the current element in each iteration. Simply each element logged one by one.

Algo interesante de este metodo a parte de su simplicidad,
es que podemos usar los keyword CONTINUE y BREAK.

Si quisiesemos obtener el index o posicion de cada elemento
situado en el menu por ejemplo, podriamos utilizar el
Method .entries(), el resultado es un ARRAY con el index y
el element itself. Es como un ARRAY ITERATOR que veremo
 mas adelante... Array itirator {}.
*/
for (const item of menu.entries()) console.log(item); // [0, "Focaccia"] [1, "Bruschetta"] [2, "Garlic Bread"] [3, "Caprese Salad"] etc etc...

/*
Si quisiesemos loggear un menu mas chulo, podriamos aprovechar
el .entries() con el TEMPLE STRING:
*/
for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);
/*
1: Focaccia
2: Bruschetta
3: Garlic Bread
4: Caprese Salad
5: Pizza
6: Pasta
7: Risotto
*/
/*
O incluso hacer un metodo mas moderno y optimo, podemos 
DESTRUCTURAR el ARRAY item a nuestro antojo haciendonos
la vida un poquito mas facil:
*/
for (const [i, element] of menu.entries()) console.log(`${i + 1}: ${element}`);
/*
1: Focaccia
2: Bruschetta
3: Garlic Bread
4: Caprese Salad
5: Pizza
6: Pasta
7: Risotto
*/
