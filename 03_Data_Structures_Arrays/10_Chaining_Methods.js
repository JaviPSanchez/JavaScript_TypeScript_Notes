'use strict';

/*
En JS hay tres grandes e importantes ARRAY METHODS que utilizamos todo el tiempo para hacer transformaciones.

Son METHODS que utilizamos para crear nuevos ARRAYS basados en transformaciones de otros ARRAYS y se han vuelto muy populares en MODERN JS hasta
el punto de que los veremos por todas partes!

Los METHODS de los que hablamos para poder hacer DATA TRANSFORMATION son:

1/MAP METHOD --> METHOD para LOOPEAR ARRAYS, es parecido al FOR EACH pero con la diferencia de que MAP crea un ARRAY completamente nuevo basado en el original. El MAP METHOD coge un ARRAY, LOOPS OVER THAT ARRAY y en cada iteracion aplica una CALLBACK FUNCTION que especificamos en el codigo al valor actual del ARRAY.

<cmg /images/Picture2.jpg>

2/FILTER --> Usado para filtrar los elementos en el ARRAY original satisfaciendo
una condicion inicial (por ejemplo elementos mayores que 2).
Todos los elementos que satisfagan esta condicion, pasaran al nuevo ARRAY.

<cmg /images/Picture3.jpg>

3/REDUCE --> Lo utilizamos para reducir el ARRAY original en un solo valor, para ello nos servimos de un ACCUMULATOR que mediante un LOOP hace pasar todos los valores juntandolos en uno. Es como una gran bola de nieve que va creciendo a medida que baja por la pendiente, de ahi que se utilice para este METHOD the snowball effect! El valor final es el REDUCED VALUE, que basicamente es el resultado de cualquier tipo de operacion , no tieien porque ser solo sumar...

<cmg /images/Picture4.jpg>

En este caso no obtenemos un ARRAY logicamente, solo un valor.
*/

//FILTER METHOD

const array = [1, 2, 1, 3, 4, 3, 5];
console.log(array);
const toFindDuplicates = array =>
  //array.filter(callback function)
  array.filter((item, index) => array.indexOf(item) !== index);
const duplicateElements = toFindDuplicates(array);
console.log(duplicateElements);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.18;
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
/*
Hasta ahora hemos utilizado el MAP, FILTER y REDUCE METHODS de una forma aislada, pero podemos mezclarlos y hacer un combo mortal!

Pero imaginemos que queremos coger todos los elementos de un ARRAY, por ejemplo movements, convertirlos de euros a dollars y finalmente añadirlos todos a un balance para saber cuanto tenemos, podriamos hacerlos todos por separado y guardarlos en variables, pero conviene saber que tambien podemos usarlos todos a la vez.
*/

const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD); //5923.6

//PINNNN!!! de un golpe hemos filtrado los ingresos, convertido a dolares y sumarlos todos! pero ademas podriamos si quisiesemos añadir todos los METHODs que quisiesemos, no tienen porque ser solo estos tres! El problema de este metodo es que si queremos seguir la pista a las operaciones o descubrir errores es complicado, por ello podemos ayudarnos del tercer argumento, el array que tienen estos METHODS:

const totalDepositUSD2 = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr); //[200, 450, 3000, 70, 1300] Este ARRAY lo vemos 5 veces porque es llamado 1 vez FOR EACH VALUE!
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD2); //5923.6

//Pasamos a calcular los summaries de nuestra APP, que son pequeños indicadores de interes en la parte inferior de nuestro elemento de movements:
/*
<p class="summary__value summary__value--in">0000€</p>
<p class="summary__value summary__value--out">0000€</p>
<p class="summary__value summary__value--interest">0000€</p>
*/
//Nuestra funcion recibira lel ARRAy de los movements
const calcDisplaySummary = function (movements) {
  //Empezamos calculando los ingresos y sumando todos los valores
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
};
calcDisplaySummary(account1.movements);

//Ahora solo tenemos que agregar este valor a su ELEMENT:
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');

//Quedando:

const calcDisplaySummary3 = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
};
calcDisplaySummary3(account1.movements);

//Hacemos lo mismo con los gastos:

const calcDisplaySummary4 = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  //Habria que eliminar el signo menos, nos ayudamos del valor absoluto:
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = movements
    .filter((mov, arr) => mov > 0)
    //Aqui necesitaremos un nuevo ARRAY,
    .map((deposit, arr) => deposit * 0.012)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary4(account1.movements);

//Quedaria el ultimo indicador, que seria el interes, por cada deposito que hagamos el banco nos cobra un interes del 1.2%! Putos ladrones!

//Ahora imaginemos que el banco añade una nueva regla que dice que el interes sera aplicado solo cuando este sea mayor de 1€. Lo que habra que hacer es meter un METHOD nuevo, antes del .reduce con la nueva regla.
const calcDisplaySummary5 = function (movements) {
  const interest = movements
    .filter((mov, arr) => mov > 0)
    //Aqui necesitaremos un nuevo ARRAY,
    .map((deposit, arr) => deposit * 0.012)
    .filter((int, i, arr) => {
      console.log(arr); //[2.4, 5.4, 36, 0.84, 15.6] Podemos ver que hay un valor e 0.84, este no sera considerado.
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary5(account1.movements); // 59.4€

/*
Finalmente cabe destacar algo sobre la concatenacion de los METHODs, no debemos abusar de esta forma de trabajar puesto que puede crear problemas de rendimiento con ARRAYS muy grandes, una solucion es en vez de crear multiples MAPs, podemos hacer todas las operaciones necesarias en un MAP solo.

Otra observacion es la utilizacion de METHODS que modifican /mutan el ARRAY original como .splice o .reverse, no es buena idea concatenar con estos METHODs. 
*/
