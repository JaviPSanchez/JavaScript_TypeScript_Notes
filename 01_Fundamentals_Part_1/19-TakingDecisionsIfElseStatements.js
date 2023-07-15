/*
********************TAKING DECISIONS If/Else*************************


"Control structure"--> Esta estructura nos permite controlar nuestro codigo con mayor exactitud.
*/
const age = 15;
const isOldEnough = age >= 18; //Podriamos escribir directamente if (age>=18) y no declarar la const isOldEnough.
if (isOldEnough) {
  console.log("Javi tiene la edad suficiente");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Javi no tiene la edad suficiente. debe esperar ${yearsLeft} años.`
  );
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

/*
LECTURE: Taking decisions: if/else statements.
If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original.
*/

const population = 20;
if (population > 33) {
  console.log("Spain's population is above average");
} else {
  console.log(`Spain's population is ${33 - population} million below average`);
}
