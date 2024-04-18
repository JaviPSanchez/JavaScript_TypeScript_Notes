import './main.css';

interface ObjA {
  name: string;
}

interface ObjB {
  lastName: string;
}

let objA: ObjA;
let objB: ObjB;

objA = {
  name: 'Javi',
};

objB = {
  lastName: 'Palomino',
};

function merge(objA: object, objB: object) {
  const mergedObject = Object.assign(objA, objB);
  return mergedObject;
}

console.log(merge(objA, objB));
const objC = merge(objA, objB);
objC.name;
