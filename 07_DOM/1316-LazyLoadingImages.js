'use strict';

/*
Hasta ahora todos los efectos que hemos visto, son visuales, este que vamos a ver es mas orientado a mejorar la PERFORMANCE! una de las cosas mas importantes cuando construimos una WEBSITE!! LAZY LOADING has SEO benefits on the one hand, and on the other keeps visitors with slower Internet Connexions (for whom the page would load slower than on your own PC) sticking around. We may notice no difference since we don't even have to download that data, it's served for us straight from our own PC, but on a 1mb Internet Connexion, our visitors will.

Las imagenes tienen, de lejos, un gran impacto en nuestra pagina a la hora de cargar! Por ello es muy imporrtante que las imagenes esten optimizadas. Para ello podemos usar una estrategia llamada LAZY LOADING IMAGES!

La idea es de cargar las imagenes con bajas resoluciones al principio, guardando la original en el data source ATTRIBUTE que es un atributo especial que podemos usar (aunque podria ser otro). Este no es un atributo estandart de HTML, es como decimos, un atributo especial que podemos crear nosotros.

Como podemos adivinar, la idea es de una vez que llegamos a la imagen target (o incluso antes...) cargar esta con la original de alta resolucion!


Tambien vamos a eliminar la class="lazy-img" que podemos ver es un filtro que 
difumina la imagen, este filtro esta para evitar ver la imagen pequeña pixelada al principio antes de ser transformada en su original.

//HTML

<img
  src="img/digital-lazy.jpg" //Tamaño resolucion imagen muy pequeño 200x120, nos permite comrpimir la imagen de 500Kb a 16Kb!!
  data-src="img/digital.jpg" //Tamaño real imagen  2000x1200!!!
  alt="Computer"
  class="features__img lazy-img"
/>;

//Efecto en CSS

.lazy-img {
    filter: blur(20px);
}
*/

//Seleccionamos las imagenes, el problema es que no queremos seleccionar todas las imagenes de nuestra pagina, el logo por ejemplo no lo queremos seleccionar, por ello solo queremos elegir las que tienen el data source attribute. Podemos seleccionar ELEMENTS que contienen esta PROPERTY.
const imageTargets = document.querySelectorAll('img[data-src');
console.log(imageTargets);
/*
NodeList(3) [img.features__img.lazy-img, img.features__img.lazy-img, img.features__img.lazy-img]
0: img.features__img.lazy-img
1: img.features__img.lazy-img
2: img.features__img.lazy-img
*/
//Callback function, donde se encuentra nuestra funcionalidad
const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  //Usamos una GUARD CLAUSE para que solo cuando intersecten las target se ejecute el evento de reemplazar source, src="img/digital-lazy.jpg" por data-source, data-src="img/digital.jpg"
  if (!entry.isIntersecting) return;
  //Replace src --> data-src
  entry.target.src = entry.target.dataset.src;
  //Quitamos el filtro, lo cual es un poco behind the scenes, porque JS cambia la imagen, creando un LOAD EVENT el cual deberemos escuchar
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

//Creamos nuestro image Observer:
const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});
//cargamos nuestra target en el observer:
imageTargets.forEach(img => imageObserver.observe(img));

//Otra cosa importante es que no queremos que los users vean este efecto realizarse, queremos que todo pase antes de que el usuario llegue a las fotos! Poedmos forzar la carga de las fotos un poco antes. Simplemente crear un rootMargin:

const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

////////SITUATION FOR 5 IMAGES IN THE SAME ROW ////

/*
I have a section where I have 5 pictures inline (CSS Grid, each on a separate column but on the same row).

We can fixed it by instead of declaring the const entry, we can applied a forEach on the entries array.
*/
const loadImg = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
  });
};
