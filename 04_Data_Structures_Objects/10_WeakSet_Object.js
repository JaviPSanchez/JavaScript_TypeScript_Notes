/*

WeakSet Key Feature: It allows objects to be held weakly,
meaning that if there are no other references to an object,
it may be removed by the garbage collector.

This can be beneficial for certain memory management scenarios💻
*/

//Create a WeakSet Instance
let weakSet = new WeakSet();

// Create Objects
let obj1 = { name: "Object1" };
let obj2 = { name: "Object2" };

// Add objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

//Check if an element exists in the WeakSet
console.log(weakSet.has(obj1));
console.log(weakSet.has(obj2));

// Delete an element from the WeakSet
weakSet.delete(obj1);

//Check again for the existence of elements
console.log(weakSet.has(obj1));
console.log(weakSet.has(obj2));
