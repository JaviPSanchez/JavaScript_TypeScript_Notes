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
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

const isTired = true; // C
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
console.log('jonas' && 'Thruthy Value');
console.log(0 && 'Falsy Value');

/*
|| --> el OR OPERATOR hace lo contrario, si el primer operador es verdadero, se devuelve a si mismo.
*/

console.log(true || 'Some String');
console.log(false || 'Some String');

/*
?? --> Nullish Coalescing OPERATOR se corta con los Falsy values, lo usamos para evitar que cuando tenemos un 0 o '' devuelve a si mismo, pero no con NaN o undefined.
*/

console.log(0 ?? 'Falsy Value');
console.log(undefined ?? 'Error');

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient); //mushrooms
    console.log(otherIngredients); // ["spinach"]
  },
};
/*
Hasta ahora hemos utilizado los LOGICAL OPERATORS AND y OR con BOOLEAN VALUES, pero hay mucho mas potencial con estos LOGICAL OPERATORS:
Hay tres propiedades cuando usamos los LO:
1/They can use any DATA TYPE, return any DATA TYPE and short-circuiting.
*/
console.log(3 || 'Javi'); // 3
/*
In the case of OR short-circuting means that if the first value is a truthy value, it will immediatly return that first value. The other operand will not even be evaluated.
*/
console.log(' ' || 'Javi'); // Javi , '' Falsy Value
console.log(true || 0); //True
console.log(undefined || null); //null, undefined its a falsy value with Booleans. There is no short circuiting, even though null is a falsy value also.
console.log(undefined || null || '' || 'Hello' || 23 || null); //Hello  is the first truthy value in this chain of OR OPERATIONS.
/*
Todo esto tiene sentido si pensamos que el OR operator es verdadero si uno de los dos valores es TRUE y si el primero es TRUE JS dejara de buscar y devolvera el valor de true.

Imaginemos que hay una propiedad en el OBJECT restaurant con el numero de invitados, el problema es que no conocemos el numero, es undefined y por ello queremos poner un DEFAULT value si no existe, por ejemplo 10.
*/

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //10 puesto que no existe.

// Podriamos aprovechar el OR operator y el short circuting:

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10 al ser undefined falsy value restaurant.numGuests.
/*
Si definiesemos restaurant.numGuests = 0, saldria el valor de 10 como default, puesto que una booleana de 0 es un valor FALSY, para evitar esto veremos lo que se conoce como THE NULLISH COALESCING OPERATOR.

Es una forma rapida de definir DEFAULT VALUES y no tener que usar TERNARY OPERATION o incluso peor aun IF/ELSE STATEMENTS.

Toca ahora ver el AND OPERATOR y su short circuiting:

Funciona de la misma forma que el OR, lo unico que el short circuit se realizara en el momento que uno de los dos valores sea falsy. Es justo lo contrario al OR. Tiene su logica, el AND OPERATOR es TRUE si todos los OPERANDS son TRUE. Si uno de los dos es falso, ya sabemos de antemano el resultado, false, porque continuar buscando?
*/
console.log(0 && 'Javi'); //0
console.log(7 && 'Javi'); //Javi, cuando es TRUTHY la evalucion continua hasta dar el ultimo valor.
console.log(7 && 5 && 'meli' && 'Javi'); // Javi
console.log(7 && 5 && 'meli' && null && 'Javi'); // null
/*
En la practica podemos usar el short circuiting del AND OPERATOR para evitar por ejemplo IF/ELSE statements:
*/
//Practical exemple
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
/*
orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient); //mushrooms
    console.log(otherIngredients); // ["spinach"]
  },
  */
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
/*
orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient); //mushrooms
    console.log(otherIngredients); // ["spinach"]
  },
  */
/*
Si es true el primer OPERAND sigue con el siguiente OPERAND llamando a la funcion .orderPizza sino se sale.

Con todo esto no queremos decir que ya no debemos nunca usar los if else, porque hara el codigo muy complicado de leer.
*/
