'use strict';

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
