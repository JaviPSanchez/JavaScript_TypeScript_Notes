'use strict';

/*
En esta seccion veremos un efecto, el cual nos permite al hacer scroll down dejar fija la NAV BAR en la parte superior del BROWSER, un clasico!
*/
////////////////STICKY NAVIGATION////////////

//Para implementar este efecto vamos a usar el SCROLL EVENT el cual esta disponible en el OBJECT WINDOW y no el DOCUMENT.

//Este evento se ejecutara cada vez que hagamos scroll down en nuestra pagina!

window.addEventListener('scroll', function (event) {
  console.log(event); //Como podemos ver crea un monton de acciones en segundo plano, no es que sea muy eficiente...
});

//Comenzamos mirando donde esta nuestra scroll position actual, usamos window.scroll
const section1 = document.querySelector('#section--1');
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords); //DOMRect {x: 0, y: 483.3333435058594, width: 1387.77783203125, height: 1549.6876220703125, top: 483.3333435058594
const nav = document.querySelector('.nav');

window.addEventListener('scroll', function (event) {
  console.log(window.scrollY); //333.3333435058594 punto respecto a la parte superior del BROWSER
  // La pregunta es saber cuando el NAV debe comenzar a estar sticky? Hay que hacerlo de una forma dinamica, puesto que el VIEW PORT varia de una pantalla a otro, no es siempre el mismo. Definimos un punto que sabemos siempre sera el mismo, por ejemplo el comienzo de la seccion 1.
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

//Todo esto funciona, pero desde un punto de vista de PERFORMANCE es un desastre, especialmente en mobiles! en un PC moderno, puede que no pase nada pero mas vale prevenir que curar. Por lo que usando el SCROLL EVENT para hacer una accion en una posicion determinada no es la mejor forma de actuar.

//En la proxima leccion veremos una mejor forma y mas eficiente de hacer este efecto, con lo que se conoce como INTERSECTION of SERVER API.
