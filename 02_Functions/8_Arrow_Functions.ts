/*
🔍 Compare ES6 classes and ES5 function constructors, and furnish a use case for the arrow (=>) function syntax.
🔍 Describe the advantages of using the arrow syntax for methods in constructors.

En ES6 se agrego otro tipo de function, la ARROW FUNCTION, basicamente utiliza
los simbolos => de ahi su nombre. La ventaja que tiene es que no necesitamos ni
parentesis ni nada, es muy simple, util cuando solo buscamos un parametro aunque
podemos implimentar varios parametros.
*/
const calcAge3 = (birthYeah: number) => 2021 - birthYeah;
const age3 = calcAge3(1987);
console.log(age3);

// En la siguiente funcion solo tenemos el parametro birthYeah.

const yearsUntilRetirement = (birthYeah: number) => {
  const age = 2021 - birthYeah;
  const retirement = 67 - age;
  // Cuando tenemos mas de dos constantes hay que definir cual elegir con return.
  return retirement;
};
console.log(yearsUntilRetirement(1987));

// Creamos la misma funcion con dos parametros:

const yearsUntilRetirement2 = (birthYeah: number, firstName: string) => {
  const age = 2021 - birthYeah;
  const retirement = 67 - age;
  return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement2(1987, 'Javier'));
