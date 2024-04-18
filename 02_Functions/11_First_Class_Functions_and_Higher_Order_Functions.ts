'use strict';

/*

🔍 Define a higher-order function and provide an example of object or array destructuring.

Vamos a tratar una propiedad fundamental de JS, que es el echo de tener funciones de primer nivel o clase.

Lo cual nos permite escribir higher order functions.

But what's that all about?

Js has first-class functions, which in technical terms, means that functions are so-called first citizens,
which in practice means that functions are treatly as values, un concepto que ya hemos visto anteriormente
varias veces.

Porque JS work this way?

Porque FUNCTIONS son otro tipo de OBJECTS in JS, y como OBJECTS son VALUES, FUNCTIONS are VALUES too. Como
las funciones son valores, hay muchas cosas interesantes que podemos hacer con ellas!

Como storing in VARIABLES or in an OBJECT PROPERTIE.
*/

const add = (a, b) => a + b;
const counter = {
  value: 25,
  inc: function () {
    this.value++;
  },
};

//Podemos pasar funciones como argumentos a otras funciones como añadir EVENT HANDLENERS to DOM OBJECTS

const greet = () => console.log('Hey Javi');
btnClose.addEventListener('click', greet); //function greet

//Otra funcion interesante es que podemos devolver funciones from other funciones, lo cual puede ser muy util!

//Tambien podemos encontrar METHODS para las FUNCTIONS:

counter.inc.bind(someOtherObject); //function bind

/*
El echo de que JS tenga FIRST CLASS FUNCTIONS hace posible que podamos usar y escribir HIGHER ORDER FUNCTIONS.

So, a HIGHER ORDER FUNCTION is either a function that recieves another function as an argument or a FUNCTION
that returns a new FUNCTION.

1/FUNCTION that recives another FUNCTION, en el siguiente caso addEventListener es una HOF porque recibe otra
funcion como input, greet(), decimos que la funcion que ha sido pasada es la Callback function, esto es porque
la Callback function sera llamada mas tarde por la HOF addEventListener()
*/
const greet = () => console.log('Hey Javi');
btnClose.addEventListener('click', greet);
/*
2/ Podemos tener FUNCTIONS that returns another FUNCTION:
*/

// HOF count()
function count() {
  let counter = 0;
  return function () {
    //RETURNED FUNCTION
    counter++;
  };
}

/*
Para clarificar un poco, cabe saber diferenciar FCF de las HOF, pueden parecer lo mismo pero tienen un objetivo
diferentes, FCF es una propiedad que un lenguaje de programacion tiene o no, esto quiere decir que todas las
FUNCTIONS son valores. En la practica no hay FCF, es solamente un CONCEPTO! Sin embargo existen en la practica
HOF como hemos visto en los ejemplos, que son posibles gracias a que el lenguaje admite FCF.
*/
