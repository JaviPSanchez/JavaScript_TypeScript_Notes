'use strict';

/*
En esta leccion continuaremos aprendiendo como seleccionar ELEMENTS, empezando por la parte superior de cualquier documento HTML.
*/
console.log(document); // Po si solo no es suficiente para seleccionar un DOCUMENT ELEMENT, puesto que no es el real DOM ELEMENT, por ejemplo, para aplicar un style CSS a la pagina entera habria que seleccionar .documentElement:
console.log(document.documentElement); // Nos aparecera todo el codigo HTML
/*
<html lang="eng">
<head></head>
<body></body>
</html>
*/

/////////////SELECTING ELEMENTS////////////////

//Podemos seleccionar ELEMENTS especiales no necesitamos escribir el selector querySelector. en el codigo HTML:
console.log(document.head); // <head></head>
console.log(document.body); // <body></body>
//Pero para cosas mas concretas SI lo tenemos que hacer
console.log(document.header); // Undefined
console.log(document.querySelector('.header')); // <header></header>

//Podemos seleccionar el class="header" con el METHOD .querySelector y nos devolvera el primer ELEMENT que coincida con el selector "header".
document.querySelector('.header');
//Para elegir multiples ELEMENTS, por ejemplo tenemos multiples ELEMENTS SECTIONS con la class ".section"
document.querySelectorAll('.section');
//Si la guardamos en un VARIABLE
const allSections = document.querySelectorAll('.section');
console.log(allSections); //Esto nos devolvera un NODE LIST que contiene todos los ELEMENTS con el selector .section:
/*
NodeList(4) [section#section--1.section, section#section--2.section, section#section--3.section, section.section.section--sign-up]
0: section#section--1.section
1: section#section--2.section
2: section#section--3.section
3: section.section.section--sign-up
*/

//podemos usar otros METHODs como:
document.getElementById('section__1'); //Solo pasamos el ID sin el SELECTOR #.
//Existen otros como:
document.getElementsByTagName('button'); //Nos devuelve todos los ELEMENTS con el nombre button en su TAG

//Luego si necesitamos COLLECTIONS, que a veces es util, tenemos:

const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // Esto nos devolvera una COLLECTION, diferente a un NODE LIST, las COLLECTION se actualizan en tiempo real. Si borramos un button o manipulamos el DOM, aparecera reflejado. Sin embargo, con NODE LIST si borramos algo en la consola seguira estando el ELEMENT en la NODE LIST. No se actualiza. Es algo importante a tener en cuenta.
/*
HTMLCollection(9) [button.btn--text.btn--scroll-to, button.btn.operations__tab.operations__tab--1.operations__tab--active, button.btn.operations__tab.operations__tab--2, button.btn.operations__tab.operations__tab--3, button.slider__btn.slider__btn--left, button.slider__btn.slider__btn--right, button.btn.btn--show-modal, button.btn--close-modal, button.btn]
*/

console.log(document.getElementsByClassName('btn')); //Seleccionamos por nombre de nuevo, no por clase.
/*
HTMLCollection(5) [button.btn.operations__tab.operations__tab--1.operations__tab--active, button.btn.operations__tab.operations__tab--2, button.btn.operations__tab.operations__tab--3, button.btn.btn--show-modal, button.btn]
*/

/////////////CREATING & INSERTING ELEMENTS////////////////

//podemos crear ELEMENTS HTML usando:

insertAdjacentHTML();

// o tambien:

document.createElement('div'); //esto nos devolvera un DOM ELEMENT que podemos guardar.

const message = document.createElement('div');

//Este ELEMENT no esta aun en el DOM, es simplemente un DOM OBJECT que no podemos usar. Si quisiesemos usarlo en la pagina hay que insertarlo manualmente. Podemos tambien añadir classes.

message.classList.add('.cookie-message');

/* COOKIE MESSAGE
.cookie-message {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    background-color: white;
    color: #bbb;
    font-size: 1.5rem;
    font-weight: 400;
  }
  */

//Podemos añadir simplemente texto:

message.textContent =
  'We usa cookied for improved functionality and analytics.';

//Podemos insertarlo en HTML dejandolo dentro del DOM.

message.innerHTML =
  'We usa cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
/*
De la misma forma que hemos utilizado innerHTML podriamos haber utilizado insertAdjacentHTML aunque hacen cosas diferentes.

.innerHTML will completely replace all the HTML inside of the element with whatever we assign it.
  
.insertAdjacentHTML will add whatever we assign to it at a certain point in the element, determined by the position parameter.
  
The reason we're using .innerHTML here is that we just created the element, and we want to define exactly what HTML it should contain. We don't have to worry about overwriting anything.
  
That being said, we could've just as well used .insertAdjacentHTML here, since we know the newly created element should be empty.
  
In summary, you want to use .insertAdjacentHTML when you want to add to existing HTML in an element. We use .innerHTML if we want to start from scratch with our own HTML.
*/

//Ahora lo que queremos es insertarlo en el DOM, en el HEADER por ejemplo usando .prepend() que lo que hace es añadir el ELEMENT como el primer CHILD del ELEMENT, pero podriamos añadirlo como el ultimo CHILD con .append()

const header = document.querySelector('.header');
header.prepend(message); //Y nos aparece un mensaje en la parte superior del BROWSER con el boton y todo!

header.append(message); //Aparece en la parte inferior del HEADER.

/*
Cabe señalar que message solo podemos insertarlo una vez, no puede estar en multiples sitios al mismo tiempo, esto es porque es un LIFE ELEMENT viviendo en DOM. Es como una persona que no puede ser omnipresente. Hemos movido el message de prepend a append, lo cual quiere decir que no solo podemos visualizar elementos con estos METHODs sino que tambien moverlos! Esto es porque el DOM ELEMENT es UNIQUE solo puede existir en un sitio al mismo tiempo.

¿Pero y si quisiesemos insertar multiples copias de este message?

Habria que clonar el message, permitiendonos tener la copia y el original
*/

header.append(message.cloneNode(true));

//Hay otros dos METHODS mas que son:

header.before(message); //Insertera el message ELEMENT before el heading
header.after(message); //Insertera el message ELEMENT after el heading.

/////////////DELETE ELEMENTS////////////////

//Queremos borrar el mensaje cuando hacemos click sobre el boton.

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Este METHOD es muy reciente, antes habia que seleccionar el PARENT y despues el CHILD. Esta forma de moverse en el DOM es lo que se conoce como DOM TRAVERSING, que veremos mas adelante...

message.parentElement.removeChild(message);
