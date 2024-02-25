'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

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
};

/*
Hemos aprendido el FOR OF LOOP para hacer un bucle de ARRAYS, el cual es ITERABLE, pero podemos tambien hacer bucles de OBJECTS que no son ITERABLES de forma indirecta.

Tenemos varias opciones dependiendo de que queremos buclear.

Si queremos hacer un bucle de:
1: KEYS
2: VALUES
3: BOTH: KEYS + VALUES
 OBJECTS o de PROPERTIES NAMES over the VALUES o si queremos hacerlo de los dos a la vez:

//////LOOPING OVER PROPERTY NAMES (KEYS)////////

No vamos a hacer el bucle sobre el OBJECT itself sino que lo haremos de una forma indirecta, vamos a hacer el bucle a un ARRAY:
*/
for (const day of Object.keys(openingHours)) {
  console.log(day); //thu fri sat
}
//Obtenemos los tres keys names del OBJECT OPENINGHOURS.
/*
el Object.keys es simplemente un ARRAY con 3 PROPERTIES NAMES
*/
const properties = Object.keys(openingHours);
console.log(properties); //["thu", "fri", "sat"]
/*
Podemos usar este ARRAY para calcular el numero de PROPERTIES que hay dentro del OBJECT.

Imaginemos que queremos ver cuantos dias el restaurante esta abierto con un STRING:
*/
console.log(`We are open on ${properties.length} days per week`); //We are open on 3 days per week
/*
Ahora usaremos el LOOP para construir un STRING con las PROPERTIES NAMES:
*/
let openString = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openString += `${day}, `;
}
console.log(openString); //We are open on 3 days: thu, fri, sat,

//Que pasaria si quisieramos los VALUES de las PROPERTIES, pues habria que utilizar Object.values

///////PROPERTIES VALUES//////
const values = Object.values(openingHours);
console.log(values);

/*
0: {open: 12, close: 22}
1: {open: 11, close: 23}
2: {open: 0, close: 24}
*/
/*
Para realmente simular el bucle de todo el OBJECT necesitariamos los ENTRIES, que son los KEY mas los VALUES juntos.
*/

//Entire OBJECT
const entries = Object.entries(openingHours);
console.log(entries);
/*
[Array(2), Array(2), Array(2)] // Cada uno de los ARRAYS tiene su KEY y VALUE
0: "thu" // KEY 
1: {open: 12, close: 22} // VALUE
0: "fri"
1: {open: 11, close: 23}
0: "sat"
1: {open: 0, close: 24}
*/
//Podemos usar esto para basicamente hacer el loop de nuestro OBJECT:

for (const x of entries) {
  console.log(x);
}
//Obteniendo each KEY and each VALUE
/*
0: "thu" //KEY 
1: close: 22, open: 12 // VALUE
0: "fri"
1:
close: 23
open: 11
0: "sat"
1:
close: 24
open: 0
 */

// el value al ser un OBJECT podemos destructurarlo en {open, close}, lo cual es necesario para tener una STRING "limpia".
for (const [key, value] of entries) {
  // console.log(`On ${key} we open at ${open} and close at ${close}`);
}
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
//Obteniendo las STRINGS limpias:
/*
On thu we open at 12 and close at 22
On fri we open at 11 and close at 23
On sat we open at 0 and close at 24
 */

/*
To remove a key in an object we use the “delete” keyword and it mutates the original object.

But mostly we don’t want to mutate the original object we can use the power of spread operator
to get the rest of the values into new object what we get is all the values except the key
which we provided not to include in new object.

Si queremos borrar una key de un Object sin mutar:
*/

const ventasBmw = { serie2: 235, serie1: 45, x3: 34, m2: 56, m3: 23 };
const ventasBmwMutate = { serie2: 235, serie1: 45, x3: 34, m2: 56, m3: 23 };

const removeKey = (key, object) => {
  const { [key]: ommited, ...rest } = object;
  return rest;
};

//Mutating

const removeKeyMutating = (key, object) => {
  delete object[key];
  return object;
};

const newVentasBmw = removeKey('serie1', ventasBmw);
const mutateVentasBmw = removeKeyMutating('serie1', ventasBmwMutate);

console.log(newVentasBmw);

console.log(ventasBmw);
console.log(ventasBmwMutate);
