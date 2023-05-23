/*
**********************INTRODUCTION TO OBJECTS*********************


Hasta ahora hemos utilizado arrays, insertando los elementos uno por uno dentro de estas. El problema que solo podemos encontrar los valores dentro de un array por su posicion, pero no por un nombre en particular. Pero afortunadamente en JS tenemos otro tipo de data structure, los Objects, donde podemos meter key value pairs, permitiendonos asignar nombres a los valores.

Los objetos a diferencia de las arrays llevan los curly braces {}, conocidos como el object literal syntex, porque estamos literalmente escribiendo un objeto. Hay muchas formas de crear Objects en JS, es lo mas fundamental. El orden en los objects no importa como si era importante en los arrays, obligandonos ha acceder por posicion. Por lo que arrays, son utiles para datos ordenados, y los objects para datos unstructured.
*/

// Podemos ver como cada valor/key/propertie tiene un nombre, en el siguiente ejemplo tenemos el objeto javi con 5 propiedades y cada propiedad tiene un valor
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

// Ejemplo de Object

const exemple_1 = {
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

console.log(exemple_1[0]); // Error 1: Los object no tienen índice
console.log(exemple_1.length); // Error 2: Los object no tienen length
console.log(exemple_1.kpi_options); // Array con los 3 objects [{…}, {…}, {…}]
console.log(exemple_1.kpi_options.length); // 3
console.log(exemple_1.kpi_options[0]); // 1er Object {id: 1, name: 'Kpi_1', time_to_delivery: '2', price: '20.00'}
console.log(exemple_1.kpi_options[0][0]); // undefined
console.log(exemple_1.kpi_options[0].price); // 20

const price = [];
for (let i = 0; i < exemple_1.kpi_options.length; i++) {
  price.push(exemple_1.kpi_options[i].price);
}

console.log(price);
