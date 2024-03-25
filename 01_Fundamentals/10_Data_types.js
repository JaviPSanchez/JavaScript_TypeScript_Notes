/*
*****************DATA TYPES*****************************

En la leccion anterior vimos la diferencia entre VALUES y VARIABLES.

Now in every program language VALUES can have different types depending on the type of data that we want them to hold like STRINGS or NUMBER.

En JS every VALUE is either an OBJECT or a PRIMITIVE VALUE.

Tipos de PRIMITIVAS:

1/NUMBER : Son floating point numbers, es decir tienen decimales.
*/
let age = 23;
// 2/STRING : Secuencia de caracteres.
let firstName = "Javi";
// 3/BOOLEAN : es un valor logico que sera toma un valor TRUE o FALSE
let fullage = true;
// 4/UNDEFINED : Un valor que aun no hemos asignado a una variable
let children;
// 5/SYMBOL : Valor unico y no modificable
// 6/NULL : Valor vacio
// 7/ BIG Int : Para valores muy grandes.
/*
VARIABLES --> Las variables es donde guardamos los VALUES. Hay una nomenclatura o STANDARTS a seguir, asi como algunas palabras prohibidas por .JS.
1/UPPER CASE --> firstNamePerson;
2/UNDER SCORE --> Como pasa con Ruby, algunas personas prefieren poner first_name_person.
3/Las variables solo pueden contener LETTERS, NUMBERS, UNDER SCORES o DOLLARS.
4/ Hay algunas palabras reservadas que no podemos usar, como function, new, name, private, interface, etc
*/
// let function = blabla; // NO!! SyntaxError: Unexpected token 'function'
const name = pepe; //No!
let $function = blabla; // SI
// 5/ No podemos empezar por mayusculas
let Person = bla; //NO!!
// 6/ las constantes universales si podemos empezar por mayusculas
let PI = 3.141512;
