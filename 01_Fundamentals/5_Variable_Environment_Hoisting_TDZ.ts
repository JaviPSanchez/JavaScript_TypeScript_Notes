'use strict';
import './main.css';

/*
*********VARIABLE ENVIRONMENT: HOISTING AND THE TDZ************

🔍 Define the concept of "hoisting."

En JS tenemos un mecanismo llamado HOSTING, that makes some types of variables
usable in the code before they are actually declared in the code "Variables
lifted to the top of their scope".

Podrimos decir que la VARIABLE es mediante magia elevado a la parte superior
de una funcion, pero esto no es asi; en realidad lo que pasa BEHIND THE SCENES
que antes de ejecutar el codigo, se buscan VARIABLE DECLARATIONS y por cada
VARIABLE una nueva propiedad es creada en el VARIABLE ENVIRONMENT OBJECT.

<cmg /images/Picture17.jpg>

**********TDZ : Temporal Dead Zone.****************

Basicamente es la zona del SCOPE donde la VARIABLE esta definida, pero no puede
ser usada. Es como si la VARIABLE no existiese, si intentamos utilizar la VARIABLE
en la zona TDZ como podemos ver en el ejemplo con la VARIABLE JOB, tendremos un
ReferenceError.

<cmg /images/Picture18.jpg>

En este ejemplo, la variable CONST JOB no puede ser llamada antes de ella en su
respectivo BLOCK SCOPE, por ser TDZ. Sin embargo, la VARIABLE x no esta ni siquiera
definida, dándonos el error de no definida. ¿Porque utilizamos TDZ en las nuevas
versiones de JS ES6? Pues porque es mucho más fácil de evitar errores y encontrarlos,
tener VARIABLE con UNDEFINED pueden crear muchos errores en el Código, es preferible
tener Reference Error que Undefined.

En cuanto al porque de porque existe el HOISTING, podemos decir que se hizo para poder
acceder a las funciones tipo declaración, debemos tener en cuenta que existen ciertas
técnicas de programación, como MUTUAL RECURSION. La única forma de hacer funcionar el
HOISTING fue dándole esa poder a la VARIABLE VAR, seria como un byproduct (consecuencia)
este feature no podemos eliminarlo actualmente, por lo que se crearon las VARIABLE LET
y CONST para arreglar el problema.
*/

console.log(addDecl(2, 3)); // 5, Nos permite llamarla debido al HOISTING
console.log(addExpr(2, 3)); //ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
var me = 'Javi';
let job = 'teacher';
const year = 1987;
/*
Si instentasemos llamar a las funciones con la VARIABLE VAR, serian undefined
*/
console.log(addExpr(2, 3)); // TypeError: addExpr is not a function
console.log(addArrow(2, 3)); //

var addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;
