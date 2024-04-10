/*
******************************INTRODUCTION TO ARRAYS******************************



Los arrays sirven para gestionar toda la info que programamos, son de gran utilidad.
En vez de escribir como hasta ahora todas la variables una por una, podemos crear un array que almacene toda esta informacion, ahorrandonos codigo:
*/
const friend1 = 'Javi';
const friend2 = 'Meli';
const friend3 = 2021 - 1987;

const friends = ['Javi', 'Meli', 2021 - 1987];
// Hay dos formas de crear las Arrays:
// 1/literal syntax -->
const friendsLiteral = ['valor1', 'valor2', 'etc'];
// 2/New Array -->
const friendsNewArray = new Array('valor1', 'valor2', 'etc');
/*
Para poder sacar la informacion de nuestro array, basta con llamarlo e indicarle la posicion, hay que tener en cuenta que empezamos por el 0.
*/
console.log(friends[0]); //Nos dara el valor de Javi.
console.log(friends[1]); //Nos dara el valor de Meli.
console.log(friends[2]); //Nos dara el valor 34.

// Con la propiedad .length podemos saber el tamaño de nuestro array:
friends.length; //hay que tener en cuenta que el resultado que nos da no considera el 0 sino que empieza directamente por 1.

// En las arrays es posible cambiar un valor, pero solo uno, no podemos cambiar varios valores a la vez.

friends[2] = 'Pepe'; // Cambiara el valor de 34, por Pepe.

const firstName = 'Javi'; //Podemos incluso meter una variable en nuestro array.
const friends4 = ['firstName', 'Meli', 2021 - 1987];

// Incluso podriamos meter otras arrays dentro de una.

const friendsEspagne = ['firstName', friends, 'Manuel', 5623]; //Tenemos el array friendsEspagne y dentro el array friends.
/*
friends = ["Juan", "Manuel"]; //No nos deja
*/
// Tambien podemos meter funciones dentro de nuestros arrays:

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
const years = [1990, 2020, 1987, 1989, 1978];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years.length - 1)];
console.log(ages); // Metemos en el array ages, las funciones calcAge.

/*
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/

const populations = ['40', '10', '60', '50'];
if (populations.length >= 4) {
  console.log('True');
} else {
  console.log('False');
}

function percentageOfWorld(populations) {
  return (populations / 7900) * 100;
}

const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];
console.log(percentages);
