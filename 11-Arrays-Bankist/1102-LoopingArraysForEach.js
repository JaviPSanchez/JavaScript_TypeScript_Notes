'use strict';

/*
En esta leccion aprenderemos a Loopear los ARRAYS con el METHOD forEach().

Ya sabemos como hacer loops en un ARRAY con el regular FOR LOOP, luego aprendimos a partir de ES6 el FOR OF LOOP y ahora aprenderemos el forEach() METHOD que es diferente al resto.
*/
//REGULAR FOR LOOP
const years = [1991, 1987, 1989, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}
console.log(ages); // [30, 34, 32, 1]
console.log(...ages); // 30 34 32 1
console.log(ages[0], ages[1], ages[2], ages[3]); // 30 34 32 1
/*
FOR OF LOOP
*/
for (const ages2 of years) console.log(Number(`${2021 - ages2}`)); // 30, 34, 32, 1
/*
FOR EACH LOOP

Primero vamos a ver como realizar el ejercicio con el METHOD FOR OF LOOP y luego el FOR EACH LOOP

Simplemente destacar que hacen lo mismo pero el FOR EACH puede ser mas sencillo de hacer
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//FOR OF LOOP
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You have deposited ${movement}`); //You have deposited 3000
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`); //You withdrew 650
  }
}
/*
FOR EACH LOOP

Aqui podemos ver como tecnicamente forEach() seria una HOF "Higher Order Function" que requiere una funcion callback con el fin de decirle que hacer.

Es el forEach() METHOD que llamara a la funcion callback, no la llamamos nosotros como se suele hacer, es algo a tener en cuenta.

Pero...¿Cuando llamara exactamente el METHOD forEach a la callback function? lo que el METHOD forEach hace es loopear el ARRAY, por lo que en cada iteracion ejecutara la callback funcion pasando el valor del elemento actual del ARRAY como un argumento (movement).

Si mirasemos behind the scenes seria algo asi:
Iteracion 0: function(200)
Iteracion 1: function(450)
Iteracion 2: function(-400)
...

Basicamente decimos al METHOD forEach a traves de nuestra callback funtion que en cada iteracion mire por uno de los dos strings del STATEMENTS if/else
*/
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You have deposited ${movement}`); //You have deposited 3000
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`); //You withdrew 650
  }
});

//¿Cual de los dos metodos nos parece mas limpio, mas sencillo y facil de leer? Bueno, pues deberia ser el ultimo metodo, pero cada persona tienen su estilo de programacion y cualquiera de los dos es correcto.

/*
Seguimos aprendiendo sobre nuestro FOR EACH METHOD, ¿que pasaria si necesitasemos tener acceso a un counter variable, el index actual del ARRAY?

Con los metodos aprendidos anteriormente podriamos servirnos del METHOD .entries y dividir un ARRAY  en el index y el value o current array element. No olvidar que su orden es importante, primero index y luego el actual value del ARRAY.
*/
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You have deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
/*
Movement 1: You have deposited 200
Movement 2: You have deposited 450
Movement 3: You withdrew 400
...
*/
/*
Con el FOR EACH METHOD es mucho mas sencillo conseguir acceso al current index, no olvidemos que cuando la funcion es llamada no solo pasa el value, sino que el index y el ARRAY entero, podemos utilizar la informacion que queramos, ya sea solo el primer argumento, el segundo o todos. Los nombres de los parametros pueden ser cualesquiera pero su orden es importante, no olvidarlo! 

El orden en el que los argumentos son pasados desde la funcion callback son:
Primer pametro: current element
Segundo parametro: current index
tercer parametro: entire ARRAY
*/
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You have deposited ${movement}`); //You have deposited 3000
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); //You withdrew 650
  }
});
/*
Movement 1: You have deposited 200
Movement 2: You have deposited 450
Movement 3: You withdrew 400
*/
/*
¿Cuando debemos utilizar el FOR OF y cuando el FOR EACH?

Una de las caracteristicas del FOR EACH es que no podemos romperlo, lo cual quiere decir que los STATEMENTS continue y break no funcionan con el FOR EACH LOOP.

Por lo que si necesitamos para un loop entonces mejor usar el FOR OF LOOP.
*/
