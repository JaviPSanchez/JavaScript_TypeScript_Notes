'use strict';

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
