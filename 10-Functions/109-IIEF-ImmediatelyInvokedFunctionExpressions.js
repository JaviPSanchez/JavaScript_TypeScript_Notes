'use strict';

/*
A veces en JS necesitamos una FUNCTION que se ejecute una sola vez y no ser llamada nunca mas! si si, como lo oyes, una funcion que desaparece una vez llamada.

Puede parecer algo inservible, pero es una tecnica que usaremos en JS y necesaria en ciertos escenarios como por ejemplo con ASYNC/AWAIT

¿Como podemos hacer este truco de magia?

Basta con crear una funcion y llamarla una vez
*/
const runOnce = function () {
  console.log('This will never run again');
};
runOnce(); //El problema aqui es que podemos usarla tantas veces como queramos con solo llamarla.
/*
Queremos ejecutar una funcion y que no sea guardada en ninguna parte!

Para ello escribimos la function sola sin variable:

function(){
    console.log('This will never run again');
}

Esto nos dara error: Uncaught SyntaxError: Function statements require a function name

Podemos engañar a JS haciendolo creer que es una expresion, basta con envolver todo con parentesis ():

Para llamarla simplemente colocar los ( ) despues y se ejecutara un sola vez la funcion.
*/
(function () {
  console.log('This will never run again');
})(); //This will never run again

/*
Esto es lo que se conoce como IIFE

Tambien funciona en ARROW FUNCTIONS
*/
(() => console.log('This will also never run again'))(); //This will also never run again

/*
Nos puede surgir la duda de porque este pattern ha sido inventado, acaso su creador estaba puesto de tripis? posiblemente...el caso es que sabemos que las funciones crean SCOPES, y sabemos que un SCOPE no tiene acceso a los INNER SCOPES. En nuestro caso desde el GLOBAL SCOPE no tenemos acceso a los SCOPES dentro de las funciones IIFE
*/
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

console.log(isPrivate); // Uncaught ReferenceError: isPrivate is not defined

/*
Luego podemos decir que todo el SCOPE dentro de estas funciones es privado, esta ENCAPSULATED. Los datos ENCAPSULADOS y DATA PRIVACY son conceptos de extrema importancia en programacion, en muchas ocasiones necesitaremos proteger nuestras variables de ser sobre escritas por otras partes del programa o incluso external libreries.

Este es el porque de porque se inventaron las IIFE, esto no es un feature de JS en si, es un pattern que los developers han inventado.

Tambien las VARIABLES const y let crean SCOPES dentro de un BLOCK

Cuando creamos un BLOCK dentro de este no podremos acceder, es privado, pero con var no pasa asi, si podemos acceder.
*/
{
  const isPrivate = 23;
  var notSoPrivate = 55;
}
console.log(isPrivate); //ReferenceError: isPrivate is not defined
console.log(notSoPrivate); //55

/*
Esta es la razon de porque ya no se usan las IIEF, si todo lo que queremos es crear un nuevo SCOPE para DATA PRIVACY, todo lo que tenemos que hacer es crear un BLOCK como el de arriba, no hay necesidad de crear un funcion IIFE para crear un NUEVO SCOPE, a no ser que usemos var como variables...lo cual no se aconseja.

Pero si queremos usar una sola vez una Function, entonces el IIFE es el metodo a seguir incluso en MODERN JS!
*/

/*
We didn't mention about whay would happen if theres no semicolon when you have a line of code before IIFE. I'm having an error when I run IIFE. What I did is to put a semicolon to the last line of code I've written.

This will produce an error because I dont have a semicolon in the last line of code (the btn element) before the IIFE
*/
document
  .querySelector('.btn')
  .addEventListener(
    'click',
    myFunction
  )(function () {})();
/*
Now this will run because I put a semicolon in the element
*/
document.querySelector('.btn').addEventListener('click', myFunction);
(function () {})();
