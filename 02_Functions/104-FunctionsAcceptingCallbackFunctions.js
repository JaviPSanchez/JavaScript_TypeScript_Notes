'use strict';

/*
En este seccion vamos a poner en practica el concepto de FUNCTION accepting a CALLBACK FUNCTIONS as an input

Creamos dos funciones basicas que simplemente toman dos STRINGs

la primera toma un STRING y lo reemplaza por otro nuevo pero sin espacios

La segunda toma un STRING y transforma la primera palabra en UpperCase
*/
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Ahora podemos crear nuestras HIGHER ORDER FUNCTION, puesto que toma otra funcion en uno de sus argumetos "func"

const transformer = function (str, func) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${func(str)}`);
  console.log(`Transformed by: ${func.name}`); //Las funciones no solo pueden usar METHODs sino que tambien PROPERTIES como .name
};

//upperFirstWord es la CALLBACK FUNCTION
transformer('JavaScript is the best!', upperFirstWord);
/*
Original string: JavaScript is the best!
Transformed string: JAVASCRIPT is the best!
Transformed by: upperFirstWord
*/

//oneWord es la CALLBACK FUNCTION
transformer('JavaScript is the best!', oneWord);
/*
Original string: JavaScript is the best!
Transformed string: javascriptisthebest!
Transformed by: oneWord
*/

//Podemos decir que las CALLBACK FUNCTIONS no son llamadas por nosotros de una forma manual sino de una forma automatica por JS.

// Todo este concepto es lo mismo que hemos visto hasta ahora con el DOM y la funcion addEventListener, que es una HOD, puesto que llama a otras funciones, la cual es CALLBACK como high5
const high5 = function () {
  console.log('🖐');
};
document.body.addEventListener('click', high5);

/*
En resumidas cuentas, hay que comprender que en JS las CALLBACKS FUNCTIONS estan presentes todo el rato!

Pero porque se usan tanto, y porque son utiles?

La primera ventaja que nos ofrecen es que nos permiten dividir nuestro codigo en partes reutilizables e interconectadas entre si.

Pero hay una segunda y mucho mas importante funcion y es que las CALLBACK FUNCTIONS nos permiten crear ABSTRACTION...wow, y que coño es esto? 

Si volvemos al ejemplo del principio, podriamos decir que la funcion Transformer le importa tres cominos como se realizan las transformaciones de los STRING que metemos, ese nivel de detalle no le interesa, todo lo que quiere es transformar un STRING.

Podriamos a ver cogido todo el codigo de las diferentes funciones y haberlo metido dentro de transformer
*/
const transformer2 = function (str, func) {
  str.replaceAll(' ', '').toLowerCase();
  [first, ...others] = str.split(' ');
  [first.toUpperCase(), ...others].join(' ');
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${func(str)}`);
  console.log(`Transformed by: ${func.name}`);
};

//Pero en vez de hacer esto lo que hacemos es ABSTRACT y crear un nivel superior de abstraction, podemos decir que la HLF transformer deja los low level details a las low level functions oneWord y upperFirstWord.
