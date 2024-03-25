'use strict';

/*
*******************FILL METHOD**************************


La ultima cosa que vamos a aprender es como automatizar o programar la creacion y relleno de ARRAYs.

Hasta ahora hemos creado los ARRAYS a la vieja usanza, a mano, o con otros metodos...la mayoria de ocasiones ya disponiamos de la informacion, sin embargo podemos tambien generar ARRAYS automaticamente, sin necesidad de definir todos estos elementos manualmente.
*/
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9]); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

/*
El mas conocido es el ARRAY() CONSTRUCTOR FUNCTION.

Pasamos un solo argumento, 9 por ejemplo. ¿Que puede pasar? pues que creara un ARRAY con 9 elementos vacios.
*/
const x = new Array(9);
console.log(x); //[empty × 9]
//Un problema de esto es que no podemos realmente usar este ARRAY X para nada, por ejemplo si quisiesemos utilizar el MAP METHOD para rellenarlo no podriamos:
console.log(x.map(() => 5)); //[empty × 9] Podemos ver que no pasa nada.

/*
Esto no es util, excepto por una cosa, hay un METHOD que si podemos llamar en este ARRAY vacio, el FILL METHOD.

Solo hay que pasarle un valor y rellenara todo el ARRAY con ese valor:
*/
console.log(x.fill(1)); //[1, 1, 1, 1, 1, 1, 1, 1, 1] mutando el ARRAY x.

/*
El FILL METHOD es parecido al SLICE METHOD en una cosa, a parte del VALUE que podemos meter para rellenar, podemos decirle a partir de cuando comenzar a rellenar y donde terminar:
*/
const y = new Array(9);
y.fill(5, 3, 6);
console.log(y); // [empty × 3, 5, 5, 5, empty × 3]

//Por supuesto tambien podemos rellenar ARRAYs normales con FILL:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.fill(23, 4, 6);
console.log(arr); //[1, 2, 3, 4, 23, 23, 7, 8, 9]

/*
***********************ARRAY FROM**********************

NOTA!! Una gran herramienta implementada en ES6!!!

¿Que pasaria si quisiesemos crear el primer ARRAY arr automaticamente?

Pues que deberiamos usar la funcion ARRAY.FROM().

Cabe destacar que el FROM no es como el FROM METHOD utilizado en los ARRAYs, este esta construido basado en un ARRAY() CONSTRUCTOR.

En este caso ARRAY es una FUNCTION, y en esta FUNCTION OBJECT llamamos al FROM METHOD. Todo esto lo veremos mas adelante en el OOP.

En esta funcion, podemos primero pasar un OBJECT con la length PROPERTY y como segundo argumento un MAP FUNCTION (la cual no necesita tener ningun argumento en este caso, nada de VALUES, INDEX, ARRAY, nada) todo lo que queremos devolver es 1.

Este metodo es mas pro y limpio que hacer el metodo del FILL + EMPTY ARRAY.
*/
const z = Array.from({ length: 9 }, () => 1);
console.log(z); // [1, 1, 1, 1, 1, 1, 1, 1, 1]

//Vamos un paso mas alla, seguimos usando el object como primer parametro y como segundo usamos el MAP METHOD, dentro de este tenemos el throwaway parameter puesto que no necesitamos definir el primer argumento, el CURRENT VALUE, y como segundo paramatro vamos a servirnos del index:

const w = Array.from({ length: 9 }, (_, index) => index + 1);
console.log(w); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

/*
Asi es como creamos un ARRAY de una forma programada, la cual tiene muchos USE CASES, como programar un ARRAY con 100 random DICE ROLLS por poner un ejemplo, este ejercico lo veremos mas adelante.

Otro USE CASE puede ser crear un ARRAY a partir de un ELEMENT seleccionado de nuestro HTML!!!, podemos utilizar el DOM para seleccionar elementos y extraer la informacion en su interior, por ejemplo los STRINGs y convertirlos en NUMBERS!!! Obteniendo finalmente un ARRAY con NUMBERS como el ARRAY movements!!!. Hay que tener en cuenta que hasta ahora se nos daban los datos ya listos en un ARRAY, pero imaginemos que la informacion solo esta disponible en el UI, es decir, en el BROWSER en forma de STRINGS. ¿Es posible obtener esta informacion y convertirla en un ARRAY donde podamos aplicar METHODS? ¿Es esto posible?, amigo mio..., dejame decirte que SI es posible!

Vayamos paso a paso...
*/
//Primero vamos a transformar nuestra funcion querySelectorAll en un ARRAY, para ello nos ayudamos del ARRAY FROM():

const movementsUI = Array.from(argumento1, argumento2);

/*Primer argumento DOM --> */ document.querySelectorAll('.movements__value');
/*Segundo argumento MAP METHOD --> */ el =>
  Number(el.textContent.replace('€', ''));

//Como anecdota podriamos haber usado tambien el SPREAD OPERATOR sobre el DOM para obtener un ARRAY, pero entonces, habriamos tenido que hacer el MAP METHOD por separado...

const movementsUI = [...document.querySelectorAll('.movements__value')];

//Segundo queda dotar de una accion al usuario para poder obtener esta informacion, usaremos un Event listener:

const labelBalance = document.querySelector('.balance__value');
labelBalance.addEventListiner('click', function () {});

//Montamos todas las piezas del puzzle:

labelBalance.addEventListiner('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementsUI); //[1300, 70, -130, -650, 3000, -400, 450, 200]
  //Por supuesto los numeros apareceran en el orden en el que esten puestos en el UI!!
});
