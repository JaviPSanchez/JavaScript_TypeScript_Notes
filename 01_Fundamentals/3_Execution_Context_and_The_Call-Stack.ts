'use strict';
import './main.css';

/*
****HOW IS JS EXECUTED IN THE CALL STACK?*****

Supongamos que nuestro code ha terminado de COMPILARSE y esta listo para ejecutarse,
se creara el DEFAULT EXECUTION CONTEXT:

1️⃣ Window en el Browser
2️⃣ Global en NodeJS

(for the top-level code) que es el codigo que
no se encuentra dentro de las funciones, por lo que al principio se ejecutara solo el
codigo fuera de las funciones (recordar, que el codigo de las funciones se ejecuta solo
cuando la llamamos)

Pero ¿qué es global EXECUTION CONTEXT? Es un concepto abstracto, pero podemos decir
que es un entorno o una box en el cual ejecutamos una parte del codigo de JS.
Una vez que hemos ejecutado nuestro top-level code podemos pasar a ejecutar las funciones,
esperando a las callbacks (EVENT LOOPS), por cada function tendremos un execution context
diferente.

“The execution context is not executing the code. The CPU executes the code that is in
the execution context. The execution context is simply an environment for a piece of code
to reside in, along with all the necessary information required to execute that code.

Our program gets compiled to machine code so the CPU can understand. These instructions
are stored in the computer's memory (typically RAM). Each instruction gets a unique memory
address. During execution phase, the CPU fetches those instructions from memory using
their memory addresses and executes them.”


¿Que hay dentro del EXECUTION CONTEXT?

Lo primero que encontramos es el VARIABLE ENVIRONMENT donde guardamos variables y
demás como (let, const, var, functions, arguments object) y luego tendremos el
SCOPE CHAIN, que es cuando las funciones acceden a variables fuera de la propia funcion.
Son referencias de variables que se encuentran fuera del EXECUTION CONTEXT de la funcion.
For keep the track of this function tenemos el ultimo componente el THIS KEYWORD
(que es una VARIABLE especial de cada EXECUTION CONTEXT). Todos estos conceptos se
generan en la llamada "creation phase" que ocurre inmediatamente después la EXECUTION.

NOTA! Las ARROW FUNCTIONS no tienen su propio EXECUTION CONTEXT nor ARGUMENTS or THIS.

<cmg /images/Picture3.jpg>

<cmg /images/Picture4.jpg>

¿Como es capaz el ENGINE de JS de guardar el orden entre las EXECUTION ORDERS y la
relación entre las funciones? Pues gracias al CALL STACK, que es el lugar donde las
EXECUTION CONTEXTS se colocan unas detrás de otras.

<cmg /images/Picture5.jpg>

Cuando ejecutamos la segunda función, la primera deja de ejecutarse, y solo se ejecutara
“la primera” cuando la segunda termine, y tiene que ser así debido debido a que JS tiene un 
solo THREAD de EXECUTION y solo puede hacer una cosa al mismo tiempo.

<cmg /images/Picture6.jpg>

Como hemos dicho, una vez que alcanzamos return, nos salimos de la segunda función, pasando
a la primera:

<cmg /images/Picture7.jpg>
<cmg /images/Picture8.jpg>

*/
