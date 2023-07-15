/*
 ***********************************BASIC OPERATORS************************
 */
//  Math Operators - + / * **
const yearNow = 2021;
const ageJavi = yearNow - 1987;
const ageMelissa = yearNow - 1989;
console.log(ageJavi, ageMelissa);
console.log(ageJavi * 2, ageJavi / 10, ageJavi ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2* 2

const firstName = "Javier";
const secondName = "Palomino";
console.log(firstName + " " + secondName);

// typeof operator --> Nos dice que tipo de VALUE es.

console.log(typeof 2365); //number
console.log(typeof "javi"); //string

/**************Assignment operators***************/

// Addition assignment (+=)

let a = 2;
let b = "hello";
console.log((a += 3)); // addition
//  5
console.log((b += " world")); // concatenation
// "hello world"

/* Multiplication assignment (*=)
Operator: x *= y
Meaning:  x  = x * y
*/

let c = 2;
console.log((c *= 3));
// expected output: 6
console.log((c *= "hello"));
// expected output: NaN

/* Exponentiation assignment operator (**=)
Operator: x **= y
Meaning:  x  = x ** y
*/

y = 2;
console.log((y **= 4)); //16

/* Increment (++)
x++ --> If used postfix, with operator "++"" after operand "x" (for example, x++), the increment operator increments and returns the value before incrementing.
*/
let w = 3;
z = w++;
console.log(z); //3
console.log(w); //4
/*
++x --> If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
*/
let m = 2;
n = ++m;
console.log(m); //3
console.log(n); //3
/* Decrement (--)
x-- --> If used postfix, with operator after operand (for example, x--), the decrement operator decrements and returns the value before decrementing.
*/
let p = 3;
q = p--;
console.log(q); //3
console.log(p); //2
/*
--x --> If used prefix, with operator before operand (for example, --x), the decrement operator decrements and returns the value after decrementing.
*/
let r = 2;
s = --r;
console.log(r); //1
console.log(s); //1

// Comparison Operators --> Para producir Boolean Values

console.log(ageJavi > ageMelissa); // <, >, >=; <=
console.log(ageMelissa >= 18);
console.log(yearNow - 1987 > yearNow - 1989); //¿como sabe JS que operacion hacer primero?

// LECTURE: BASIC OPERATORS
// If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created!!, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

let population = 66;
const language = "Spanish";
const country = "Spain";
const continent = "Europe";
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population <= 33);
const description =
  country +
  " is in " +
  continent +
  ", and its 11 million people speak " +
  language;
console.log(description);
