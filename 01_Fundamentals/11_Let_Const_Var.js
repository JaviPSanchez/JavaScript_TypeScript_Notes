/*

********************WAYS OF DECLARING VARIABLES*********************


Let -->  para declarar valores que pueden cambiar posteriormente, ser mutados en el argot javascript
Const --> creado a partir de la versión ES6, cuando la variable no va a cambiar en el código.
Var --> es la version antigua de declarar variables, esta orientada a funciones.
// Reasigning a Value to the variable, es una variable mutable
*/
let age = "Javi";
age = 30;
console.log(age);

// Unmutable Variable
const birthYear = 1987;
birthYear = 1990;

// VAR es la forma antigua de definir variables, anterior a ES6, funciona como let, pero mejor no usarla
var job = "programmer";
job = "teacher";
// Declarar variables sin asignarle un var, const o let es mala idea, no le asigna un scope, creando problemas mas tarde
job = "mechanic";

// Values and Variables
let country = "Spain";
let continent = "Europe";
let population = "40 Mill";
console.log(country, continent, population);

// Data Types of Values
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Ways of declaring variables

language = "Spanish";
const country = "Spain";
const continent = "Europe";
const isIsland = false;
isIsland = true;
