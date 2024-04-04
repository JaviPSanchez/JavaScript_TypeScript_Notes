'use strict';
/*
😎 Arrays:

1. Reverse an array.
2. Find the maximum number in an array.
3. Calculate the sum of all numbers in an array.
4. Remove duplicates from an array.
5. Implement a custom sorting algorithm for an array.
6. Find the intersection of two arrays.
7. Rotate an array to the right by a specific number of positions.
8. Find the largest contiguous subarray sum.
9. Check if an array is a palindrome.
10. Implement a function to shuffle an array.
CODING CHALLENGE #4

Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):

underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):

underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

Hints:

§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  //Get value out of the text area
  const text = document.querySelector('textarea').value;
  //Transformamos en un ARRAY con el character \n
  const textClean = text.split('\n');
  //["underscore_case", " first_name", "Some_Variable ", "  calculate_AGE", "delayed_departure"]

  //   const finalString = []; //METODO 1

  for (const [i, n] of textClean.entries()) {
    //Dividimos y suprimimos espacios
    let [firstWord, secondWord] = n.toLowerCase().trim().split('_');
    /*
    Creamos Mayuscula METODO 1
    const secondWordRight = secondWord[0].toUpperCase() + secondWord.slice(1);

    //Juntamos
    finalString.push([firstWord, secondWordRight].join(''));
    */
    //Creamos Mayuscula METODO 2
    const output = `${firstWord}${secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    )}`;

    console.log(`${output.padEnd(20, ' ')} ${'✅'.repeat(i + 1)}`);
  }
});

/*
*************************Coding Challenge #1******************

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each).
For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Your tasks:

Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
*/
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
/*
1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters).

2. Create an array with both Julia's (corrected) and Kate's data.

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶").

4. Run the function for both test datasets.

Test data:

§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

Hints: Use tools from all lectures in this section so far 😉.
*/
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  console.log(dogsJuliaCorrected); //[5, 2]
  const allDogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(allDogs); // [5, 2, 4, 1, 15, 8, 3]
  allDogs.forEach(function (age, i, arr) {
    age >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};
checkDogs(dogsJulia, dogsKate);
/*
Dog number 1 is an adult, and is 5 years old
Dog number 2 is still a puppy 🐶
Dog number 3 is an adult, and is 4 years old
Dog number 4 is still a puppy 🐶
Dog number 5 is an adult, and is 15 years old
Dog number 6 is an adult, and is 8 years old
Dog number 7 is an adult, and is 3 years old
*/

('use strict');

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

/*
****************CODING CHALLENGE #2****************

Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula:
****If the dog is <= 2 years old, humanAge = 2 * dogAge.
****If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
*/

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(dogsAge =>
    dogsAge <= 2 ? 2 * dogsAge : 16 + dogsAge * 4
  );
  console.log(humanAges); //[36, 4, 32, 2, 76, 48, 28]
  /*
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old).
*/
  const dogsOver18 = humanAges.filter(age => age >= 18);
  console.log(dogsOver18); //[36, 32, 76, 48, 28]
  /*
3. Calculate the average human age of all adult dogs.
*/
  const average =
    dogsOver18.reduce((acc, age, i, arr) => acc + age, 0) / dogsOver18.length;
  /*
    Podriamos hacer tambien:
    dogsOver18.reduce((acc, age, i, arr) => acc + age/ arr.length, 0);
    */
  return average;
  /*
  const average = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]; // sum = sum + arr[i];
    }
    sum / arr.length;
  };
  */
};
/*
4. Run the function for both test datasets.
*/
const avg1 = calcAverageHumanAge(data1);
console.log('----------------');
const avg2 = calcAverageHumanAge(data2);
console.log(avg1, avg2); //44 47.333333333333336

('use strict');

/*
****************CODING CHALLENGE #3*************

Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!

Test data:
*/
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages
    .map(dogsAge => (dogsAge <= 2 ? 2 * dogsAge : 16 + dogsAge * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return humanAges;
};
const avg1 = calcAverageHumanAge(data1);
console.log('----------------');
const avg2 = calcAverageHumanAge(data2);
console.log(avg1, avg2); //44 47.333333333333336

('use strict');

/*
**********************CODING CHALLENGE #4******************

Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.

Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.

Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).

/*
Hints:

§ Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉.

§ Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.
*/
// Test data:

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
/*
Your tasks:

1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array.

Formula --> recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg).
*/
//No queremos crear un nuevo ARRAY, simplemente loop el existente y en cada OBJECT añadir una nueva PROPERTY: dog.recommendedFood!

dogs.forEach(
  (dog, i, arr) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

/*
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose).
*/
//Tenemos que encontrar el OBJECT, en nuestro caso el tercero y luego comparar la comida recomendada con la cantidad actual. Primero buscamos dentro del OBJECT dogs.owners, lo cual es un ARRAY en si "['Sarah', 'John']" luego usaremos el METHOD INCLUDES, dandodos una Booleana. Una vez tenemos esta booleana podemos ver si come mucho o no.

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'too much' : 'not enough'
  }`
); //Sarah's dog is eating too much
/*
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
*/
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooMuch); // ["Matilda", "Sarah", "John"]
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
//   .flat();
console.log(ownersEatTooLittle); //["Alice", "Bob", "Michael"]
/*
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!".
*/
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`); //Matilda and Sarah and John's dogs eat too much!
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`); //Alice and Bob and Michael's dogs eat too little!
/*
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false).
*/
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood)); //False
/*
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false).
*/
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
); //true
/*
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.).
*/
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

const dogsEatingOk = dogs.map(checkEatingOkay);
console.log(dogsEatingOk); //[false, false, false, true]

const dogsEatingOk2 = dogs.filter(checkEatingOkay).length;
console.log(dogsEatingOk2); //1

/*
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)The Complete JavaScript Course 26.
*/
//Aqui tenemos los numeros en OBJECTS, por lo que a y b son los OBJECTS, por lo que tenemos que sacar los VALUES recommended
const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);
/*
0: {weight: 8, curFood: 200, owners: Array(1), recommendedFood: 133}
1: {weight: 13, curFood: 275, owners: Array(2), recommendedFood: 191}
2: {weight: 22, curFood: 250, owners: Array(2), recommendedFood: 284}
3: {weight: 32, curFood: 340, owners: Array(1), recommendedFood: 376}
*/

('use strict');

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
