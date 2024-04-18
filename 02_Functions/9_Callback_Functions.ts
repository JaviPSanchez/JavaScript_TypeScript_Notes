/*
*********** FUNCTIONS CALLING OTHER FUNCTIONS ************

Basicamente llamamos a una funcion desde el cuerpo o interior de otra,
este workflow pasa todo el rato en JS, con el objetivo de no repetirse
mucho. DRY PRINCIPLE!
*/

function cutFruitPieces(fruit: number) {
  return fruit * 4;
}

function fruitProcessor(apples: number, oranges: number) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 2));

('use strict');

/*
En JS las Callback Functions estan presentes todo el rato!

En este seccion vamos a poner en practica el concepto de una funcion accepting 
a Callback Function as an input.
*/
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Ahora podemos crear nuestras HOF transformer(), puesto que toma otra funcion
// en uno de sus argumetos, func()

const transformer = function (str, func) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${func(str)}`);
  //Las funciones no solo pueden usar METHODs sino que tambien PROPERTIES como .name
  console.log(`Transformed by: ${func.name}`);
};

//upperFirstWordy() oneWOrld() son las Callback Functions
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

/*
Pero porque se usan tanto, y porque son utiles?

La primera ventaja que nos ofrecen es que nos permiten dividir nuestro codigo en partes
reutilizables e interconectadas entre si. Pero hay una segunda y mucho mas importante
funcion y es que las CALLBACK FUNCTIONS nos permiten crear ABSTRACTION...wow, y que coño es esto? 

Si volvemos al ejemplo del principio, podriamos decir que la funcion Transformer le importa tres
cominos como se realizan las transformaciones de los STRING que metemos, ese nivel de detalle
no le interesa, todo lo que quiere es transformar un STRING. Podriamos a ver cogido todo el
codigo de las diferentes funciones y haberlo metido dentro de transformer
*/
const transformer2 = function (str, func) {
  str.replaceAll(' ', '').toLowerCase();
  [first, ...others] = str.split(' ');
  [first.toUpperCase(), ...others].join(' ');
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${func(str)}`);
  console.log(`Transformed by: ${func.name}`);
};
