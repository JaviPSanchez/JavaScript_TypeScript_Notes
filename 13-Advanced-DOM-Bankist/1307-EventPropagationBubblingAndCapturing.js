'use strict';

/*
Vamos a ver una propiedad muy importante de los EVENT LISTENERS, esta es la llamada CAPTURING PHASE y la BUBBLING PHASE.

En la siguiente imagen podemos ver un HTML document muy simple junto a un DOM TREE apuntando a un anchor ELEMENT.

Podemos observar todos los PARENTS del ELEMENT ANCHOR, y esto es importante para ver que pasa cuando alguien hace click sobre el link.

Sabemos que cuando hacemos click sobre el link, DOM crea automaticcamente un EVENT, sin embargo este elemento no es generado en el target ELEMENT, sino que mas bien en el ROOT del DOCUMENT, at the very top of the DOM TREE.

<cmg /images/Picture4.jpg>

A partir de ese momento la CAPTURING PHASE comienza, donde el EVENT "viaja" all the way down from the document root to the target ELEMENT. As the EVENT travels down the TREE it will pass through every single PARENT ELEMENT. Lo que seria l HTML ELEMENT, el BODY ELEMENT, la section and so on... hasta alcanzar el ELEMENT TARGET.

<cmg /images/Picture5.jpg>

Una vez en el anchor se crea la TARGET PHASE donde los EVENTS pueden ser controlados desde el ELEMENT el cual gestionamos con los EVENTS LISTENERS. En el momento que el evento ocurre se ejecuta la CALLBACK FUNCTION. 
*/
/*
document
  .querySelector('a')
  .addEventListener('click', () => alert('Your clicked me!'));
*/
/*
Una vez alcanzada la TARGET, el evento viaja all the way up to the document ROOT. En la llamada BUBBLING PHASE, so we say that the event bubble up from the target to the document root pasando por todos los ELEMENTS como con la CAPTURING PHASE.

Nos surge la duda de... ¿porque todo esto es importante? Pues porque a medida que el EVENT se mueve en cada uno de los PARENTS ELEMENTS, es como si hubiese ocurrido dentro de este, es decir, que si creamos el mismo EVENT LISTENER en la SECTION ELEMENT, por ejemplo, obtendremos la misma alerta para ese ELEMENT. Tendremos el evento dos veces! este comportamiento nos permitira crear patrones muy potentes.

Por defecto los EVENTS solo pueden ser manejados desde el TARGET ELEMENT y en la BUBBLING PHASE. No todos los EVENTS hacen la PHASE de BUBLING, aunque si la mayoria...

<cmg /images/Picture6.jpg>
*/
