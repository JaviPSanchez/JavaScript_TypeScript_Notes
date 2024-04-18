import './main.css';

/*
🔍 Can you elucidate the purposes of Function.call and Function.apply,
along with their notable differences?

En esta seccion volveremos al "this" como configurar el this KEYWORD de
una forma manual y porque hacerlo?
*/
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum: number, name: string) {
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
Ahora imaginemos que al cabo de los años lufthansa crea una nueva aerolinea low cost llamada eurowings,
queremos al igual que con lufthansa añadir info a nuestro ARRAY Bookings, podriamos pensar en copiar
el METHOD BOOK y pegarlo, pero esto es una mala practica. En vez de hacer un copy paste, guardaremos
el METHOD en una funcion externa, y de esa forma, poder reutilizar la funcion en cualquier momento!

Esto es posible gracias a que JS tiene first class functions, permitiendonos coger el valor de la
funcion book y guardarlo en una nueva variable llamada book, que es una funcion tambien.
*/

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
//Nueva funcion book
const book = lufthansa.book;
// console.log(book(25, 'Manuel Perez'));
/*
Podemos comprobar que al llamar a la funcion book nos sale el error:  Uncaught TypeError, esto es porque
book function es una funcion regular y como sabemos el this keyword en funciones regulares es undefined,
al menos en strict mode.

Hay que darse cuenta que la funcion book ya no es la misma, es una copia de lufthansa.book, pero ya no es
un METHOD (un METHOD de lufthansa cabe aclarar...), es una funcion. Por ello es muy importante entender
que el this keyword depende en como llamemos a la funcion!

Pero, entonces, ¿como decimos a JS que queremos crear un bookings en la nueva eurowings airline? o
¿como le decimos que queremos reservar en Lufthansa? Hay que decirle a JS explicitamente como tiene
que ser el this keyword de lufthansa.

Si queremos reservar en lufthansa, el this keyword tiene que apuntar a lufthansa, pero si queremos
reservar en eurowings entonces el this keyword tiene que apuntar a esta.

¿Como lo hacemos?

Pues existen tres FUNCTIONS METHODS para hacerlo:

1/ CALL
2/ APPLY
3/ BIND

CALL METHOD --> Recordar que una funcion es basicamente un OBJECT, y los OBJECTS tienen METHODS.

El primer argumento del metodo CALL es donde queremos apuntar con el this keyword y el resto de
argumentos, la info que queremos pasar
*/
const eurowings2 = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
book.call(eurowings2, 26, 'Manuel Perez');
console.log(eurowings2);

/*

APPLY METHOD --> Hace lo mismo que el CALL method pero no recibe una lista de argumentos despues
del this keyword, como hemos escrito anteriormente, utilizara un ARRAY, donde cogera los argumentos
y los pasara dentro de la funcion:
*/
const swiss = {
  airline: 'Swiss Air lines',
  iataCode: 'LX',
  bookings: [],
};
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
/*
************
ESTE METODO no se usa mas en MODERN JS!!! Porque con el metodo SPREAD  podemos expandir los argumentos
y usar el METHOD CALL al mismo tiempo, simplificando el codigo.
************
*/
book.call(swiss, ...flightData);

import './main.css';

/*

---------------BIND-------------


🔍 Describe the Function.prototype.bind method.

Este METHOD es mas importante que el CALL y APPLY METHODS,
al igual que estos BIND nos permite de una forma manual configurar hacia donde apunta el this
keyword para cualquier function call. La diferencia es que BIND no llama inmediatamente a la funcion!
en vez de eso, devuelve una nueva funcion donde el this keyword esta ligado.
*/
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air lines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 26, 'Manuel Perez');
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

/*
Aqui no llamaremos a la funcion book, sino que devolveremos una nueva funcion donde
this keyword estara siempre fijada a eurowings.
*/

const bookEW = book.bind(eurowings);
bookEW(588, 'StevenWilliams');
console.log(eurowings);

/*
Esta tecnica es ideal, porque nos va a permitir crear una funcion por cada aerolinea
en vez de tener que usar todo el tiempo el call METHOD:

book.call(eurowings, 23, "Sara Willimans");
*/
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookLH(69, 'Guarra Perez'); //Guarra Perez booked a seat on Lufthansa flight LH69
bookLX(59, 'Mariano Rabo'); //Mariano Rabo booked a seat on Swiss Air lines flight LX59

/*
Tambien si queremos, podemos ahorrarnos escribir el flightNum todo el rato, dejarlo
predifinido como primer argumento, y solo pasar el passenger name. Esta tecnica de
predifinir valores es un patron llamado PARTIAL APPLICATION, que lo que quiere decir
es que parte de los argumentos de la funcion de origen han sido ya aplicados.
Que es lo que bookEW23 hace al predifinir hacia donde apuntamos con this y el primer argumento.
*/

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Ramon Ramirez');
bookEW23('Marta Palomino');

/*
Hay otras situaciones donde usar el .bind(), basicamente cuando usamos los Objects con Event Listeners, 
*/

// Nueva Property
lufthansa.planes = 300;
// Nuevo Method
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
/*
addEventListener es la HIGHER ORDER FUNCTION que recibe la CALLBACK de la funcion.


document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

Cuando hacemos click en el button, ocurre algo curioso, nos sale NaN y el console.log(this)
sale el codigo HTML "<button class="buy">Buy new plane 🛩</button>" Esto es porque el
EVENT HANDLER FUNCTION esta llamando a la funcion, obteniendo el boton

Por el contrario si es el OBJECT que llama a la funcion directamente obtendremos el resultado
puesto que aqui el this keyword funciona dinamicamente, es decir, depende de quien le llame,
reaccionara de una forma u de otra!

Para solucionar el problema de nuestro EVENT HANDLENER debemos forzar al this KEYWORD a que apunte al
OBJECT lufthansa, si no la logica dentro de la function buyplane no funcionara, por ello nos preguntaremos
si usar el .call() ya conocido o el BIND METHOD?

When do we use .call() and when do we use .bind()?

1. Do I need to store this function in a variable for later use? If so, use .bind()

2. Do I need to pass this function as an argument? If so, use bind()

3. Do I need to call this function right now? If so, use .call()

En nuestro caso necesitamos pasar una FUNCTION y no llamarla, por lo que el .call() no nos vale, puesto que
llama a la funcion, entonces usamos el BIND method, indicandole que el this KEYWORD debe ser el OBJECT lufthansa:

HOF addEventListener()
*/
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
