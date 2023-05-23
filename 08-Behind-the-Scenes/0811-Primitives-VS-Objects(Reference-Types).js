'use strict';

/*
*******PRIMITIVES & OBJECTS (PRIMITIVE vs REFERENCE TYPES)*************

Vamos a ver como se guardan las PRIMITIVES y los OBJECTS en la memoria, pues lo hacen de forma diferente. Puesto que crea mucha confusion en los Beginners.

Todos los OBJECTS (todo aquello que no es una PRIMITIVE, como son los OBJECT LITERAL, ARRAYS, FUNCTIONS, etc) o REFERENCES TYPES son guardados en el HEAP, dentro del ENGINE de JS. Por el contrario las PRIMITIVES (Number, String, Boolean, Undefined, Null, Symbol and BigInt) son guaraddas en el CALLSTACK, o lo que es lo mismo en su EXECUTION CONTEXT correspondiente.

Veamos un ejemplo en accion, las PRIMITIVES se declaran en el CALLSTACK, asignandole una ADDRESS y su VALUE correspondiente, 

<cmg /images/Picture20.jpg>

<cmg /images/Picture21.jpg>
*/
let lastName = 'Williams';
let oldLastName = lastName; // La misma address que lastName
lastName = 'Davis'; // Cambiamos de address de 0001 a 0002. Flecha verde
console.log(lastName);
console.log(oldLastName);
/*
Ahora vamos a ver que con los REFERENCES TYPES, cuando cambiamos una PROPIETY ligada a una ADDRESS determinada, es para todos los OBJECTS
*/
const singleMelissa = {
  firstName: 'Melissa',
  lastName: 'Boyer',
  age: 27,
};
const marriedMelissa = singleMelissa;
marriedMelissa.lastName = 'Palomino-Sanchez';
console.log('Before marriage:', singleMelissa); //Melissa Palomino-Sanchez
console.log('After marriage:', marriedMelissa); //Melissa Palomino-Sanchez

// marriedMelissa = {}, // No esta permitido asiganr un OBJECT diferente a otro OBJECT, nos salta error!
/*
  Ahora bien, si no queremos que la PROPERTY sea la misma para todos los OBJECTs podemos evitarlo creado una union de dos OBJECTS con el atributo .assign
*/
//COPYING TYPES
const singleMelissa2 = {
  firstName: 'Melissa',
  lastName: 'Boyer',
  age: 27,
};
Object.assign({}, singleMelissa2); //Con el .assign lo que hacemos es juntar dos OBJECTS en uno,
const marriedMelissaCopy = Object.assign({}, singleMelissa2);
marriedMelissaCopy.lastName = 'Palomino-Sanchez';
console.log('Before marriage:', singleMelissa2);
console.log('After marriage:', marriedMelissaCopy);
/*
  El problema de este metodo es que un SHALLOW COPY (Superficial) copia solo las PROPERTIES en el FIRST LEVEL. Sin embargo un DEEP CLON lo copia todo, pero para poder hacer un DEEP CLON hay que utilizar otras EXTERNAL LIBRARIES como low-DASH lo veremos mas adelante...
  
  Si cambiamos el ARRAY que hemos añadido en singleMelissa2 en marriedMelissaCopy estaremos manipulando un OBJECT dentro de otro OBJECT, que esta DEEPLY NESTED y se cambiara automaticamente en los dos OBJECT, algo que no nos interesa en este ejemplo, puesto que la familia crece una vez casados, pero no antes. De ahi que sea una SHALLOW COPY.
  */
//COPYING TYPES
const singleMelissa2 = {
  firstName: 'Melissa',
  lastName: 'Boyer',
  age: 27,
  family: ['Gabriel', 'Javier'], // Añadimos un ARRAY que aparecera en los dos OBJECTS.
};
Object.assign({}, singleMelissa2); //Con el .assign lo que hacemos es juntar dos OBJECTS en uno,
const marriedMelissaCopy = Object.assign({}, singleMelissa2);
marriedMelissaCopy.lastName = 'Palomino-Sanchez';
console.log('Before marriage:', singleMelissa2);
console.log('After marriage:', marriedMelissaCopy);
