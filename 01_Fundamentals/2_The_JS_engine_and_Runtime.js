'use strict';

/*
******JAVASCRIPT ENGINE & RUNTIME*****

JS engine simplemente es un programa that executes JS code, cada BROWSER tiene su propio ENGINE the JS, pero el mas conocido es Google V8. V8 powers Google Chrome but also Node.js

COMPONENTES AND HOW IT WORKS --> Cualquier JS ENGINE contains:

1️⃣ CALL STACK (where code is executed), el CALL STACK es donde el codigo es ejecutado a traves de un EXECUTION CONTEXT
2️⃣ HEAP (where objects are stored). Es un unstructured memory pool que guarada todos los OBJECTS que nuestra aplicacion necesita.

Queda saber como el codigo es compilado:

Antes de nada hay que diferenciar entre COMPILATION and INTERPRETATION, con el primer metodo todo nuestro codigo es convertido de una sola vez, y transportado en un portable file that can be executed on the computer and the second one basicatelly runs through the source code and executes it line by line. Al principio JS utilizaba INTERPRETATION, siendo mucho las lento que COMPILATION, pero hoy tenemos MODERN JS que usa un mix de los dos metodos. Lo que se conoce como just-in-time compilation (No existe el PORTABLE FILE).

Finalmente, tenemos el concepto de RUNTIME, que es el BROWSER, podemos verlo como un CONTAINER. El corazon de un RUNTIME, es el ENGINE de JS con su CALL STACK y su HEAP. Without an ENGINE there is no RUNTIME and there is no JS. Pero para poder usar JS no solo necesitamos un ENGINE sino que tambien API's (DOM, Timers, Fetch API, etc). API's son funcionalidades que proveemos al ENGINE pero que no son parte de JS. JS accede a estas API's a traves de lo que conocemos como THE GLOBAL WINDOW OBJECT. Pero las API's tambien forman parte del RUNTIME. A RUNTIME is just like a box that contains all the JS related stuff.

No hay que olvidar que JS puede existir fuera de un BROWSER, como es el caso de NODE.JS, pero al no disponer de un BROWSER no tendremos las API's del BROWSER. En vez de estas API's tenemos multiples C++ BINDINGS y el llamado THREAD POOL.

Luego hay que tener en cuenta que existen diferentes JS RUNTIMES.
*/
