'use strict';

const section1 = document.querySelector('#section--1');

/*
Vamos a implementar la STICKY NAVIGATION BAR de una forma mas eficiente y usando la nueva INTERSECTION OBSERVER API.

Pero...¿Que coño es el INTERSECTION OBSERVER API y porque es tan util?

Esta API permite a nuestro codigo observar cambios en la forma en que un TARGET ELEMENT intersecta a otro o la forma que intersecta al VIEW PORT.

Vamos a ver como funciona esta API.

Para usar esta API hay que crear una nueva INTERSECTION OBSERVER:
*/
// new IntersectionObserver();

//Guardamos el OBSERVER en una VARIABLE
const observerCallback = function (name) {}; //Nuestra funcion callback que llamaremos mas adelante...Esta funccion sera llamada cada vez que el OBSERVER ELEMENT, en nuestro caso el TARGET ELEMENT (seccion1), este intersectando el ROOT ELEMENT en el threshold que hemos definido del 10%.
const observerOptions = {}; //Esto sera un OBJECT OBSERVER.
const observer = new IntersectionObserver(observerCallback, observerOptions);
// Podriamos a ver escrito directamente la funcion y las opciones aqui, pero para dejarlo todo mas limpio las declaramos fuera.
observer.observe(section1); //Esta es la TARGET, la seccion 1.

//El OBJECT necesito una ROOT PROPERTIE, este ROOT ELEMENT sera quien intersecte la TARGET.

const observerOptions = {
  root: null, //al definirlo como null podremos ver como intersecta a todo el VIEWPORT.
  threshold: 0.1, //10% Esto es el porcentaje de interseccion al cual el OBSERVER CALLBACK sera llamado, o sea, la funcion observerCallback. Poemos tener varios valores en forma de ARRAY.
};

//Basicamente todo esto se resume a que cuando nuestra seccion 1 este intersectando al menos el 10% del VIEWPORT la funcion observerCallback sera llamada y ejecutada!

//Esta funcion sera llamada con dos argumentos, los entries y el OBJECT OBSERVER. Los entries son el ARRAY de thresholds

const observerCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
    /*
    Obtenemos un INTERSECTION OBSERVER ENTRY --> IntersectionObserverEntry {time: 106.99000000022352, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: false, …} a medida que vamos intersectando elementos podremos ver el valor de intersectionRatio: 0.14408601820468903 con el 10% ya calculado que es el que mas nos interesa. Tambien podemos ver si estamos intersectando la TARGET:
    isIntersecting: false
    isVisible: false
    */
  });
};
const observerOptions = {
  root: null,
  threshold: [0, 0.2, 0.5, 0.7],
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(section1);

//Si nos movemos a nuestra APP, el elemento que nos interesa es el HEADER, y una vez pasado el 10% que nos aparezca nuestro NAV BAR pegado!
//Definimos el ELEMENT a observar.
const header = document.querySelector('.header');
//Para poner en forma dinamica el rootMargin
const navHeight = nav.getBoundingClientRect();
console.log(navHeight); //Hay una PROPERTIE que se llama height
const navHeight = nav.getBoundingClientRect().height;

//Creamos el OBSERVER y el OBJECT OPTIONS directamente:
const stickyNav = function (entries) {
  //Usamos DESTRUCTURING para conseguir el primer ELEMENT out of entries[0]
  const [entry] = entries;
  console.log(entry);
  //Creamos la LOGIC detras de añadir y quitar CLASSES
  if (!entry.isIntersecting)
    //Si el TARGET no esta intersectando el ROOT, entonces queremos aplicar la sticky class.
    nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-90px', //Creamos un margen de 90px, antes de llegar al TARGET ELEMENT (header) se activara el sticky nav. Solo funciona con pixeles y %, no podemos poner rem .
  //Otra cosa importante es darse cuenta que este valor es HARD CODED, si queremos tener una pagina que se adapte hay que poner este valor en forma dinamica.
  rootMargin: `-${navHeight}px`, //de esta forma funciona en cualquier tipo de viewport!
});
headerObserver.observe(header);
