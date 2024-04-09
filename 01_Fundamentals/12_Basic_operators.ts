/*
 ***********************************BASIC OPERATORS************************

OPERATORS PRECEDENCE

JS tiene una tabla de precedence, se puede ver en
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
Hay que tener en cuenta que algunos Operators empiezan a leerse por la derecha en vez de hacerlo
por la izquierda como en la mayoria de las ocasiones.
*/
let x: number, y: number;
x = y = 25 - 10 - 5; // x = y = 10, y = 10, si lo hiciesemos al reves no funcionaria: x = y es Undefined
console.log(x, y);

//  Math Operators - + / * **
const ageJavi = 37;
console.log(ageJavi * 2, ageJavi / 10, ageJavi ** 3);

/*
Assignment operators
*/

// Addition assignment (+=)

let a = 2;
let b = 'hello';
console.log((a += 3)); // a = a + 3
//  5
console.log((b += ' world')); // concatenation
// "hello world"

/* Multiplication assignment (*=)
Operator: x *= y
Meaning:  x  = x * y
*/

let c = 2;
console.log((c *= 3));
// expected output: 6
console.log((c *= 'hello'));
// expected output: NaN

/* Exponentiation assignment operator (**=)
Operator: x **= y
Meaning:  x  = x ** y
*/

y = 2;
console.log((y **= 4));

/* Increment (++)
x++ --> If used postfix, with operator "++"" after operand "x" (for example, x++),
the increment operator increments and returns the value before incrementing.
*/
let w = 3;
let z;
z = w++;
console.log(z);
console.log(w);

/*
Here's the key concept - we're still able to access the outer
variable even though the function has finished executing
*/
let n = 0;

const postIncrement = function (n) {
  return function () {
    return n++;
  };
};

const postCounter = postIncrement(10);
console.log(postCounter());
console.log(postCounter());
console.log(postCounter());

const preIncrement = function (n) {
  return function () {
    return ++n;
  };
};

const preCounter = preIncrement(10);
console.log(preCounter(n));
console.log(preCounter(n));
console.log(preCounter(n));

function increment(n) {
  const result = (n += 5);
  return result;
}
console.log(increment(n));

/*
++x --> If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
*/
let m = 2;
n = ++m;
console.log(m); //3
console.log(n); //3
/* Decrement (--)
x-- --> If used postfix, with operator after operand (for example, x--), the decrement operator decrements and returns the value before decrementing.
*/
let p = 3;
let q: number;
q = p--;
console.log(q); //3
console.log(p); //2
/*
--x --> If used prefix, with operator before operand (for example, --x), the decrement operator decrements and returns the value after decrementing.
*/
let r = 2;
let s: number;
s = --r;
console.log(r); //1
console.log(s); //1

// Comparison Operators --> Para producir Boolean Values
const yearNow = new Date();
console.log(yearNow.getFullYear());
const ageMelissa = 34;
console.log(ageJavi > ageMelissa); // <, >, >=; <=
console.log(ageMelissa >= 18);

console.log(yearNow - 1987 > yearNow - 1989); //¿como sabe JS que operacion hacer primero?
