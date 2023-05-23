'use strict';

/*
Continuamos aprendiendo mas operaciones matematicas y tambien redondeo de numeros.
*/

/*******SQUARE ROOT*************/

//Square Root forma parte del NAME SPACE MATH

console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2 //Para hacer la raiz cubica la unica forma es asi

/*******MAXIMUM & MINIMUM VALUE*************/

//Esta funcion hace TYPE COERCION

console.log(Math.max(5, 12, '25', 69, '100')); //100
console.log(Math.min('5', 12, '25', 69, '100')); //5

//Pero no hace parsing

console.log(Math.max(5, 12, '25', 69, '100px')); //NaN

//Tambien existen constantes en el MATH OBJECT o MATH NAME SAPCE

console.log(Math.PI); //3.141592653589793
//Si quisiesemos calcular el are de un circulo pi*r^2:
console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592653589793

/*******RANDOM FUNCTION*************/

console.log(Math.random()); //Nos dara un valor entre 0 y 0.9999999
console.log(Math.random() * 6); // entre 0 y 5.999999

/*******TRUNC FUNCTION*************/

console.log(Math.trunc(Math.random() * 7)); //  entre 0 y 6
console.log(Math.trunc(Math.random() * 6) + 1); //  entre 0 y 6

//Podemos crear funciones:
//Nos dara un numero entre el min y el max , un intervalo:
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

//Vamos a ver el redondeo:

/******Rounding Integers, todos admiten COERCION******/

// Simplemente quita la parte decimal
console.log(Math.trunc(5.52)); //5
console.log(Math.trunc(10.51)); // 10
console.log(Math.trunc(56.99)); // 56
console.log(Math.trunc('56.99')); // 56
// Siempre redondea al INTEGER mas proximo!
console.log(Math.round(56.99)); // 57
console.log(Math.round(2.36)); // 2
console.log(Math.round(2.51)); // 3
console.log(Math.round(2.36)); // 2
console.log(Math.round('2.51')); // 3
// Redondea hacia arriba
console.log(Math.ceil(2.51)); // 3
console.log(Math.ceil('2.51')); // 3
// Redondea hacia abajo
console.log(Math.floor(2.51)); // 2
console.log(Math.floor('2.51')); // 2

// FLOOR y TRUNC hacen lo mismo cuando son numeros positivos, pero con numeros negativos no funcionan igual, FLOOR es mejor, porque funciona bien ya sea con numeros + o -.

console.log(Math.trunc(-10.51)); // -10
console.log(Math.floor(-10.51)); // -11

//Mejor utilizar FLOOR en la funcion anterior, pues asi aceprara negative inputs tambien:
const randomInt2 = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt2(10, 20));

/******Rounding Decimals/Floatings, todos admiten COERCION******/

//En los dcimales tenemos que utilizar el METHOD toFixed siempre.

console.log((2.7).toFixed(0)); //Nos sale en "3" en formato STRING! esto es por culpa del METHOD toFixed con el parametro añadira los decimales que le indiquemos
console.log(+(2.7).toFixed(1)); //2.7
console.log(+(2.7).toFixed(2)); // 2.70
console.log(+(2.723).toFixed(5)); //2.72300

//Esta forma de comportamiento en JS es debido a que es muy antigua y su evolucion es como es, si nos pusiesemos a crear un lenguaje hoy mismo, este seria diferente y en teoria mas optimo.

//Volvemos a nuestra APP BANKISh y vamos a redondear la cantidad pedida como prestamo. Podriamos pedir un loan con decimales, 5000,56 €. Pero esto no pasa asi en la realidad, por ello vamos a aplicar el rounding:

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  //No hace falta convertir a NUMBER, porque el propio METHOD hace TYPE COERCION
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

//Lo siguiente que haremos es utilizar el METHOD toFixed para redondear o dar un formato mas limpio a todos los numeros, luego utilizaremos este METHOD en todos los elementos que sean numeros.
