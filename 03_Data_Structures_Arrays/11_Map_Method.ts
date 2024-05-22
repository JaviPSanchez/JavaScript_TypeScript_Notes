'use strict';

/*

Hemos visto hasta ahora ARRAYs, OBJECTs y SETs, le toca el turno a los MAPs, mucho mas utiles que los SETs.

Que es un MAP? es una DATA STRUCTURE que podemos usar to map VALUES and KEYs. So, just like an OBJECT, we stored key value pairs.
La gran diferencia entre MAPS y OBJECTS es que en los MAPS los KEYs pueden ser cualquier DATA TYPE siendo una gran ventaja!
En los OBJECTS los KEYS son STRINGS, pero en los MAPS los KEYS pueden ser OBJECTS, ARRAYs, NUMBERS, STRINGS, BOOLEANS o incluso otros MAPs.

Vamos a crear un MAP, para ello hay que escribir el CONSTRUCTOR "new Map()" como en el caso de los SETs "new Set()".
*/
const rest = new Map();
//Para llenar el MAP, podemos usar el METHOD .set y pasarle los ARGUMENTS, siendo el primero el KEY name y el segundo el VALUE.
rest.set('name', 'Classico Italiano');
rest.set(1, 'Madrid, España');
console.log(rest.set(2, 'Paris, Francia')); // {"name" => "Classico Italiano", 1 => "Madrid, España", 2 => "Paris, Francia"}
/*
Podemos observar que el METHOD.set actualiza automaticamente el MAP, lo cual nos permite modificarlo y poner todos los SET que queramos de una sola vez:
*/
rest
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We are open')
  .set(false, 'We are close');
console.log(rest); //{"name" => "Classico Italiano", 1 => "Madrid, España", 2 => "Paris, Francia", "Categories" => Array(4), "Open" => 11, …}
// Esto es algo muy util,
/*
Para leer la informacion contenida dentro del MAP tenemos que usar el METHOD .get y pasar el nombre del KEY que buscamos:
*/
console.log(rest.get('name')); //Classico Italiano
console.log(rest.get(true)); //We are open
console.log(rest.get('1')); //Undefined Hay que respetar el TYPE DATA.
console.log(rest.get(1)); // Madrid, España

//Las posibilidades que nos ofrece los MAP son muy interesantes sobre todo cuando jugamos con las BOOLEANS, veamos el siguiente ejemplo:
const time = 21;
console.log(rest.get(time > rest.get('Open') && time < rest.get('Close'))); // We are open
const time2 = 8;
console.log(rest.get(time2 > rest.get('Open') && time2 < rest.get('Close'))); // We are close

// Este truco que venimos de usar es muy interesante, pero dificil de leer...

/*
Continuamos con los METHODS, ahora queremos ver si el MAP contiene un KEY en particular, usamos el .has METHOD:
*/
console.log(rest.has('Categories')); // true
//Tambien podemos usar el METHOD .delete para borrar un argumento en particular:
rest.delete(2);
console.log(rest); //Hemos borrado Paris, UPS!
//Podemos ver el numero de items:
console.log(rest.size); //7
//Y tambien podemos borrar todos los elementos:
rest.clear();
console.log(rest); //Map(0) {}
/*
Finalmente podemos tambien comprobar que podemos usar OBJECTS o ARRAYS como MAP keys
*/
rest.set([1, 2], 'Test');
console.log(rest);
/*
Pero si quisiesemos llamar a ese KEY en forma de ARRAY tendriamos problemas por la forma en la que trabaja JS.
A pesar de escribir las dos ARRAYs de la misma forma, no son el mismo OBJECT en el HEAP!
*/

console.log(rest.get([1, 2])); //Undefined

//Luego lo que hay que hacer, es crear una VARIABLE que tenga la misma address en el HEAP:

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); //Test
/*
Hemos demostrado que podemos usar OBJECTS como MAP KEYS y esto puede ser muy util con DOM elements, que al fin y al cabo no dejan de ser un tipo especial de OBJECT.
*/
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest); // {Array(2) => "Test", Array(2) => "Test", h1 => "Heading"}

('use strict');

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

//EJEMPLO 1

/*
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5];

const squared = nums.map(function (num) {
  return num ** 2;
});

console.log(squared); //[1, 4, 9, 16, 25]

//EJEMPLO 2

/*
Given an array of strings, return an array where the first letter of each string is capitalized
*/

const names = ['alice', 'bob', 'charlie', 'danielle'];

const capitalized = names.map(name => name[0].toUpperCase() + name.slice(1));
console.log(capitalized); //["Alice", "Bob", "Charlie", "Danielle"]

//EJEMPLO 3

/*
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.
*/

const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle'];

const paragraphs = pokemon.map(mon => {
  return `<p>${mon}</p>`;
});

console.log(paragraphs); //["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

//EJEMPLO ANECDOTA

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

('use strict');

/*
Anteriormente creamos un MAP vacio al cual fuimos incoorporando ENTRIES (KEY + VALUE) con el METHOD .set

Podemos meter ENTRIES en un MAP con otro METHOD diferente, el cual es mas util cuando tenemos mucha informacion o tenemos que hacer una especie de encuesta con diferentes opciones, podemos meter ARRAYS dentro de ARRAYS.

Cuando empezamos un MAP from scratch es una forma mas comoda de crear MAPs rather than using the .set METHOD all the time.
*/

const quiz = new Map([
  ['question', 'Whats is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try one more time'],
]);
console.log(quiz);
/*
{"question" => "Whats is the best programming language?", 1 => "C", 2 => "Java", 3 => "JavaScript", true => "Correct 🎉", …}
[[Entries]]
0: {"question" => "Whats is the best programming language?"}
1: {1 => "C"}
2: {2 => "Java"}
3: {3 => "JavaScript"}
4: {true => "Correct 🎉"}
5: {false => "Try one more time"}
*/
/*
Podemos observar tambien que la estructura que obtenemos de un MAP es muy parecida a la obtenida por un OBJECT cuando utilizamos Object.entries:
*/
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(Object.entries(openingHours));
/*
[Array(2), Array(2), Array(2)]
0: (2) ["thu", {…}]
1: (2) ["fri", {…}]
2: (2) ["sat", {…}]
*/
// Esto lo que quiere decir es que hay una forma sencilla de convertir OBJECTS hacia MAPS
//Convert OBJECTS to MAPS:
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap); // Obteniendo un MAP
/*
{"thu" => {…}, "fri" => {…}, "sat" => {…}}
[[Entries]]
0: {"thu" => Object}
1: {"fri" => Object}
2: {"sat" => Object}
*/
//Esto es importante porque luego si queremos realizar un LOOP de un MAP es mas facil que hacerlo de un OBJECT que hay que escribir Object.entries(OBJECT)
/*
El siguiente tema a tratar es ITERATION en MAPS, por lo que el FOR LOOP esta disponible para estas DATA STRUCTURES.
 Vamos a pedirle que solo nos saque los DATA TYPES NUMBERS del MAP quiz
*/
console.log(quiz.get('question'));
for (const [key, value] of quiz) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
/*
Whats is the best programming language?
Answer 1: C
Answer 2: Java
Answer 3: JavaScript
*/
//Si queremos obtener el input del USER, un simple PROMPT
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer); //3
//Ahora usamos el poder de las BOOLEAN KEYS
console.log(quiz.get('correct') === answer); //true
console.log(quiz.get(quiz.get('correct') === answer)); //Correct 🎉

/*
A veces nos puede pasar que queramos convertir un MAP en un ARRAY, lo que hay que hacer es utilizar el SPREAD OPERATOR
*/
console.log([...quiz]);
/*
[Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
0: (2) ["question", "Whats is the best programming language?"]
1: (2) [1, "C"]
2: (2) [2, "Java"]
3: (2) [3, "JavaScript"]
4: (2) ["correct", 3]
5: (2) [true, "Correct 🎉"]
6: (2) [false, "Try one more time"]
*/
//Pudiendo acceder a los ENTRIES, KEYS o VALUEs si lo necesitasemos:
//NOTA: los ...los usamos en entrie, keys y values para evitar el extraño MapIterator que nos sale...
console.log([...quiz.entries()]);
/*
0: {"question" => "Whats is the best programming language?"}
1: {1 => "C"}
2: {2 => "Java"}
3: {3 => "JavaScript"}
4: {"correct" => 3}
5: {true => "Correct 🎉"}
6: {false => "Try one more time"}
*/
console.log([...quiz.keys()]);
/*
0: "question"
1: 1
2: 2
3: 3
4: "correct"
5: true
6: false
*/
console.log([...quiz.values()]);
/*
0: "Whats is the best programming language?"
1: "C"
2: "Java"
3: "JavaScript"
4: 3
5: "Correct 🎉"
6: "Try one more time"
*/
