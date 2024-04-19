'use strict';
import './main.css';

/*

🔍 Can you provide an illustration of how ES6 has altered the approach to working with "this" in
JavaScript?

In JS, "this" Keyword refers to the current execution context, and its value is determined by
how a function is called.  It points to the "owner" of the functions in which the "this"
keyword is used. "this" keyword no es estatico, depende de como sea llamada la funcion,
asignadole un valor solo cuando la funcion es llamada.

Hay 4 formas de llamar a un funcion:

1/ Method  (this = Object that is calling the METHOD)

En el siguiente ejemplo podemos ver que "this" simplemente llamara al OBJECT javi,
que es el OWNER.
*/

interface Info {
  year: number;
  javiYear: number;
  name: string;
  place: string;
  married: boolean;
  calcAge?(): void;
}

const javi: Info = {
  year: 2024,
  javiYear: 1987,
  name: 'javi',
  place: 'Madrid',
  married: false,
  calcAge: function () {
    console.log(this);
  },
};
// Using optional chaining to safely invoke calcAge
javi.calcAge?.();

// En el siguiente ejemplo javiYear será en OWNER

interface Info2 extends Info {
  calcAge2(): number;
}

const javi2: Info2 = {
  year: 2024,
  javiYear: 1987,
  name: 'javi',
  place: 'Madrid',
  married: false,
  calcAge2: function () {
    return javi.year - this.javiYear;
  },
};
console.log(javi2.calcAge?.()); // 34

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
Las Arrow functions no tienen su propio this keyword, cogera el valor del "this keyword"
de su padre, siendo en el siguiente ejemplo el GLOBAL SCOPE, siendo WINDOW OBJECT. Este
proceso de adaptar el this de su padre es lo que se conoce como LEXICAL THIS!
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
*/
