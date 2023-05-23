'use strict';

/*
Vamos a ver con mas detenimiento como funciona el EVENT BUBBLING.

En esta practica vamos a poner EVENT HANDLENERs a la barra de navegacion asi como a todos sus PARENTS ELEMENTS.

Cuando hagamos click sobre este ELEMENT añadiremos random background colors a todos los PARENTs ELEMENTS de tal forma que veamos como funciona EVENT BUBBLING.
*/
//Empezamos creando el random color:
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min); //Formula para generar un INTEGER random.
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));
//rgb(238, 130, 25)
//rgb(183, 17, 55)
//rgb(122, 228, 229)

//Pegamos los EVENTS HANDLENERS al link del ELEMENT nav__link y tambien al nav__links y el header entero nav.

document.querySelector('.nav__link').addEventListener('click', function (e) {
  //Recordar que en un EVENT HANDLENER el this keyword apunta al ELEMENTO donde el EVENT HANDLER esta creado.
  this.style.backgroundColor = randomColor();
  //Al hacer click veremos como el ELEMENT cambia de color de manera random.
});

//<cmg /images/Picture7.jpg>

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(); // Aqui podemos ver que al pulsar el link features, este event listener tambien se da por aludido y dota de un color random al CONTAINER donde se encuentra. Sin embargo, si hacemos click sobre el CONATINER de .nav__links solo se cambiaran de color el propio CONATINEr y el PARENT NAV! debido al BUBBLING
});

//<cmg /images/Picture8.jpg>

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(); //Aqui solo se calbia de color el CONATINER NAV, el resto quedan sin modfificar puesto que son CHILDs y no afecta el BUBBLING!
});

//<cmg /images/Picture9.jpg>

//Ahora vamos un pelin mas alla, hablaremos del EVENT TARGET, para ello añadiremos el event target:

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget); //El e.currentTarget es donde esta el event handler attached. En .nav__link sera el mismo para todos, pero
  console.log(e.currentTarget === this); //true //Destacar que el current ELEMENT es lo mismo que el this keyword, los dos apuntan al ELEMENTO donde el EVENT LISTERNER esta pegado.
  //Una cosa importante de entender es que podemos parar el EVENT PROPAGATION, todo lo que hay que hacer es llamar el EVENT STOP PROPAGATION.
  e.stopPropagation(); //el cambio de color solo afectara al .nav__link y no al resto de PARENTS: .nav__links o .nav
});

//<cmg /images/Picture10.jpg>

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

//<cmg /images/Picture11.jpg>

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

//<cmg /images/Picture12.jpg>

//Cabe señalar que durante la CAPTURING PHASE por defecto esta desactivada la PROPAGACION, de todas formas esta fase nos da igual... a nosotros no nos afecta! De todas formas si quisiesemos capturar los EVENTs durante esta fase, podemos definir un tercer parametro en la funcion addEventListener()

//Por ejemplo:

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  true //Por defecto esta puesto e false.
); //Fijamos el tercer parametro en true so the event handler will no longer listen to bubbling events but instead to capturing events, in practice is going to look the same, pero en la consola veremos que STRING de console.log "NAV" o "CONTAINER" o "LINK" aparecera el primero puesto que este EVENT a medida que desciende hacia abajo en el DOM escuchara el EVENT pasar mientras que los otros dos e.target y e.currentTarget lo haran cuando suba hacia arriba, estaran buscando por BUBBLING EVENTS, luego pasaran despues de la CAPTURING PHASE.

//<cmg /images/Picture13.jpg>

//La unica utilidad de tener activos "true" CAPTURING y BUBBLING es para historical reasons, en tiempos donde los BROWSERS implementaban diferentes versiones de JS.

// Finalmente comentar que la BUBBLING PHASE puede ser muy util for something called EVENT DELEGATION y que veremos en la siguiente leccion.
