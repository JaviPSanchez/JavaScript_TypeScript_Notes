/*
****************************EQUALITY OPERATORS = vs == vs ===.****************

= --> Es un assigment operator, cuando asignamos un valor a una variable.
=== (STRICT) --> cuando es solo y unicamente igual, es strict!.
*/
const age = 18;
if (age === 18) console.log("Correcto!"); // con operador === podemos omitir el else.
// == (LOOSE) --> es lo mismo que el === pero admite type coercion. intentar usar lo menos posible el double equality, da muchos quebraderos de cabeza!
const age = 18;
if (age == 18) console.log("Correcto!");

/*
// LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation
*/
const numNeighbourds = Number(
  prompt("How many neighbour countries does your country have?")
);
console.log(typeof numNeighbourds);
if (numNeighbourds === 1) {
  console.log("Only 1 border!");
} else if (numNeighbourds > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

const favourite = prompt("What's your favourite number?"); // Nos pedira escribir un valor en el browser, el cual sera guardado como String en la variable favourite.
console.log(favourite);
console.log(typeof favourite);
if (favourite == 8) {
  // Aqui estamos usando el loose equality operator, luego hacemos type coercion, convertirá el string "23" a numero y dara un valor logico true, puesto que 23 = 23.
  console.log("Cool! 8 mola!");
}
const favourite = prompt("What's your favourite number?");

if (favourite === 8) {
  // Aqui al usar el triple operador, nos dara false, puesto que el string "23" no es igual al numero 23. no hace type coercion.
  console.log("Cool! 8 mola!");
} // Aqui para poder cambiar a numerop la string guaradad, hay que utilizar el operador number.

const favourite = Number(prompt("What's your favourite number?"));
if (favourite === 8) {
  // 8 = 8
  console.log("Cool! 8 mola!");
}

// ELSE IF --> podemos añadir tantas veces como queramos mas condiciones a un statement IF / ELSE:
const favourite = Number(prompt("What's your favourite number?"));
if (favourite === 8) {
  console.log("Cool! 8 mola!");
} else if (favourite === 7) {
  console.log("Cool! 7 its also nice!");
} else if (favourite === 9) {
  console.log("Cool! 9 its also nice!");
} else {
  console.log("Number is neither 8 nor 7 or 9");
}

/*
*******************NOT EQUALITY OPERATORS != vs !==.********************
// != --> LOOSE OPERATORS. intentar no usar!
// !== --> STRICT OPERATOR.
*/
const favourite = Number(prompt("Elige un numero entre 7 y 9 incluidos?"));
if (favourite !== 9) {
  console.log("¿No te gusta el 9?");
} else {
  console.log("El 9 me encanta.");
}
