/*
LOGIC : BOOLEAN LOGIC --> AND, OR, NOT


Estos operadores son comunes a todos los lenguajes de programacion, no solo a JS.
AND (&&) --> todas son true.
OR (||) --> una es true.
NOT (!) --> invierte los valores true/false.
*/

const hasDriversLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

//const shouldDrive = hasDriverslicense && hasGoodVision; --> Podemos poner esta linea dentro de el if condition

if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Sarah should not drive...');
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
const speakEnglish = 'Spanish';
const populationCountry = 40;
const islandCountry = false;

if (speakEnglish === 'English' && populationCountry <= 50 && !islandCountry) {
  console.log("it's the right country");
} else {
  console.log('it is not the right country');
}

//SHORT CIRCUITING

/*
&& --> el AND OPERATOR corta cuando el primer operador es falso, es decir, devuelve ese valor.
*/

console.log(true && 'Some String');
console.log(false && 'Some String');
console.log('jonas' && 'Truthy Value');
console.log(0 && 'Falsy Value');

/*
|| --> el OR OPERATOR hace lo contrario, si el primer operador es verdadero, se devuelve a si mismo.
*/

console.log(true || 'Some String');
console.log(false || 'Some String');

/*
?? --> Nullish Coalescing OPERATOR se corta con los Falsy values, lo usamos para evitar que cuando
tenemos un 0 o '' devuelve a si mismo, pero no con NaN o undefined.
*/

console.log(0 ?? 'Falsy Value');
console.log(undefined ?? 'Error');

/*
Hay tres propiedades cuando usamos los LO:

1/They can use any DATA TYPE, return any DATA TYPE and short-circuiting.
*/
console.log(3 || 'Javi');
/*
In the case of OR short-circuting means that if the first value is a truthy value, it will immediatly return that first value.
The other operand will not even be evaluated.
*/
console.log(' ' || 'Javi'); //Falsy Value
console.log(true || 0);
console.log(undefined || null); //null, undefined its a falsy value with Booleans. There is no short circuiting, even though null is a falsy value also.
console.log(undefined || null || '' || 'Hello' || 23 || null); //Hello  is the first truthy value in this chain of OR OPERATIONS.
console.log(0 && 'Javi');
console.log(7 && 'Javi');
console.log(7 && 5 && 'meli' && 'Javi');
console.log(7 && 5 && 'meli' && null && 'Javi');
