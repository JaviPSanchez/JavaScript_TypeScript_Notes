'use strict';

/*

Hemos visto hasta ahora ARRAYs, OBJECTs y SETs, le toca el turno a los MAPs, mucho mas utiles que los SETs.

Que es un MAP? es una DATA STRUCTURE que podemos usar to map VALUES and KEYs. So, just like an OBJECT, we stored key value pairs. La gran diferencia entre MAPS y OBJECTS es que en los MAPS los KEYs pueden ser cualquier DATA TYPE siendo una gran ventaja! En los OBJECTS los KEYS son STRINGS, pero en los MAPS los KEYS pueden ser OBJECTS, ARRAYs, NUMBERS, STRINGS, BOOLEANS o incluso otros MAPs.

Vamos a crear un MAP, para ello hay que escribir el CONSTRUCTOR "new Map()" como en el caso de los SETs "new Set()".
*/
const rest = new Map(content);
//Para llenar el MAP, podemos usar el METHOD .set y pasarle los ARGUMENTS, siendo el primero el KEY name y el segundo el VALUE.
rest.set('name', 'Classico Italiano');
rest.set(1, 'Madrid, España');
console.log(rest.set(2, 'Paris, Francia')); // {"name" => "Classico Italiano", 1 => "Madrid, España", 2 => "Paris, Francia"}
/*
Podemos observar que el METHOD.set actualiza automaticamente el MAP, lo cual nos permite modificarlo y poner todos los SET que queramos de una sola vez:
*/
rest
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We are open')
  .set(false, 'We are close');
console.log(rest); //{"name" => "Classico Italiano", 1 => "Madrid, España", 2 => "Paris, Francia", "Categories" => Array(4), "Open" => 11, …}
// Esto es algo muy util,
/*
Para leer la informacion contenida dentro del MAP tenemos que usar el METHOD .get y pasar el nombre del KEY que buscamos:
*/
console.log(rest.get('name')); //Classico Italiano
console.log(rest.get(true)); //We are open
console.log(rest.get('1')); //Undefined Hay que respetar el TYPE DATA.
console.log(rest.get(1)); // Madrid, España

//Las posibilidades que nos ofrece los MAP son muy interesantes sobre todo cuando jugamos con las BOOLEANS, veamos el siguiente ejemplo:
const time = 21;
console.log(rest.get(time > rest.get('Open') && time < rest.get('Close'))); // We are open
const time2 = 8;
console.log(rest.get(time2 > rest.get('Open') && time2 < rest.get('Close'))); // We are close

// Este truco que venimos de usar es muy interesante, pero dificil de leer...

/*
Continuamos con los METHODS, ahora queremos ver si el MAP contiene un KEY en particular, usamos el .has METHOD:
*/
console.log(rest.has('Categories')); // true
//Tambien podemos usar el METHOD .delete para borrar un argumento en particular:
rest.delete(2);
console.log(rest); //Hemos borrado Paris, UPS!
//Podemos ver el numero de items:
console.log(rest.size); //7
//Y tambien podemos borrar todos los elementos:
rest.clear();
console.log(rest); //Map(0) {}
/*
Finalmente podemos tambien comprobar que podemos usar OBJECTS o ARRAYS como MAP keys
*/
rest.set([1, 2], 'Test');
console.log(rest);
//Pero si quisiesemos llamar a ese KEY en forma de ARRAY tendriamos problemas por la forma en la que trabaja JS. A pesar de escribir las dos ARRAYs de la misma forma, no son el mismo OBJECT en el HEAP!
console.log(rest.get([1, 2])); //Undefined
//Luego lo que hay que hacer, es crear una VARIABLE que tenga la misma address en el HEAP:
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); //Test
/*
Hemos demostrado que podemos usar OBJECTS  como MAP KEYS y esto puede ser muy util con DOM elements, que al fin y al cabo no dejan de ser un tipo especial de OBJECT.
*/
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest); // {Array(2) => "Test", Array(2) => "Test", h1 => "Heading"}
