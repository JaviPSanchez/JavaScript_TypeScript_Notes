/*
****************************STRICT MODE**************************


STRICT MODE --> Con este modo podemos detectar fallos en nuestro codigo, o hacer mas facil la deteccion de bugs o errores accidentales (muy comun cuando tenemos variables con nombre raros o muy largos). Para activarlo hay que escribir al inicio de nuestro script:
*/
"Use strict";
/*
Tiene que estar al principio de nuestro codigo, sino no funcionara.

"use strict", al no tenerlo activado, no detecta el fallo, si lo activamos, lo detecta!
*/

let youAreTheFuckingBoss = false;
const passTest = true;
if (passTest) youAreTheFuckingBoos = true; // Hemos forzado el fallo poniendo una "o" en vez de una "s" en boss.
if (youAreTheFuckingBoss) console.log("Yes, you are!");
