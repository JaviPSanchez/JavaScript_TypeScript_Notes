//A truly innovative way to achieve immutability in JavaScript.

const family = ['John', 'Meli', 'Javi', 'Gabriel'];
const trueFamily = family.with(0, 'Napoleon');

console.log(family);
console.log(trueFamily);
