import './main.css';

/**
 * 1️⃣ .push() Muta ❌ 👉 añadimos un valor al final de nuestro array y ademas nos calcula el tamaño de nuestro array
 * 2️⃣ .unshift() Muta ❌ 👉 inserta la info al principo del array
 * 3️⃣ .pop() Muta ❌ 👉 Es lo contrario al .push method, elimina el ultimo elemento.
 * 4️⃣ .shift() Muta ❌ 👉 Elimina el primer elemento de nuestro array.
 * 5️⃣ .indexof() No Muta ✅ 👉 Nos dice en que posicion se encuentra un elemento.
 * 6️⃣ .includes() No Muta ✅ 👉 Nos devuelve una booleana indicandonos si existe o no un valor dentro de nuestro array.
 * 7️⃣ .toString() No Muta ✅ 👉 Separa cada elemento de un array por comas
 * 8️⃣ .slice(inicio, final) No Muta ✅ 👉 extraemos una parte de nuestro ARRAY.
 * 9️⃣ .splice(inicio, final) Muta ❌ 👉 extraemos una parte de nuestro ARRAY.
 * 1️⃣0️⃣ .reverse() Muta ❌ 👉 Cambia el sentido de un ARRAY.
 * 1️⃣1️⃣ .concat() No Muta ✅ 👉  Concatena dos ARRAYs
 * 1️⃣2️⃣ .join() No Muta ✅ 👉  Junta los ARRAYS con un separador que le digamos, el resultado es un STRING
 * 1️⃣2️⃣ .some() No Muta ✅ 👉  Comprueba si se cumple una condicion en alguno de los elementos
 * 1️⃣2️⃣ .every() No Muta ✅ 👉 Comprueba si se cumple una condicion en todos los elementos
 * 1️⃣3️⃣ .toReversed() No Muta ✅
 * 1️⃣4️⃣ .toSorted(): No Muta ✅
 * 1️⃣5️⃣ .toSpliced(startIndex, deleteCount) No Muta ✅
 * 1️⃣6️⃣ .toSort() Muta ❌
 * 1️⃣7️⃣ .flat() No Muta ✅
 * 1️⃣8️⃣ .flatMap() No Muta ✅
 * 1️⃣9️⃣ .with() No Muta ✅
 * 2️⃣0️⃣ .startsWith() No Muta ✅
 * 2️⃣1️⃣ .filter()
 * 2️⃣2️⃣ .find()
 * 2️⃣3️⃣ .reduce()
 *
 *
 */

/*
1️⃣ .push()
*/
const friends = ['Javi', 'Meli', 'Gabi'];
const newLength = friends.push('Napoleon');
console.log(friends); //--> (4)["Javi", "Meli", "Gabi", "Napoleon"]
console.log(newLength); //--> 4
/*
2️⃣ .unshift()
*/
const friends2 = ['Javi', 'Meli', 'Gabi'];
const newLength2 = friends2.unshift('Napoleon');
console.log(friends2); // (4) ["Napoleon", "Javi", "Meli", "Gabi"]
console.log(newLength2); // 4
/*
3️⃣ .pop()
*/
const friends3 = ['Javi', 'Meli', 'Gabi'];
const popped1 = friends3.pop();
const popped2 = friends3.pop();
console.log(friends3);
console.log(popped1);
console.log(popped2);
/*
4️⃣ .shift()
*/
const friends4 = ['Javi', 'Meli', 'Gabi'];
const newLength4 = friends4.shift();
console.log(friends4);
console.log(newLength4);
/*
5️⃣ .indexOf()
*/
const friends5 = ['Javi', 'Meli', 'Gabi', 'Napoleon'];
console.log(friends.indexOf('Gabi')); // 2
console.log(friends.indexOf('Pepe')); // -1 Si no encuentra el valor.
/*
6️⃣ .includes()
*/
const friend6 = ['Javi', 'Meli', 'Gabi'];
console.log(friends.includes('Pepe')); //False
console.log(friends.includes('Javi')); //True

// Este metodo es muy util, porque nos permite utilizar if/else statements:

if (friends.includes('Peter')) {
  console.log('Hola Peter!');
} else {
  console.log('Donde esta Peter?');
}

/*
7️⃣ .toString()
*/
const fruits = ['😥', '😊', '🥳', '🙄'];
console.log(fruits.toString());

/*
8️⃣ .slice()
*/
const arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr1.slice(2));
console.log(arr1);
//Podemos indicar el parametro final, el cual no se incluye, ojo!
console.log(arr1.slice(2, 4));
console.log(arr1.slice(-2));
console.log(arr1.slice(1, -2));
// SHALLOW COPY de un ARRAY, simplemente no ponemos parametros.
console.log(arr1.slice()); //["a", "b", "c", "d", "e"]
/*
Podemos crear tambien una copia de nuestro ARRAY con el SPREAD OPERATOR, la unica diferencia es que con slice
podemos concatenar multiples METHODs de una vez.
*/
console.log([...arr1]);

/*
9️⃣ .splice()
*/
const arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr2.splice(2));
console.log(arr2);
const arr3 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr3.splice(2, 1));
console.log(arr3);

// Eliminar info no necesaria. Por ejemplo eliminar el ultimo elemento de un ARRAY.
arr3.splice(-1);
console.log(arr3);
let arr5 = ['a', 'b', 'c', 'd', 'e'];
arr5.splice(1, 2);
console.log(arr5);

/*
1️⃣0️⃣ .reverse() 
*/
const arr6 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr6.reverse());
console.log(arr6);

/*
1️⃣1️⃣ .concat() 
*/
const arr7 = [1, 2, 3, 4, 5];
const arr8 = [6, 7, 8, 9, 10];
const letters = arr7.concat(arr8);
console.log(letters);
// Podriamos usar el SPREAD OPERATOR
console.log([...arr7, ...arr8]);
//Tambien podemos incluir un elemento:
const letters_2 = letters.concat(11);
console.log(letters_2);
/*
1️⃣2️⃣ .join() 
*/
console.log(letters.join('_'));
console.log(letters_2.join('-'));
/*
1️⃣2️⃣ .some()
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);
const anyDeposits2 = movements.some(mov => mov > 5000);
console.log(anyDeposits2);
const anyDeposits3 = movements.some(mov => mov === -130);
console.log(anyDeposits3);
/*
1️⃣2️⃣ .every()
*/
const movements2 = [430, 1000, 700, 50, 90];
const anyDeposits4 = movements2.every(mov => mov > 0);
console.log(anyDeposits4);
const anyDeposits5 = movements2.every(mov => mov > 0);
console.log(anyDeposits5);

/*
1️⃣3️⃣ toReversed(): This method allows you to obtain a reversed version of an array without modifying the original array.
Simply call toReversed() on an array, and it returns a new array with the elements in reverse order.
This is perfect for scenarios where you need to reverse the order of items but want to preserve the original array.
*/

let initArray = [1, 2, 3];
let iteratedArray = initArray.toReversed();
console.log(initArray, iteratedArray); // Output: [1, 2, 3], [3, 2, 1]

/*
1️⃣4️⃣ toSorted(): Sorting an array is now easier than ever with the toSorted() method. Similar to toReversed(),
this method generates a new array without modifying the original one. By calling toSorted() on an array,
you obtain a sorted version in ascending order. It's incredibly handy when you need to perform operations
on a sorted array while retaining the original order.
*/
const initArray2 = [2, 1, 3];
const iteratedArray2 = initArray2.toSorted();
console.log(initArray2, iteratedArray2); // Output: [2, 1, 3], [1, 2, 3]

/*
1️⃣5️⃣ toSpliced(startIndex, deleteCount): With this method, you can extract a portion of an array without changing the original array.
Specify the startIndex and deleteCount parameters to define the range of elements to extract. The resulting array is returned,
allowing you to perform targeted operations while keeping the initial array intact.
*/
const initArray3 = [1, 2, 3, 4];
const iteratedArray3 = initArray3.toSpliced(1, 2);
console.log(initArray3, iteratedArray3); // Output: [1, 2, 3, 4], [1, 4]

/*
1️⃣6️⃣ .toSort()
*/
const owners = ['Javi', 'Meli', 'Gabi', 'Dani'];
console.log(owners.sort());
console.log(owners);
const money = [1000, 1, 100, 10000, 10];
console.log(money.sort());

/*
SORPRESA! aqui no ha funcionado, esto es porque el METHOD SORT funciona basado en STRINGS, es decir,
lo convierte todo en STRINGS y luego hace el sorting. Si nos fijamos en el resultado, tenemos primero
todos los menos que en el alfabeto estan primero y luego el 1, 2, 3, etc.
*/
const movements3 = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements3.sort()); //[-130, -400, -650, 1300, 200, 3000, 450, 70]

/*
Este problema podemos solucionarlo con una compare callback function con dos argumentos a y b.
Que seran el CURRENT VALUE y el NEXT VALUE respectivamente.

Para entender como funciona esta CALLABACK FUNCTION debemos ver los dos argumentos a y b como dos
numeros consecutivos en el ARRAY. Por ejemplo, cogemos 450 y -400, vamos a compararlos:

**Si obtenemos un valor negativo, es decir b > a, return < 0 entonces a estara antes que b. (keep order).
**Si obtenemos un valor positivo, a > b, return > 0 entonces b estara antes que a. (switch order).

Aplicamos este algoritmo para ordenar de forma ascendiante de menor a mayor:
*/
const movementsAscending = [200, 450, -400, 3000, -650, -130, 70, 1300];
movementsAscending.sort((a: number, b: number) => {
  if (a > b) return 1; //El numero no importa mientras sea mayor que 0.
  if (a < b) return -1;
});
console.log(movementsAscending); //[-650, -400, -130, 70, 200, 450, 1300, 3000]

//Tambien podriamos reducir la ecuacion ha:
movements.sort((a, b) => a - b);
console.log(movements); //[-650, -400, -130, 70, 200, 450, 1300, 3000]

//Si quisiesemos orodenar de una forma descendiente, simplemente habria que hacer lo contario:
const movementsDescending = [200, 450, -400, 3000, -650, -130, 70, 1300];
movementsDescending.sort((a, b) => {
  if (a > b) return -1; //El numero no importa mientras sea mayor que 0.
  if (a < b) return 1;
});
console.log(movementsDescending); //[3000, 1300, 450, 200, 70, -130, -400, -650]

//Reducimos la ecuacion ha:
movements.sort((a, b) => b - a);
console.log(movements); //[3000, 1300, 450, 200, 70, -130, -400, -650]

//Como nota, comentar que si tenemos un ARRAY mezclado con NUMBERS Y STRINGS no funcionara el SORT METHOD.

/*
1️⃣7️⃣ .flat()
*/
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); //[1, 2, 3, 4, 5, 6, 7, 8]
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // [Array(2), 3, 4, Array(2), 7, 8]
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

const accountsMerge = [account1, account2, account3, account4];

/*
1️⃣8️⃣ .flatMap(),  Lo que hace es lo mismo que el MAP y el FLAT juntos, los combina en uno para mejorar el rendimiento.

.flatMap() llega a un nivel de profundidad y no podemos cambiarlo, por lo que en el caso de necesitar ir mas profundo,
usaremos el MAP + FLAP por separado.
*/
const overalBalance = accountsMerge
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance); //17840

/*
1️⃣9️⃣ .with()

A truly innovative way to achieve immutability in JavaScript.
*/
const family = ['John', 'Meli', 'Javi', 'Gabriel'];
const trueFamily = family.with(0, 'Napoleon');
console.log(family);
console.log(trueFamily);

/*
2️⃣0️⃣ .startsWith()

is used to determine whether a string begins with the characters of a specified string.
It returns true if the string starts with the specified characters
*/
let str = 'Hello, world!';

console.log(str.startsWith('Hello')); // Output: true
console.log(str.startsWith('world')); // Output: false
console.log(str.startsWith('world', 7)); // Output: true
console.log(str.startsWith('Hello', 7)); // Output: false
let urls = [
  'https://example.com',
  'http://example.org',
  'https://anotherexample.net',
];

urls.forEach(url => {
  if (url.startsWith('https://')) {
    console.log(`${url} is a secure URL.`);
  } else {
    console.log(`${url} is not a secure URL.`);
  }
});

/*
2️⃣1️⃣ .filter()

filtrar un ARRAY basado en una condicion.
*/

const bankMovements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = bankMovements.filter(function (mov, i, arr) {
  return mov > 0;
});

console.log(bankMovements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(deposits); //[200, 450, 3000, 70, 1300]

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

/*
2️⃣2️⃣ .find()

recuperar un elemento de un ARRAY basado en una condicion.
*/

const accounts = [account1, account2, account3, account4];
const account = accounts.find(acc => acc.owner === 'Manuela Perez');
console.log(account);

/*
2️⃣3️⃣ .reduce()

Usado para "condensar" todos los ELEMENTS de un ARRAY en un solo valor.

El .reduce() recibe una callback function (accumulator, value, index, array)

Basicamente en cada iteración devolvemos el accumulador actualizado + el nuevo current value,
permitiendonos añadir la siguiente iteracion.


Hay un segundo parametro que seria el initial value del accumulator, en el ejemplo sera 0.
Es el valor inicial del accumulador en la primera iteracion.
*/
const balance = movements.reduce(function (acc, val, i, arr) {
  return acc + val;
}, 0);
console.log(balance); //3840

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
calcPrintBalance(account1.movements); //3840 €

// Calcular el valor máximo del ARRAY movements2:

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
