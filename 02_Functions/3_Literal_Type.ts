//Literal Types specially useful with uniton types!
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text' // Union Type + Literal Type
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

const combinedAges1 = combine(30, 26, 'as-number');
console.log(combinedAges1);

const combinedStringAges = combine('30', '26', 'as-text');
console.log(combinedStringAges);

const combinedNames2 = combine('Max', 'Anna', 'as-text');
console.log(combinedNames2);
