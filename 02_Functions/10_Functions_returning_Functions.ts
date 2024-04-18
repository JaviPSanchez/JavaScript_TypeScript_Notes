'use strict';

/*
En esta sesion haremos lo contrario que en la anterior clase, es decir, vamos a crear una FUNCTION que crea una NUEVA FUNCTION
*/

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
//¿Cual sera el resultado de esta call function? la funcion dentro de greet
const greeter = greet('Hey');
greeter('Javi'); //Hey Javi
greeter('Melissa'); //Hey Melissa
/*
Podemos decir que greeter es basicamente:
function (name) {
    console.log(`${greeting} ${name}`);
  };
*/

/*
Nuestra primera funcion greet devuelve otra nueva funcion que hemos guardado en la variable greeter.

Podriamos hacerlo todo de una sola vez:
Esta herramienta de devolver funciones a partir de una funcion es muy util en ciertas situaciones,
sobre todo si estamos usando el "programming paradigm called functional programming" un concepto
que veremos al final del curso.
*/
greet('Hello')('Javi'); //Hello Javi

/*
Podemos intentar hacer el mismo ejemplo del principio, pero con ARROW FUNCTIONS, mas rapido aunque
un pelin mas dificil de comprender.
*/
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hi')('Javi'); //Hi Javi
