'use strict';

/*
¿Como funciona exactamente el proceso de pasar ARGUMENTS a las FUNCTIONS?

En este seccion veremos algo parecido a la unidad de PRIMITIVES AND OBJECTS y como guardamos en el HEAP los OBJECTS o tambien conocidos como REFERENCE TYPES  (OBJECT LITERAL, ARRAYS, FUNCTIONS, etc) a diferencia de las PRIMITIVE TYPES (Number, String, Boolean, Undefined, Null, Symbol and BigInt) que son guardadas en el CALLSTACK.

En este caso centraremos este concepto a las FUNCTIONS, porque es algo super importante entender como las PRIMITIVEs y los OBJECTS funcionan en el contexto de las FUNCIONES.

Resumiendo la practica, vamos a ver como las PRIMITIVAS hacen una NUEVA COPIA de un VALOR ORIGINAL en el CALL STACK, mientras que los REFERENCE TYPES realizan una MODIFICACION dentro del HEAP, modificando el valor inicial.

Veamos el siguiente ejemplo, tenemos dos VARIABLEs, una es una PRIMITIVA y la otra un OBJECT.
*/
const flight = 'LH234';
const javi = {
  name: 'Javier Palomino',
  passport: 564494946,
};
//Creamos una funcion que va a modificar estos dos valores, imaginemos que el valor del vuelo ha sido modificado:

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH569'; //Crea una nueva address en el CALLSTACK
  passenger.name = 'Mr ' + passenger.name;
};
checkIn(flight, javi);
console.log(flight); // LH234 No ha sido cambiado
console.log(javi); // Si ha sido cambiado
/*
{name: "Mr Javier Palomino", passport: 564494946} 
*/

//Podemos crear incluso otra funcion que manipule el OBJECT javi:
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(javi);
console.log(javi); //{name: "Mr Javier Palomino", passport: 242601093} Podemos ver como el passport tiene ahora un valor arbitrario!

/*
When we pass a primitive type as an argument on a function, the function makes a copy of the ORIGINAL VALUE, and works with it.

On the other hand, when we pass an object as an argument on a function, the function makes a copy of the REFERENCE that points to the place of the memory where the object is stored. This copy is a value itself, is not a reference. Because all of this, the original object can be modified from inside of a function.



- In programming languages, Arguments can be passed by value, or passed by reference

- JS has not passing by reference, only passing by value...

- So, when we pass primitive values, the function works with a value, which is a copy of the original value

- When we pass an object, the function works with a value that address to the

spot where the original object is in the memory (still is not a reference)
*/

/*
Para terminar este concepto es importante saber que en programacion existen dos terminos que se usan todo el rato cuando trabajamos con funciones:

1/passing by value --> El valor original no se modifica!

In JavaScript, all types of values are passed by value, which means the value is copied and this copy is passed as an argument. You can modify the copy, and the original value will stay untouched, for example:
*/
function changeValue(a) {
  a = 5;
  console.log(a); // 5
}

const a = 1;
changeValue(a);
console.log(a); // 1
/*
We can see that the modification of the a argument inside of the function didn't affect the value outside of the function because the value of a was copied, and the change was done on this copy.

Objects are also passed by value, but there is a difference. The value stored in a variable for an object isn't the object itself. It's a reference to that object in memory.

2/passing by reference --> So, in case of objects, you're not copying an object, but a reference to that object. Due to this, if you modify the object inside of a function, this change will be reflected in the object outside of the function, for example:
*/
function changeValue(obj) {
  obj.newProp = 'Hi';
}
const obj = {
  prop: 'Hello',
};
changeValue(obj);
console.log(obj); // {prop: "Hello", newProp: "Hi"}
/*
There are some programming languages that allow you to choose whether you want to pass by value or pass by reference (even for primitive types).

El problema es que JS no utiliza passing by reference, solo passing by value, aunque nos parezca que realize el passing by reference. It's always passing by value (for objects the value is a reference).

Hay lenguajes como c++ donde podemos pass a reference a cualquier valor en vez del valor en si, funcionando incluso con primitivas. Podemos pass a reference con el valor de 5 y el valor original fuera de la funcion se cambiara, esto es lo que se conoce como pass by reference.

Pero de nuevo, en JS no se hace pass by reference!

Como hemos visto en este caso realizamos un pass by reference, es decir, la memoria utiliza un OBJECT, pero esta referencia itself es un valor! un valor que contiene una direccion en la memoria.

So basically we pass a reference to the function, but we do not pass by reference, importante de entender la diferencia!
*/
