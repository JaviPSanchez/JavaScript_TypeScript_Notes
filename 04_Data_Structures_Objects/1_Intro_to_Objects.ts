/*
Hasta ahora hemos utilizado arrays, insertando los elementos uno por uno dentro de estas.
El problema que solo podemos encontrar los valores dentro de un array por su posicion,
pero no por un nombre en particular. Pero afortunadamente en JS tenemos otro tipo de data
structure, los Objects, donde podemos meter key value pairs, permitiendonos asignar nombres
a los valores.

Los objetos a diferencia de las arrays llevan los curly braces {}, conocidos como el object
literal syntax, porque estamos literalmente escribiendo un objeto. Hay muchas formas de crear
Objects en JS. El orden en los objects no importa como si era importante en los arrays,
obligandonos ha acceder por posicion. Por lo que arrays, son utiles para datos ordenados,
y los objects para datos unstructured.
*/

// objeto javi con 5 propiedades y cada propiedad tiene un valor
const javi = {
  firstName: "Javi",
  lastName: "Palomino",
  age: 2021 - 1987,
  job: "Digital Expert",
  friends: ["Meli", "Guille", "Pepe"],
};
/*
LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments
*/
const myCountry = {
  country: "Spain",
  capital: "Madrid",
  language: "Spanish",
  population: "40",
  neighbours: ["Portugal", "France"],
};
console.log(myCountry); //{country: "Spain", capital: "Madrid", language: "Spanish", population: "40", neighbours: Array(2)}

// Some tips:

//Want to write data if no value exist?

//This...
myCountry.language = myCountry.language || "Euskera";

// Can become this:
myCountry.language ||= "Euskera";

//Want to write new data if a value does exist?

//This...
myCountry.language = myCountry.language && "Euskera";

// Can become this:
myCountry.language &&= "Euskera";

//Want to write new data if a value is null or undefined?

//This...
myCountry.language = myCountry.language ?? "French";

// Can become this:
myCountry.language ??= "Euskera";

// Ejemplo de Object

const myObj = {
  kpi_options: [
    {
      id: 1,
      name: "Kpi_1",
      time_to_delivery: "2",
      price: "20.00",
    },
    {
      id: 2,
      name: "Kpi_2",
      time_to_delivery: "6",
      price: "60.00",
    },
    {
      id: 3,
      name: "Kpi_3",
      time_to_delivery: "8",
      price: "100.00",
    },
  ],
};

console.log(myObj[0]); // Error 1: Los object no tienen índice
console.log(myObj.length); // Error 2: Los object no tienen length
console.log(myObj.kpi_options); // Array con los 3 objects [{…}, {…}, {…}]
console.log(myObj.kpi_options.length); // 3
console.log(myObj.kpi_options[0]); // 1er Object {id: 1, name: 'Kpi_1', time_to_delivery: '2', price: '20.00'}
console.log(myObj.kpi_options[0][0]); // undefined
console.log(myObj.kpi_options[0].price); // 20
