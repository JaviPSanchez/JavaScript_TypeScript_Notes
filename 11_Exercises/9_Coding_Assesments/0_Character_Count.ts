import "./main.css";

/*
Write a function that returns the values count

Your function should return in lower case
{
  h: 1,
  e: 1,
  l: 2,
  o: 1,
}
*/

function charCount(str: string) {
  let obj: { [key: string]: number } = {};
  for (let char of str) {
    if (/[a-zA-Z0-9]/.test(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
      // if (obj[char] > 0) {
      //   obj[char]++;
      // } else {
      //   obj[char] = 1;
      // }
    }
  }
  return obj;
}
console.log(charCount("Hellllo"));

// Another solution:

let map = {};

function counter(string: string) {
  [...string].forEach((character) => {
    /[a-z0-9]/.test(character) ? mapping(character) : "";
  });
  return map;
}

function mapping(character: string) {
  map[character] === undefined
    ? (map[character] = 1)
    : (map[character] = map[character] + 1);
}

// console.log(counter("hello world! 23489"));
