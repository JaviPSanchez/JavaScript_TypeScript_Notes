/*
*******************ITERATION: THE FOR LOOP*********************

Cuando hablabamos de los statements if/else, deciamos que eran CONTROL STRUCTURED y que existian otros tipos diferentes. Es el caso de los LOOPS, los cuales son otro tipo de CONTROL STRUCTURED. Los LOOPs son aspectos fundamentales de cualquier lenguaje de programacion. Nos permiten automatizar tareas repetitivas!!.
*/

//En vez de repetir el codigo :
console.log('Lifting weights repetition 1 🏋️‍♂️');
console.log('Lifting weights repetition 2 🏋️‍♂️');
console.log('Lifting weights repetition 3 🏋️‍♂️');
console.log('Lifting weights repetition 4 🏋️‍♂️');
console.log('Lifting weights repetition 5 🏋️‍♂️');
console.log('Lifting weights repetition 6 🏋️‍♂️');
console.log('Lifting weights repetition 7 🏋️‍♂️');
console.log('Lifting weights repetition 8 🏋️‍♂️');
console.log('Lifting weights repetition 9 🏋️‍♂️');
console.log('Lifting weights repetition 10 🏋️‍♂️');
console.log('Lifting weights repetition 11 🏋️‍♂️');
console.log('Lifting weights repetition 12 🏋️‍♂️');

//Podemos crear un LOOP con el comando "for" y repetir nuestro codigo tantas veces como queramos, basicamente lo que quiere decir es (for loop keeps running while condition is TRUE).

// Los LOOP tienen tres partes:

// 1 COUNTER :  Initial value of a counter. 'let rep = 1' print current value.

// 2 CONDITION: Logical condition que se evaluara antes de comenzar el loop! 'rep <= 10' where to stop!

// 3 COUNTER UPDATE: Update the iteration by 1  'rep++' que es lo mismo que decir rep= rep + 1. Esto se realiza despues del paso 2.

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

/*
******************LOOPING BACKWARDS & LOOPS IN LOOPS******************


Es posible de logear el ultimo elemento de un ARRAY, empezar por el ultimo elemento. La unica diferencia radica en la forma de programar sus partes.
*/
const javi = [
  'Javi',
  'Palomino',
  2021 - 1987,
  'Digital Expert',
  ['Meli', 'Guille', 'Pepe'],
];
for (let i = javi.length - 1; i >= 0; i--) {
  console.log(javi[i]);
}
/*

*****************LOOP INSIDE A LOOP**********************


Basicamente con este metodo podemos meter un loop dentro de otro.
*/
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repetition ${rep} 🏋️‍♀️.`);
  }
}
/*
LECTURE: Looping Backwards and Loops in Loops
1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway 😉

*/
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
}
