import './main.css';

/**
 * Generic Functions --> Nos permite indagar en el interior de un Object
 * <Array> 👉 Array Generic Type
 * <T> 👉 Any Random Generic Type
 */

interface ObjA {
  name: string;
  lastName: string;
}

// type ObjA = string | number;
// type ObjB = number | boolean;

// type Universal = ObjA & ObjB

interface ObjB {
  skills: string[];
}

// interface ElevatedEmployee extends ObjA, ObjB {}

// let objA: ElevatedEmployee;
// let objB: ElevatedEmployee;

let objA: ObjA;
let objB: ObjB;

objA = {
  name: 'Javi',
  lastName: 'Palomino',
};

objB = {
  skills: ['Python', 'JavaScript'],
};

const age = 30;

//With obly type object TypeScript is not going to understand
// function merge(objA: object, objB: object) {
//   const mergedObject = Object.assign(objA, objB);
//   return mergedObject;
// }

//We difine two identifiers <T, U>
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge(objA, objB));
const mergedObject = merge(objA, objB);
console.log(mergedObject.name);
//Aqui age no es un object! pero JS lo acepta, mal!
const mergedObject2 = merge(objA, age);
console.log(mergedObject2);
//We specify the type of the object
const mergedObject3 = merge<object, string>(objA, age);
console.log(mergedObject3);

// We can add constraints to our Generic Types
function mergeWithConstraints<T extends object, U extends object>(
  objA: T,
  objB: U
) {
  return Object.assign(objA, objB);
}
// extends object evita introducir argumentos que no sean objects
const mergedObjectWithConstraints = mergeWithConstraints(objA, age);
const mergedObjectWithConstraints2 = mergeWithConstraints(objA, objB);
console.log(mergedObjectWithConstraints);
console.log(mergedObjectWithConstraints2);
