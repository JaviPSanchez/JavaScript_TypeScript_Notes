'use strict';

/*
Para terminar combiene ver un par de diferentes EVENTS que ocurren en el DOM durante el ciclo de vida "lifecycle" de un WEBPAGE.

Cuando hablamos de lifecycle, queremos decir desde el mismo momento que la pagina es accedida hasta que el usuario sale de ella.

El primer EVENT que tenemos que ver es el DOM CONTENT LOADED. Este EVENT es inicializado por el DOCUMENT tan pronto como el codigo HTML es parsed. Lo que quiere decir que el HTML ha sido descargado y convertido en DOM TREE.

Tambien todos los scripts tienen que ser descargados y ejecutados antes de que el DOM CONTENT LOADED ocurra.

Cabe resaltar que el DOM CONTENT LOADED no espera a las imagenes ni external resources to load. Solo HTML y JS necesitan ser cargados.
*/

//Podemos escuchar a este EVENT

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed an DOM tree built!', e);
});

//Podemos ver si nos vamos a la consola --> network en la parte de abajo veremos DOMContentLoaded en 1.95s en nuestro caso. Que es el tiempo que tarda en cargar JS y HTML.

//Queremos que nuestro codigo sea ejecutado, solo cuando nuestro DOM este preparado....???

//El segundo EVENT es el LOAD EVENT que es ejecutado por el WINDOW en cuanto el codigo HTML is parsed asi como todas las imagenes y external resources like CSS. Cuando la pagina entera ha sido cargada, entonces este EVENT gets fired.

window.addEventListener('load', function (e) {
  console.log('Page fully loaded!', e); //Veremos que pasara un tiempo hasta que se carga el LOAD EVENT unos 6 segundos
});

//Tambien podemos ver el LOAD EVENT en la pestaña de NETWORK!

//Hay otro evento que nos permite ver el instante antes de que el usuario vaya a dejar la pagina web, podemos usar este EVENT para preguntar a los usuarios si quieren salir de la pagina 100%.

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  //In order to display a leaving confirmation, we need to set the return value on the event to an empty STRING for historical reasons...kind of wierd.!
  e.returnValue = '';
});
//En teoria deberia salir un pop up en el momento de salir de la pagina, los developers were actually able to customize the message, pero como todo, se emepezo a abusar de esta tecnica y ahora solo podemos ver un mensaje simple.
