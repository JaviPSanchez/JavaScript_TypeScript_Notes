'use strict';

/*
Comenzamos este nuevo episodio con una de las partes mas faciles de las FUNCTIONS, los DEFAULT PARAMETERS.

A veces combiene tener funciones con parameters definidos por defecto, esto es, que no necesitamos pasarlos de una forma manual si no queremos cambiar sus valores por defecto. 

Comenzamos creando una funcion muy simple, a la que le pasamos los parametros:

- flightNumber
- number of passengers
- price

Usaremos este info para crear un OBJECT, en concreto un ARRAY usando un OBJECT LITERAL SYNTAX, con sus propiedades,
*/

//ARRAY con los BOOKINGS:
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 119 * numPassengers
) {
  /*ES5 METHOD
  numPassengers = numPassengers || 1;
  price = price || 199;
  */

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('FL8810');
/*
Con ES5:
{flightNum: "FL8810", numPassengers: undefined, price: undefined}
flightNum: "FL8810"
numPassengers: undefined
price: undefined
*/

/*
Podemos observar que los numPassengers y el price estan definidos como undefined, podemos usar el SHORT CIRCUITING a nuestro favor sabiendo que "undefined" son FALSY VALUES.

El metodo antiguo es:
numPassengers = numPassengers || 1; //1 seria el DEFAULT VALUE, si numPassengers es un FALSY VALUE (undefined por ejemplo) se hace el SHORT CIRCUTING y obtenemos 1.

en este caso obtendremos:

{flightNum: "FL8810", numPassengers: 1, price: 199}
flightNum: "FL8810"
numPassengers: 1
price: 199

Sin embargo hacerlo de esta forma es un tanto ugly y BOILER PLATE code, este es el metodo ES5,
con ES6 hay una mejor forma de hacerlo, asignando directamente los valores en los argumentos! facil y para toda la familia!

const createBooking = function (flightNum, numPassengers = 1, price = 199) { };
*/

//Podriamos sobreescribir estos DEFAULT VALUES, aunque no tendria mucho sentido..

createBooking('FG258', 2, 500); //{flightNum: "FG258", numPassengers: 2, price: 500}

/*
Lo bueno de los DEFAULT VALUES es que podemos poner cualquier expresion en ellos, como ecuaciones o incluso valores de otros parametros, siendo calculado de una forma dinamica por otro valor:

const createBooking = function (flightNum, numPassengers = 1, price = 119 * numPassengers) {
}
*/

createBooking('FG111', 2); //{flightNum: "FG111", numPassengers: 2, price: 238}

/*
Cabe resaltar que debemos respetar el orden de los ARGUMENTOS, es decir si queremos usar el valor de numPassengers, no podemos usarlo antes de este mismo, es decir, no podemos usarlo en los argumentos que lo preceden, solo despues.

ERROR!!
const createBooking = function (
    flightNum,
    price = 119 * numPassengers) {
    numPassengers = 1,
    }
*/
//Otro aspecto es saber que si no queremos pasar un ARGUMENT al PARAMETER, podemos "llamarlo" como undefined, de esa forma lo deja con el valor DEFAULT:

createBooking('FG111', undefined, 6); //{flightNum: "FG111", numPassengers: 1, price: 6}
