'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
Es el momento de ver el tercer METHOD de DATA transformacions!

Como comentamos, usamos este metodo to BOIL DOWN "condensar" todos los ELEMENTS de un ARRAY en un solo valor.

Seguiremos trabajando con nuestro ARRAY movements:

Este metodo puede ser util para calcular el Global Balance de nuestra cuenta, recordar que balance no sera un ARRAY sino un VALUE.

El REDUCE METHOD tambien recibe una CALLBACK FUNCTION, aunque es ligeramente diferente al de los otros metodos de transformacion.

En las otras CALLBACKs el primer parametro es siempre el CURRENT ELEMENT VALUE,

luego el CURRENT INDEX y el tercero el ENTIRE ARRAY, pero aqui el primero es algo llamado ACCUMULATOR! un SNOWBALL

que acumula el VALUE que posteriormente queremos devolver, como pueden ser los numeros de un ARRAY.

REDUCE LOOPS OVER el ARRAY y llama a la funcion CALLBACK, como los otros METHODs:
*/
const balance = movements.reduce(function (acc, val, i, arr) {
  return acc + val;
}, 0);
console.log(balance); //3840

/*
Basicamente en cada EACH ITERATION LOOP devolvemos el accumulador actualizado + el nuevo current value, permitiendonos añadir la siguiente iteracion.

Hay otro aspecto importante, la CALLBACK FUNCTION que hemos escrito es el primer parametro del REDUCE METHOD, pero hay un segundo parametro que seria el INITIAL VALUE del ACCUMULATOR, en el ejemplo sera 0. Es el valor inicial del accumilador en la primera iteracion.
*/

//Si queremos ver como funciona el accumulador:
const balance2 = movements.reduce(function (acc, val, i, arr) {
  console.log(`Iteracion ${i}: ${acc}`);
  return acc + val;
}, 0);
/*
Iteracion 0: 0  //Aqui podemos ver el INITIAL VALUE del ACCUMULATOR
Iteracion 1: 200 
Iteracion 2: 650 
Iteracion 3: 250 
Iteracion 4: 3250 
Iteracion 5: 2600 
Iteracion 6: 2470 
Iteracion 7: 2540 
*/
console.log(balance2); //3840

// Si quisiesemos hacerlo manualmente con FOR OF LOOP
let balance3 = 0;
for (const mov of movements) balance3 += mov;
console.log(balance3); //3840

//El problema aqui es que hay que definir una nueva variable, ademas de hacerlo mas largo de escribir...

//Si queremos podemos simplificar el codigo:
const balance4 = movements.reduce((acc, val) => acc + val, 0);
console.log(balance4); // 3840

//Podemos pasar a calcular el balance de nuestra cuenta, creamos una funcion callback que recibira la informacion del ARRAY movements como un input.
const calcPrintBalance = function (movements) {
  //El primer parametro es el acumulador y el segundo es el current value.
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
};
//Todo lo que queda es mostrarlo en pantalla en su correspondiente elemento! <p class="balance__value">0000€</p>

const labelBalance = document.querySelector('.balance__value');

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const calcDisplayBalance = function (movements) {
  //El primer parametro es el acumulador y el segundo es el current value.
  const balance2 = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance2} €`;
};
//LLamamos a la funcion, cabe ressaltar aqui, que mas adelante modificaremos este parametro en funcion de quien sea el usuario.
calcDisplayBalance(account1.movements); //3840 €

/*
Si miramos a nuestro FLOCHART veremos que ya hemos hecho Calculate balance, Display Balance y Display Movements.

<cmg /Bankist-flowchart.png>
*/
//Para terminar esta parte podemos ver otras utilidades del METHOD REDUCE, como por ejemplio calcular el valor MAX del ARRAY movements2:
const movements2 = [300, 450, -400, 3000, -650, -130, 70, 1300];
//La primera pregunta que debemos hacernos es saber cual es el porpuse de nuestro accumulator, aqui sera el encargado de ver el valor mas alto.
const valueMax = movements2.reduce((acc, mov, i) => {
  console.log(`Iteracion ${i + 1}: ${acc} > ${mov}`);
  if (acc > mov) return acc;
  else return mov;
  /*
  Si el acumulador es mas grande que el valor actual entonces devolver acumulador, en la primera iteracion sera:
  Iteracion 1: 300 > 300 siempre el mismo valor de 300
  Iteracion 2: 300 > 450 False, devuelve actual value de acc = 450
  Iteracion 3: 450 > -400 True, devuelve acc = 450
  Iteracion 4: 450 > 3000 False, devuelve actual value de acc = 3000
  Iteracion 5: 3000 > -650 True, devuelve acc = 3000
  Iteracion 6: 3000 > -130 True, devuelve acc = 3000
  Iteracion 7: 3000 > 70 True, devuelve acc = 3000
  Iteracion 8: 3000 > 1300 True,luego devuelve acumulador 3000.
  */
}, movements2[0]); //Ponemos el valor inicial
console.log(valueMax); //3000

//Otra solucion hubiese sido:
const valueMax2 = movements.reduce(
  (acc, el) => Math.max(acc, el),
  movements[0]
);
console.log(valueMax2); //3000
