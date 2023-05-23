'use strict';

/*
Dealing with DATA is the main thing we do as developers, that's why since the beginning of the course we have been working with JS built-in DATA STRUCTURES like ARRAYS, OBJECTS, SETS or MAPS.

Es importante conocer los PROS y CONTRAS de cada tipo para poder elegir correctamente.

De donde viene la informacion, los datos?Tenemos tres fuentes esenciales de donde viene la informacion:
1/From the program itself: Data written directly in source code (i.e. status messages)
2/From the UI: Data input from the user or data written in DOM.
3/From external sources: web API (we can use a web API to get data from other web applications like currency conversion rates...) Normalmente viene en formato JSON.

No importa que tipo de DATA es, siempre tendremos COLLECTIONS OF DATA, que necesitamos guardar en alguna parte.

Where do we store COLLECTIONS OF DATA? Efectivamente, usamos los DATA STRUCTURES, tenemos 4 built-in DATA STRUCTURES en JS: ARRAYS, OBJECTS, SETS or MAPS.

La primera pregunta que tendremos que hacernos es?

Do we just need a simple list of VALUES?*
YES--> ARRAY or SETS
NO (KEY/VALUES PAIRS) --> OBJECTS or MAPS

Con los KEY/VALUE PAIRS es una forma de describir los VALUES, sin embargo en los ARRAYS y SETS simplemente tenemos los valores sin descripcion.

Como hemos comentado, la info que viene de otras web API viene en formato JSON, que es basicamente un texto (STRINGS) que puede ser conveertido facilmente en JS OBJECTS, puesto que utiliza el mismo formato que los OBJECTS.

Antes de comparar los diferentes DATA STRUCTURES, cabe mencionar que existen tambien otros built-in DATA STRUCTURES en JS como WEAKSETS y WEAKMAPS o not built-in en JS, pero usados en programacion como STACKS, QUEUES, LINKED LISTS, TREES, HASH TABLES, etc.

Por el momento solo tener en cuenta que no solo tenemos 4 DATA STRUCTURES.

PAsemos a la comparacion:
*/
// ARRAYS VS SETS *************
const tasksArray = ['Code', 'Eat', 'Code'];
console.log(tasksArray); //["Code", "Eat", "Code"]
const tasksSet = new Set(['Code', 'Eat', 'Code']);
console.log(tasksSet); //{"Code", "Eat"}
/*
ARRAYS --> Use when you need ordered list of VALUES and DUPLICATES
SETS --> When we need to work with UNIQUE VALUES and remove DUPLICATES, also when needing high-performance.
*/
// OBJECTS VS MAPS***************
const taskObject = {
  task: 'Code',
  date: 'Today',
  repeat: true,
};
console.log(taskObject);
/*
{task: "Code", date: "Today", repeat: true}
date: "Today"
repeat: true
task: "Code"
*/
const taskMap = new Map([
  ['task', 'Code'],
  ['date', 'Today'],
  [false, 'Start coding!'],
]);
console.log(taskMap);
/*
{"task" => "Code", "date" => "Today", false => "Start coding!"}
[[Entries]]
0: {"task" => "Code"}
1: {"date" => "Today"}
2: {false => "Start coding!"}
*/
/*
OBJECTS 
--> mas facil de acceder con los OPERATORS . o []
--> mas tradicionales para guardar info con key/value, muy utilizado por la mayoria de web developers (no existian los MAPS pre ES6)
--> cuando necesitamos usar FUNCTIONS como VALUES. En OBJECTS estas FUNCTIONS son llamados METHODS y podemos usar this KEYWORD para qcceder a las PROPERTIES en el mismo OBJECT, lo cual es imposible en los MAPS
--> Cuando trabajemos con JSON DATA. Normalmente proveniente de un WEB API que suele venir en forma de OBJECT.
MAPS
-->Mejor preparados para los KEYS que no son STRINGS (cualquier DATA TYPE).
-->Faciles to ITERATE.
-->Faciles de calcular el tamaño.
*/
