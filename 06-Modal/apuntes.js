/*
********UI DESIGN : MODAL WINDOWS & ADDING AND REMOVING CLASSES********

Trabajar con clases es algo que se hace todo el rato!, es muy importante porque nos permite agregar multiples propiedades CSS en un mismo container! Cada clase es como un CONTAINER con muchas propiedades dentro de este. Podemos activar y desactivar diferentes estilos al mismo tiempo, algo muy importante!

En esta leccion aprenderemos a diseñar nuestros primeros elementos UI. Especialmente las funcionalidades de ADDING y REMOVING CLASSES todo el tiempo para cambiar la apariencia de nuestros elementos en nuestra pagina Web.

Son botones que al seleccionarlos se nos abre una ventana, ocupando toda la pagina.

La principal forma de manipular WEB PAGES es con las CLASSES, por ello es importante aprender a manipular con el DOM este tipo de propiedades.

El workflow es como siempre, seleccionamos elementos y los guardamos en variables.

En nuestro codigo HTML podemos encontrar la ventana escondida, de ahi la CLASS hidden en CSS esta desactivado:

//HTML
<div class="modal hidden">
      <button class="close-modal">&times;</button> // Boton para cerra la ventana modal
      <h1>I'm a modal window 😍</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div class="overlay hidden"></div> // Esta propiedad pone en segundo plano la pagina y la deja borrosa
//CSS
    .hidden {
  display: none;
}

Hay que seleccionar modal, overlay, el close-modal bottom y show-modal, este ultimo tendremos tres clases iguales, lo cual nos creara una limitacion al utlizar la propiedad querySelector, solo el primer sera seleccionado, por ello usamos querySelectorAll (Nos creara na especie de ARRAY llamada NodeList)

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

Creamos un LOOP para pasar por todo el ARRAY de nuestra NodeList:

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent); //En cada iteracion i, simplemente grabamos el textContent que queramos.
}

Vamos a ir un paso mas alla, y en vez de solamente leer el text content, vamos a llamar a un Event Listener Method, para activar el click EVENT! y como segundo argumento tendremos la funcion con el codigo que se ejecutara cuando hagamos click sobre el boton. Pondremos una funcion ANONYMOUS.

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button Clicked');
});

Ahora dentro de la funcion vamos a llamar a la CLASS .modal, llamaremos al elemento guardado en la variable modal y le asignaremos la .classList PROPERTY, que a su vez tiene sus propios METHODS. utilizaremos el METHOD .remove para desactivar el METHOD hidden. Tambien aprovecharemos para llamar a la CLASS Overlay y eliminar la restriccion de hidden cuando hacemos click sobre el boton.

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden'); 
  });

  Lo proximo que queremos hacer es lo contrario, esconder la modal window, llamando a la class, btnCloseModal con un EVENT LISTENER.

  btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

Otra forma de cerrar la MODAL WINDOW es haciendo click fuera del cuadro, es decir, en el overlay. 

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

Finalmente vamos a realizar un poco de REFACTORING, si vamos a usar varias veces la misma funcion en diferentes EVENT LISTENERS METHODS, es mejor llamar a la funcion y pasarla como un argumento que escribir varias veces las mismas lineas de codigo:

const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


******************KEYPRESS EVENTS**********************


Finalmente vamos a ver como reaccionar frente a KEYBOARD RESPONDS. Para escuchar a los EVENTOS de nuestro Keyboard hay que seguir utiliando AddEventListerners. Los KEYBOARD EVENTS son los conocidos GLOBAL EVENTS. Para llamarlos es como de costumbre:

document.addEventListener('keydown', function () {
  console.log('A key was pressed');
});

al presionar una tecla, sea cual sea "keydown" se creara un OBJECt con diferente informacion al respecto, una de sus propiedades es el valor key: que nos dira la tecla presionada. para loogear este valor basta con hacer un console.log:

document.addEventListener('keydown', function (e) {
  console.log(e.key); //con la propiedad key, 
});

Queremos que al presionar esc se cierre el MODAL WINDOW, para ello debemos ejecutar la funcion closeModal y ademas asignar dos condiciones, una que la tecla ESC sea presionada obviamente y la segunda que no contenga la propiedad hidden, indicandonos que es visible en el BROWSER, en ese momento sera cuando deberemos cerrar la ventana con la KEY ESC:

if (e.key === 'Escape' && !modal.classList.contains('hidden'))
    // if (!modal.classList.contains('hidden')) {
    //Si contiene hidden, quiere decir que no es visible, muego nosotros queremos cerrarlo cuando sea visible, es decir, si no contiene hidden.
    closeModal(); // Ejecutamos el code de la funcion closeModal.

*/
