'use strict';

/*
Vamos a ver diferentes formas de cargar un SCRIPT de JS en HTML!

Hasta ahora hemos utilizado la forma tradicional de cargar JS FILES en HTML, escribiendo el TAG ya conocido al final de la pagina antes de cerrar el body sin ningun tipo de ATTRIBUTE:

<script src="1300-WebBankish.js"></script>

Con el  ATTRIBUTO ASYNC:

<script async src="1300-WebBankish.js"></script>;

O con el DEFER ATTRIBUTE:

<script defer src="1300-WebBankish.js"></script>;

Cada uno de estos atributos va a influir en la forma en la que el archivo JS va a ser "traido" o descargado y despues ejecutado.

En HTML podemos escribir la TAG SCRIPT en el DOCUMENT HEAD o al final del BODY.

Dependiendo de donde lo coloquemos, afectara al resultado final o tiempo de ejecucion del DOM CONTENT LOADED.

Veamos la siguiente tabla para ver las diferentes posibilidades y reacciones:

<cmg /images/Picture14.jpg>

Lo primero que debemos saber, es que hay que evitar poner nuestro SCRIPT en el HEAD, sea cual sea nuestra estrategia.

<cmg /images/Picture15.jpg>

El mejor escenario es poner la TAG al principio en la zoan de HEAD y con el DEFER ATTRIBUTE, a partir de ahora lo haremos asi en el curso.


*/
