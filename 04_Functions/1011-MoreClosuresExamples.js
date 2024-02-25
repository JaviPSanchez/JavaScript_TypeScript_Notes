'use strict';

/*
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
