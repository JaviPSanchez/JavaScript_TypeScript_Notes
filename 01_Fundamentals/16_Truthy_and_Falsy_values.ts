/*
************************TRUTHY & FALSY VALUES***********************


Hay 5 valores falsos : 
    1/ Booleans con el numero 0. El resto son true.
    2/ String vacios ''.
    3/ variables no definidas (undefined).
    4/ null.
    5/ NaN.
*/
console.log(Boolean(0)); // Falsy
console.log(Boolean(1)); // True
console.log(Boolean(undefined)); // Falsy
console.log(Boolean('Javi')); // No es un String vacio, luego es Truthy
console.log(Boolean(' ')); // Falsy
console.log(NaN + 1);
console.log(undefined + 1);

// Hay veces que bajo situaciones logicas JS convierte automaticamente a Booleanas:
const money = 0;
if (money) {
  console.log('Do not spend it all');
} else {
  console.log('You should invest better your money');
} // Aqui nos dara el valor de else, porque supone una booleana 0. FALSY.

let height;
if (height) {
  console.log('Height its defined!');
} else {
  console.log('It is not defined!');
} // Aqui supone que la variable height es Undefined, luego es FALSY.

/*
Si quisieramos evitar los if, else statements:
*/

interface Info {
  name: string;
  lastName: any;
  firstName: any;
}

let userInfo: Info;

userInfo = {
  name: 'Javier',
  lastName: undefined,
  firstName: 'Palomino',
};
//Si tenemos un Falsy Value como undefined, podemos asignarle un 0
userInfo.lastName = userInfo.lastName || 'No Name';
console.log(userInfo);
userInfo.firstName = userInfo.firstName || 'Sanchez';
console.log(userInfo);
