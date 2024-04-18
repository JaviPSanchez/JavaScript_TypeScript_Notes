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
x++ (post-increment) means "remember the original value, then increment
the variable; the value of the expression is the original value"

evaluates the value, then increments and stores it.

*/
let w = 3;
let z: number;
z = w++;
console.log(z);
console.log(z);
console.log(w);
console.log(w);
console.log(w);

let o = 2;
console.log(o++);
console.log(o++);
console.log(o++);

/*
++x (pre-increment) means "increment the variable; the value of the
expression is the final value"

increments the value, then evaluates and stores it.
*/
let j = 2;
let i: number;
i = ++j;
console.log(j);
console.log(j);
console.log(i);
console.log(i);

// Now when used as a standalone statement, they mean the same thing:
x++;
++x;

//The difference comes when you use the value of the expression elsewhere. For example:
const array = [1, 2, 3];
x = 0;
y = array[x++]; // This will get array[0]
console.log(y);

x = 0;
y = array[++x]; // This will get array[1]
console.log(y);

let k = 0;
let l = 0;

console.log(k++); /* Shows 0, then stores n = 1 */
console.log(++l); /* Shows 1, then stores m = 1 */

/*
Here's the key concept - we're still able to access the outer
variable even though the function has finished executing
*/
let n = 0;

const postIncrement = function (n: number) {
  return function () {
    return n++;
  };
};

const postCounter = postIncrement(10);
console.log(postCounter());
console.log(postCounter());
console.log(postCounter());

const preIncrement = function (n: number) {
  return function () {
    return ++n;
  };
};

const preCounter = preIncrement(10);
console.log(preCounter());
console.log(preCounter());
console.log(preCounter());

function increment(n: number) {
  const result = (n += 5);
  return result;
}
console.log(increment(5));
console.log(increment(10));
console.log(increment(20));

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
