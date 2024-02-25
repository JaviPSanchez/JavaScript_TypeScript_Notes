'use strict';

/*
PRACTICE
*/
console.log(addDecl(2, 3)); // 5, Nos permite llamarla debido al HOISTING
console.log(addExpr(2, 3)); //ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
var me = 'Javi';
let job = 'teacher';
const year = 1987;
/*
Si instentasemos llamar a las funciones con la VARIABLE VAR, serian undefined
*/
console.log(addExpr(2, 3)); // TypeError: addExpr is not a function
console.log(addArrow(2, 3)); //

var addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;
