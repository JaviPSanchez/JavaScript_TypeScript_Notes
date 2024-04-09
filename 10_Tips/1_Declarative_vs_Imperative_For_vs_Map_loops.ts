"use strict";

const movements = [
  { employee: 1, salary: 200 },
  { employee: 2, salary: 5000 },
  { employee: 3, salary: -6000 },
  { employee: 4, salary: 100 },
];
/*
A veces nos dejamos llevar por los fantasticos métodos de ES6,
pero no siempre es lo más óptimo desde un punto de vista de
rendimiento.

In the first approach we often use the beautiful ES6 methods so much without
analysing the looping cost although its 0(N) but we are looping three times
unnecessarly which on the imperative example we can achieve by just one loop
hence it’s faster.

In the second approach you can argue that it’s not a intuitive
approach as it’s a imperative but it’s optimizing our code.
*/

// Declarative Programming

console.time("Bad_Approach");

const result = movements
  .filter((item) => item.salary > 0)
  .map((item) => item.salary)
  .reduce((acc, val, i, arr) => acc + val, 0);

console.log(result);

console.timeEnd("Bad_Approach");

// Otra forma de hacerlo y que en este caso funciona:

console.time("Good_Approach_1");

const result2 = movements.reduce(
  (acc, val, i, arr) => acc + (val.salary >= 0 ? val.salary : 0),
  0
);

console.log(result2);

console.timeEnd("Good_Approach_1");

// Imperative Programming

console.time("Good_Approach_2");

let sum = 0;

for (let item of movements) {
  if (item.salary < 0) continue;
  sum = sum + item.salary;
}

console.log(sum);

console.timeEnd("Good_Approach_2");
