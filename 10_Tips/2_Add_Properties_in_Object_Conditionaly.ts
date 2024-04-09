"use strict";

const condition = (a: number, b: number) => a > b;
console.log(condition(1, 2)); //False

interface Exemple {
  a: number;
  b: number;
}
const obj: Exemple = {
  a: 1,
  b: 2,
  ...(false && { c: 3 }), // como el lado derecho es false hademos short circuit y salimos
  ...(true && { d: 4 }), // como es true, seguimos avanzando
  ...(condition(1, 2) && { e: 5 }),
  ...(condition(2, 1) && { f: 6 }),
};

console.log(obj);
