'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
Continuamos con los metodos para transformar elementos.

Utilizaremos el FILTER METHOD, que filtra los elementos con una condicion especifica.

¿Como especificamos una condicion? pues como de costumbre, con una callback function.

Seguimos trabajando con el ARRAY movements.

Al igual que con el resto de METHODs, tenemos acceso al INDEX, al ENTIRE ARRAY y al
CURRENT ELEMENT VALUE, aunque aqui solo trabajaremos con el current element value que
es lo unico que suele interesar con el FILTER METHOD.
*/

//Queremos crear un ARRAY de los DEPOSITs (movements above 0)
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
//Queremos filtrar los valores negativos, Solo los valores que sean true, pasan:
console.log(deposits); //[200, 450, 3000, 70, 1300]

//Podrimos hacer lo mismo con el FOR OF LOOP
const deposits2 = [];
for (const mov of movements) if (mov > 0) deposits2.push(mov);
console.log(deposits2); //[200, 450, 3000, 70, 1300]

// Como hemos comentado anteriormente, mejor utilizar el approcah con funciones, es mas utilizado. Tambien hay una razon muy importante, y es que podemos concatenar multiples METHODs juntos.

//Hacemos lo mismo con los withdrawals:
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); // [-400, -650, -130]
