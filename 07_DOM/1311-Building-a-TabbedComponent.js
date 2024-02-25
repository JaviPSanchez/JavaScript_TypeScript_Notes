'use strict';

/*
En esta seccion vamos a implementar un COMPONENTE muy conocido, el TABBED COMPONENT.

Normalmente cuando hacemos click sobre un boton, cambiara el contenido de la pestaña.

Para este componente necesitamos seleccionar bastante codigo HTML:

1/ Los tres ELEMENTS TAB : class=".operations__tab"
2/ El CONTAINER : class="operations__tab-container"
3/ El contenido de cada boton : class=".operations__content"
*/
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//Añadimos los EVENT HANDLER usando el EVENT DELEGATION:

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //guard clause
  if (!clicked) return; //  Cuando no hay nada clicked ELEMENT queremos salir inmmediatamente de la funcion y de esa forma el codigo no sera ejecutado. En nuestro caso con un null que es un FALSY VALUE sera true y la funcion saldra. Tambien podriamos haber hecho:
  /*
  if(clicked) {
    clicked.classList.add('operations__tab--active');
  }
  */
  //Ahora queremos que cuando un tab este seleccionada el resto no realice la transformacion, para ello primero quitaremos a todas el .operations__tab--active y luego la que sea clicked se le añadira:
  tabs.forEach(eachTab => eachTab.classList.remove('operations__tab--active'));
  //Aqui borramos el resto de contenido de los tabs no seleccionados
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  clicked.classList.add('operations__tab--active');

  //Pasamos a activar el area de contenido, el contenido lo podemos elegir con el DATA ATTRIBUTE data-tab="2".
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
