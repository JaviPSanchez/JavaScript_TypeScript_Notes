// ES5 (La epoca JQuery)

// ES6 (ES2015)

//1️⃣ Let and const

//2️⃣ Arrow Functions

//3️⃣ Default parameters

//4️⃣ Rest and Spread Operator

//5️⃣ Template Literals

//6️⃣ Destructuring Assigment

//7️⃣ Promises for Asynchronous Programming

//8️⃣ Symbols for creating unique Objects Keys

//9️⃣ Classes and Inheritance

//1️⃣0️⃣ Iterators and generators for ietrable objects

//1️⃣1️⃣ Sets and Maps for working with collections

//1️⃣2️⃣ Proxies for creating custom behavior for Objects

//1️⃣3️⃣ Modules for organizing code and creating reusable components

// ES7 (ES2016)

//1️⃣ Array.prototype.includes()

// ES8 (ES2017)

//1️⃣ Object.values()

//2️⃣ Object.entries()

//3️⃣ String.prototype.padStart()

//4️⃣ String.prototype.padEnd()

//5️⃣ Async/await

// ES9 (ES2018)

//1️⃣ Object.getOwnPropertyDescriptors()

//2️⃣ Spread syntax for objects

//3️⃣ Promises.prototype.finally()

// ES10 (ES2019)

//1️⃣ Array.prototype.flat()

//2️⃣ Array.prototype.flatMap()

//3️⃣ String-prototype.trimStart()

//4️⃣ String.prototype.trimEnd()

//5️⃣ Array.prototype.sort()(stable)

// ES11 (ES2020)

//1️⃣ BigInt

//2️⃣ Nullish coalescing operator (??)

//3️⃣ Optional chaining operator (?.)

//4️⃣ Promise.allSettled

// ES12 (ES2021)

//1️⃣ String.prototype.replaceAll()

//2️⃣ Logical assignment operators (||=, &&=, ??=)

// ES13 (ES2022)

//1️⃣ Class field declarations

//4️⃣ Top-level await()

//4️⃣ Private instance fields, methods, and accessors

//4️⃣ Static class fields and methods

//4️⃣ Static class initialization blocks

//4️⃣ Error: .cause

//1️⃣ Array.prototype.lastIndexOf()

//3️⃣ Array, String, and TypedArray: .at() Method

//1️⃣ Array.prototype.lastIndexOf()

//2️⃣ Object.hasOwn()

//2️⃣ Regexp match Indices : match .indices ('d' flag)

// ES14 (ES2023)

//Avoid reverse order searches or complex index calculations
Array.findLast(); // find()
Array.findLastIndex(); // findIndex()

const isEven = (number) => number % 2 === 0;
const numbers = [1, 2, 3, 4];
// Traditional search (first to last)
console.log(numbers.find(isEven)); // Output: 2
console.log(numbers.findIndex(isEven)); // Output: 1
// New reverse search (last to first)
console.log(numbers.findLast(isEven)); // Output: 4
console.log(numbers.findLastIndex(isEven)); // Output: 3

Array.toReversed();
Array.toSorted();
Array.toSpliced(start, deletedCount, ...inde);
Array.with(index, value);

/*
Hashbang Grammar

It formalizes the usage of Hashbangs (also known as Shebangs), which are directives
typically found at the beginning of Unix-based scripts that determine the interpreter for the script.

This update means that JavaScript can now standardly interpret scripts beginning with a hashbang,
specifically in a Node.js environment. It essentially allows the execution of JavaScript scripts
as standalone executables.
*/

// #!/usr/bin/env node
console.log("Hello, World!");

/*
Let  Symbols to serve as keys in WeakMaps. Prior to ES2023, only Objects were permissible
as WeakMap keys, despite Symbols also being unique and non-duplicable, making them ideal candidates.
*/
const weak = new WeakMap();
const key = Symbol("ref");
weak.set(key, "Hello world, JS2023!");
console.log(weak.get(key)); // Output: Hello world, JS2023!

// ES15 (ES2024)
