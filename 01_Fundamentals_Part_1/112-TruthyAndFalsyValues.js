/*
************************TRUTHY & FALSY VALUES***********************


Hay 5 valores falsos : 
    1/ Booleans con el numero 0. El resto son true.
    2/ String vacios ''.
    3/ variables no definidas (undefined).
    4/ null.
    5/ NaN.
*/
console.log(Boolean(0)); // False
console.log(Boolean(1)); // True
console.log(Boolean(undefined)); //False
console.log(Boolean("Javi")); // No es un String vacio, luego es Truthy
console.log(Boolean(" ")); // False
// Hay veces que bajo situaciones logicas JS convierte automaticamente a Booleanas:
const money = 0;
if (money) {
  console.log("Do not spend it all");
} else {
  console.log("You should invest better your money");
} // Aqui nos dara el valor de else, porque supone una booleana 0. FALSY.

let height;
if (height) {
  console.log("Height its defined!");
} else {
  console.log("It is not defined!");
} // Aqui supone que la variable height es indifined, luego es FALSY.
