/*
***************ARRAY METHODS*******************


JS tiene funciones build up que podemos aplicar directamente en nuestras ARRAYS, son los llamdos METHODS. Son como ARRAYS OPERATIONS. Cabe destacar que las propias ARRAYS son un tipo especial de OBJECTS, tienen METHODS que podemos usar para manipularlas.

METHODS:

1/ PUSH METHOD: con la funcion .push añadimos un valor al final de nuestro array y ademas nos calcula el tamaño de nuestro array, el cual conviene guardarlo en una varible.
*/
const friends = ["Javi", "Meli", "Gabi"];
const newLength = friends.push("Napoleon");
console.log(friends); //--> (4)["Javi", "Meli", "Gabi", "Napoleon"]
console.log(newLength); //--> 4
/*
2 / UNSHIFT METHOD --> la misma funcion que el .push, pero en este casi inserta la info al principio de nuestro array.
*/
const friends2 = ["Javi", "Meli", "Gabi"];
const newLength2 = friends2.unshift("Napoleon");
console.log(friends2); // (4) ["Napoleon", "Javi", "Meli", "Gabi"]
console.log(newLength2); // 4
/*
3 / POP METHOD-- > Es lo contrario al .push method, elimina el ultimo elemento.

Podemos ponerlo tantas veces como queramos, borrando sucesivamente los elementos
*/
const friends3 = ["Javi", "Meli", "Gabi"];
const popped1 = friends3.pop();
const popped2 = friends3.pop();
console.log(friends3); // ["Javi"]
console.log(popped1); // Gabi
console.log(popped2); // Meli
/*

4/ SHIFT METHOD --> Elimina el primer elemento de nuestro array.
*/
const friends4 = ["Javi", "Meli", "Gabi"];
const newLength4 = friends4.shift();
console.log(friends4); // ["Meli", "Gabi"]
console.log(newLength4); // Javi
/*
5 / INDEXOF METHOD --> Nos dice en que posicion se encuentra un elemento.
*/
const friends5 = ["Javi", "Meli", "Gabi", "Napoleon"];
console.log(friends.indexOf("Gabi")); // 2
console.log(friends.indexOf("Pepe")); // -1 Si no encuentra el valor.
/*
6 / (ES6 METHOD) INCLUDES METHOD --> Nos devuelve una booleana indicandonos si existe o no un valor dentro de nuestro array.
*/
const friend6 = ["Javi", "Meli", "Gabi"];
console.log(friends.includes("Pepe")); //False
console.log(friends.includes("Javi")); //True

// Este metodo es muy util, porque nos permite utilizar if/else statements:

if (friends.includes("Peter")) {
  console.log("Hola Peter!");
} else {
  console.log("Donde esta Peter?");
}
/*
LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'

*/
const neighbours = ["Spain", "Belgique", "Luxembourg", "Italy", "Germany"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop("Utopia");
console.log(neighbours);
if (neighbours.includes("Germany")) {
  console.log("Probably a central European country 😊");
} else {
  console.log("Probably not a central European country 😊");
}
// Quizas mas apropiado seria escribir:
// if (!neighbours.includes('Germany')) {
//     console.log('Probably a central European country 😊');
console.log(neighbours[2]);
console.log(neighbours.indexOf("Luxembourg"));
neighbours[neighbours.indexOf("Luxembourg")] = "New Country"; // la posicion 2 de nuestro array es igual a 'New Country'.
console.log(neighbours);
