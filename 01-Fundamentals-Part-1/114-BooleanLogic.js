/*
 *****************LOGIC : BOOLEAN LOGIC --> AND, OR, NOT.**************
 */

//Estos operadores son comunes a todos los lenguajes de programacion, no solo a JS.
// AND (&&) --> todas son true.
// OR (||) --> una es true.
// NOT (!) --> invierte los valores true/false.

const hasDriversLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

//const shouldDrive = hasDriverslicense && hasGoodVision; --> Podemos poner esta linea dentro de el if condition

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Sarah should not drive...");
}

/*
LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)

*/
const speakEnglish = "Spanish";
const populationCountry = 40;
const islandCountry = false;

if (speakEnglish === "English" && populationCountry <= 50 && !islandCountry) {
  console.log("it's the right country");
} else {
  console.log("it isn't the right country");
}
