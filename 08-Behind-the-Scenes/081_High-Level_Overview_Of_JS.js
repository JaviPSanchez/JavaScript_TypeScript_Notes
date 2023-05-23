'use strict';

/*
*****JAVASCRIPT HIGH-LEVEL / OBJECT ORIENTED / MULTI-PARADIGM *****

Hay conceptos sobre como funciona JS que son importantes de saber:

HIGH-LEVEL: Todos los programas que utilizamos necesitan recursos, ya sean de memoria RAM, CPU, etc. Existen lenguajes LOW LEVEL donde hay que gestionar de una forma manual todos estos recursos como preguntar al PC por memoria (MEMORY MANAGEMENT) para guardar una variable... , y los hay HIGH LEVEL donde el usuario no tiene que preocuparse de gestionar los recursos, todo pasa automaticamente, facilitanto su aprendizaje. La desventaja del lenguaje HL es que sus programas no son tan rapidos o optimizados como los programas C por ejemplo.

GARBAGE-COLLECTED: Para no tener que procuparse de la memoria, existe un algoritmo dentro de JS que se encarga de eliminar todos los OBJECTS que no necesitamos.

INTERPRETED or JUST-IN-TIME COMPILED: El PC solo entiende 0 y 1, (MACHINE CODE) pero no es muy practico de entender, por ello se COMPILA automaticamente toda esta informacion para convertirla en MACHINE CODE.

MULTI-PARADIGM: es lo que hace muy popular a JS, hay que tener en cuenta que muchos lenguajes son solo PROCEDURAL o OOP o FP, pero JS puede ser los tres. 

En programacion un paradigma es un approach and mindset of structuring our code, which will direct your coding style and technique. un PARADIGM puede escribirse en IMPERATIVE o DECLARATIVE, Hay tres PARADIGMS conocidos:

1/ PROCEDURAL PROGRAMMING --> El que hemos hecho hasta ahora, organizar nuestro codigo de una forma lineal y algunas funciones.
2/ OBJECT-ORIENTED PROGRAMMING (OOP): Ver PROTOTYPE-BASED OBJECT-ORIENTED
3/FUNCTIONAL PROGRAMMING (FP):

PROTOTYPE-BASED OBJECT-ORIENTED: Casi todo en JS es un OBJECT, except for premitive VALUES (NUMBERS, STRINGS, ect), pero un ARRAY es un OBJECT. Al ser un OBJECT nos permite tener METHODS como .push o .typeOf. Esto es gracias debido a lo que conocemos como PROTOTYPAL INHERITANCE (Like templates). Este PROTOTYPE contiene todos los ARRAY METHODS.

FIRST-CLASS FUNCTIONS: Las funciones son tratadas como variables. pOdemos pasar funciones en otras funciones o incluso return functions from other functions, algo muy util y poderoso! permitiendonos utilizar el FP.

DYNAMIC: Esto quiere decir que es DYNAMICALLY-TYPED, no asignamos DATA TYPES to VARIABLES (NUMBER, BOOLEAN, STRING, etc) estan son reconocidas automaticamente por el ENGINE de JS. Also, podemos reasignar un tipo de variable a otro mas tarde en el codigo.

SINGLE-THREADED: Basicamente esto viene a decir como JS gestiona MULTITASK, acciones pasando al mismo tiempo. JS run in one single thread so it can only do one thing at a time!. In computing a THREAD is like a set of instructions that is executed in the computer's CPU. Por lo que nuestro codigo es basicamente este thread que es ejecutado por la CPU.

NON-BLOCKING EVENT LOOP CONCURRENCY MODEL: Si tenemos un Long-running task, con mucha informacion, como por ejemplo buscar informacion en un servidor remoto, podemos pensar que nuestro single thread esta bloqueado por nuestro codigo, por ello queremos el behaviour de non-blocking, que podemos usar a traves de lo que se conoce como EVENT-LOOP, takes long running tasks executes them in the "background", and puts them in the main thread once they are finished.


*/
