'use strict';

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
