/*
************FUNCTIONS : DECLARATION / EXPRESSION / ARROW**************


****************FUNCTION DECLARATION VS FUNCTION EXPRESSION*****************


Hay dos formas de escribir las funciones, la primera es la ya estudiada,
dandole un nombre a la funcion, y la segunda es sin darle un nombre especifico.
Quizas es mejor usar el metodo EXPRESSION por temas de organizacion.

FUNCION DECLARATION: La ventaja que tiene es que podemos llamarla lineas antes
de donde este escrita la funcion
*/
const age1 = calcAge1(1987);

function calcAge1(birthYear: number) {
  return 2021 - birthYear;
}

// FUNCION EXPRESSION:

const calcAge2 = function (birthYear: number) {
  // Aqui la funcion no tiene nombre, directamente la guardamos en la variable calcAge2.
  return 2021 - birthYear;
};
const age2 = calcAge2(1987); // Aqui es obligatorio lamarla despues de crearla.

console.log(age1, age2);
