"use strict";

/*
A veces nos dejamos llevar por los fantasticos métodos de ES6, pero no siempre es lo más óptimo desde
un punto de vista de rendimiento.


In the first approach we often use the beautiful ES6 methods so much without
analysing the looping cost although its 0(N) but we are looping three times
unnecessarly which on the imperative example we can achieve by just one loop hence it’s faster.

In the second approach you can argue that it’s not a intuitive
approach as it’s a imperative but it’s optimizing our code.
*/
const condition = (a, b) => a > b;
console.log(condition(1, 2)); //False

const obj = {
  a: 1,
  b: 2,
  ...(false && { c: 3 }), // como el lado derecho es false hademos short circuit y salimos
  ...(true && { d: 4 }), // como es true, seguimos avanzando
  ...(condition(1, 2) && { e: 5 }),
  ...(condition(2, 1) && { f: 6 }),
};

console.log(obj);
