// 'use strict';

/*
En esta seccion realizaremos operaciones con las fechas.

Algo interesante sobre las fechas es que podemos realizar calculos con ellas!

Podemos substraer una fecha a partir de otra para calcular cuantos dias han pasado. Al hacer peraciones con las fechas estan son transformada en TIMESTAMPs que a su vez estan basados en milisegundos, son con estos milisegundos que podemos realizar operaciones.
*/
const future = new Date(2021, 10, 19, 15, 26);
console.log(future); //Fri Nov 19 2021 15:26:00 GMT+0100 (Central European Standard Time)
//Al convertirlo a milisegundos podemos empezar a operar y calcular dias, horas, lo que nos interese.
console.log(+future); //1637331960000

//Creamos una funcion que coge dos fechas y nos devuelve el tiempo pasado entre ellas:

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1);

const days1 = calcDaysPassed(new Date(2021, 04, 14), new Date(2020, 03, 25));
console.log(days1); //33177600000

//Convertimos en dias (1000 milisegundos, 60 segundos, 60 minutos, 24 horas)

const days = days1 / (1000 * 60 * 60 * 24);
console.log(days); //384 dias

//Vamos a modificar nuestra APP, vamos a crear una funcion que nos diga si la operacion ha sido realizada hoy o ayer, si fue hecha hace unos dias, que nos lo diga tambien con un maximo de 5 dias.

//Cogemos nuestra funcion que convierte en dias dos fechas que metamos junto con todo el codigo de fechas ya puesto en nuestra APP

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

//Creando un nueva funcion que nos diga la fecha en la que se hizo el movimiento:

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
/*
Ahora que hemos exportado la funcion fiuera del ScopedCredential, podemos comenzar a calcular cuantos dias han pasado.
*/

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  //Calculamos el di de hoy con el del dia en la que la operacions e hizo, deberemos redondear los numeros...
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);
  /*
512.611679988426
478.1875456712963
442.1229331597222
378.07965444444443
340.9167445138889
321.7991798148148
276.52486575231484
276.0558974537037
*/

  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

//Redondeamos

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);
  /*
513
478
442
378
341
322
277
276
    */

  // BLABLABLA
};

// Finalmente simplemente agregamos la logica:

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days AbortSignal.`;
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
};
