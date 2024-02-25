'use strict';

/*
No podemos olvidar que el METHOD FOR EACH esta disponible tambien para los MAPS y los SETS.

Empecemos con los MAPS:
*/
//Debemos acordarnos que cada ARRAY del ARRAY tiene un primer valor que es el KEY y un segundo que es el VALUE.
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
//Lo mismo que con los ARRAYS, primer parametro es el value actual que pasa la iteracion, el segundo es el key, y el tercero es el map entero.
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
/*
USD: United States dollar
EUR: Euro
GBP: Pound sterling
*/
/*
Ahora con el SET, recordar que hay que pasar un ITERABLE, nos inventaremos un ARRAY simple con currencies:
*/
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); //{"USD", "GBP", "EUR"}
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${/*key*/ value}: ${value}`);
});
/*
USD: USD
GBP: GBP
EUR: EUR
*/
/*
Podemos comprobar que el key es igual al value, ¿Porque? por que los SET no tienen key y tampoco indexes, por lo que el parametro key no deberia estar, lo dejamos para simplemente darse cuenta que es igual para todos los DATA STRUCTURES y evitar confusiones entre los developers, pero saber que es inutil en los SETS.

Si queremos podemos poner un guion bajo, que en JS quiere decir throwaway variable, o lo que es lo mismo una variable que es completamente innecesaria.
*/
