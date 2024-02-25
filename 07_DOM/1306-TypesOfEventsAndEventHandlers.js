'use strict';

/*
Ya hemos trabajado con EVENTS antes, pero conviene añadir conceptos importantes para dar un poco de claridad a estas funciones.

Un EVENT es basicamente una señal generada por un DOM NODE, cuando hablamos de señal queremos decir algo que ha ocurrido, como un click en una zona especifica o el raton moviendose o el usuario accionando el modo full screen, etc.

Todo lo que ocurre en nuestra WebPage genera un EVENTO. Como sabemos podemos escuchar estos eventos con los EventListeners.
*/

//Hasta ahora hemos trabajado basdtante con el "click" EVENT LISTENER. Ahora vamos a ver otro tipo de EVENT, el MOUSE ENTER EVENT (Que vendria a ser como el :hover en CSS).

//Definimos y seleccionamos, como siempre:

const h1 = document.querySelector('h1');

//Escuchamos

h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: Great! Your are reading the heading 🥨.');
});

//Con este EVENT LISTENER cada ve que nos posicionemos sobre el texto H1 saltara la alert.

//Existen una multitud de EVENTS, los podemos consultar en MDN, conocemos "click", "mouseenter" aunque los mas importantes son los relacionados con el KEYWORD y el MOUSE.

//Vamos a ver ahora otra forma de dotar a los ELEMENTS con EVENT LISTENERS. Seleccionamos directamente nuestro ELEMENT y usamos el ON EVENT.

//Esta forma de escuchar EVENTS es OLD SCHOOL, hoy se usa el addEventListener().

h1.onmouseenter = function (e) {
  alert('onmouseenter: Great! Your are reading the heading 🥨.');
}; //Al igual que antes, saldra la alert en la pagina.

//Una de las ventajas del addEventLIsterner es que nos permite añadir multiples Listeners al mismo EVENT y la segunda y mas importante es que nos permite eliminar un EEVENT lISTERNER en caso de no necesitarlo mas.

const alertH1 = function (e) {
  alert('onmouseenter: Great! Your are reading the heading 🥨.');

  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

//De esta forma si volvemos a posiciionarnos sobre el ELEMENT ya no pasa nada, solo lo hace una vez.

//Si quisiesmos podriamos definir un TIMER a nuestro EVENT en cualquier punto de nuestro codigo! indicandole que despues de 3 segundos, si nos volvemos a posicionar sobre el ELEMENT H1 ya no se activa la alert, no confundir con que despues de 3 segundos, desaparece la alerta!

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//Por ultimo tenemos una tercera forma de usar los Event Listeners. Que es usando los HTML ATTRIBUTE, lo que hacemos es escribir directamente sobre HTML la alert, no deberia ser usado, pero lo vemos por curiosidad.

<h1 onclick="alert('HTML alert')">
  When
  <span class="highlight">banking</span>
  meets
  <br />
  <span class="highlight">minimalist</span>
</h1>;
