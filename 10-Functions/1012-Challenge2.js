'use strict';

/*
*************Coding Challenge #2************

This is more of a thinking challenge than a coding challenge 🤓
Your tasks:

1. Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!
*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  //Event Listener to blue
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });

  //The header VARIABLE is inside the backpack 🎒 of the FUNCTION expression
})();
/*
2. And now explain to yourself (or someone around you) why this worked! Take all the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example

En otras palabras ¿Como es posible que la funcion callback tenga acceso a la variable header?

Pues por el CLOSURE, la variable header nace dentro de la funcion IIFE y en ese momento guardamos en todo momento la posiciones de donde nacio esta variable, cuando la usamos con la segunda funcion tenemos acceso a esta.
*/

// Una cosita, si intentasemos hacer lo mismo fuera del SCOPE de la IIFE function no funcionaria, puesto que es inacesible, el CLOSURE no funciona aqui.
/*
document.querySelector('body').addEventListener('click', function () {
  header.style.color = 'blue';
});
*/
