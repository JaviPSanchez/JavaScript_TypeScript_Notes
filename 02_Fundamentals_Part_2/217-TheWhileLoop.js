/*

*********************WHILE LOOP*************************


Este es otro tipo de LOOP, al igual que con for loop necesitamos de las misma estructura, la diferencia con respecto al FOR LOOP radica en que podemos modificar manualmente el COUNTER  y el INCREASE COUNTER, permitiendonos adaptarlo a una gran variedad de casos. Todos los problemas que no necesiten COUNTER VARIABLE, solo cumplir la CONDITION  seran perfectos para el metodo WHILE. Cuando sabemos cuantos loops necesitamos utilizamos FOR, cuando no lo sabemos, utilizamos WHILE.

While loop se repite tantas veces como le digamos.
*/
for (let rep = 1; rep <= 10; rep++) {
  console.log(`FOR: Lifting weights repetition ${rep} 🏋️‍♂️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
}
/*
EJEMPLO que no depende de un COUNTER VARIABLE sino de una variable random: rolle a dize until we achieve the 6 and stop. En este ejemplo no sabemos cuantas veces deberemos hacer funcionar el LOOP, por ello el WHILE es ideal.
*/
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  // CONDITION TRUE cuando el valor es diferente de 6 y permite la accion.
  console.log(`You rolled a ${dice}.`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop ended...");
}
/*
LECTURE: The while Loop
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?
*/

const populations = ["40", "10", "60", "50"];
const percentages3 = [];
function percentageOfWorld1(populations) {
  return (populations / 7900) * 100;
}
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
