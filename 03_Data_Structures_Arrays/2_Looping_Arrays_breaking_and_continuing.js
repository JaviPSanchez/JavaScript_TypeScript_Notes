/*
Al igual que podemos loopear una primitiva, los ARRAYS son susceptibles
de loopear, permitiendonos mostrar todos los elementos dentro de un array
sin necesidad de llamar uno a uno:
*/
const javi = [
  'Javi',
  'Palomino',
  2021 - 1987,
  'Digital Expert',
  ['Meli', 'Guille', 'Pepe'],
];

console.log(javi[0]);
console.log(javi[1]);
console.log(javi[2]);
console.log(javi[3]);
console.log(javi[4]);

// podemos logear directamente todos los valores con el LOOP FOR:

for (let i = 0; i < javi.length; i++) {
  console.log(javi[i]);
}

/*
**********************FILLING ARRAYS CON LOOP**********************


Anteriormente hemos visto que utilizando el metodo .push, podemos 
meter nuevos datos al final de nuestra ARRAY.
*/
const friends = ['Javi', 'Meli', 'Gabi'];
const newLength = friends.push('Napoleon');
console.log(friends); //["Javi", "Meli", "Gabi", "Napoleon"]

// Podemos usar los loops para automatizar la tarea con todas las posiciones.

const years = [1991, 1987, 1989, 2020];
const ages = []; // queremos llenar este array vacio con los años actuales de cada posicion, para ello utilizamos la propiedad .push y el loop para automatizar la tarea:
for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log(ages); //(4) [30, 34, 32, 1] automaticamente ha calculado los valores y los ha metido en la nueva array ages.

/*
*******************BREAKING AND CONTINUING STATEMENTS*****************

CONTINUING --> se sale de la iteracion actual de nuestro loop y continua
con la siguiente iteracion.

Imaginemos que solo queremos logear elementos STRING.
*/

const javi2 = [
  'Javi',
  'Palomino',
  2021 - 1987,
  'Digital Expert',
  ['Meli', 'Guille', 'Pepe'],
  true,
];

/*
Todo lo que no sea strings no lo logea.
Si el tipo de elemento de la ARRAY javi no es un STRING, entonces continua,
lo que significa que la iteracion actual se sale y la siguiente empieza inmediatamente.
En este caso logeara en la copnsola todas las string menos el number y la booleana.
*/

for (let i = 0; i < javi2.length; i++) {
  if (typeof javi2[i] !== 'string') continue;
  console.log(javi2[i], typeof javi2[i]);
}

// BREAK --> Por el contrario break, termina el loop totalmente.

const javi3 = [
  'Javi',
  'Palomino',
  2021 - 1987,
  'Digital Expert',
  ['Meli', 'Guille', 'Pepe'],
  true,
];

// En el momento que algun dato no sea una string se sale del loop! En este caso despues de 'Palomino'.
for (let i = 0; i < javi3.length; i++) {
  if (typeof javi3[i] !== 'string') break;
  console.log(javi3[i], typeof javi3[i]);
}

/*
LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is

*/

const populations = ['40', '10', '60', '50'];
const percentages2 = [];
function percentageOfWorld1(populations) {
  return (populations / 7900) * 100;
}
const percentages0 = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages0); // Metodo ARRAYS

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);

//En este ejercicio es mucho mas practico usar el metodo FOR LOOP en vez de el metodo de llamar uno por uno los datos de el ARRAY.
