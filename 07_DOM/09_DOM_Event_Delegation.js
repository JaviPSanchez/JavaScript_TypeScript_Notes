'use strict';

/*
Ha llegado el momento de usar el poder de PAGE BUBBLING. Vamos a utilizar algo llamado EVENT DELEGATION.

De momento, vamos a implementar algo llamado SMOOTH SCROLLING BEHAVIOUR en la navegacion.

Cuando hacemos click en alguno de los links de la NAV nos desplazaremos de una forma fluida
y elegante hacia la seccion correspondiente.
*/
//Primero implementaremos este efecto sin EVENT DELEGATION, seleccionamos los links de la nav bar

document.querySelectorAll('.nav__link');

//Esto nos devolvera una NODE LIST que podremos usar para el FOR EACH METHOD y poder dotarle del addEventListener METHOD.

document.querySelectorAll('.nav__link').forEach(function (element) {
  element.addEventListener('click', function (e) {
    e.preventDefault(); //Para prevenir que vayan a su elemento asignado
    const id = this.getAttribute('href'); //Solo queremos ver el attributo relativo no la URL absoluta (this.href) de ahi que usemos el METHOD getAttribute()
    console.log(id); //#section--1
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

/*
Podemos ver como ahora funciona muy bien, pero no es del todo eficiente,
puesto que estamos añadiendo el mismo EVENT HANDLENER a los tres elementos o lo que eslo mismo,
estamos usando la misma CALLBACK FUNCTION, algo que no es necesario.

Cierto es que para tres elementos no es un gran problema, pero si tenemos 100 o 1000 o 10000,
empezaria a dar por culo desde un punto de vista de PERFORMANCE!
Hay que tener en cuenta que el METHOD FOR EACH hace copias de la funcion y si tubiesemos 10000 ELEMENTS
tendriamos 10000 FUNCTIONS.

Por ello vamos a usar EVENTS DELEGATION y solventar este problema de PERFORMANCE.
Con el EVENT DELEGATION we use the fact that EVENTS BUBBLE UP, and we do that by putting
the EVENT LISTENER on a common PARENT for all ELEMENTS that we are interested in.

En nuestro caso sera el ELEMENT con la class nav__links.

Situaremos nuestro EVENT HANDLER dentro de este ELEMENTO y una vez que el EVENTO es generado,
realizara el BUBBLE UP pudiendo capturar el EVENTO en este PARENT ELEMENT y manipularlo desde ahi.
Sabemos donde ha sido generado el EVENT, luego podemos usar la PROPERTIE event.target

Para crear el EVENT DELEGATION, necesitamos hacer dos pasos:
*/

//Primero añadimos el EVENT LISTENER a un common PARENT de los ELEMENTS que nos interesan:

//Como segundo paso es determinar que ELEMENTO a originado el EVENTO permitiendonos trabajar con ese ELEMENT

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target); // <a class="nav__link" href="#section--1">Features</a>

  //MATCHING STRATEGY --> Esto es importante porque queremos ignorar los clicks que no ocurran en los tres links deseados: nav__link
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/*
Finalmente comentar que con el EVENT DELEGATION hay que hacer un pelin mas de codigo pero merece la pena al final.

Hay un use case aun mas interesante de EVENT DELEGATION que es cuando estamos trabajando con ELEMENTS
que no estan aun en la pagina o el RUNTIME, es decir, en el momento que la pagina carga.
Por ejemplo botones que añadidos dinamicamente mientras usamos la APP... en ese caso no es
posible añadir EVENT HANDLERS en ELEMENTS que no existen, but we will still be able to handle events on
ELEMENTS that don't exist at the beginning by using EVENT DELEGATION. Veremos todo esto mas tarde en otra leccion!
*/
