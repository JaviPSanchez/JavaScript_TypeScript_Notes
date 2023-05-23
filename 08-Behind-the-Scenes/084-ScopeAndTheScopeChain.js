'use strict';

/*
*****SCOPE AND THE SCOPE CHAIN*****

SCOPING is How our program's variables are organized and accessed by the JS ENGINE. SCOPING asks the computer where VARIABLES live. En JS temenos algo que se conoce como LEXICAL SCOPING the rules where we can access variables are based on exactly where in the code functions and blocks are written. SCOPING is controlled by PLACEMENT of functions and blocks in the code;

SCOPE: Space or environment in wich a certain variable is declared, there is 3 differents types of scope in JS :

1️⃣ Global Scope.
2️⃣ Function Scope.
3️⃣ Block Scope.

SCOPE OF A VARIABLE:  Region of cour code where a certain variable can be accessed.
*GLOBAL SCOPE  Son aquellas variables definidas fuera de una funcion o bloque. Son accesibles desde cualquier parte in our program.
**FUNCTION SCOPE Variables are accesible only inside function, NOT from the outside, they are also called LOCAL SCOPE. Si intentamos llamar a una VARIABLE desde el exterior nos dira ReferenceError.
***BLOCK SCOPE (ES6)  Al igual que en el FUNCTION SCOPE, las variables are accessible only inside the block, however, this only applies to let and const variables! pero si usamos var, sera accesible fuera del bloque, sera una GLOBAL SCOPE. Por eso en ES5 and the versions before we declare var VARIABLES for GLOBAL SCOPE and FUNCTION SCOPE because they care only in functions and not blocks, they simply ignore them. Finally, in ES6, FUNCTIONS SCOPES are also BLOCK SCOPES, at least in strict mode.

<cmg /images/Picture9.jpg>

***********SCOPE CHAIN***************

Este concepto hace referencia a la posibilidad que tenemos de acceder a otras variables situadas por encima de un SCOPE determinado (all its outer SCOPES), si pretendemos acceder a las variables situadas en el GLOBAL SCOPE a partir por ejemplo, de un SCOPE inferior, no habria problema, pero no podemos acceder a las variables situadas en niveles inferiores desde SCOPE situadas por encima de este. Este proceso es lo que se conoce como VARIABLE LOOKUP IN SCOPE CHAIN. PARENT's SCOPE can be use but not CHILD's SCOPE! Sin embargo no podemos acceder entre SCOPEs situados en el mismo BLOCK

Hay que quedarse con el concepto de que LET y CONST, creados a partir de ES6, son BLOCK SCOPE, y VAR es FUNCTION SCOPEs. Es decir variables declared with VAR end up in the closest function scope, se van a furmar un puro si estan dentro de un BLOCK, podremos llamar sin problemas a una VARIABLE VAR situada dentro de un BLOCk desde fuera de este mismo BLOCK. VAR VARIABLES DO NOT CARE ABOUT BLOCKs SCOPE ATT ALL!

<cmg /images/Picture10.jpg>

Otro aspecto a tner en cuenta es la comunicacion entre SCOPEs situados dentro de un mismo PARENT SCOPE, si los dos son CHILD SCOPE de otro no pueden accederse entre si, they are siblings SCOPEs. So, by the rules of LEXICAL SCOPING they cannot access to each other VARIABLES. SCOPING only works UPWARDS not SIDEWAYS.

<cmg /images/Picture11.jpg>

SCOPE CHAIN VS CALL STACK --> SCOPE CHAIN has nothing to do with the execution order in which the functions were called in the CALL STACK.

<cmg /images/Picture12.jpg>

<cmg /images/Picture13.jpg>

<cmg /images/Picture14.jpg>

<cmg /images/Picture15.jpg>

<cmg /images/Picture16.jpg>

*/

/* 
Dos situacions importantes pasan aqui:

1️⃣ Scope Chaining: JS functions always looks for the nearest variable, 
2️⃣ Hoisting: 


*/
var text = 'outside';

function logText() {
  console.log(text);
  var text = 'Inside';
}

logText(); //Undefined
