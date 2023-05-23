/*
******************LOOPING BACKWARDS & LOOPS IN LOOPS******************


Es posible de logear el ultimo elemento de un ARRAY, empezar por el ultimo elemento. La unica diferencia radica en la forma de programar sus partes.
*/
const javi = [
  "Javi",
  "Palomino",
  2021 - 1987,
  "Digital Expert",
  ["Meli", "Guille", "Pepe"],
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
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
}
