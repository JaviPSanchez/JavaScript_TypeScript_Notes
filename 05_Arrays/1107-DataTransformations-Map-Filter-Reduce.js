'use strict';

/*
En JS hay tres grandes e importantes ARRAY METHODS que utilizamos todo el tiempo para hacer transformaciones.

Son METHODS que utilizamos para crear nuevos ARRAYS basados en transformaciones de otros ARRAYS y se han vuelto muy populares en MODERN JS hasta
el punto de que los veremos por todas partes!

Los METHODS de los que hablamos para poder hacer DATA TRANSFORMATION son:

1/MAP METHOD --> METHOD para LOOPEAR ARRAYS, es parecido al FOR EACH pero con la diferencia de que MAP crea un ARRAY completamente nuevo basado en el original. El MAP METHOD coge un ARRAY, LOOPS OVER THAT ARRAY y en cada iteracion aplica una CALLBACK FUNCTION que especificamos en el codigo al valor actual del ARRAY.

<cmg /images/Picture2.jpg>

2/FILTER --> Usado para filtrar los elementos en el ARRAY original satisfaciendo
una condicion inicial (por ejemplo elementos mayores que 2).
Todos los elementos que satisfagan esta condicion, pasaran al nuevo ARRAY.

<cmg /images/Picture3.jpg>

3/REDUCE --> Lo utilizamos para reducir el ARRAY original en un solo valor, para ello nos servimos de un ACCUMULATOR que mediante un LOOP hace pasar todos los valores juntandolos en uno. Es como una gran bola de nieve que va creciendo a medida que baja por la pendiente, de ahi que se utilice para este METHOD the snowball effect! El valor final es el REDUCED VALUE, que basicamente es el resultado de cualquier tipo de operacion , no tieien porque ser solo sumar...

<cmg /images/Picture4.jpg>

En este caso no obtenemos un ARRAY logicamente, solo un valor.
*/

//FILTER METHOD

const array = [1, 2, 1, 3, 4, 3, 5];
console.log(array);
const toFindDuplicates = array =>
  //array.filter(callback function)
  array.filter((item, index) => array.indexOf(item) !== index);
const duplicateElements = toFindDuplicates(array);
console.log(duplicateElements);
