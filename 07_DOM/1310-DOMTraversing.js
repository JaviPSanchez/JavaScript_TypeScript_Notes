'use strict';

/*
DOM traversing es basicamente como indica su nombre desplazarse a traves del DOM. Lo que quiere decir que podemos seleccionar un ELEMENT basado en otro ELEMENT o relativo a otro ELEMENT, algo de mucha importancia.

Un ejemplo seria un CHILD dependiendo de un PARENT.

Veamos un ejemplo, vamos a trabajar con un elemento H1 y a partir de este vamos a bajar hacia abajo, vamos a subir y vamos a desplazarnos en horizontal. Utilizaremos un par de METHODS y PROPERTIES to walk around this ELEMENT.
*/
/*
<div class="header__title">
  <h1>
    When
    <!-- Green highlight effect --> 
    <span class="highlight">banking</span>
    meets
    <br />
    <span class="highlight">minimalist</span>
  </h1>
  <h4>A simpler banking experience for a simpler life.</h4>
  <button class="btn--text btn--scroll-to">Learn more &DownArrow;</button>
  <img src="img/hero.png" class="header__img" alt="Minimalist bank items" />
</div>;
*/
//Empezamos seleccionandolo

const h1 = document.querySelector('h1');

/////////////////////DOWNWARDS/////////////////////

//Going downwards, so basically selecting CHILD ELEMENTS, vamos a seleccionar la class .highlight

console.log(h1.querySelectorAll('.highlight')); //Aqui seleccionaremos todos los ELEMNTS con la class="hightlight" que son CHILDS de H1. El resultado seran dos SPAN TAGs. Cade destacar que existen otros ELEMENTS con la misma CLASS en otra parte del codigo no seran seleccionados al no ser CHILDS de H1.

//A veces necesitamos el DIRECT CHILDREN

console.log(h1.childNodes); //Obtendremos un monton de informacion, tal que :
/*
NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]

Esto es porque los NODES pueden ser cuqlauier cosa, desde textos, elementos o incluso comentarios.
*/

//Si nuestro objetivo serian solo los ELEMENTS:

console.log(h1.children); //esto nos dara un HTML COLLECTION actualizada de los ELEMENTOS HTML dentro de H1.
/*
HTMLCollection(3) [span.highlight, br, span.highlight]
*/

//Esta PROPERTIE solo funciona por los direct children. FInalmente podemos ver FIRST and LAST ELEMENT CHILD.

console.log(h1.firstElementChild);
console.log(h1.lastElementChild);

//Podriamos usarlos para modificar el STYLE por ejemplo:

h1.firstElementChild.style.color = 'white'; //Solo el primer CHILD sera modificado.
h1.lastElementChild.style.color = 'red'; //El ultimo CHILD tendra el color rojo.

////////////////////UPWARDS/////////////////

console.log(h1.parentNode); //Obtendremos el header_title que es el PARENT ELEMENT
console.log(h1.parentElement); //Mismo que el parenNode, puesto que es un NODE tambien en este caso.

//Hay en muchas ocasiones que necesitamos un PARENT ELEMENT que no es un PARENT ELEMENT directo. Si tubiesemos multiples HEADERS con la class="header", pero solo queremos el que es PARENT del ELEMENT H1, usamos el METHOD closest() obteniendo un query STRING como input como obtendriamos con .querySelector o .querySelectorAll

h1.closest('.header');
h1.closest('.header').style.backgroundColor = 'black'; //Cambiamos todo el background del ELEMENT HEADER a negro.

//Tambien podriamos elegir el ELEMENT en si mismo:

h1.closest('h1').style.backgroundColor = 'blue'; //est METHOD es muy parecido al querySelector pero mirando hacia arriba en el DOM TREE.

/////////////SIDEWAYS///////////////

//Podemos elegir SIBLINGS en el DOM TREE. En JS solo podemos elegir direct siblings, no nos deja ir mas alla. Solo el anterior y el posterior.

console.log(h1.previousElementSibling); //null, no hay nada
console.log(h1.nextElementSibling); //<h4>A simpler banking experience for a simpler life.</h4>

console.log(h1.previousSibling); //#text
console.log(h1.nextSibling); //#text

//Si quisiesemos todos los SIBLINGS y no solo el anterior y posterior habria que moverse al PARENT ELEMENT y leer todos los CHILDREN desde ahi.

console.log(h1.parentElement.children); //HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img] Obtenemos todos los SIBLINGS.

//Si quisiesemos hacer el SPREAD del HTML COLLECTION podriamos hacerlo sin problemas al ser un ITERABLE y hacemos un loop con el forEach() METHOD:

[...h1.parentElement.children].forEach(function (element) {
  if (element !== h1) element.style.transform = 'scale(0.5)'; //Conseguimos reducir a la mitad el resto de SIBLINGS excepto el H1!
});

//Esta es una buena forma de trabajar con todos los SIBLINGS de un ELEMENT!

//Finalmente comentar, que DOM TRAVERSING es algo importante de entender puesto que lo usamos todo el tiempo, sobre todo cuando hacemos complejas tecnicas de DOM DELEGATION.
