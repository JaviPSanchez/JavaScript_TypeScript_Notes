'use strict';

/*

<cmg /images/Picture16.jpg>


Con este efecto conseguimos al hacer click sobre un ELEMENT desplazarnos de una forma fluida hacia la seccion de interes.

Vamos a ver dos formas de hacerlo, una OLD SCHOOL que nos muestra un punto de vista interesante con funciones utiles y otra mas moderna y simple que solo funciona en los BROWSER MODERNOS.


Comenzamos como siempre seleccionando nuestros ELEMENTS de interes, en este caso un button, el btn--scroll-to y la seccion 1, que es un id="section--1".


<button class="btn--text btn--scroll-to">Learn more &DownArrow;</button>
<section class="section" id="section--1">
*/

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//Una vez seleccionados hay que añadir el EVENT LISTENER

btnScrollTo.addEventListener('click', function (e) {
  //Primero hay que obtener las coordenadas del ELEMENTO al que queremos ir
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  //Cuando hacemos click sobre el boton, nos parece en consola algo tal que asi "DOM RECTANGLE" con las PROPERTIES X position from the left side, Y position measured from the top..etc
  /*
  DOMRect {x: 0, y: 571.1111450195312, width: 1373.3333740234375, height: 1536.666748046875, top: 571.1111450195312, …}
  */
  //Toca ver la posicion del boton, usamos la PROPERTIE target para verlo:
  console.log(e.target.getBoundingClientRect());
  /*
  DOMRect {x: 111.66667175292969, y: 398.263916015625, width: 109.93055725097656, height: 28.663196563720703, top: 398.263916015625, …}
  */
  //Si quisiesemos ver la posicion actual de nuestro scrolling:
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset); //Current scroll (X/Y) 0 338.8888854980469 --> Esta distancia nos dara la posicion entre la parte superior del BROWSER y la posicion actual en el VIEWPORT. Siendo (0, 0) si estubiesemos situados en la parte superior de nuestra pagina web.

  //Si tenemos curiosidad, tambien podemos ver el width y el height de nuestro VIEWPORT
  console.log(
    'height and width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); //height and width viewport 743 1373

  //SCROLLING --> Nos vamos al window OBJECT y con el METHOD scrollTo introducimos las coordenadas del ELEMENT que nos interese, en nuestro caso la section 1:

  window.scrollTo(s1coords.left, s1coords.top);

  //El problema que tenemos aqui es que las coordenadas respecto a la parte superior son relativas al viewport, es decir, dependiendo de donde estemos situados, obtendremos una posicion u otra, nunca la misma, llevandonos a diferentes posiciones en la pagina. Lo ideal es hacer que la coordenada top de nuestra seccion sea relativa a la parte superior del BROWSER:

  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );

  //Podemos mejor aun mas esta ANIMATION, haciendola mas suave. Vamos a pasarle un OBJECT (con la propertie smooth) en vez de un ARGUMENTO.

  ////////////////OLD SCHOOL WAY/////////

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  ////////////////MODERN WAY/////////

  //seleccionamos el ELEMENT donde queremos hacer "scroll to" y llamamos la funcion scrollIntoView() pasandole el behaviour smooth, no hace falta hacer calculos raros!

  section1.scrollIntoView({ behavior: 'smooth' });
});

//No olvidar poner el METHOD preventDefault() para evitar que al hacer click sobre el boton se produzca el refresh que realiza por defecto los botones, impidiendo realizar el efecto correctamente:

btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  sectionDeInteres.scrollIntoView({ behavior: 'smooth' });
});
