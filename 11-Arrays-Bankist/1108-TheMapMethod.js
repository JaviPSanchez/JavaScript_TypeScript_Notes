'use strict';

/*
Como hemos comentado anteriormente, MAP METHOD es otro metodo que tenemos para LOOPEAR ARRAYs.

En este ejemplo intentaremos convertir el ARRAY movements en US dollars $.
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//Imaginemos que 1€ = 1.18$
const eurToUsd = 1.18;
//Guardamos la brand new ARRAY en una VARIABLE
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movementsUSD); //[236, 531, -472, 3540, -767, -153.4, 82.6, 1534]
//Guardando la ARRAY original
console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]

///////////////EJEMPLO 1////////////

/*
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5];

const squared = nums.map(function (num) {
  return num ** 2;
});

console.log(squared); //[1, 4, 9, 16, 25]

////////////EJEMPLO 2////////////

/*
Given an array of strings, return an array where the first letter of each string is capitalized
*/

const names = ['alice', 'bob', 'charlie', 'danielle'];

const capitalized = names.map(name => name[0].toUpperCase() + name.slice(1));
console.log(capitalized); //["Alice", "Bob", "Charlie", "Danielle"]

///////////////EJEMPLO 3/////////////

/*
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.
*/

const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle'];

const paragraphs = pokemon.map(mon => {
  return `<p>${mon}</p>`;
});

console.log(paragraphs); //["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

///////////////EJEMPLO ANECDOTA/////////////

//Si hubiesemos creado una funcion CALLBACK con el valor de 23, obtendriamos un ARRAY de 23:

const movements23 = movements.map(function (mov) {
  return 23;
});
console.log(movements23); //[23, 23, 23, 23, 23, 23, 23, 23]
//Si quisiesemos hacer lo mismo con el FOR OF LOOP, primero habria que crear el nuevo ARRAY:
const movementUSD2 = [];
for (const mov of movements) movementUSD2.push(mov * eurToUsd);
console.log(movementUSD2); //[236, 531, -472, 3540, -767, -153.4, 82.6, 1534]

//Podemos ver que la filosofia entre los dos metodos es completamente diferente, o podemos decir PARADIGMAS, un concepto que veremos mas adelante. El primer metodo es FUNCTIONAL PROGRAMMING y es hacia donde esta apuntando MODERN JS.

//Ahora vamos a hacer un poco mas limpia nuestra CALLBACK FUNCTION usando ARROW FUNCTIONS:
const movementsUSDarrow = movements.map(mov => mov * eurToUsd);
console.log(movementsUSDarrow); // [236, 531, -472, 3540, -767, -153.4, 82.6, 1534]

//Hay mucha gente que no le gusta este modo de utilizar una funcion ARROW como callback...pero hay que reconocer que es mucho mas minimalista!

/*
Al igual que con el METHOD FOR EACH con el MAP METHOD tenemos acceso a tres parametros (value, index, array).
1/ VALUE  --> Valor actual.
2/ INDEX --> El index.
3/ ARRAY ENtero --> El ARRAY entero.
*/
const movementsDescriptions = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You have ${
      mov > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(mov)}`
);
console.log(movementsDescriptions);

/*
["Movement 1: You have deposited 200", "Movement 2: You have deposited 450", "Movement 3: You withdrew 400", "Movement 4: You have deposited 3000", "Movement 5: You withdrew 650", "Movement 6: You withdrew 130", "Movement 7: You have deposited 70", "Movement 8: You have deposited 1300"]
*/

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You have deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

/*
You have deposited 200
You have deposited 450
You withdrew 400
You have deposited 3000
You withdrew 650
You withdrew 130
You have deposited 70
You have deposited 1300
*/
/*
Como podemos ver con el FOR EACH METHOD se crean por cada iteracion una linea individual en la consola a medida que vamos loopeando el ARRAY, en cada iteracion realizamos una accion que es visible en la consola, podemos llamar a esto SIDE EFFECT.

Pero con MAP METHOD devolvemos cada STRING a partir del CALLBACK y se crea un NEW ARRAY, no creamos un SIDE EFFECT esto es algo muy importante y la gran diferencia.

Este concepto de SIDE EFFECT es algo que veremos mas adelante cuando hablemos de FUNCTIONAL PROGRAMMING.
*/
