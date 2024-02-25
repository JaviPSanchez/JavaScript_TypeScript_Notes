'use strict';

/*
Vamos a seguir usando la API INTERSECTION OBSERVER, pero esta vez vamos a mostrar como ciertos ELEMENTS al ser alcanzados hacen un efecto. En este caso lo haremos con las secciones.

Es facil de implementar y no hay necesidad de acudir a librerias externas.

Esta animacion viene de CSS, por lo que la conseguiremos añadiendo una class a un ELEMENT.

Quitaremos a todas las secciones la class="section--hidden" que basicamente produciran el efecto de aparecer en pantalla con una pequeña traslacion.
*/
/*
.section--hidden {
    opacity: 0;
    transform: translateY(8rem);
}
*/
//Elements a observear, queremos todas las secciones
const allSections = document.querySelectorAll('.section');
//Callback, necesitaremos el parametro observer...
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  //Para saber cual es la target intersectada, vamos a decirle que solo quite la class cuando sea intersectada la seccion.
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threashold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //Agregamos de forma manual las classes al HTML, mejor que escribirlo de forma manual en el codigo HTML, hay usuarios que deshabilitan JS no permitiendoles ver la pagina.
  section.classList.add('section--hidden');
});

//Podemos mejorar la performance de nuestro SITE haciendo que la API deje de creas los EVENTS en segundo plano cuando ya no son necesarios, puesto que ya hemos ejecutado nuestro efecto una vez. Luego podemos unobserve:

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  //UNOBSERVE
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threashold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);

  section.classList.add('section--hidden');
});

/*
Hay un BUg en el codigo, If you open the page at the middle position (between section 1 and 2), refreshing page (f5), section 1 and 2 will not appears, observer will not work correctly.

Solution, make observer for each section!
*/

const createSectionObserver = function () {
  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    }
  };
  return new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });
};

allSections.forEach(section => {
  section.classList.add('section--hidden');
  createSectionObserver().observe(section);
});
