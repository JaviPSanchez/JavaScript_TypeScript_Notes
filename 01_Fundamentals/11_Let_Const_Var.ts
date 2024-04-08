import './main.css';

/*
🔍 Explain the disparities between variables created using let, var, or const.
                        Const    Let    Var
Stored in Global Scope:   ❌     ❌     ✅
*/

// Declare a global variable with var
console.log(globalVar); // undefined
var globalVar = 'I am a global variable declared with var';
console.log(window);
// Declare a global variable with let
// console.log(globalLet); // Reference Error
let globalLet = 'I am a global variable declared with let';
// Declare a global variable with const
// console.log(globalConst); // Reference Error
const globalConst = 'I am a global variable declared with const';
/*
                Const    Let    Var
Function Scope:   ❌     ❌     ✅
*/
function test() {
  var a = 10;
  console.log("Value of 'a' inside funuction", a);
}
test();
try {
  console.log("Triyng  to access 'a' defined in function ");
  console.log(a);
} catch (error) {
  console.log(error.message);
}
/*
                Const    Let    Var
Block Scope:     ❌      ❌     ✅
*/
var sandwich = 'tuna';
let drink = 'soda';
if (true) {
  // Block Scope
  var sandwich = 'turkey';
  let drink = 'water';
  console.log(sandwich); // Turkey
  console.log(drink); // Water
}
console.log(sandwich); // Turkey
console.log(drink); // soda
/*
                     Const    Let    Var
Hoisted:              ❌      ❌     ✅
Temporal Dead Zone:   ✅      ✅     ❌
*/
x = 8;
console.log(x);
var x;
y = 10;
console.log(y);
let y;

/*
                    Const    Let    Var
Can be re-aasigned:   ❌     ✅     ✅
Can be re-declared:   ❌     ❌     ✅
Must be initialized:  ✅     ❌     ❌
*/
var city = 'Paris';
city = 'Madrid';
console.log(city);
const userName = 'Javier';
userName = 'Pepe';
console.log(userName);
let age = 38;
age = 37;
console.log(age);
