'use strict';

/*

In JS, "this" Keyword refers to the current execution context, and its value is determined by
how a function is called. 

It points to the "owner" of the functions in which the "this" keyword is used.
"this" keyword no es estatico, depende de como sea llamada la funcion, asignadole un valor solo cuando la funcion es llamada.

Hay 4 formas de llamar a un funcion:

1/ Method  (this = Object that is calling the METHOD)

En el siguiente ejemplo podemos ver que el ""this" simplemente llamara al OBJECT javi, que es el OWNER.
*/
//OBJECT
const javi = {
  year: 2021,
  javiYear: 1987,
  name: 'javi',
  place: 'Madrid',
  married: false,
  calcAge: function () {
    // return javi.year - this.javiYear;
    console.log(this);
  },
};
javi.calcAge();

//   O en el siguuiente ejemplo el padre sera el METHOD javiYear (1987)

const javi = {
  year: 2021,
  javiYear: 1987,
  name: 'javi',
  place: 'Madrid',
  married: false,
  calcAge: function () {
    return javi.year - this.javiYear;
  },
};
console.log(javi.calcAge()); // 34

/*

2/ Simple function calls (this = undefined)

*/

console.log(this); // Global context --> Window

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this); //Undefined
};
calcAge(1987);
/*
Las Arrow functions no tienen su propio this keyword, cogera el valor del "this keyword" de su padre,siendo en el siguiente ejemplo el GLOBAL SCOPE, siendo WINDOW OBJECT. Este proceso de adaptar el this de su padre es lo que se conoce como LEXICAL THIS!
*/
console.log(this);

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  console.log(this); // Window OBJECT
};
calcAgeArrow(1987);

/*
3/Event Listener ( this = DOM element that the handler is attached to)

4/new, call,apply,bind (mas adelante se veran...)
  
Por ejemplo si llamasemos al this keyword en un GLOBAL ENVIROMENT el OWNER seria el WINDOW OBJECT. 

<cmg /images/Picture19.jpg>
*/
