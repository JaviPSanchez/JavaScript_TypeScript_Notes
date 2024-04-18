/*
************DOT VS BRACKET NOTATION*************


Para poder obtener los datos de un object utilizamos
los DOT . o BRACKET NOTATION [], con los brackets podemos
utilizar cualquier expresion con palabras repetidas:
*/
const user = {
  firstName: "Javi",
  lastName: "Palomino",
  age: 2021 - 1987,
  job: "Digital Expert",
  friends: ["Meli", "Guille", "Pepe"],
};
// Solo podemos acceder a lastName, que sera "Palomino".
console.log(user.lastName);
/*
Podemos acceder a todas las propiedades que contengan el
string 'Name' y guardarlo en una variable
*/
console.log(user["lastName"]);

const nameKey = "Name";

console.log(user["first" + nameKey]);
console.log(user["last" + nameKey]);

/*
Podriamos incluso mediante un prompt preguntar que info buscamos
y enlazarla a la respuesta gracias a los brackets:
*/
// const interestedIn = prompt(
//   "Que informacion te interesa? firstName, lastName, age, job or friends?"
// );
const interestedIn = "job";
console.log(user[interestedIn]);

/*
Si el valor que nos devuelve es undefined, es porque esa propertie no existe
en nuestro objeto. Podemos servirnos de los statements if/else:
*/

if (user[interestedIn]) {
  console.log(user[interestedIn]);
} else {
  console.log(
    "Wrong parameter! choose between firstName, lastName, age, and friends."
  );
}
