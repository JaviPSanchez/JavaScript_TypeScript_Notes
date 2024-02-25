'use strict';

/*
Este METHOD es mas importante que el CALL y APPLY METHODS, al igual que estos BIND nos permite de una forma manual configurar hacia donde apunta el this keyword para cualquier function call.

La diferencia es que BIND no llama inmediatamente a la funcion! en vez de eso, devuelve una nueva funcion donde el this keyword esta ligado. Esta configurado a pasar el valor que demos en bind
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
//Si no definimos la nueva funcion book, no podemos reutilizar la funcion book, y nos dara error!!!
const book = lufthansa.book;
//Aqui no llamaremos a la funcion book, sino que devolveremos una nueva funcion donde this keyword estara siempre fijada a eurowings.

const bookEW = book.bind(eurowings);
bookEW(588, 'StevenWilliams');
console.log(eurowings);
/*
{airline: "Eurowings", iataCode: "EW", bookings: Array(1)}
airline: "Eurowings"
0: {flight: "EW588", name: "StevenWilliams"}
iataCode: "EW"
*/
/*
Esta tecnica es ideal, porque nos va a permitir crear una funcion por cada aerolinea en vez de tener que usar todo el tiempo el call METHOD:

book.call(eurowings, 23, "Sara Willimans");
*/
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookLH(69, 'Guarra Perez'); //Guarra Perez booked a seat on Lufthansa flight LH69
bookLX(59, 'Mariano Rabo'); //Mariano Rabo booked a seat on Swiss Air lines flight LX59

/*
Tambien si queremos, podemos ahorrarnos escribir el flightNum todo el rato, dejarlo predifinido como primer argumento, y solo pasar el passenger name.

Esta tecnica de predifinir valores es un patron llamado PARTIAL APPLICATION, que lo que quiere decir es que parte de los argumentos de la funcion de origen han sido ya aplicados. Que es lo que bookEW23 hace al predifinir hacia donde apuntamos con this y el primer argumento.
*/

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Ramon Ramirez'); //Ramon Ramirez booked a seat on Eurowings flight EW23
bookEW23('Marta Palomino'); //Marta Palomino booked a seat on Eurowings flight EW23

/*
Hay otras situaciones donde usar el BIND METHOD, basicamente cuando usamos los OBJECTS con EVENT LISTENERS, 
*/
//Creamos una nueva PROPERTY en el OBJECT lufthansa y luego un nuevo METHOD solo para el OBJECT lufthansa

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++; //Cada ve que "clikemos" el boton se añadira un avion
  console.log(this.planes); // NaN "Not a Number"
};
/*
vamos a fijar nuestro EVENT HADLER a este ELEMENTO 'button' con la clase "buy". El segundo argumento sera el HANDLER FUNCTION "lufthansa.buyPlane" y el addEventListener es la HIGHER ORDER FUNCTION que recibe la CALLBACK de la funcion.

Esa funcion cada vez que "clickemos" coge el numero de aviones, y le suma 1.

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

Cuando hacemos click en el button, ocurre algo curioso, nos sale NaN y el console.log(this) sale el codigo HTML "<button class="buy">Buy new plane 🛩</button>"

Esto es porque el EVENT HANDLER FUNCTION esta llamando a la funcion, obteniendo el boton

Por el contrario si es el OBJECT que llama a la funcion directamente obtendremos el resultado puesto que aqui el this keyword funciona dinamicamente, es decir, depende de quien le llame, reaccionara de una forma u de otra!
*/
lufthansa.buyPlane();
/*
Podemos ver que la funcion empieza con los 300 aviones:
{airline: "Lufthansa", iataCode: "LH", bookings: Array(1), planes: 300, book: ƒ, …}
*/
/*
Para solucionar el problema de nuestro EVENT HANDLENER debemos forzar al this KEYWORD a que apunte al OBJECT lufthansa, si no la logica dentro de la function buyplane no funcionara, por ello nos preguntaremos si usar el CALL METHOD ya conocido o el BIND METHOD?

When do we use CALL METHOD and when do we use BIND METHOD?

1. Do I need to store this function in a variable for later use? If so, use bind()

2. Do I need to pass this function as an argument? If so, use bind()

3. Do I need to call this function right now? If so, use call()

En nuestro caso necesitamos pasar una FUNCTION y no llamarla, por lo que el CALL method no nos vale, puesto que llama a la funcion, entonces usamos el BIND method, indicandole que el this KEYWORD debe ser el OBJECT lufthansa:
*/
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //301 302 303...y sucesivamente a medida que vayamos haciendo click en el button.
/*
Otra gran uso del BIND METHOD seria el PARTIAL APPLICATION, que si recordamos es basicamente predifinir parametros,

Creamos una funcion general para calcular los impuestos, en la que pasamos un rate del 10% = 0.1 y un valor cualquiera.
*/
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //220
/*
Imaginemos que hay un impuesto que usamos todo el rato, el IVA en España es del 21%

El primer argumento es el this KEYWORD, pero en este caso no nos importa, no esta en la funcion, por ello lo podemos dejar como null (aunque podriamos poner cualquier valor, puesto que no va a pasar nada con el)
*/
const addIVA = addTax.bind(null, 0.21);
//Esto es lo mismo que si hacemos:
// addIVA = value => value + value * .21;
//Ya podemos comenzar a usarla:
console.log(addIVA(100)); //121
console.log(addIVA(2000)); //2420
console.log(addIVA(500)); //605

//No hay que olvidarse que el orden de los argumentos es importante, es decir, si el rate fuese el segundo argumento en la funcion addtax, no funcionaria, deberiamos hacerlo teniendo en cuenta el orden!

/*
CHALLENGE : ONE FUNCTION RETURNING ANOTHER FUNCTION

Hacer el mismo ejercicio que antes con los impuestos pero usando la tecnica de "una funcion devolviendo otra" de la leccion 105
*/
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addIVA2 = addTaxRate(0.21);
console.log(addIVA2(150)); //181.5
console.log(addIVA2(300)); //363
console.log(addIVA2(50)); //60.5
console.log(addIVA2(5000)); //6050

//Esto es otra forma de hacer lo mismo que con el BIND METHOD, pero usando FUNCIONES que llaman a otras FUNCIONES
