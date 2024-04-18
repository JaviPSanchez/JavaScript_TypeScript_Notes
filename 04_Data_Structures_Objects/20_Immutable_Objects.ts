/**
 * Object.freeze()
 * Object.seal()
 */

/*
With 𝐎𝐛𝐣𝐞𝐜𝐭.𝐟𝐫𝐞𝐞𝐳𝐞(): 
1-We cannot add a new property in an object. ❌
2-We cannot delete existing properties. ❌
3-We cannot update the value of existing properties. ❌
*/

let obj = {
  name: "Javi Palomino",
  city: "Madrid",
};

Object.freeze(obj);

obj.city = "Nantes";
console.log(obj);

/*
NOTA!!! Object.freeze() does not make object completely immutable.

For example: if one property of frozen object is refers another object,
the nested object can still be modified. So This will provides shallow immutability.
Any properties which are objects itself can still be modified.

*/

let nestedObj = {
  name: "Manuelito",
  cities: { spain: "Madrid", france: "Nantes" },
};

Object.freeze(nestedObj);

nestedObj.cities.spain = "Hendaye";
console.log(nestedObj);

/*

With 𝐎𝐛𝐣𝐞𝐜𝐭.𝐬𝐞𝐚𝐥(): 
1-We cannot add a new property in an object. ❌
2-We cannot delete existing properties. ❌
3-We can update the value of existing properties. ✅

*/

let obj2 = {
  name: "Javi Palomino",
  city: "Madrid",
};

Object.seal(obj2);

obj2.city = "Nantes";
console.log(obj2);
