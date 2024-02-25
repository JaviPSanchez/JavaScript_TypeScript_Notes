'use strict';

/*
*********VARIABLE ENVIRONMENT: HOISTING AND THE TDZ************

Este es un concepto que genera confusion (HOISTING), veremos con mas detinimiento el concepto de VARIABLE ENVIRONMENT, como las variables son creadas en JS. En JS tenemos un mecanismo llamado HOSTING, that makes some types of variables usable in the code before they are actually declared in the code "Variables lifted to the top of their scope".

Podrimos decir que la VARIABLE es mediante magia elevado a la parte superior de una funcion, pero esto no es asi; en realidad lo que pasa BEHIND THE SCENES que antes de ejecutar el codigo, se buscan VARIABLE DECLARATIONS y por cada VARIABLE una nueva propiedad es creada en el VARIABLE ENVIRONMENT OBJECT.

<cmg /images/Picture17.jpg>

**********TDZ : Temporal Dead Zone.****************

Basicamente es la zona del SCOPE donde la VARIABLE esta definida, pero no puede ser usada. Es como si la VARIABLE no existiese, si intentamos utilizar la VARIABLE en la zona TDZ como podemos ver en el ejemplo con la VARIABLE JOB, tendremos un ReferenceError.

<cmg /images/Picture18.jpg>

En este ejemplo, la variable CONST JOB no puede ser llamada antes de ella en su respectivo BLOCK SCOPE, por ser TDZ. Sin embargo, la VARIABLE x no esta ni siquiera definida, dándonos el error de no definida.
¿Porque utilizamos TDZ en las nuevas versiones de JS ES6? Pues porque es mucho más fácil de evitar errores y encontrarlos, tener VARIABLE con UNDEFINED pueden crear muchos errores en el Código, es preferible tener Reference Error que Undefined.

En cuanto al porque de porque existe el *HOISTING, podemos decir que se hizo para poder acceder a las funciones tipo declaración, debemos tener en cuenta que existen ciertas técnicas de programación, como MUTUAL RECURSION. La única forma de hacer funcionar el HOISTING fue dándole esa poder a la VARIABLE VAR, seria como un byproduct (consecuencia) este feature no podemos eliminarlo actualmente, por lo que se crearon las VARIABLE LET y CONST para arreglar el problema.
Vamos a intentar llamar a los tres diferentes tipos de variables que podemos crear en JS y ver que pasa, cuando lo hacemos antes de declararlas:

console.log(me); // Aqui nos dira undefined, puesto que las variables VAR son HOISTED, pero HOISTED con el valor UNDEFINED. (esto puede dar problemas, como llamar a funciones no deseadas, debido a que el valor que adoptara VAR ME sera undefined.)
console.log(job); //Nos dara error, puesto que no es HOISTED
console.log(year); //Nos dara error, puesto que no es HOISTED

los valores de job y year son uninitialized, lo cual quiere decir que no hay un valor con el que trabajar. Estos valores se situaran en un zona llamada Temporal Dead Zone "TDZ", esta zona no nos permite acceder a las variables entre el comienzo de su SCOPE (este SCOPE puede ser GLOBAL SCOPE o un BLOCK SCOPE) y el lugar donde la VARIABLE este declarada. En resumidas cuentas, con la VARIABLE JOB no podremos llamarla desde el inicio del codigo hasta la linea donde este situada la variables, una vez pasada esta linea SI podemos llamarla sin problemas!
*/
