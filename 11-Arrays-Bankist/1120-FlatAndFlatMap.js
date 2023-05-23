'use strict';

/*
Los dos METHODs que vamos a aprender fueron introducidos en ES2019. Por lo que no funcion en BROWSERS muy antiguos...

Los dos ARRAYS METHODs son muy sencillos de entender. son el FLAT y el FLAT MAP.

Imaginemos que tenemos un ARRAY con ARRAYS dentro de este, lo que conocemos como NESTED ARRAY:
*/

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

//Pero que pasaria si quisiesemos poner en un ARRAY todos los numeros seguidos, es decir, eliminar el NESTED ARRAY, pues es algo facil de hacer con el FLAT METHOD:
console.log(arr.flat()); //[1, 2, 3, 4, 5, 6, 7, 8]

//No hace falta CALLBACK FUNCTION.

//Pero y si tenemos otro DEEPER NESTED ARRAY, level 2 nested!

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // [Array(2), 3, 4, Array(2), 7, 8]

//Podemos meter el depth argument de 2, (1) esta por defecto.
console.log(arrDeep.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8]

/*
Estos ejemplos son muy basicos, lLevandolo a un caso mas real... iamginemos que el banco quiere calcular el balance general de todos los movimientos de todas las cuentas.

Tenemos todos los movements guaradados en ARRAYs y estas ARRAYs estan dentro de un OBJECT en el accounts ARRAY
*/
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/*
Lo primero que habria que hacer, es sacarlos todos, y ponerlos en un ARRAY, nos ayudamos del MAP METHOD. Coge todos los movements y devuelve un nuevo ARRAY con los movements, despues simplemente usar el FLAT METHOD con el ARRAY
*/
const accountsMovements = accounts.map(acc => acc.movements);
console.log(accountsMovements);
/*
[Array(8), Array(8), Array(8), Array(5)]
0: (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
1: (8) [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
2: (8) [200, -200, 340, -300, -20, 50, 400, -460]
3: (5) [430, 1000, 700, 50, 90]
*/
const extractMovements = accountsMovements.flat();
console.log(extractMovements); //[200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

//Podriamos sumarlos todos con el REDUCE METHOD:

const overalBalance = extractMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance); //17840

//Podemos dejarlo mas presentable con el CHAINING:

const overalBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2); //17840

//Cabe destacar que usar el MAP METHOD y luego el FLAT METHOD es una operacion muy comun!

/*
Ahora pasamos al FLAT MAP, que lo que hace es lo mismo que el MAP y el FLAT juntos, los combina en uno para mejorar el rendimiento.
*/
const overalBalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2); //17840

//Solo resaltar que FLATMAP llega a un nivel de profundidad y no podemos cambiarlo, por lo que en el caso de necesitar ir mas profundo, usaremos el MAP + FLAP por separado, no hay problema!
