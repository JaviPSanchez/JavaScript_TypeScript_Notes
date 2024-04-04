'use strict';

/*
🔍 Define what a closure is and describe its uses and advantages.
Existe un concepto mistico en las FUNCTIONS de JS que muchos developers no entienden, son lo que se conoce como CLOSURES.

Abrochensen los cinturones, que vienen curvas...

CLOSURES va a recopilar un poquito de todo lo que hemos aprendido hasta hora, CALL STACKS, SCOPE CHAIN, EXECUTION CONTEXT, etc de una forma magica!

Lo primero que tenemos que saber sobre los CLOSURES es que no es una caracteristica que usamos explicitamente, es un concepto abstracto.

Como es el caso de un ARRAY o un OBJECT, estos ocurren automaticamente en algunas circunstancias, siendo nuestra mision reconocerlas, veremos una con este ejemplo:

Creamos una nueva funcion que sera la que cree el CLOSURE
*/
const secureBooking = function () {
  //Esta variable no puede ser manipulada desde el exterior
  let passengerCount = 0;
  //Esta funcion devolvera otra nueva funcion
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
//Aqui booker pasara a ser una funcion tambien
const booker = secureBooking();

/*
Cuando llamamos a la funcion securebooking en segundo plano sucedera todo lo visto hasta ahora en Behind the Scenes:

<cmg /images/Picture1.jpg>

En la siguiente imagen cabe destacar el proceso que ocurre en segundo plano cuando llamamos a la función secureBooking:

1.	Antes de que se ejecute la función secureBooking nuestro código está funcionando en el GLOBAL EXECUTION CONTEXT. En esta área solo tenemos por el momento esta función, por lo que en el GLOBAL SCOPE solo está la función secureBooking.

2.	Una vez que llamamos a la función, aparece otro EXECUTION CONTEXT creado y situado en la parte superior del EXECUTION STACK y encima del GLOBAL EC. Cada EC tiene su propia VARIABLE ENVIRONMENT que contiene todas sus variables locales, en este caso solo contiene PassengerCount set to zero.

<cmg /images/Picture2.jpg>

3.	Este VARIABLE ENVIRONMENT es también el SCOPE de esta función, por lo que el SCOPE CHAIN de este EXECUTION CONTEXT permite acceder a las VARIABLES de sus parent’s scopes, en nuestro caso solo el GLOBAL SCOPE.

<cmg /images/Picture3.jpg>

4.	En la siguiente línea dentro de la función secureBooking nos encontramos una nueva función que es devuelta y guardada en la variable booker, por lo que el GLOBAL CONTEXT también contiene la variable booker. Una vez que la función secureBooking devuelve el valor, el STACK saca el EC de secureBooking y desaparece:, por lo que la función secureBooking ha hecho su trabajo y ya no esta, esto es importante de tenerlo en cuenta.

<cmg /images/Picture4.jpg>

Pasamos a llamar a la funcion booker sin necesidad de argumentos, puesto que no hemos definido ningún parámetro en las funciones. Observando que es capaz de incrementar el valor de passengerCount.
*/
booker(); //1 passengers
booker(); //2 passengers
booker(); //3 passengers
/*
Pero si pensamos en esto, ¿como es esto posible? ¿Como consigue booker actualizar passengerCount? sabiendo que passengerCount VARIABLE que esta definida dentro de la funcion secureBooking la cual ya ha terminado su EXECUTION y como sabemos su EC desaparece del STACK.

Pero la funcion interna, que es booker function sigue teniendo la habilidad de acceder a la variable passengerCount la cual no deberia existir...

Esta magia es la que se consigue gracias al CLOSURE.

Tenemos la BOOKER FUNCTION que existe en el GLOBAL ENVIRONMENT o GLOBAL SCOPE como prefiramos y el ENVIRONMENT donde la funcion ha sido creada ya no sigue activo!, pero de alguna forma la funcion booker sigue teniendo acceso a las variables que estaban presentes, por lo que, podemos decir que un CLOSURE permite acordarse del "nacimiento" de todas la variables. En nuestro caso la funcion secureBooking es el lugar de nacimiento de la variable passengerCount.
*/
const secureBooking = function () {
  // *****ENVIRONMENT BOOKER****
};

/*
Este fenomeno no podemos solo explicarlo con el concepto de SCOPE CHAIN, hay que entender el concepto de CLOSURE tambien.

7.	Cuando llamamos a la función booker, la cual esta situada en el GLOBAL SCOPE, la primera cosa que va a ocurrir es que un nuevo EC se creara y situado en la parte superior del CALL STACK. Su VARIABLE ENVIRONMENT esta vacio puesto que no existen variables declaradas dentro de esta función. Su SCOPE CHAIN será  (al estar booker en el GLOBAL CONTEXT) un child’s SCOPE del GLOBAL SCOPE. Como podemos ver en la imagen, como vamos acceder a la variable passengerCount si ya no esta? No hay forma de localizarla en el SCOPE CHAIN

<cmg /images/Picture5.jpg>

8.	Es aquí donde comenzamos a descubrir el secreto del CLOSURE, cualquier FUNCTION tiene acceso al VARIABLE ENVIRONMENT del EXECUTION CONTEXT donde la función fue creada. En el caso de BOOKER la función fue creada en el EC de secureBooking (que fue sacado del STACK…) por lo que booker tendrá acceso al VARIABLE ENVIRONMENT  que contiene passengerCount variable. De esta forma es como esta función tiene acceso y puede manipular la variable passengerCount. Esta conexión es lo que conocemos como CLOSURE.


<cmg /images/Picture6.jpg>

Basicamente cualquier funcion tiene acceso al entorno donde fue creada sus variables, esta conexion o pasarela mistica es lo que conocemos como SCOPE.

Por un lado el EC de la funcion ha sido destruido, pero el ENGINE de JS 
mantiene con vida el VARIABLE ENVIRONMENT.

Este closed over variable environment se queda con la función siempre. Podemos decir que gracias al CLOSURE una función no pierde la conexión con las variables que existían en el nacimiento.

<cmg /images/Picture7.jpg>

9.	Siguiendo con el proceso, cuando llamamos la función booker, vemos que la variable no esta en el SCOPE actual y JS inmediatamente mirara en el CLOSURE buscando la VARIABLE allí. Realizara este proceso incluso antes de mirar el SCOPE CHAIN. Si tuviésemos definido la variable passengerCount con el valor de 10 en el GLOBAL SCOPE, utilizaríamos primero la variable del CLOSURE, es decir, cuando llamamos a la función booker, la variable passengerCount empezaríamos con 0 y no con el valor de la variable creada en el GLOBAL SCOPE.

<cmg /images/Picture8.jpg>

Resumiendo el concepto de CLOSURE de diferentes formas:


<cmg /images/Picture9.jpg>


Si quisiesemos tener acceso a las variables guardadas en el CLOSURE habria que utilizar el comando console.dir, parecido al console.log:
*/
console.dir(booker); //Nos dara un funcion anonima y dentro de esta podremos ver los SCOPES:
/*
ƒ anonymous()
arguments: (...)
caller: (...)
length: 0
name: ""
prototype: {constructor: ƒ}
__proto__: ƒ ()
[[FunctionLocation]]: 1010-Closures.js:18
[[Scopes]]: Scopes[3]  
    0: Closure (secureBooking)
    passengerCount: 3
    1: Script
    booker: ƒ ()
    secureBooking: ƒ ()
    2: Global {window: Window, self: Window, document: document, name: "", location: Location, …}

NOTA!! Cuando vemos los doble brackets como aqui [[Scopes]] quiere decir que es una propiedad interna y no podemso acceder a ella desde nuestro codigo.

CLOSURE es un feature aue se usa todo el rato en JS y muy importante de entender!
*/
