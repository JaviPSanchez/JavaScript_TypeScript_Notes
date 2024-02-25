'use strict';

/*
Vamos a ver como funciona DOM behind the scenes, pero sobre todo, como esta organizado internamente.

Primero conviene recordar que DOM es el interface entre el BROWSER (HTML documents rendered in and by the browser) y JS. Hemos escrito cientos de lineas de codigo durante este curso, pero sin interactuar con DOM.

Con DOM podemos dotar a JS de la capacidad de interactuar con el BROWSER, es decir, podemos crear, borrar o modificar HTML ELEMENTS, definir estilos, clases y atributos ademas de escuchar y reponder a los EVENTs!

Todo esto funciona porque DOM es generado a partir de HTML DOCUMENTs, formando lo que se conoce como DOM TREE y todos los nodos.

DOM es un API "Application Programming Interface" compleja que contiene multitud de METHODS y PROPERTIES como por ejemplo, .querySelector(), .addEventListener(), .createElement(), innerHTML(), .children, etc.

En DOM hay diferentes tipos de NODEs como hemos comentado, algunos son HTML ELEMENTS, pero otros son solo TEXT, esto es algo importante de comprender, porque los METHODs y las PROPERTIES se basan en el TYPE of OBJECT.

<cmg /images/Picture1.jpg>

Ahora pasamos a ver como esta organizado el DOM "behind the scenes"

Cada NODE en el DOM TREE es de un TYPE diferente. Los NODE en JS esta representado como un OBJECT, y como todos los OBJECT tiene acceso a METHODs y PROPERTIEs especiales, como .textContent, .childNodes, .parentNode, .cloneNode(), etc.

Hemos comentado que existen TYPEs of NODEs, entre ellos podemos encontrar el ELEMENT TYPE, TEXT TYPE, COMMENT TYPE y el DOCUMENT TYPE.

Si hay texto dentro de un ELEMENT, sabemos que tendra su propio NODE, como por ejemplo <p>Paragraph</p> o la regla de comments en HTML <!--Comment -->

Para el elemento en si mismo esta el ELEMENT NODE, con sus PROPERTIES .innerHTML, .classList, parentElement, etc y sus METHODs .append(), .remove(), .closest(), .querySelectorAll() etc

Dentro de el ELEMENT TYPE tenemos el HTML ELEMENT el cual a su vez tiene el HTMLDivElement con todsas las TAGs que cococemos ya...div, section, links, anchor, etc

Cada una de estas ELEMENTS tiene sus propios ATTRIBUTES como por ejemplo el anchor element tiene los links href="", la imagen tiene el source src="" attibute etc.

Ahora viene un concepto muy importante, es lo que se conoce como INHERITANCE! que significa que todos los CHILD TYPEs tienen acceso a todos los METHODs y PROPERTIES de sus PARENTs NODE TYPEs.

Basicamente el HTMLElement tendra acceso a todos los METHODs del ELEMENT TYPE. Por ejemplo un button HTML ELEMENT, es tambien un ELEMENT y un NODE. Mas tarde entenderemos mejor como funciona INHERITANCE cuando estudiemos OOP.

Por el momento basta saber que el DOM API esta dividido en diferentes TYPEs of NODEs.

Nos queda ver el DOCUMENT NODE TYPE, DOCUMENT lo usamos todo el tiempo en DOM es en realidad otro tipo de NODE, que alberga sus METHODs como .querySelector, .createElement(), .getElementbyId(), etc  cade destacar que el METHOD .querySelector() lo encontramos en los ELEMENT TYPEs y los DOCUMENT TYPEs.

<cmg /images/Picture2.jpg>

Queda una ultima pieza en el puzzle, DOM API necesita un modo de poder escuchar los EVENTS de los NODE TYPE, serian los EVENTS LISTENERS. Esto funciona porque existe un TYPE SPECIAL de NODE llamado EVENT TARGET que es un PARENT del NODE TYPE y del WINDOW TYPE! y gracias al INHERITANCE podemos llamar a estos METHODs dede cualquier NODE TYPE.

<cmg /images/Picture3.jpg>

Los EVENT TARGET nunca los creamos manualmente, es un modo abstracto de funcionamiento que pasa en segundo plano.
*/
