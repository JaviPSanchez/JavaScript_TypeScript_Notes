/*
************************ ARROW FUNCTIONS ****************

En ES6 se agrego otro tipo de function, la ARROW FUNCTION, basicamente utiliza los simbolos => de ahi su nombre. La ventaja que tiene es que no necesitamos ni parentesis ni nada, es muy simple, util cuando solo buscamos un parametro aunque podemos implimentar varios parametros.
*/
const calcAge3 = (birthYeah) => 2021 - birthYeah;
const age3 = calcAge3(1987);
console.log(age3);

// En la siguiente funcion solo tenemos el parametro birthYeah.

const yearsUntilRetirement = (birthYeah) => {
  const age = 2021 - birthYeah;
  const retirement = 67 - age;
  return retirement; // Cuando tenemos mas de dos constantes hay que definir cual elegir con return.
};
console.log(yearsUntilRetirement(1987));

// Creamos la misma funcion con dos parametros:

const yearsUntilRetirement2 = (birthYeah, firstName) => {
  const age = 2021 - birthYeah;
  const retirement = 67 - age;
  return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement2(1987, "Javier"));
/*

LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

const percentageOfWorld3 = (country, population) => {
  return `${country} has ${population} million people, so it's about ${
    (population / 7900) * 100
  } of the world population.`;
};
console.log(percentageOfWorld3("Spain", 40));
console.log(percentageOfWorld3("Portugal", 10));
console.log(percentageOfWorld3("France", 60));
