'use strict';

/*
Hemos utilizado desde el comienzo del curso nada mas y nada menos que 23 ARRAY METHODS!!!

<cmg /images/Picture5.jpg>

Esto nos va a permitir hacer autenticas virguerias con los ARRAYS!

Vamos a ver como elegir el METHOD que mas nos conviene.
*/

//Lo primero que debemos hacer es preguntarnos: What do I actually want from this METHOD?

//Nos podemos encontrar los siguientes escenarios:

/* SCENARIO 1:  TO MUTATE or NOT TO MUTATE the ORIGINAL ARRAY? */
/* SCENARIO 2:  New ARRAY? */
/* SCENARIO 3:  Do I want an ARRAY INDEX? */
/* SCENARIO 4:  Do I want to RETRIVE an entire ARRAY ELEMENT? */
/* SCENARIO 5:  Do I want to know if an ARRAY INCLUIDES a certain ELEMENT? */
/* SCENARIO 6:  Do I want to get a new STRING? */
/* SCENARIO 7:  Do I want to get a new STRING to TRANSFORM to a new VALUE? */
/* SCENARIO 8:  Do I want to get a new STRING to just LOOP over the ARRAY? */

/*
--------------------SCENARIO 1:  TO MUTATE or NOT TO MUTATE the ORIGINAL ARRAY?----------------------
*/
/*
---------Add to original-------------
*/
/*
 ***PUSH METHOD***
 */
const friends = ['Javi', 'Meli', 'Gabi'];
const newLength = friends.push('Napoleon');
console.log(friends); //--> (4)["Javi", "Meli", "Gabi", "Napoleon"]
/*
 ***UNSHIFT METHOD***
 */
const friends2 = ['Javi', 'Meli', 'Gabi'];
const newLength2 = friends2.unshift('Napoleon');
console.log(friends2); // (4) ["Napoleon", "Javi", "Meli", "Gabi"]
/*
/*
---------Remove from original-------------
*/
/*
 ***POP METHOD***
 */
const friends3 = ['Javi', 'Meli', 'Gabi'];
const popped1 = friends3.pop();
const popped2 = friends3.pop();
console.log(friends3); // ["Javi"]
console.log(popped1); // Gabi
console.log(popped2); // Meli
/*
 ***SHIFT METHOD***
 */
const friends4 = ['Javi', 'Meli', 'Gabi'];
const newLength4 = friends4.shift();
console.log(friends4); // ["Meli", "Gabi"]
console.log(newLength4); // Javi
/*
 ***SPLICE METHOD***
 */
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(2)); //["c", "d", "e"]
console.log(arr); //["a", "b"]
/*
---------Others-------------
*/
/*
 ***REVERSE METHOD***
 */
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ["f", "g", "h", "i", "j"]
console.log(arr2); //["f", "g", "h", "i", "j"]
/*
 ***SORT METHOD***
 */
const owners = ['Javi', 'Meli', 'Gabi', 'Dani'];
console.log(owners.sort()); //["Dani", "Gabi", "Javi", "Meli"]
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort()); //[-130, -400, -650, 1300, 200, 3000, 450, 70]
const movementsAscending = [200, 450, -400, 3000, -650, -130, 70, 1300];
movementsAscending.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movementsAscending); //[-650, -400, -130, 70, 200, 450, 1300, 3000]
/*
 ***FILL METHOD***
 */
const y = new Array(9);
y.fill(5, 3, 6);
console.log(y); // [empty × 3, 5, 5, 5, empty × 3]
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr3.fill(23, 4, 6);
console.log(arr3); //[1, 2, 3, 4, 23, 23, 7, 8, 9]

/* ---------------SCENARIO 2:  New ARRAY?-------------------- */
/*
---------Computed from original-------------
*/
/*
 ***MAP METHOD***
 */
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.18;
const movementsUSD = movements2.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movementsUSD); //[236, 531, -472, 3540, -767, -153.4, 82.6, 1534]
console.log(movements2); //[200, 450, -400, 3000, -650, -130, 70, 1300]
const movementsUSDarrow = movements2.map(mov => mov * eurToUsd);
console.log(movementsUSDarrow); // [236, 531, -472, 3540, -767, -153.4, 82.6, 1534]
console.log(movements2); //[200, 450, -400, 3000, -650, -130, 70, 1300]
/*
---------Filtered Using Condition-------------
*/
/*
 ***FILTER METHOD***
 */
const movements3 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements3.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(deposits); //(5) [200, 450, 3000, 70, 1300]
console.log(movements3); //[200, 450, -400, 3000, -650, -130, 70, 1300]
/*
---------Portion of Original-------------
*/
/*
 ***SLICE METHOD***
 */
let arr4 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr4.slice(2)); //["c", "d", "e"]
console.log(arr4.slice(2, 4)); //["c", "d"]
console.log(arr4.slice(-2)); //["d", "e"]
console.log(arr4.slice(1, -2)); //["b", "c"]
console.log(arr4.slice()); //["a", "b", "c", "d", "e"]
console.log([...arr4]); //["a", "b", "c", "d", "e"]
/*
---------Adding original to other-------------
*/
/*
 ***CONCAT METHOD***
 */
let arr5 = ['a', 'b', 'c', 'd', 'e'];
let arr6 = ['f', 'g', 'h', 'i', 'j'];
const letters = arr5.concat(arr6);
console.log(letters); //["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
console.log([...arr5, ...arr6]); //["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
/*
---------Flattening the original-------------
*/
/*
 ***FLAT METHOD***
 */
const arr7 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr7.flat()); //[1, 2, 3, 4, 5, 6, 7, 8]
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // [Array(2), 3, 4, Array(2), 7, 8]
console.log(arrDeep.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8]

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

/*
 ***FLAT MAP METHOD***
 */
const overalBalance3 = accounts.flatMap(acc => acc.movements);
console.log(overalBalance3); //[200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

/* --------------------SCENARIO 3:  Do I want an ARRAY INDEX?------------------------- */
/*
---------Based on value-------------
*/
/*
 ***INDEX OF METHOD***
 */
const friends5 = ['Javi', 'Meli', 'Gabi', 'Napoleon'];
console.log(friends.indexOf('Gabi')); // 2
console.log(friends.indexOf('Pepe')); // -1 Si no encuentra el valor.
/*
 ***FIND INDEX OF METHOD***
 */
const array7 = [5, 12, 8, 130, 44];
const isLargeNumber = element => element > 13;
console.log(array7.findIndex(isLargeNumber)); // 3

/* ----------------SCENARIO 4:  Do I want to RETRIVE an entire ARRAY ELEMENT?-------------------- */

/*
---------Based on test condition-------------
*/
/*
 ***FIND METHOD***
 */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal); //-400

/* ----------------SCENARIO 5:  Do I want to know if an ARRAY INCLUIDES a certain ELEMENT?------------------- */
/*
---------Based on value-------------
*/
/*
 ***INCLUDES METHOD***
 */
const friend = ['Javi', 'Meli', 'Gabi'];
console.log(friends.includes('Pepe')); //False
console.log(friends.includes('Javi')); //True
/*
---------Based on test condition-------------
*/
/*
 ***SOME METHOD***
 */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); //True
const anyDeposits2 = movements.some(mov => mov > 5000);
console.log(anyDeposits2); //false
const anyDeposits3 = movements.some(mov => mov === -130);
console.log(anyDeposits3); //true
/*
 ***EVERY METHOD***
 */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const anyDeposits4 = movements.every(mov => mov > 0);
console.log(anyDeposits4); //False
movements2 = [430, 1000, 700, 50, 90];
const anyDeposits5 = movements2.every(mov => mov > 0);
console.log(anyDeposits5); //true

/* ----------------SCENARIO 6:  Do I want to get a new STRING?---------------------- */
/*
---------Based on separator string-------------
*/
/*
 ***JOIN METHOD***
 */
const letters = ['a', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
console.log(letters.join('_')); //a_d_e_f_g_h_i_j

/* ------------------SCENARIO 7:  Do I want to get a new STRING to TRANSFORM to a new VALUE?----------------------- */

/*
---------Based on accumulator-------------
*/
/*
 ***REDUCE METHOD***
 */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce(function (acc, val, i, arr) {
  return acc + val;
}, 0);
console.log(balance); //3840
const balance4 = movements.reduce((acc, val) => acc + val, 0);
console.log(balance4); // 3840

const balance2 = movements.reduce(function (acc, val, i, arr) {
  console.log(`Iteracion ${i}: ${acc}`);
  return acc + val;
}, 0);
/*
  Iteracion 0: 0
  Iteracion 1: 200 
  Iteracion 2: 650 
  Iteracion 3: 250 
  Iteracion 4: 3250 
  Iteracion 5: 2600 
  Iteracion 6: 2470 
  Iteracion 7: 2540 
  */
/* ----------------SCENARIO 8:  Do I want to get a new STRING to just LOOP over the ARRAY?------------------- */

/*
---------Based on callback-------------
*/
/*
 ***FOR EACH METHOD***
 Does not create a new ARRAY, just LOOPS over it.
 */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You have deposited ${movement}`); //You have deposited 3000
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`); //You withdrew 650
  }
});
/*
 ***REGULAR FOR LOOP***
 */

const years = [1991, 1987, 1989, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}
console.log(ages); // [30, 34, 32, 1]
console.log(...ages); // 30 34 32 1
console.log(ages[0], ages[1], ages[2], ages[3]); // 30 34 32 1
/*
 ***FOR OF LOOP***
 */
for (const ages2 of years) console.log(Number(`${2021 - ages2}`)); // 30, 34, 32, 1
