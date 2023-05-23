'use strict';

/*
Empezaremos esta seccion aprendiendo como funcionan los NUMBERS en JS

Como convertir VALUES to NUMBERS y sobre todo como comprobar si ciertos VALUES son NUMBERS o no!

Lo primero que debemos saber sobre los NUMBERS es que en JS estan representados internamente como FLOATING POINT NUMBERS, es decir siempre como decimales, incluso cuando los escribimos como INTEGERS.
*/
console.log(23 === 23.0); //true

/*
Esta es la razon por la que solo tenemos un DATA TYPE for NUMBERS.

Los NUMBERS estan representador internamente in a 64 base to format, lo que quiere decir ue los NUMBERS estan siempre guardados en formato BINARIO! o sea, 0's y 1's.

Base64 es un algoritmo de codificación que permite transformar cualquier carácter de cualquier idioma en un alfabeto que consta de letras, dígitos y signos latinos. Con esto podemos convertir caracteres especiales como logogramas chinos, emojis e incluso imágenes en una secuencia "legible" (para cualquier ordenador), que se puede guardar y/o transferir en cualquier otro lugar. A menudo se utiliza para transmitir datos binarios por medio de transmisiones que tratan sólo con texto, como para enviar imágenes y archivos adjuntos por correo electrónico.

En el formato Binario es complicado representar fracciones, o por lo menos mas complicado que hacerlo que en el sistema 10 base.

Base 10 --> 0 to 9
Binary base 2 -6> 0 to 1

Hay ciertos numeros complicados de representar en Base 2, como por ejemplo 0.1
*/
console.log(0.1 + 0.2); //0.30000000000000004
console.log(3 / 10); // 0.3
console.log(0.1 + 0.2 === 0.3); // False, deberia ser true, pero es un error en JS y otros lenguajes...es algo que tenemos que aceptar.
/*
El resultado deberia ser solo 0.3 y no con la retaila de ceros detras. Pero JS no tiene mejor forma de representar en base 2.

Pero en Base 10, 1/10 es simplemente 0.1 sin añadidos de mas.

JS a veces, behind the scenes lo que hace es intentar camuflar estos resultados. Muchos otros lenguajes les pasa lo mismo como PHP o RUBY, esta forma de representar los numeros es algo que tenemos que aceptar y no podemos cambiar!
*/

/********CONVERSION STRING TO NUMBER******/

//Sabemos como convertir un STRING en NUMBER:
console.log(Number('23')); //2
//Pero hay una forma mas sencilla:
console.log(+'23'); //23
//Esto funciona porque cuando JS ve el +, hace el TYPE COERCION! convierte automaticamente los OPERANDS en NUMBERS

/********PARSING INTEGERS******/

/*
Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.

Podemos parsear a number from a STRING, no olvidemos que NUumber al fin y al cabo es un OBJECT una FUNCTION, y como todos los OBJECT tiene sus METHODS.

Con el METHOD parseInt, JS automaticamente detectara los numeros, incluso con letras, esto solo funciona si empezamos el STRING con numeros...
*/

console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e30px', 10)); // NaN

//Como anecdota cabe decir que podemos pasar un segundo argumento a nuestro parseInt, seria el llamado "regex" que es la base del sistema numerico que usemos. En los casos anteriores usamos Base 10 , numeros de 0 a 9. Si cambiasemos la Base no funcionaria igual:

console.log(Number.parseInt('30px', 2)); // NaN
console.log(Number.parseInt('e30px', 2)); // NaN

/********PARSING FLOATS******/

//Nos permite leer los numeros decimales, a floating point number.

console.log(Number.parseInt('2.5rem')); //2
console.log(Number.parseFloat('2.5rem')); //2.5

//Si metiesemos espacios antes o despues tambien funciona:

console.log(Number.parseFloat('  2.5rem ')); //2.5

//Cabe decir que estas funcionaes son GLOBAL FUNCTION o de ALTO NIVEL, por lo que podemos llamarlas por si solas, aunque esta es la forma OLD SCHOOL de hacerlo, y ahora en MODERN JS se utiliza el number OBJECT para llamar a las funciones.

//Podriamos decur que NUmber seria lo quer se conoce como NAMESPACE, Number seria el NAMESAPCE de las funciones parseInt y parseFloat.

console.log(parseInt('2.5rem')); //2
console.log(parseFloat('2.5rem')); //2.5

//Exploremos otra funcion del NUMBER NAMESPACE:

/********isNaN******/

//Se usa basicamente para comprobar si un VALUE es un NUMBER. Este metodo solo usarlo para comprobar si es NaN! es algo confusdo porque en realidad no nos dice si el valor es un numero o no, simplemente si es NaN en si.

console.log(Number.isNaN(20)); //False es un NUMBER
console.log(Number.isNaN('20')); //False es un STRING
console.log(Number.isNaN(+'20X')); //true es un NaN
console.log(Number.isNaN(20 / 0)); //False nos daria infinito

/********isFinite******/

//La mejor forma de comprobar si un VALUE es un NUMBER es con el METHOD isFINITE:

console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false because is NaN
console.log(Number.isFinite(+'20X')); //false because is NaN
console.log(Number.isFinite(20 / 0)); //false

/********isInteger******/

console.log(Number.isInteger(20)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23.2)); //false es un float
console.log(Number.isInteger(+'20X')); //false
console.log(Number.isInteger(20 / 0)); //false
