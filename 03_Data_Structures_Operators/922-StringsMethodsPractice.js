'use strict';
/*
En las ultimas unidades hemos aprendido como trabajar con STRINGS y los multiples METHODs que podemos aplicar, en esta seccion vamos a resolver otro Challenge muy interesante sobre STRINGS

El objetivo de esta practica es trasformar el STRING caotico que tenemos en algo legible y entendible, la info la hemos obtenido de una WEB API 
*/
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
/*
🔴 Delayed Departure from FAO to TXL (11h25)
             Arrival from BRU to FAO (11h45)
  🔴 Delayed Arrival from HEL to FAO (12h05)
           Departure from FAO to LIS (12h30)
*/
//Divimos obteniendo un ARRAY
const divide = flights.split('+');
console.log(divide);
/*
["_Delayed_Departure;fao93766109;txl2133758440;11:25",
"_Arrival;bru0943384722;fao93766109;11:45",
"_Delayed_Arrival;hel7439299980;fao93766109;12:05",
"_Departure;fao93766109;lis2323639855;12:30"]
*/
//Queremos una linea por vuelo, por lo que tendremos que LOOPEAR l ARRAY para obtener un STRING en cada una de las ITERACIONES.
/*
for (const n of divide) {
  console.log(`${n}`);
}

_Delayed_Departure;fao93766109;txl2133758440;11:25
_Arrival;bru0943384722;fao93766109;11:45
_Delayed_Arrival;hel7439299980;fao93766109;12:05
_Departure;fao93766109;lis2323639855;12:30
*/
/*
for (const n of divide) {
  console.log(n.split(';'));
}
*/
/*
["_Delayed_Departure", "fao93766109", "txl2133758440", "11:25"]
["_Arrival", "bru0943384722", "fao93766109", "11:45"]
["_Delayed_Arrival", "hel7439299980", "fao93766109", "12:05"]
["_Departure", "fao93766109", "lis2323639855", "12:30"]
*/
/*
Usamos DESTRUCTURING para extraer las 4 partes que nos interesan del ARRAY
*/
/*
for (const n of divide) {
  const [type, from, to, time] = n.split(';');
  const output = `${type.startsWith('_Delayed') ? '💥' : ' '}${type.replaceAll(
    '_',
    ' '
  )}${from}${to}(${time.replace(':', 'h')})`;
  console.log(output);
}

💥 Delayed Departurefao93766109txl2133758440(11h25)
 Arrivalbru0943384722fao93766109(11h45)
 💥 Delayed Arrivalhel7439299980fao93766109(12h05)
   Departurefao93766109lis2323639855(12h30)
*/
//Aqui vamos a ahorrarnos lineas de codigo creando una funcion ARROW que haga el trabajo de slice y capitalizar!
/*
const getCode = str => str.toUpperCase().slice(0, 3);

for (const n of divide) {
  const [type, from, to, time] = n.split(';');
  const output = `${type.startsWith('_Delayed') ? '💥' : ' '}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`;
  console.log(output);
}
*/
/*
💥 Delayed Departure from FAO to TXL (11h25)
  Arrival from BRU to FAO (11h45)
💥 Delayed Arrival from HEL to FAO (12h05)
Departure from FAO to LIS (12h30)
*/

//Ahora vamos a formatear la STRING para dejarlo todo alineado, nos ayudaremos de padStart
const getCode = str => str.toUpperCase().slice(0, 3);

for (const n of divide) {
  const [type, from, to, time] = n.split(';');
  const output = `${type.startsWith('_Delayed') ? '💥' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(55); //Hemos puesto 55 de forma aleatoria, es el valor que consigue alinear las horas...
  console.log(output);
}
/*

            💥 Delayed Departure from FAO to TXL (11h25)
                         Arrival from BRU to FAO (11h45)
              💥 Delayed Arrival from HEL to FAO (12h05)
                       Departure from FAO to LIS (12h30)
*/
