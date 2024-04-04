'use strict';

/*
🔍 Can you elucidate the purposes of Function.call and Function.apply, along with their notable differences?
En esta seccion volveremos al this KEYWORD que estudiamos en la leccion de JS BEHIND THE SCENES.

Aprenderemos como configurar el this KEYWORD de una forma manual y tambien el porque hacerlo.

Creamos un OBJECT de una compañia aerea:
*/
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book(flightNum, name){} Forma antigua de crear la funcion, nos ayudamos del ENHANCE LITERAL SYNTAX
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    //Queremos tambien añadir info al ARRAY bookings
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
//Como sabemos, gracias al this podemos dirigirnos al OBJECT lufthansa, donde se encuentra el METHOD book
lufthansa.book(239, 'Javier Palomino'); //Javier Palomino booked a seat on Lufthansa flight LH239
lufthansa.book(566, 'Melissa Boyer'); //Melissa Boyer booked a seat on Lufthansa flight LH566
console.log(lufthansa);
/*
{airline: "Lufthansa", iataCode: "LH", bookings: Array(2), book: ƒ}
airline: "Lufthansa"
book: ƒ book(flightNum, name)
bookings: Array(2)
0: {flight: "LH239", name: "Javier Palomino"}
1: {flight: "LH566", name: "Melissa Boyer"}
*/

/*
Ahora imaginemos que al cabo de los años lufthansa crea una nueva aerolinea low cost llamada eurowings, queremos al igual que con lufthansa añadir info a nuestro ARRAY Bookings, podriamos pensar en copiar el METHOD BOOK y pegarlo, pero esto es una mala practica.

En vez de hacer un copy paste, guardaremos el METHOD en una funcion externa, y de esa forma, poder reutilizar la funcion en cualquier momento!

Esto es posible gracias a que JS tiene first class functions, permitiendonos coger el valor de la funcion book y guardarlo en una nueva variable llamada book, que es una funcion tambien.
*/

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
//Nueva funcion book
const book = lufthansa.book;
/*
Podemos comprobar que al llamar a la funcion book nos sale el error de :  Uncaught TypeError: Cannot read property 'airline' of undefined at book bla bla bla, esto es porque book function es una funcion regular y como sabemos el this keyword en funciones regulares es undefined, al menos en strict mode.

Hay que darse cuenta que la funcion book ya no es la misma, es una copia de lufthansa.book, pero ya no es un METHOD (un METHOD de lufthansa cabe aclarar...), es una funcion. Por ello es muy importante entender que el this keyword depende en como llamemos a la funcion!

Pero, entonces, ¿como decimos a JS que queremos crear un bookings en la nueva eurowings airline? o ¿como le decimos que queremos reservar en Lufthansa? Hay que decirle a JS explicitamente como tiene que ser el this keyword de lufthansa.

Si queremos reservar el lufthansa, el this keyword tiene que apuntar a lufthansa, pero si queremos reservar en eurowings entonces el this keyword tiene que apuntar a esta.

¿Como lo hacemos?

Pues existen tres FUNCTIONS METHODS para hacerlo:

1/ CALL
2/ APPLY
3/ BIND --> Proxima unidad
*/
//No funciona
// book(25, 'Manuel Perez');
/*

CALL METHOD --> Recordar que una funcion es basicamente un OBJECT, y los OBJECTS tienen METHODS.

El primer argumento del metodo CALL es donde queremos apuntar con el this keyword y el resto de argumentos, la info que queremos pasar
*/
const eurowings2 = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
book.call(eurowings2, 26, 'Manuel Perez');
console.log(eurowings2);
/*
{airline: "Eurowings", iataCode: "EW", bookings: Array(1)}
airline: "Eurowings"
bookings: Array(1)
0: {flight: "EW26", name: "Manuel Perez"}
iataCode: "EW"
*/

/*

APPLY METHOD --> Hace lo mismo que el CALL method pero no recibe una lista de argumentos despues del this keyword, como hemos escrito anteriormente, 26 y 'Manuel Perez': book.call(eurowings2, 26, 'Manuel Perez').

utilizara un ARRAY, donde cogera los argumentos y los pasara dentro de la funcion:
*/
const swiss = {
  airline: 'Swiss Air lines',
  iataCode: 'LX',
  bookings: [],
};
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); //George Cooper booked a seat on Swiss Air lines flight LX583
console.log(swiss);
/*
{airline: "Swiss Air lines", iataCode: "LX", bookings: Array(1)}
airline: "Swiss Air lines"
bookings: Array(1)
0: {flight: "LX583", name: "George Cooper"}
iataCode: "LX"
*/
/*
************
ESTE METODO no se usa mas en MODERN JS!!! Porque con el metodo SPREAD  podemos expandir los argumentos y usar el METHOD CALL al mismo tiempo, simplificando el codigo.
************
*/
book.call(swiss, ...flightData); //George Cooper booked a seat on Swiss Air lines flight LX583

//BIND METHOD --> Proxima unidad
