'use strict';

const account2 = {
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

/*
Cuando se crean APP's o paginas web se usan casi siempre un tipo de dato muy utilizado, son las FECHAS y el TIEMPO.

Las fechas y el tiempo pueden ser un poco farragosas y confusas en JS, al igual que con los numeros vamos a intentar dejar las cosas claras.

Lo primero que debemos hacer es crear una fecha, pero debemos saber que hay 4 formas de escribir una fecha en JS, todas usan el NEW DATE CONSTRUCTOR FUNCTION, pero pueden aceptar diferentes parametros.
*/

//METODO 1 : conseguir la fecha y hora actual

const now = new Date();
console.log(now); //Tue Apr 13 2021 10:58:06 GMT+0200 (Central European Summer Time)

//METODO 2 : Parse the date from a date STRING.

console.log(new Date('Apr 13 2021 10:58:06')); //Tue Apr 13 2021 10:58:06 GMT+0200 (Central European Summer Time)

//podemos escribir el string nosotros mismos:

console.log(new Date('December 24 2015')); //Thu Dec 24 2015 00:00:00 GMT+0100 (Central European Standard Time)

/*
Podemos ver como JS autocompleta nuestros STRINGS, es muy inteligente.

Podemos ver que en nuestros OBJECTS tenemos unos ARRAYS "movementsDates, con toda la info", vamos a intentar parsear los STRINGs de este ARRAY.

La Z al final del STRING significa Coordinated Universal Time
*/
console.log(new Date(account1.movementsDates[0])); //Mon Nov 18 2019 22:31:17 GMT+0100 (Central European Standard Time)

//Podemos pasar el año, dia, hora, minutos y segundos. Aclarar que JS comienza Enero con 0, de ahi que al escribir 10, tengamos Noviembre y no Octubre.

console.log(new Date(2037, 10, 19, 23, 5)); //Thu Nov 19 2037 23:05:00 GMT+0100 (Central European Standard Time)

//Otra cosa que hace JS es corregir los dias automaticamente, si escribimos Noviembre 33, automaticamente va a poner Diciembre 3.

console.log(new Date(2037, 10, 33, 23, 5)); //Thu Dec 03 2037 23:05:00 GMT+0100 (Central European Standard Time)

//Podemos pasar tambien los milisegundos desde el 1 de enero de 1970!

console.log(new Date(0)); //Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)

//Esto puede ser muy util en diferentes situaciones. Si quisiesemos calcular 3 dias despues de esta fecha: 3 dias, 24 horas, 60 minutos, 60 segundos y 1000 milisegundos

console.log(new Date(3 * 24 * 60 * 60 * 1000)); //Sun Jan 04 1970 01:00:00 GMT+0100 (Central European Standard Time)

//Esto es util, porque podemos convertir dias en milisegundos! El resultado de calcular los milisegundos es lo que se conoce como TIMESTAMP, algo muy util!

console.log(3 * 24 * 60 * 60 * 1000); //259200000

//Todos estos tipos especiales de OBJECTS que hemos creado, tiene sus propios METHODs al igual que los ARRAYS, los MAPS o los STRINGS.

//Working with DATES

const future = new Date(2037, 10, 19, 15, 23);
console.log(future.getFullYear()); //2037
console.log(future.getYear()); //137 NO FUNCIONA, siempre usar getFullYear!!
console.log(future.getMonth()); //10
console.log(future.getDate()); //19
console.log(future.getHours()); //4 Es el dia de la semana, jueves!
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //0
console.log(future.toISOString()); //2037-11-19T14:23:00.000Z Esto es el ISO STRING que sigue algun tipo de standart internacional...

//Podemos tambien obtener el TIMESTAMP de la fecha, no olvidar que el TIMESTAMP son los milisegundos que han pasado desde el 1 de Enero de 1970!

console.log(future.getTime()); //2142253380000 todo este tiempo ha pasado desde el 01/01/1970

//Ahora podemos coger este numero y ob tener la fecha de la variable future:

console.log(new Date(2142253380000)); //Thu Nov 19 2037 15:23:00 GMT+0100 (Central European Standard Time)

//TIMESTAMP es de gran importancia, hasta el punto de tner un METHOD que nos dice la fecha actual, no necesitamos ni llamar al METHOD new Date

console.log(Date.now()); //1618306069645
console.log(new Date(1618306069645)); //Tue Apr 13 2021 11:27:49 GMT+0200 (Central European Summer Time)

// Final mente tenemos las versiones SETs de todas estos METHODs:

future.setFullYear(2040);

//Hemos modificado la variable future:

console.log(future); //Mon Nov 19 2040 15:23:00 GMT+0100 (Central European Standard Time)

//Tambien podriamos hacer para las horas, mes, etc.

future.setMonth(2040);
future.setHours(2040);
