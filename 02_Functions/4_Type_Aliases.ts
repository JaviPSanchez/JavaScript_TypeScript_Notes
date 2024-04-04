/*
Type aliases can be used to "create" your own types.
You're not limited to storing union types though - you can
also provide an alias to a (possibly complex) object type.
*/

type Combinable = number | string;
type CombinableDescriptor = 'as-number' | 'as-text';
type User = { name: string; age: number };

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: CombinableDescriptor // Union Type + Literal Type
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-text');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

/////////////////////////////////////////////////////

function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name + ' and I have ' + user.age);
}

function greetAliased(user: User) {
  console.log('Hi, I am ' + user.name + ' and I have ' + user.age);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

function isOlderAliased(user: User, checkAge: number) {
  return checkAge > user.age;
}

console.log(greet({ name: 'Javier', age: 37 }));
console.log(greetAliased({ name: 'Javier', age: 37 }));
