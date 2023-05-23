'use strict';

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
En esta seccion simplemente vamos a poner en practica los diferentes METHODs que podemos aplicar a los ARRAYS:
*/

// PRACTICE 1: Calcular cuanto ha sido depositado en el Banco entre todos los usuarios. OJO!! Depositado!

//Queremos crear un nuevo ARRAY con todos los movements fuera de accounts ARRAY:
const bankDepositSum = accounts.map(acc => acc.movements);
console.log(bankDepositSum); //Obtenemos un ARRAY de ARRAYs
/*
[Array(8), Array(8), Array(8), Array(5)]
0: (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
1: (8) [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
2: (8) [200, -200, 340, -300, -20, 50, 400, -460]
3: (5) [430, 1000, 700, 50, 90]
*/
//Ahora queremos juntarlas:
const bankDepositSum2 = accounts.map(acc => acc.movements).flat();
console.log(bankDepositSum2); //[200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
//Filtramos los valores positivos:
const bankDepositSum3 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0);
console.log(bankDepositSum3); //[200, 450, 3000, 70, 1300, 5000, 3400, 8500, 200, 340, 50, 400, 430, 1000, 700, 50, 90]
//Y los sumamos:
const bankDepositSum4 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur);
console.log(bankDepositSum4); //25180

// PRACTICE 2: We want to count how many deposits there have been in the bank with at least 1000$

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length; //[3000, 1300, 5000, 3400, 8500, 1000]
console.log(numDeposits1000); //6

//Hay otra forma de hacerlo con el REDUCE, nuestro accumulator seran los movimientos mas grandes o iguales que 1000$

const numDeposits10002 = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (counter, currentValue) => (currentValue >= 1000 ? ++counter : counter),
    0
  );
console.log(accounts.flatMap(acc => acc.movements)); //[200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
console.log(numDeposits10002); //6

// PRACTICE 3: We have to create a new OBJECT instead of just a number or just a STRING. Create an OBJECT which contains the sum of the deposits and of the withdrawals at the same time.

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, currentValue) => {
      currentValue > 0
        ? (sums.deposits += currentValue)
        : (sums.withdrawals += currentValue);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums); //{deposits: 25180, withdrawals: -7340}

//podemos destructurar

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, currentValue) => {
      currentValue > 0
        ? (sums.deposits += currentValue)
        : (sums.withdrawals += currentValue);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals); //25180 -7340

//Tambien podemos perfeccionar la condicion con BRACKET NOTATION []

const { deposits2, withdrawals2 } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, currentValue) => {
      sums[currentValue > 0 ? 'deposits2' : 'withdrawals2'] += currentValue;
      return sums;
    },
    { deposits2: 0, withdrawals2: 0 }
  );
console.log(deposits2, withdrawals2); //25180 -7340

//PRACTICE 4: Create a simple function to convert any STRING to a title case, that is all the first letter of each word in a sentence are capitalized.

// SOLUCION 1

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('My name is javier and I am very crazy')); //My Name Is Javier and I Am Very Crazy

// SOLUCION 2

const capitalize2 = function (str) {
  const exceptions2 = [
    'a',
    'an',
    'and',
    'the',
    'but',
    'or',
    'on',
    'in',
    'with',
  ];
  return (
    str
      .toLowerCase()
      .split(' ')
      // HERE WE'RE FILTERING ALL EMPTY SIDE EFFECTS OF MULTIPLE SPACES
      .filter(word => word)
      // WE USE INDEX TO SKIP FIRST ELEMENT (WORD) IN ANY STRING
      .map((word, i) =>
        exceptions2.includes(word) && i > 0
          ? word
          : word[0].toUpperCase() + word.slice(1)
      )
      .join(' ')
  );
};

console.log(
  capitalize2(
    'and    thiS is a nice   and CLEAR title withOUT Any meaning in it'
  ) // And This Is a Nice and Clear Title Without Any Meaning in It
);
