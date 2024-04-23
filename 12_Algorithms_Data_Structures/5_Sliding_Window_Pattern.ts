import "./main.css";

/*
When we are looking for a special subset of values inside an
Array we can use this pattern

find the longest number of character uniques whitout repetition.

"hellothere" --> lother

EXEMPLE: Write a function called maxSubarraySum wich accepts an
array of integres and a number called n. The function should calculate
the maximum sum of n consecutive elements in the array.
*/

// Time complexity - O(N^2)

function maxSubarraySum(array: number[], numberDigits: number) {
  if (numberDigits > array.length) return null;
  //We set to lowest possible number in JS, because 0 is not enought!
  let max = -Infinity;
  //We want to stop before the end + 1, 7 - 2 + 1 , position array[6] = 1
  for (let i = 0; i < array.length - numberDigits + 1; i++) {
    let temp = 0;
    console.log("1:", temp);
    for (let j = 0; j < numberDigits; j++) {
      //  0 = 0 + arr[0 + 0] = 0 + 1 = 1 --> [1, 2, 5, 2, 8, 1, 5]
      //  1 = 1 + arr[0 + 1] = 1 + 2 = 3 --> [1, 2, 5, 2, 8, 1, 5]
      console.log("2:", temp);
      temp += array[i + j];
      console.log("3:", temp);
    }
    if (temp > max) {
      // Actualizamos max
      console.log("4:", temp, max);
      max = temp;
    }
    console.log("5:", temp, max);
  }
  return max;
}

// console.log(maxSubarraySum([10, 20, 5, 2, 8, 1, 5], 2)); //30
// console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
// console.log(maxSubarraySum([], 2)); //null

// Refactor - Time Complexity - O(N)

function maxSubarraySumRefactor(array: number[], numberDigits: number) {
  if (numberDigits > array.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < numberDigits; i++) {
    //Sumamos los 2 primeros elementos (10+20=30)
    maxSum += array[i];
    console.log(maxSum);
  }
  tempSum = maxSum;
  console.log(tempSum); //30 Primer grupo
  //Comenzamos en numberDigits!
  for (let i = numberDigits; i < array.length; i++) {
    //Sliding window 👉 Primer grupo menos primer valor anterior y sumamos siguiente valor
    /*
    1 Loop: 30 - array[2 - 2](0) + array [2]= 30 - 10 + 5 = 25
    2 Loop: 25 - array[3 - 2](1) + array [3]= 25 - 20 + 2 = 7
    3 Loop: 7 - array[4 - 2](2) + array [4]= 7 - 5 + 8 = 10
    4 Loop: 9 - array[5 - 2](3) + array [5]= 10 - 2 + 1 = 9
    5 Loop: 9 - array[6 - 2](4) + array [6]= 9 - 8 + 5 = 6
    */
    tempSum = tempSum - array[i - numberDigits] + array[i];
    console.log(tempSum);
    maxSum = Math.max(maxSum, tempSum); // 30
    console.log(maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySumRefactor([10, 20, 5, 2, 8, 1, 5], 2)); //30
// console.log(maxSubarraySumRefactor([4, 2, 1, 6], 1)); //6
