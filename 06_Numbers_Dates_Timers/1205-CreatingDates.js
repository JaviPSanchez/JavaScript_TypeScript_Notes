'use strict';

const account1 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const now = new Date();
console.log(typeof now);
console.log(now);
const now2 = new Date().toISOString();
console.log(typeof now2);
console.log(now2);

console.log(new Date('Apr 13 2021 10:58:06'));
/*
La Z al final del STRING significa Coordinated Universal Time
*/
console.log(new Date('December 24 2015'));

console.log(new Date(account1.movementsDates[0]));

//Podemos pasar el año, dia, hora, minutos y segundos. JS comienza Enero con 0

console.log(new Date(2037, 10, 19, 23, 5));

//Otra cosa que hace JS es corregir los dias automaticamente, si escribimos Noviembre 33, automaticamente va a poner Diciembre 3.

console.log(new Date(2037, 10, 33, 23, 5));

//Podemos pasar tambien los milisegundos desde el 1 de enero de 1970!

console.log(new Date(0));

/*
Si quisiesemos calcular 3 dias despues de esta fecha:
3 dias, 24 horas, 60 minutos, 60 segundos y 1000 milisegundos
*/

console.log(new Date(3 * 24 * 60 * 60 * 1000));

/*
Podemos convertir dias en milisegundos! El resultado de calcular los milisegundos
es lo que se conoce como TIMESTAMP!
*/

console.log(3 * 24 * 60 * 60 * 1000);

/*
Todos estos tipos especiales de OBJECTS que hemos creado, tiene sus propios METHODs
al igual que los ARRAYS, los MAPS o los STRINGS.
*/

const future = new Date(2037, 10, 19, 15, 23);
console.log(future.getDate());
console.log(future.getMonth());
console.log(future.getFullYear());
console.log(future.getYear());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.getTime());
console.log(future.setDate(23));
console.log(future.setMonth(3));
console.log(future.setFullYear(2024));
console.log(future.setHours(10));
console.log(future.setMinutes(45));
console.log(future.setSeconds(49));
console.log(future.setMilliseconds(300));
console.log(future.setTime(1648101488176));
console.log(future.toISOString());

/*
Podemos tambien obtener el TIMESTAMP de la fecha, no olvidar que el TIMESTAMP son
los milisegundos que han pasado desde el 1 de Enero de 1970!
*/

console.log(future.getTime());

//Ahora podemos coger este numero y obtener la fecha de la variable future:

console.log(new Date(2142253380000));

/*
TIMESTAMP es de gran importancia, hasta el punto de tener un METHOD que nos dice 
la fecha actual, no necesitamos ni llamar al METHOD new Date
*/

console.log(Date.now());
console.log(new Date(1618306069645));

//Checking Dates in a simple way:

const isValidDate = date => {
  try {
    new Date(date).toISOString();
  } catch (error) {
    return false;
  }
  return true;
};

console.log(isValidDate('23/23/2021'));
console.log(isValidDate('2021-11-18'));
console.log(isValidDate('28 September 2021'));
console.log(isValidDate('23-11-2021'));
