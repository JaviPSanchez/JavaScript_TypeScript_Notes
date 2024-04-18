import "./main.css";

/*

We use an Object to collect values/frequencies of values. This
way we can often avoid the need for nested loops or O(n^2)



Comprobar que el secondArray es igual al cuadrado del primer array sin importar
el orden:
[1, 2, 3][1, 4, 9]; ✅
[1, 2, 3][4, 9, 1]; ✅
[1, 2, 3][4, 9, 4]; ❌
[1, 2, 3][4, 9]; ❌

*/
const firstArray = [1, 2, 3, 2, 5];
const secondArray = [1, 4, 9, 4, 11];

function sameNestedLoops(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    //Nested loop
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    console.log(correctIndex);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    console.log(arr2.splice(correctIndex, 1));
  }
  return true;
}

// console.log(sameNestedLoops(firstArray, secondArray));

/*
Para evitar hacer nested Loops como en la respuesta de abajo:
👉 for loop
👉 indexOf()

Es mejor tener varios Loops consecutivos:

Time complexity - O(n) linear  much better than O(n^2)
*/

const object = {
  1: undefined,
};

// console.log((object[1] = object[1] + 1)); //NaN

function sameNotNestedLoops(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    console.log(false);
  }

  let frequencyCounter1: { [key: number]: number } = {};
  let frequencyCounter2: { [key: number]: number } = {};

  console.log(frequencyCounter1[1]); //undefined

  for (let val of arr1) {
    //Default Operator --> It lets you give a default value if something is falsy
    // { 1: undefined + 1 } = { 1: NaN }
    console.log(frequencyCounter1[1]);
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    console.log(frequencyCounter1);
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    console.log(typeof key);
    const numericKey = +key; // Convert key to number
    if (frequencyCounter2[numericKey ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

// console.log(sameNotNestedLoops([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]));

function validAnagram(str1: string, str2: string) {
  if (str1.length !== str2.length) return false;

  const frequencyCounter = {};

  //Rellenamos el Object
  for (let letter of str1) {
    frequencyCounter[letter]
      ? (frequencyCounter[letter] += 1)
      : (frequencyCounter[letter] = 1);
  }
  //Vaciamos el object
  for (let letter of str2) {
    if (!frequencyCounter[letter]) {
      return false;
    } else {
      frequencyCounter[letter] -= 1;
    }
  }

  //   console.log(frequencyCounter);
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true

//Another solution:

function validAnagram2(str1: string, str2: string) {
  return str1.split("").sort().join("") == str2.split("").sort().join("");
}

console.log(validAnagram2("", "")); // true
console.log(validAnagram2("aaz", "zza")); // false
console.log(validAnagram2("anagram", "nagaram")); // true
console.log(validAnagram2("rat", "car")); // false
console.log(validAnagram2("awesome", "awesom")); // false
console.log(validAnagram2("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram2("qwerty", "qeywrt")); // true
console.log(validAnagram2("texttwisttime", "timetwisttext")); // true
