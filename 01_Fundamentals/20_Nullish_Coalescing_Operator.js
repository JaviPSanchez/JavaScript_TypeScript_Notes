'use strict';

import { restaurant, data } from '../03_Data_Structures/assets';

/*
En las dos últimas lecciones hemos visto el OR OPERATOR y el problema que podría surgir al definir un valor con 0:
*/
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10 , no nos interesa este valor sino 0!
/*
El NULLISH COALESCING OPERATOR (??) Es un operador introducido en ES2020 y funciona muy parecido al OR OPERATOR,
*/
restaurant.numGuests = 0;
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // 0 Real value
/*
Esto es asi porque funciona con la idea de nullish values instead of falsy values, y los NULLISH VALUES solo pueden ser null o undefined. (NOT "0" or ' '). Todos los nullish values will short circuit the evaluation.
*/

/*
FALSY VALUES : 
    1/ 0
    2/ ''
    3/ undefined
    4/ null
    5/ NaN
*/

/*
?? --> Nullish Coalescing OPERATOR se corta con los Falsy values, lo usamos para evitar que cuando tenemos un 0 o '' devuelve a si mismo, pero no con NaN o undefined.
*/

console.log(0 ?? 'Falsy Value');
console.log(undefined ?? 'Error');
console.log(undefined ?? 0);
console.log(data.from?.api ?? 0);
