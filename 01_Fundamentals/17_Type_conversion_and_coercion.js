/*
**********************TYPE CONVERSION********************************

*/
// En JS tenemos Type Conversion (cuando convertimos manualmente un valor en otro) y Type Coercion (cuando JS lo hace por nosotros).

const inputYear = '1987';
console.log(Number(inputYear)); //La funcion Number convierte nuestro string en un number, pero no modifica la variable inputYear, dejandola definida como una string. Las Boleanas no pueden convertirse.
console.log(Number('Hola')); //Si no es un number, no convierte nada. NaN.
console.log(Number(inputYear) + 18);
console.log(String(23)); //Convertimos un Number en String
//TYPE COERCION
// Convierte dos tipos de datos diferentes. String y Number.

console.log('I am ' + 25 + ' years old'); //JS hace la type coercion a STRING automaticamente.
console.log('23' - '10' - '3'); // = 10  aqui debido al signo - hace lo contrario, convierte todo a Number
console.log('23' + '10' + '3'); // = 23103 aqui no hay problema, todo convertido a String.
console.log(2 + 3 + 4 + '5'); // "95" String, con el +, hacemos String.
console.log('10' - '4' - '3' - 2 + '5'); // "15"
console.log('23' > '10'); // true
console.log('I am ' + String(25) + ' years old'); //pero sino la hace como en muchos otros lenguajes deberemos hacerlo manualmente.
/*
LECTURE: type Conversion and Coercion

Predict the result of these 5 operations without executing them:
*/
'9' - '5'; // Number 4;
'19' - '13' + '17'; // String "617"
'19' - '13' + 17; // Number 23.
'123' < 57; // Boolean False
5 + 6 + '4' + 9 - 4 - 2; // Number 1143;
