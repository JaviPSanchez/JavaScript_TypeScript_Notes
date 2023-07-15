/*
*******************ITERATION: THE FOR LOOP*********************

Cuando hablabamos de los statements if/else, deciamos que eran CONTROL STRUCTURED y que existian otros tipos diferentes. Es el caso de los LOOPS, los cuales son otro tipo de CONTROL STRUCTURED. Los LOOPs son aspectos fundamentales de cualquier lenguaje de programacion. Nos permiten automatizar tareas repetitivas!!.
*/

//En vez de repetir el codigo :
console.log("Lifting weights repetition 1 🏋️‍♂️");
console.log("Lifting weights repetition 2 🏋️‍♂️");
console.log("Lifting weights repetition 3 🏋️‍♂️");
console.log("Lifting weights repetition 4 🏋️‍♂️");
console.log("Lifting weights repetition 5 🏋️‍♂️");
console.log("Lifting weights repetition 6 🏋️‍♂️");
console.log("Lifting weights repetition 7 🏋️‍♂️");
console.log("Lifting weights repetition 8 🏋️‍♂️");
console.log("Lifting weights repetition 9 🏋️‍♂️");
console.log("Lifting weights repetition 10 🏋️‍♂️");
console.log("Lifting weights repetition 11 🏋️‍♂️");
console.log("Lifting weights repetition 12 🏋️‍♂️");

//Podemos crear un LOOP con el comando "for" y repetir nuestro codigo tantas veces como queramos, basicamente lo que quiere decir es (for loop keeps running while condition is TRUE).

// Los LOOP tienen tres partes:

// 1 COUNTER :  Initial value of a counter. 'let rep = 1' print current value.

// 2 CONDITION: Logical condition que se evaluara antes de comenzar el loop! 'rep <= 10' where to stop!

// 3 COUNTER UPDATE: Update the iteration by 1  'rep++' que es lo mismo que decir rep= rep + 1. Esto se realiza despues del paso 2.

for (let rep = 1; rep <= 10; rep++) {
  console.log("Lifting weights repetition 12 🏋️‍♂️");
} // Este codigo nos mostrara el string 10 veces, simplemente repitiendolo, pero nosotros queremos modificar en cada iteracion el numero de repeticiones:

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
} // Simplemente convertimos nuestra string en un template string. Construimos de una forma dinamica nuestra string, eliminamos el hard coding string!
/*
LECTURE: Iteration: The for Loop
1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting.`);
}
