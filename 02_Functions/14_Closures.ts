import './main.css';

/*
🔍 Define what a closure is and describe its uses and advantages.

Closure es una funcion dentro de otra, la inner function puede
acceder a las variables y scope de la outer function. Permite tener
variables privadas y state maintenance. Muy usado en JS frameworks
like React, Vue, Angular, etc...

*/
/**
 * Outer Scope
 */
const secureBooking = function () {
  /**
   * Inner Scope
   */
  let passengerCount = 0;

  function bookPassengers() {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }

  return { bookPassengers };
};

/*
Uno de los beneficios es que podemos encapsular variables!
*/

// passengerCount = 10; //👉 No podemos acceder al Inner Scope

// We invoke the secureBooking()
const booker = secureBooking();

/*
Cuando llamamos a la funcion securebooking, en nuestro CALL STACK, aparecerá un Global
Execution Context (Antes de que esta sea ejecutada) En esta área solo tenemos por el
momento esta función, por lo que en el GLOBAL SCOPE solo está la función secureBooking.

Una vez que llamamos a la función, aparece otro EXECUTION CONTEXT creado y situado en
la parte superior del EXECUTION STACK y encima del GLOBAL EXECUTION CONTEXT. Cada EC
tiene su propia VARIABLE ENVIRONMENT que contiene todas sus variables locales, en este
caso solo contiene passengerCount = 0

Este VARIABLE ENVIRONMENT es también el SCOPE de esta función, por lo que el SCOPE CHAIN
de este EXECUTION CONTEXT permite acceder a las VARIABLES de sus parent’s scopes, en
nuestro caso solo el GLOBAL SCOPE.

<cmg /images/Picture3.jpg>

En la siguiente línea dentro de la función secureBooking nos encontramos una nueva función
que es devuelta y guardada en la variable booker, por lo que el GLOBAL CONTEXT también
contiene la variable booker. Una vez que la función secureBooking devuelve el valor, el
STACK saca el Execution Context de secureBooking() y desaparece de nuestro CALL STACK.

<cmg /images/Picture4.jpg>

Pasamos a llamar a la funcion booker sin necesidad de argumentos, puesto que no hemos
definido ningún parámetro en las funciones. Observando que es capaz de incrementar el
valor de passengerCount.
*/
booker.bookPassengers();
booker.bookPassengers();
booker.bookPassengers();

/*
Pero si pensamos en esto, ¿como es esto posible? ¿Como consigue booker actualizar passengerCount?
sabiendo que passengerCount esta definida dentro de la funcion secureBooking la cual ya
ha terminado su EXECUTION! Esta magia es lo que llamamos CLOSURE. Un CLOSURE permite acordarse del
"nacimiento" de todas las variables. En nuestro caso la funcion secureBooking() es  el lugar de
nacimiento de la variable passengerCount.

Cuando llamamos a la función booker, la cual esta situada en el GLOBAL SCOPE, la primera cosa que
va a ocurrir es que un nuevo Execution Context se creará y será situado en la parte superior del
CALL STACK. Su VARIABLE ENVIRONMENT estará vacio puesto que no existen variables declaradas dentro
de esta función. Su SCOPE CHAIN será (al estar booker en el GLOBAL CONTEXT) un child’s SCOPE del
GLOBAL SCOPE. Como podemos ver en la imagen, como vamos acceder a la variable passengerCount si ya
no esta? No hay forma de localizarla en el SCOPE CHAIN

<cmg /images/Picture5.jpg>

8.	Es aquí donde comenzamos a descubrir el secreto del CLOSURE, cualquier FUNCTION tiene acceso al
VARIABLE ENVIRONMENT del EXECUTION CONTEXT donde la función fue creada. En el caso de BOOKER la función
fue creada en el EC de secureBooking (que fue sacado del STACK…) por lo que booker tendrá acceso al
VARIABLE ENVIRONMENT  que contiene passengerCount variable. De esta forma es como esta función tiene
acceso y puede manipular la variable passengerCount. Esta conexión es lo que conocemos como CLOSURE.

<cmg /images/Picture6.jpg>

Basicamente cualquier funcion tiene acceso al entorno donde fue creada sus variables, esta conexion o
pasarela mistica es lo que conocemos como SCOPE. Por un lado el EC de la funcion ha sido destruido,
pero el ENGINE de JS  mantiene con vida el VARIABLE ENVIRONMENT. Este closed over variable environment
se queda con la función siempre. Podemos decir que gracias al CLOSURE una función no pierde la conexión
con las variables que existían en el nacimiento.

<cmg /images/Picture7.jpg>

9.	Siguiendo con el proceso, cuando llamamos la función booker, vemos que la variable no esta en el
SCOPE actual y JS inmediatamente mirara en el CLOSURE buscando la VARIABLE allí. Realizara este proceso
incluso antes de mirar el SCOPE CHAIN. Si tuviésemos definido la variable passengerCount con el valor
de 10 en el GLOBAL SCOPE, utilizaríamos primero la variable del CLOSURE, es decir, cuando llamamos a
la función booker, la variable passengerCount empezaríamos con 0 y no con el valor de la variable
creada en el GLOBAL SCOPE.

<cmg /images/Picture8.jpg>

Resumiendo el concepto de CLOSURE de diferentes formas:

<cmg /images/Picture9.jpg>

Si quisiesemos tener acceso a las variables guardadas en el CLOSURE habria que utilizar el comando
console.dir, parecido al console.log:
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

NOTA!! Cuando vemos los doble brackets como aqui [[Scopes]] quiere decir que es una propiedad interna
y no podemos acceder a ella desde nuestro codigo.

CLOSURE es un feature que se usa todo el rato en JS y muy importante de entender!

Vamos a ver mas situaciones de los CLOSURES


*/
//Creamos un variable vacia
let f;
//Luego una function expression g
const g = function () {
  const a = 23;
  //Reasignamos a nuestra variable f una funcion
  f = function () {
    console.log(a * 2);
  };
};
// Vamos a subir de nivel añadiendo otra nueva funcion mas
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
//llamamos a g
g();
f(); //43
console.dir(f); // a como SCOPE
//Esto demuestra que el valor de f hace close over sobre cualquier variable del execution context donde ha sido definido. Esto es incluso cuando la variable no ha sido definida dentro del environment de g.

//The a VARIABLE is inside the backpack 🎒 of the f FUNCTION

//Llamamos a h
h();
//Esta funcion f sera en este punto diferente a la f anterior puesto que ha sido reasignada por h!
f(); //1554 = 777*2

// En este punto podemos ver que el nuevo closure que hemos hecho ha reasignado el environment de a por el de b
console.dir(f);
/*
ƒ f()
arguments: (...)
caller: (...)
length: 0
name: "f"
prototype: {constructor: ƒ}
__proto__: ƒ ()
[[FunctionLocation]]:
[[Scopes]]: Scopes[3]
0: Closure (h) {b: 777}  // Ya no esta a!
1: Script {f: ƒ, g: ƒ, h: ƒ}
2: Global {window: Window, self: Window, document: document, name: "", location: Locat
*/

//Luego podemos decir que efectivamente CLOSURE guarda un seguimiento de donde ha nacido la variable, en g() nace con el environment de a y en h() renace en un nuevo environment con b

//Vamos a ver otro ejemplo con un timer (lo veremos mas delante), sabemos que cuando hacemos boarding en un vuelo, se suele dividir los pasajeros en grupos, con niños, primera clase, segunda , etc
const boardPassengers = function (number, waitTime) {
  const personsPerGroup = number / 3;
  //Cualquier cosa que pongamos en esta funcion sera ejecutado en 1000 ms.
  setTimeout(function () {
    console.log(`We are now boarding all ${number} passengers`);
    console.log(
      `There are three groups, each with ${personsPerGroup} passengers`
    );
  }, waitTime * 1000);
  //este console no esperara los 3 segundos
  console.log(`Will start boarding in ${waitTime} seconds`);
};

boardPassengers(250, 3);
/*
Will start boarding in 3 seconds
1
2
3...
We are now boarding all 250 passengers
There are three groups, each with 83.33333333333333 passengers
*/
/*
Aqui podemos ver que cuando llamamos a la funcion boardPassengers se ejecuta personesPerGroup y la funcion setTime se ejecuta, luego aparece el console.log fuera de la funcion y del timer, y sale del STACK hay se crea ya el CLOSURE con los parametros number y waitTime.
*/

//Por ultimo seria interesante ver como el CLOSURE tiene prioridad sobre el SCOPE CHAIN, creamos una VARIABLE en el GLOBAL SCOPE si efectivamente el SCOPE CHAIN se ejecuta antes, entonces el valor inicila sera de 1000 pero si el CLOSURE se realiza antes, entonces 250 sera el valor incial, veamos:

const personsPerGroup = 1000; //We are now boarding all 250 passengers

//Queda entonces demostrado que se realiza primero el CLOSURe con el VALUE de 250.
